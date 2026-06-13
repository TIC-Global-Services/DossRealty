"use client";

import {
  MapContainer,
  TileLayer,
  Marker,
  useMap,
} from "react-leaflet";
import L from "leaflet";
import { useEffect } from "react";
import {
  LOCATION_DATA,
  PROJECT_LOCATION,
} from "../../data/locationData";

function FlyToLocation({
  activeMinute,
}) {
  const map = useMap();

  useEffect(() => {
    const data =
      LOCATION_DATA[
        activeMinute
      ];

    if (data) {
      map.flyTo(
        data.center,
        data.zoom,
        {
          duration: 2,
          easeLinearity: 0.5,
        }
      );
    }
  }, [activeMinute, map]);

  return null;
}


const ICON_MAP = {
  Airport:
    "/airport.png",

  Station:
    "/station.png",

  Road:
    "/road.png",

  Hospital:
    "/hospital.png",

  School:
    "/school.png",

  Cinemas:
    "/cinema.png",

  College:
    "/college.png",

  IT:
    "/it.png",

  Bus:
    "/bus.png",

  Metro:
    "/metro.png",
};

const getIcon = (name) => {
  const key =
    Object.keys(
      ICON_MAP
    ).find((k) =>
      name.includes(k)
    );

  return key
    ? ICON_MAP[key]
    : "/location.png";
};


const createPin = (
  title,
  icon
) =>
  L.divIcon({
    className:
      "custom-pin",

    html: `
      <div style="
        background:#fff;
        border-radius:999px;
        padding:10px 10px;
        display:flex;
        align-items:center;
        gap:8px;
        box-shadow:0 4px 20px rgba(0,0,0,.12);
        border:1px solid #E7E7E7;
        font-size:12px;
        font-weight:500;
        color:#444;
      ">
        <div style="
          width:30px;
          height:30px;
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
              width:16px;
              height:16px;
              object-fit:contain;
            "
          />
        </div>

        ${title}
      </div>
    `,

    iconSize: [
      180, 50,
    ],

    iconAnchor: [
      90, 25,
    ],
  });

export default function ChennaiMap({
  activeMinute,
}) {
  const currentPlaces =
    LOCATION_DATA[
      activeMinute
    ]?.places || [];

  return (
    <div className="relative h-full w-full overflow-hidden bg-[#F4F4F4]">
      <MapContainer
        center={
          PROJECT_LOCATION.position
        }
        zoom={12}
        zoomControl={false}
        attributionControl={false}
        dragging={true}
        touchZoom={false}
        doubleClickZoom={false}
        scrollWheelZoom={false}
        boxZoom={false}
        keyboard={false}
        className="h-full w-full grayscale"
      >
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
          attribution='&copy; OpenStreetMap contributors &copy; CARTO'
        />

        <FlyToLocation
          activeMinute={
            activeMinute
          }
        />

        {/* Project Marker */}
        <Marker
          position={
            PROJECT_LOCATION.position
          }
          icon={createPin(
            "Metropettai",
            "/location.png"
          )}
        />

        {/* Dynamic Markers */}
        {currentPlaces.map(
          (
            place,
            index
          ) => (
            <Marker
              key={index}
              position={
                place.position
              }
              icon={createPin(
                place.name,
                getIcon(
                  place.name
                )
              )}
            />
          )
        )}
      </MapContainer>

      {/* Left Card */}
      <div
        className="
          absolute
          bottom-10
          left-8
          z-[1000]
          w-[300px]
          rounded-[22px]
          border
          border-[#E8E8E8]
          bg-white/95
          p-5
          shadow-xl
          backdrop-blur-md
        "
      >
        <div className="space-y-3">
          {currentPlaces.map(
            (
              place,
              index
            ) => (
              <div
                key={index}
                className="
                  flex
                  items-center
                  justify-between
                "
              >
                <div className="flex min-w-0 items-center gap-3">
                  {/* Icon */}
                  <div
                    className="
                      flex
                      h-9
                      w-9
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
                      src={getIcon(
                        place.name
                      )}
                      alt={
                        place.name
                      }
                      className="h-4 w-10 object-contain"
                    />
                  </div>

                  {/* Place Name */}
                  <span
                    className="
                      truncate
                      text-[12px]
                      font-medium
                      text-[#4D4D4D]
                    "
                  >
                    {
                      place.name
                    }
                  </span>
                </div>

                {/* Distance */}
                <span
                  className="
                    shrink-0
                    text-[12px]
                    text-[#8A8A8A]
                  "
                >
                  {
                    place.distance
                  }
                </span>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}