"use client";

import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";

import L from "leaflet";
import { useEffect } from "react";
import type { LatLngTuple } from "leaflet";

type Place = {
  name: string;
  distance: string;
  position: [number, number];
};

type LocationData = Record<
  number,
  {
    zoom:
    | number
    | {
      desktop: number;
      mobile: number;
    };
    center: [number, number];
    places: Place[];
  }
>;

type ProjectLocation = {
  name: string;
  position: [number, number];
};

type ChennaiMapProps = {
  activeMinute?: number;
  simpleMode?: boolean;
  pinLocation?: [number, number] | null;
  pinTitle?: string;
  projectLocation: ProjectLocation;
  locationData: LocationData;
};


function FlyToLocation({
  activeMinute,
  locationData,
}: {
  activeMinute: number;
  locationData: LocationData;
}) {
  const map = useMap();

  useEffect(() => {
    const data = locationData?.[activeMinute];

    if (!data) return;

    const center = data.center;

    if (!Array.isArray(center) || center.length !== 2) return;

    const lat = Number(center[0]);
    const lng = Number(center[1]);

    if (!Number.isFinite(lat) || !Number.isFinite(lng)) return;

    const isMobile =
      typeof window !== "undefined" && window.innerWidth < 768;

    const zoom =
      typeof data.zoom === "object"
        ? isMobile
          ? data.zoom.mobile
          : data.zoom.desktop
        : data.zoom;

    const container = map.getContainer();

    if (
      !container ||
      container.offsetWidth === 0 ||
      container.offsetHeight === 0
    ) {
      return;
    }

    const target: LatLngTuple = [lat, lng];

    requestAnimationFrame(() => {
      map.invalidateSize();

      if (activeMinute === 0) {
        map.setView(target, zoom, {
          animate: false,
        });

        return;
      }

      map.setView(target, zoom, {
        animate: true,
        duration: 1.5,
      });
    });
  }, [activeMinute, locationData, map]);

  return null;
}

function MapResizeFix() {
  const map = useMap();

  useEffect(() => {
    const timer = setTimeout(() => {
      map.invalidateSize();
    }, 100);

    return () => clearTimeout(timer);
  }, [map]);

  return null;
}

const ICON_MAP = {
  Airport: "/airport.png",

  Station: "/station.png",

  Road: "/road.png",

  Hospital: "/hospital.png",

  School: "/school.png",

  Cinemas: "/cinema.png",

  College: "/college.png",

  IT: "/it.png",

  Bus: "/bus.png",

  Metro: "/metro.png",
};

const getIcon = (name: string) => {
  const key = (Object.keys(ICON_MAP) as Array<keyof typeof ICON_MAP>).find(
    (k) => name.includes(k)
  );

  return key ? ICON_MAP[key] : "/location.png";
};

const createPin = (
  title: string,
  icon: string,
  isMobile = false
) =>
  L.divIcon({
    className: "custom-pin",

    html: `
      <div style="
        background:#fff;
        border-radius:999px;
        padding:${isMobile ? "6px 8px" : "10px 10px"};
        display:flex;
        align-items:center;
        gap:${isMobile ? "6px" : "8px"};
        box-shadow:0 4px 20px rgba(0,0,0,.12);
        border:1px solid #E7E7E7;
        font-size:${isMobile ? "10px" : "12px"};
        font-weight:500;
        color:#444;
        max-width:${isMobile ? "120px" : "180px"};
        white-space:nowrap;
      ">
        <div style="
          width:${isMobile ? "22px" : "30px"};
          height:${isMobile ? "22px" : "30px"};
          border-radius:50%;
          border:1px solid #ddd;
          display:flex;
          align-items:center;
          justify-content:center;
          background:#F8F8F8;
          overflow:hidden;
          flex-shrink:0;
        ">
          <img
            src="${icon}"
            alt="${title}"
            style="
              width:${isMobile ? "12px" : "16px"};
              height:${isMobile ? "12px" : "16px"};
              object-fit:contain;
            "
          />
        </div>

        <span style="
          overflow:hidden;
          text-overflow:ellipsis;
        ">
          ${title}
        </span>
      </div>
    `,

    iconSize: isMobile ? [120, 36] : [180, 50],

    iconAnchor: isMobile ? [60, 18] : [90, 25],
  });

export default function ChennaiMap({
  activeMinute = 0,
  simpleMode = false,
  pinLocation = null,
  pinTitle = "Location",
  projectLocation,
  locationData,
}: ChennaiMapProps) {
  const currentPlaces = simpleMode
    ? []
    : activeMinute === 0
      ? []
      : locationData?.[activeMinute]?.places || [];

  const center =
    simpleMode && pinLocation
      ? pinLocation
      : projectLocation.position;

  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
  const isCompactCard = currentPlaces.length <= 6;
  const isMetropettai = projectLocation.name === "Metropettai";

  return (
    <div className="relative w-[100vw] h-full md:h-full md:w-full overflow-hidden bg-[#F4F4F4]">
      <MapContainer
        center={center}
        zoom={simpleMode ? 16 : 12}
        zoomControl={false}
        attributionControl={false}
        dragging={!isMobile}
        touchZoom={!isMobile}
        doubleClickZoom={!isMobile}
        scrollWheelZoom={false}
        boxZoom={!isMobile}
        keyboard={!isMobile}
        className={`h-full w-full ${simpleMode ? "" : "grayscale"}`}
      >
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
          attribution="&copy; OpenStreetMap contributors &copy; CARTO"
        />

        <MapResizeFix />

        {!simpleMode && (
          <FlyToLocation
            activeMinute={activeMinute}
            locationData={locationData}
          />
        )}

        {/* Main Project Marker */}
        <Marker
          position={
            simpleMode && pinLocation
              ? pinLocation
              : projectLocation.position
          }
          icon={createPin(
            simpleMode ? pinTitle : projectLocation.name,
            "/location.png",
            isMobile,
          )}
        />

        {/* Dynamic Location Markers */}
        {!simpleMode &&
          currentPlaces.map((place: Place, index: number) => (
            <Marker
              key={`${place.name}-${index}`}
              position={place.position}
              icon={createPin(place.name, getIcon(place.name), isMobile)}
            />
          ))}
      </MapContainer>

      {/* Bottom Card */}
      {!simpleMode && activeMinute !== 0 && (
        <div
          className={`
            absolute
            z-[1000]
            md:bottom-10
            md:left-8
            ${isCompactCard ? "md:w-[300px]" : "md:w-[320px]"}
            ${isMetropettai ? "md:max-h-[300px]" : "md:max-h-[380px]"}
            md:p-5
            md:rounded-[22px]
            top-3
            right-3
            w-[200px]
            p-3
            rounded-[16px]
            border
            border-[#E8E8E8]
            bg-white/95
            shadow-xl
            backdrop-blur-md
          `}
        >
          <div className="space-y-2 md:space-y-2">
            {currentPlaces.map((place, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex min-w-0 items-center gap-2 md:gap-3">
                  <div
                    className="
                    flex
                    h-7
                    w-7
                    md:h-9
                    md:w-9
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#ECECEC]
                    bg-[#F7F7F7]
                  "
                  >
                    <img
                      src={getIcon(place.name)}
                      alt={place.name}
                      className="
                      h-3
                      w-3
                      md:h-4
                      md:w-10
                      object-contain
                    "
                    />
                  </div>

                  <span
                    className="
                    truncate
                    text-[10px]
                    md:text-[12px]
                    font-medium
                    text-[#4D4D4D]
                  "
                  >
                    {place.name}
                  </span>
                </div>

                <span
                  className="
                  ml-2
                  text-[9px]
                  md:text-[12px]
                  text-[#8A8A8A]
                "
                >
                  {place.distance}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
