"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronLeft, ChevronRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

type InfographicItem = {
  id: string;
  stat: string;
  description: string;
};

const infographicData: InfographicItem[] = [
  { id: "01", stat: "30+", description: "Years Experience" },
  { id: "02", stat: "5+", description: "Million SQFT Delivered" },
  { id: "03", stat: "15+", description: "Projects" },
  { id: "04", stat: "4000+", description: "Family's Served" },
];

/* ── Inline stroke icons ────────────────────────────────────────────
   Each SVG keeps its original viewBox/path data but uses
   currentColor for stroke so GSAP can dash-animate every
   geometry element via strokeDashoffset.  Paths get class
   "draw-path" implicitly via selector below – no extra markup.
------------------------------------------------------------------- */

function Icon30Years() {
  return (
    <svg
      viewBox="0 0 105.2248 167.8978"
      className="h-full w-full text-[#1A1814]"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M21.5955,160.4985c-8.3632-7.4857-27.1066-24.2033-11.3803-41.1339,11.4686-12.3468,29.6994-15.6833,46.5507-15.7344,10.9801-.0333,22.4386.9792,32.4957-3.4275,10.057-4.4067,19.0684-15.641,13.9638-25.3624-3.8647-7.3601-21.7065-10.4177-24.3564,9.9119"
        stroke="currentColor"
        strokeWidth="1.65"
        strokeMiterlimit={10}
      />
      <path
        d="M21.421,160.4019c-6.1443-6.6168-5.9797-12.6001-5.9691-20.4394.0088-6.5159,4.3416-12.1799,9.2171-16.2224,8.3621-6.9334,19.6071-10.7995,29.901-7.8881,10.2939,2.9114,18.6783,13.766,17.1651,24.8286-.8112,5.9305-4.2163,11.2263-8.548,15.1352-4.3317,3.9089-9.5525,6.5706-14.8405,8.845-2.6293,1.1309-5.3482,2.19-8.1874,2.3228-5.9691.2793-10.5049,2.2847-18.7382-6.5817Z"
        stroke="currentColor"
        strokeWidth="1.65"
        strokeMiterlimit={10}
        fill="white"
        fillOpacity={0.0}
      />
      <path
        d="M55.0952,144.7552c-10.1164,1.0897-4.2719.8308-11.7599,1.6374-1.2396-7.265.5278-16.9837-.7118-24.2487"
        stroke="currentColor"
        strokeWidth="1.65"
        strokeMiterlimit={10}
        fill="white"
        fillOpacity={0}
      />
      <path
        d="M24.4608,109.4785c.0962-27.7418-1.6124-63.9193-3.1703-91.6194C30.9918,9.9205,37.7397,6.0601,49.496,1.4865c.9069-.3528,3.5771-1.1164,4.7809-.9325,6.5409.9992,23.8127,11.5528,23.8127,11.5528.935.8291,2.2178,2.2711,2.6625,3.4257.3866,1.0037.3349,2.1106.2779,3.1817-1.4012,26.3291-1.5393,58.0926-2.9405,84.4217"
        stroke="currentColor"
        strokeWidth="1.65"
        strokeMiterlimit={10}
      />
      <path
        d="M54.2769.5545c-.3828,26.1735-1.9619,44.131-1.9619,70.3081,0,14.9,10.9657,22.819,2.0983,32.7821"
        stroke="currentColor"
        strokeWidth="1.65"
        strokeMiterlimit={10}
      />
      <path
        d="M23.2775,58.1515C14.4016,63.3667.5367,75.0958.5367,75.0958c0,0,.5452,12.3993,1.2429,18.5743.3031,2.6828.8889,5.3242,1.391,7.977,1.5469,8.1734,2.3031,16.4963,2.2546,24.8147"
        stroke="currentColor"
        strokeWidth="1.65"
        strokeMiterlimit={10}
      />
      <path
        d="M37.1701,22.1718c-.1496-2.1505-.13-4.3486.0584-6.5427.0411-.4785.1052-1.0002.358-1.3546.2243-.3144.544-.4212.8428-.5144,3.9823-1.2429,7.9328-2.8588,11.8157-4.833.0539,2.4897.0606,4.9883.0199,7.4923-.005.3066-.0174.6403-.1581.8947-.1309.2367-.3416.3468-.5387.4429-4.4156,2.1504-8.8954,3.9388-12.398,4.4149Z"
        stroke="currentColor"
        strokeWidth="1.65"
        strokeMiterlimit={10}
      />
      <path
        d="M42.2522,26.2861l-.2868-2.4226c1.9491-.6768,3.9353-1.2419,5.9462-1.6916.1278.7446.1937,1.5002.1967,2.2562.0005.1229-.0043.2565-.0806.3515-.0632.0787-.163.1144-.2576.1464-1.9315.6537-3.8831,1.2449-5.518,1.3601Z"
        stroke="currentColor"
        strokeWidth="1.65"
        strokeMiterlimit={10}
      />
      <path
        d="M63.2817,22.1718c-2.7941,18.3365-3.6385,36.9694-2.5145,55.4835"
        stroke="currentColor"
        strokeWidth="1.65"
        strokeMiterlimit={10}
      />
      <path
        d="M64.2244,57.6935c-.6273,6.0911-.5515,12.2543.2255,18.3281"
        stroke="currentColor"
        strokeWidth="1.65"
        strokeMiterlimit={10}
      />
      <path
        d="M63.6385,92.0744c.8167,2.7181.6026,5.7325-.5899,8.3079-.5396,1.1654-1.2889,2.3139-1.2645,3.5979"
        stroke="currentColor"
        strokeWidth="1.65"
        strokeMiterlimit={10}
        fill="white"
        fillOpacity={0}
      />
      <path
        d="M42.803,146.6528c.5494-.028,1.1064.1233,1.566.4255-.7509.4301-1.8563-.0749-2.0226-.9242s.6669-1.734,1.5246-1.6189,1.4281,1.1882,1.0438,1.9636c-1.1554-.2367-2.042-1.4049-1.959-2.5814,1.0595.5105,1.7208,1.7426,1.5605,2.9077-1.1275-.149-1.9427-1.4561-1.5805-2.5341.9716.3769,1.5318,1.5795,1.1953,2.5658-.7849.0057-1.4243-.9047-1.1526-1.6411.6156-.1936,1.3383.3627,1.3088,1.0073-.7194-.2054-1.3214-.783-1.5564-1.4933.959-.1115,1.7358,1.1782,1.1889,1.9738-.7959.1243-1.117-1.3403-.3422-1.5605.2845.0949.4867.3938.4689.6931-.5498.2493-1.2845-.1628-1.3583-.762.3928-.5562,1.4749.0787.1149,1.5786Z"
        stroke="currentColor"
        strokeWidth="1.65"
        strokeMiterlimit={10}
        fill="white"
        fillOpacity={0}
      />
      <path
        d="M68.4235,118.561c3.3953-1.2675,6.9287-2.1646,10.5174-2.6705"
        stroke="currentColor"
        strokeWidth="1.65"
        strokeMiterlimit={10}
        fill="white"
        fillOpacity={0}
      />
      <path
        d="M11.9071,77.6553c8.0303-2.072,7.78-4.8422,11.8316-7.3126"
        stroke="currentColor"
        strokeWidth="1.65"
        strokeMiterlimit={10}
        fill="white"
        fillOpacity={0}
      />
    </svg>
  );
}

function IconSqft() {
  return (
    <svg
      viewBox="0 0 200 200"
      className="h-full w-full text-[#1A1814]"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M102.4968,39.624c-9.8808-.8999-20.4703.2585-29.8873,3.3825-.8066.2676-1.6877.6173-2.0551,1.3836-.4057.8461.0156,1.9081.7412,2.503s1.68.8206,2.6057.9734c9.1059,1.5028,19.0816-2.2766,27.3661,1.7905.4419.9445-.1768,2.1115-1.0774,2.6371s-1.9914.5755-3.0335.6119c-4.3533.1521-8.7067.3042-13.06.4563-1.4889.052-3.0439.1219-4.3398.8568s-2.2183,2.3602-1.655,3.7393c7.2083,2.1305,15.2428-.1064,22.3178,2.432-.1826,1.2467-1.6446,1.8066-2.8834,2.0363-6.8547,1.2711-14.1958-.0064-20.668,2.5846-.432,1.0422.3039,2.2724,1.3091,2.7846s2.1872.4941,3.315.4645c2.8766-.0756,5.7532-.1512,8.6298-.2268"
        stroke="currentColor"
        strokeWidth={1.55}
        strokeMiterlimit={10}
      />
      <path
        d="M181.0073,134.2844c1.9412.8414,3.9723,1.7756,4.2565,2.9279.3945,1.5999-2.6559,2.9563-5.4778,4.0731-20.9381,8.2864-41.8762,16.5727-62.8143,24.8591-4.5619,1.8054-9.6535,3.7136-15.9716,3.9313-7.9127.2726-14.6747-2.1698-20.2803-4.4758-17.4492-7.1779-36.5485-13.4286-52.3627-21.2173-7.1138-2.5473-4.433-4.4425-1.1377-5.7469l11.0356-5.1385"
        stroke="currentColor"
        strokeWidth={1.55}
        strokeMiterlimit={10}
      />
      <path
        d="M26.7525,138.7797c19.5792,8.0277,42.5245,16.1735,63.7013,24.0706,1.685.6284,3.5177,1.2644,5.7537,1.4421,3.9982.3177,7.659-.8991,10.6522-2.0314,24.7885-9.3775,49.4288-18.5735,74.2173-27.951l-16.5452-7.4391"
        stroke="currentColor"
        strokeWidth={1.55}
        strokeMiterlimit={10}
      />
      <path
        d="M59.7531,106.9384c-23.5068,9.3045-14.3837,4.3568-37.8905,13.6613-3.2953,1.3044-5.9761,3.1995,1.1377,5.7469,15.8142,7.7887,34.9135,14.0395,52.3627,21.2173,5.6057,2.3059,12.3676,4.7484,20.2803,4.4758,6.3181-.2177,11.4097-2.1259,15.9716-3.9313,20.9381-8.2864,41.8762-16.5727,62.8143-24.8591,2.8219-1.1168,5.8723-2.4732,5.4778-4.0731-.2842-1.1523-2.3153-2.0865-4.2565-2.9279-19.3133-8.3709-10.5808-6.808-31.9972-14.5274"
        stroke="currentColor"
        strokeWidth={1.55}
        strokeMiterlimit={10}
      />
      <path
        d="M23.4026,121.1431c19.5792,8.0277,41.8015,15.774,62.9783,23.6711,1.685.6284,3.5177,1.2644,5.7537,1.4421,3.9982.3177,7.659-.8991,10.6522-2.0314,24.7885-9.3775,48.0751-18.5991,72.8636-27.9766"
        stroke="currentColor"
        strokeWidth={1.55}
        strokeMiterlimit={10}
      />
      <path
        d="M59.8273,120.5899c-.557-29.4441,1.5147-58.9374,6.1824-88.0145,10.4113-1.0723,20.8225-2.1446,31.2338-3.2169,1.0072-.1037,2.0651-.2004,2.9968.1958,2.2098.9396,2.484,3.9082,2.4164,6.3085-.7404,26.289-1.6279,69.7467-2.3809,79.0266-.2183,2.69-19.0655,2.6942-19.2467,1.8241"
        stroke="currentColor"
        strokeWidth={1.55}
        strokeMiterlimit={10}
      />
      <path
        d="M124.3034,112.3849c-.514-12.5382-1.0266-25.1273.2442-37.6115.646-6.3466.6796-12.5135.6796-19.0589-3.4547-.1545-5.2686-.1494-7.9957-.2714-8.7991-.3936-6.9393-.4111-15.1043-.7764"
        stroke="currentColor"
        strokeWidth={1.55}
        strokeMiterlimit={10}
      />
      <path
        d="M124.9001,72.4702c4.0271-3.3196,14.2001-6.9174,18.7531-9.4684,3.2327,14.293-.7222,29.5275-.2003,44.1722.0322.9039.0526,1.8436-.3143,2.6703-.3612.8136-1.0582,1.4254-1.7707,1.9591-3.0045,2.2504-6.6821,3.59-10.4302,3.7993-4.0017.2235-7.9652-.8069-11.9693-.9829-7.0006-.3076-13.8364,1.9921-20.8078,2.7015-11.0272,1.1221-22.5527-2.8911-33.0459.6797-2.2945.7808-7.3121,3.3733-7.7606,5.7551-.356,1.8907,3.3235,3.8341,4.9148,4.9153s3.5636,1.4408,5.4836,1.5628c5.3627.3409,10.6782-.9646,15.8932-2.2604,7.5728-1.8816,33.607-12.6711,41.5814-2.4498"
        stroke="currentColor"
        strokeWidth={1.55}
        strokeMiterlimit={10}
      />
      <path
        d="M114.2521,68.8206c-.4209-2.7028-.5995-5.4436-.5329-8.1785.0025-.1037.0085-.2161.0749-.2957.0767-.092.2083-.1103.3273-.1212,2.0356-.1875,4.0965-.0969,6.108.2684.5278.0959,1.1179.258,1.3687.7339.1651.3133.1392.6891.1077,1.0422-.1174,1.3143-.2531,2.6269-.4069,3.9374-.0317.2696-.0671.5483-.2065.7809-.3128.5219-1.0087.627-1.6133.6778-1.9732.166-3.9465.3319-5.2269,1.1548Z"
        stroke="currentColor"
        strokeWidth={1.55}
        strokeMiterlimit={10}
      />
      <path
        d="M118.0068,75.8457l-.2894-3.7654c1.287-.6181,2.8017-.6832,4.1318-.1777.0072,1.1852.0145,2.3704.0217,3.5556.0008.1372-.0028.2878-.088.3912-.0799.0969-.2094.1246-.3293.1448-1.229.2064-2.4898.1994-3.4469-.1485Z"
        stroke="currentColor"
        strokeWidth={1.55}
        strokeMiterlimit={10}
      />
      <path
        d="M136.7908,72.5807c1.4494-2.3761,3.3644-2.0248,5.0201-3.2053.6948,4.7856-.2234,6.6933-.6462,11.6464-1.1618.0582-2.3236.1164-3.4854.1746-.1246.0062-.2278.1412-.2989-.0958-.0409-.1362-.0878-.4644-.0907-.6302-.0576-3.2356-.1152-6.4712-.4989-7.8898Z"
        stroke="currentColor"
        strokeWidth={1.55}
        strokeMiterlimit={10}
      />
    </svg>
  );
}

function IconProjects() {
  return (
    <svg
      viewBox="0 0 168.2403 110.7647"
      className="h-full w-full text-[#1A1814]"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M53.3535,96.2787c.1458,2.0449-5.041,2.0313-6.3368.3172-2.422-3.2039-2.3392-7.309-2.2189-11.2006.3458-11.1815.6917-22.363,1.0375-33.5446.0244-.7891.0178-1.6722-.4814-2.2397-.4101-.4662-1.0395-.583-1.6233-.6752-4.4754-.7065-5.2257-.3889-9.7011-1.0953.1749-6.5485,1.0272-12.0066-.202-18.1383-.2023-1.009-1.0398-1.717-1.9778-1.658-3.7361.235-10.4723-.807-13.0604-.0833-2.3899,25.9679-4.7799,51.9358-7.1698,77.9037-.1022,1.1102-.2444,2.3163-.9673,3.0994-.3706.4015-.8584.6457-1.3517.8272-3.1456,1.1575-6.9117-.1962-8.8284-3.1734"
        stroke="currentColor"
        strokeWidth={1.75}
        strokeMiterlimit={10}
      />
      <path
        d="M142.6729,14.7557c-4.3867-5.8729-26.4478-10.4671-37.1909-1.6303-1.9084,1.5698-3.9188,3.2214-5.1326,5.6215s-1.6466,5.4897-.694,8.0535"
        stroke="currentColor"
        strokeWidth={1.75}
        strokeMiterlimit={10}
      />
      <path
        d="M91.6122,95.4961c0,3.6775.9355,6.8384,3.3958,8.5493s5.4215,1.9675,8.2651,2.0427c14.3059.3785,28.6532-2.8309,41.951-9.1658,4.4674-2.1283,8.8578-4.6334,12.6595-8.1603s7.0066-8.1516,8.5702-13.6009c1.7381-6.0571,1.3569-12.6847.5081-19.0088-.8-5.9605-1.9575-15.7829-6.1934-22.1415"
        stroke="currentColor"
        strokeWidth={1.75}
        strokeMiterlimit={10}
      />
      <path
        d="M91.8648,49.6624c2.4889-1.4252,17.2253-14.1245,20.0853-13.9653,2.6799.1492,5.0516,1.7066,7.2783,3.213,5.7402,3.8833,11.4804,7.7666,17.2205,11.6499-1.7713,4.4394-5.5251,7.7202-9.1475,10.8217-4.7331,4.0524-9.4661,8.1048-14.1992,12.1573-.6185.5295-1.3022,1.086-2.1138,1.1211-.717.031-1.3788-.3542-1.9935-.7267-3.5313-2.1395-13.599-8.6077-17.1303-10.7472"
        stroke="currentColor"
        strokeWidth={1.75}
        strokeMiterlimit={10}
      />
      <path
        d="M53.3535,96.2787c-2.0912-23.1558-2.2959-46.4835-.6114-69.6728.2248-3.0947.5369-6.345,2.2849-8.9025,1.3863-2.0283,3.5267-3.3899,5.6474-4.6192,6.846-3.9687,14.1359-7.1629,21.6881-9.503,1.2917-.4002,2.6902-.7751,3.9714-.3419,2.1006.7103,3.2675,3.1383,3.4529,5.3584,2.7144,32.49,2.0748,56.1544,1.8452,86.9732"
        stroke="currentColor"
        strokeWidth={1.75}
        strokeMiterlimit={10}
      />
      <path d="M60.6294,31.3637c7.2021-3.6136,14.6283-6.776,22.221-9.4627" stroke="currentColor" strokeWidth={1.75} strokeMiterlimit={10} />
      <path d="M62.497,46.2256c6.6988-2.5815,13.233-5.5945,19.5491-9.0146" stroke="currentColor" strokeWidth={1.75} strokeMiterlimit={10} />
      <path d="M63.0789,61.449c6.6789-2.8427,13.3578-5.6853,20.0366-8.528" stroke="currentColor" strokeWidth={1.75} strokeMiterlimit={10} />
      <path d="M110.9885,74.66c-.8363,7.17-1.1242,14.4045-.8606,21.6187" stroke="currentColor" strokeWidth={1.75} strokeMiterlimit={10} />
      <path d="M136.449,50.56c.3022,9.6486,1.709,27.9175,1.1402,37.5539" stroke="currentColor" strokeWidth={1.75} strokeMiterlimit={10} />
      <path
        d="M119.9255,89.2679c.1214-4.4173-.9763-8.2779-1.4196-12.6744,3.1083-2.2746,6.4007-5.9431,9.8207-7.6037.2657-.129.5641.0904.5389.386-.4502,5.2762.6721,11.7322,1.3795,16.8894"
        stroke="currentColor"
        strokeWidth={1.75}
        strokeMiterlimit={10}
      />
      <path
        d="M142.4992,96.9223c-.2378-9.0418-.0399-24.8286-.0045-33.8753.0731-18.6824.1462-37.3648.2192-56.0472.0089-2.2736.2241-5.0007,1.816-6.0431,1.0141-.664,2.2387-.3662,3.3449-.011,3.1577,1.0137,6.247,2.3709,9.2227,4.0518,1.554.8778,3.1546,1.9295,4.0637,3.7543,1.1443,2.2968.9277,5.2375.7115,7.9411-1.8812,23.5326-.8752,43.5289.3565,67.1306"
        stroke="currentColor"
        strokeWidth={1.75}
        strokeMiterlimit={10}
      />
      <path d="M149.0791,17.1583c-.3409,3.6739-.3591,7.378-.0546,11.0551" stroke="currentColor" strokeWidth={1.75} strokeMiterlimit={10} />
      <path d="M155.6208,17.4953c-.2305,3.8247-.2548,7.662-.0728,11.4894" stroke="currentColor" strokeWidth={1.75} strokeMiterlimit={10} />
      <path d="M150.6756,35.8361c-.204,4.3795-.2006,8.7687.0104,13.1478" stroke="currentColor" strokeWidth={1.75} strokeMiterlimit={10} />
      <path d="M155.6983,37.2719c-.0672,3.6535.1425,7.312.6267,10.9335" stroke="currentColor" strokeWidth={1.75} strokeMiterlimit={10} />
      <path d="M33.9952,47.9597c-1.0367,6.7426-1.3563,13.6181-.9502,20.4418" stroke="currentColor" strokeWidth={1.75} strokeMiterlimit={10} />
    </svg>
  );
}

function IconFamilies() {
  return (
    <svg
      viewBox="0 0 164.7465 141.2076"
      className="h-full w-full text-[#1A1814]"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M28.5116,39.1597c-8.9062-2.9544-14.5905,1.5403-17.05,5.0848-3.8629,5.5672-7.0118,11.3823-8.3282,17.6874-5.3644,25.6933-3.5223,46.849,19.903,63.853,10.3382,7.5043,18.216,9.5976,39.2647,13.0318,27.6727,4.5149,57.079.2544,82.2979-12.0001,7.8835-3.8308,15.851-9.4161,18.1706-17.8686,3.1381-11.4354-.0235-25.3841-1.4449-37.1568-.9892-8.1928.3518-21.5597-.9939-29.3364-1.0452-6.0403-3.8934-11.6567-8.3116-15.9062-.6814-.6554-1.3546-1.2297-1.989-1.6644-11.6812-8.0032-24.9699-13.8804-44.3552-22.0421-1.6875-.7105-3.1256-2.1021-4.954-2.1997-2.2231-.1187-4.2327,1.2142-6.0566,2.4907l-46.65,29.8165c-5.1658,3.6155-8.217,9.5454-8.1557,15.8504l.5668,41.0181c.1122,8.1168,6.1233,14.9826,14.1688,16.0616,4.5044.6041,8.6224.8081,9.714-.2193,2.3312-2.1941,4.2099-6.4954,4.4015-9.691.478-7.9721-.3063-21.5486.2915-29.5126.0673-.8964.162-1.8089.5255-2.631.7406-1.6746,2.4753-2.6989,4.2224-3.2469,5.7086-1.7905,12.4889.8576,15.4731,6.043,4.3409,7.5429.173,23.2577,4.154,30.9966.2452.4767.5867.9885,1.1165,1.0695.8645.132,1.3904-.9123,1.5908-1.7635.6914-2.9372.9236-5.982.6858-8.9901-.3243-4.1021-1.5083-8.2928.661-12.1855,1.0484-1.8813,3.0336-3.1508,5.1775-2.9454,3.4564.3311,4.8045,3.9406,5.5692,7.0522,1.2344,5.0231,3.6727,9.8798,3.0876,15.3715-.164,1.5396-2.9137-1.1093-3.8252-2.3609-2.8127-3.8618-.1004-13.6888.9865-18.341.4654-1.992,1.5165-4.993,3.5465-6.3216,2.8768-1.8828,6.6642-1.7409,9.9386-.639,1.6202.5452,3.6886,2.1964,4.5149,3.6928,1.9106,3.4604,2.0454,7.3119,2.3358,10.0998l.7721,7.905c.0886.9076-.0581,1.8129-.3382,2.6807-.2949.914.1991.943-.8685.7383-.152-.0291-.3059-.0807-.417-.1884-.1182-.1146-.1735-.278-.2176-.4366-.6984-2.5163-.981-5.8707,1.4334-6.8655.8048-.3316,2.9664-1.3207,3.8368-1.3275,1.04-.0082,2.1505.1937,2.9008.9138.5661.5433.8539,1.3106,1.0718,2.0643.3332,1.1521.5449,2.3392.6306,3.5354-.0266-.1924-.005-.3912.0622-.5734.0037.1412.0074.2824.0111.4237"
        stroke="currentColor"
        strokeWidth={1.85}
        strokeMiterlimit={10}
      />
      <path
        d="M77.7267,55.505c-3.1896-1.8199-4.7865-6.0239-3.6096-9.5024.2912-.8606.7368-1.6793,1.3735-2.3274.7979-.8121,1.8599-1.3216,2.9519-1.6433,1.9504-.5747,4.0629-.5875,6.0202-.0366,1.3911.3916,2.74,1.0945,3.6338,2.23.6429.8166,1.0205,1.8208,1.1908,2.846.5166,3.1097-.9818,6.4605-3.6439,8.1488-2.6621,1.6882-6.1197,1.3102-7.9167.2849Z"
        stroke="currentColor"
        strokeWidth={1.85}
        strokeMiterlimit={10}
      />
      <path
        d="M100.9681,70.1133c-1.3865.0507-2.7651-.7917-3.3526-2.0486s-.3497-2.8548.5785-3.8861c.5776-.6418,1.3661-1.0507,2.1554-1.4008.6412-.2844,1.3299-.5444,2.0263-.4605,1.4674.1766,2.3071,1.7186,2.9036,3.0709.2239.5076.4528,1.047.3831,1.5973-.0891.7031-.6442,1.2533-1.2219,1.6638-.9643.6853-2.0507,1.412-3.4723,1.464Z"
        stroke="currentColor"
        strokeWidth={1.85}
        strokeMiterlimit={10}
      />
      <path
        d="M121.5761,63.3195c-2.4546.6673-5.0575-.3413-6.6037-2.3611-.5263-.6875-1.0238-1.396-1.3299-1.9721-.3035-.5713-.5814-1.1825-.5879-1.8293-.011-1.0947.7542-2.0482,1.6091-2.7319,1.4326-1.1456,3.2362-1.8194,5.0691-1.8936,1.1538-.0467,2.3603.1577,3.2953.8354,1.3489.9777,1.8879,2.7666,1.8564,4.4323-.0345,1.8244-.6976,3.6872-2.0492,4.913-.3004.2724-.7467.4679-1.2592.6073Z"
        stroke="currentColor"
        strokeWidth={1.85}
        strokeMiterlimit={10}
      />
      <path
        d="M131.7496,80.5832c-1.0582-1.2166-.8656-3.3071.397-4.3099.5688-.4518,1.3998-.6762,2.0255-.3071.3676.2169.6057.6012.7694.9954.4677,1.126.386,2.5364-.436,3.4369s-2.1572.873-2.7559.1847Z"
        stroke="currentColor"
        strokeWidth={1.85}
        strokeMiterlimit={10}
      />
      <path
        d="M34.3128,12.9254c-.0076-2.6099-.0152-5.2198-.0229-7.8297.7306,2.0783,1.7295,4.0621,2.964,5.8867.2598.384.5406.7711.9347,1.0154,1.0525.6524,4.686-.2964,5.9079-.0953-.4302.8077-2.4411,2.9964-3.1306,3.5982-.2107.1839-.4371.3626-.5705.6083-.1454.2678-.1636.584-.1785.8883-.1019,2.0712.6286,6.278,1.597,8.1117-.6122-.8792-3.0357-5.2871-3.9894-5.8323-.9568-.547-5.0419-.7607-6.1356-.6079-5.837.8152,2.6301-3.8047,2.6239-5.7434Z"
        stroke="currentColor"
        strokeWidth={1.85}
        strokeMiterlimit={10}
      />
    </svg>
  );
}

const iconComponents = [Icon30Years, IconSqft, IconProjects, IconFamilies] as const;

/* ── GSAP helpers ───────────────────────────────────────────────── */

function strokeNodes(root: HTMLElement | null): SVGGeometryElement[] {
  if (!root) return [];
  const found = root.querySelectorAll<SVGGeometryElement>(
    "path, line, polyline, polygon, circle, ellipse, rect"
  );
  return Array.from(found);
}

function prepStroke(root: HTMLElement | null) {
  strokeNodes(root).forEach((el) => {
    try {
      const len = el.getTotalLength();
      // tiny extra to avoid seam
      el.style.strokeDasharray = `${len}`;
      el.style.strokeDashoffset = `${len}`;
      (el.style as unknown as Record<string, string>).strokeLinecap = "round";
      (el.style as unknown as Record<string, string>).strokeLinejoin = "round";
    } catch {}
  });
}

function revealFill(root: HTMLElement | null) {
  if (!root) return;
  // the two filled shapes in 30YEARS start transparent; fade in after draw
  const fills = root.querySelectorAll<SVGGeometryElement>("[fill='white']");
  fills.forEach((el) =>
    gsap.to(el, { fillOpacity: 1, duration: 0.45, ease: "power2.out" })
  );
}

/* ── Component ──────────────────────────────────────────────────── */

export default function InfoGraphics() {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const desktopIconRefs = useRef<(HTMLDivElement | null)[]>([]);
  const desktopTextRefs = useRef<(HTMLDivElement | null)[]>([]);
  const desktopNumberRefs = useRef<(HTMLSpanElement | null)[]>([]);

  const mobileIconRefs = useRef<(HTMLDivElement | null)[]>([]);
  const mobileTextRefs = useRef<(HTMLDivElement | null)[]>([]);

  const [activeIndex, setActiveIndex] = useState(0);
  const currentIndexRef = useRef(0);
  const mobileTlRef = useRef<gsap.core.Timeline | null>(null);

  const snapPoints = useMemo(
    () => infographicData.map((_, i) => i / (infographicData.length - 1)),
    []
  );

  const jumpTo = (index: number) => {
    if (!sectionRef.current) return;
    const sectionTop = sectionRef.current.offsetTop;
    const sectionHeight = sectionRef.current.offsetHeight;
    const viewportHeight = window.innerHeight;
    const progress = index / (infographicData.length - 1);
    window.scrollTo({
      top: sectionTop + progress * (sectionHeight - viewportHeight),
      behavior: "smooth",
    });
  };

  const animateToIndex = (
    nextIndex: number,
    direction: "next" | "prev" = "next"
  ) => {
    if (
      nextIndex < 0 ||
      nextIndex >= infographicData.length ||
      nextIndex === currentIndexRef.current
    )
      return;

    mobileTlRef.current?.kill();

    const currentIndex = currentIndexRef.current;
    const currentIcon = mobileIconRefs.current[currentIndex];
    const nextIcon = mobileIconRefs.current[nextIndex];
    const currentText = mobileTextRefs.current[currentIndex];
    const nextText = mobileTextRefs.current[nextIndex];

    currentIndexRef.current = nextIndex;

    // prep next icon strokes fresh each trigger
    prepStroke(nextIcon);

    const nextNodes = strokeNodes(nextIcon);

    // layer
    if (nextIcon) {
      gsap.set(nextIcon, { opacity: 1, zIndex: 20 });
      if (currentIcon) gsap.set(currentIcon, { zIndex: 10 });
    }

    const tl = gsap.timeline({
      onComplete: () => setActiveIndex(nextIndex),
    });
    mobileTlRef.current = tl;

    // stroke draw – main reveal
    tl.to(
      nextNodes,
      {
        strokeDashoffset: 0,
        duration: 1.05,
        stagger: 0.045,
        ease: "power2.inOut",
      },
      0
    );

    // subtle fill reveal for 30YEARS
    tl.add(() => revealFill(nextIcon), 0.75);

    // previous icon fades as soon as the next one starts drawing
    tl.to(
      currentIcon,
      { opacity: 0, duration: 0.32, ease: "power2.out" },
      0.12
    );

    // text out / in
    tl.to(
      currentText,
      {
        opacity: 0,
        y: direction === "next" ? -16 : 16,
        filter: "blur(8px)",
        duration: 0.32,
        ease: "power3.out",
      },
      0
    );

    tl.fromTo(
      nextText,
      {
        opacity: 0,
        y: direction === "next" ? 20 : -20,
        filter: "blur(8px)",
      },
      {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 0.5,
        ease: "power3.out",
      },
      0.18
    );
  };

  useEffect(() => {
    if (!sectionRef.current) return;

    const isDesktop = window.matchMedia("(min-width: 1024px)").matches;

    // common init: prep all icons hidden except first will draw

    const allDesktop = desktopIconRefs.current;
    const allMobile = mobileIconRefs.current;

    if (!isDesktop) {
      allMobile.forEach((el, i) => {
        if (!el) return;
        prepStroke(el);
        // first icon should draw on mount, others stay hidden
        gsap.set(el, { opacity: i === 0 ? 1 : 0 });
      });

      // draw first icon on mount
      const firstNodes = strokeNodes(allMobile[0]);
      gsap.to(firstNodes, {
        strokeDashoffset: 0,
        duration: 1.1,
        stagger: 0.05,
        ease: "power2.inOut",
        delay: 0.15,
        onComplete: () => revealFill(allMobile[0]),
      });

      gsap.set(mobileTextRefs.current, {
        opacity: 0,
        y: 28,
        filter: "blur(8px)",
      });
      gsap.set(mobileTextRefs.current[0], {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
      });

      setActiveIndex(0);
      currentIndexRef.current = 0;

      return () => {
        mobileTlRef.current?.kill();
      };
    }

    // ── Desktop: pinned section — stroke draws on reveal (not scrubbed) ──
    const ctx = gsap.context(() => {
      allDesktop.forEach((el, i) => {
        if (!el) return;
        prepStroke(el);
        gsap.set(el, { opacity: i === 0 ? 1 : 0 });
        const fills = el.querySelectorAll<SVGGeometryElement>("[fill='white']");
        fills.forEach((f) => gsap.set(f, { fillOpacity: 0 }));
      });

      gsap.set(desktopTextRefs.current, {
        opacity: 0,
        y: 36,
        filter: "blur(8px)",
      });
      gsap.set(desktopTextRefs.current[0], {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
      });
      gsap.set(desktopNumberRefs.current, { y: 0, scale: 1 });

      setActiveIndex(0);
      currentIndexRef.current = 0;

      // ── why the flash happened: the old code let the scrubbed
      // timeline make the next icon (with stale dashoffset:0) visible
      // for a frame before playIconDraw() reset dashoffset to length.
      // Fix: keep the icon hidden (opacity 0) while we reset dashes,
      // then fade it in + draw. Icon opacity is NO LONGER scrubbed.
      let lastDrawn = -1;
      const playIconDraw = (idx: number) => {
        if (idx === lastDrawn) return;
        const prevIdx = lastDrawn;
        lastDrawn = idx;
        const root = allDesktop[idx];
        if (!root) return;

        // fade out the icon we're leaving
        if (prevIdx >= 0 && prevIdx !== idx) {
          const prev = allDesktop[prevIdx];
          if (prev) {
            gsap.killTweensOf(prev);
            gsap.to(prev, { opacity: 0, duration: 0.38, ease: "power2.out" });
          }
        }

        // reset strokes WHILE the incoming icon is still invisible
        gsap.killTweensOf(root);
        // ensure fills start invisible before the delayed fill tween
        const fills = Array.from(
          root.querySelectorAll<SVGGeometryElement>("[fill='white']")
        );
        if (fills.length) {
          gsap.killTweensOf(fills);
          gsap.set(fills, { fillOpacity: 0 });
        }
        const nodes = strokeNodes(root);
        gsap.killTweensOf(nodes);
        prepStroke(root); // dashoffset = length, still opacity 0 → no flash

        // now reveal + draw
        gsap.set(root, { opacity: 1 });
        gsap.to(nodes, {
          strokeDashoffset: 0,
          duration: 1.05,
          stagger: 0.05,
          ease: "power2.inOut",
        });
        if (fills.length) {
          gsap.to(fills, {
            fillOpacity: 1,
            duration: 0.4,
            ease: "power2.out",
            delay: 0.7,
          });
        }
      };

      // first icon draws on mount
      playIconDraw(0);

      const totalItems = infographicData.length - 1;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: () => `+=${window.innerHeight * 6}`,
          pin: true,
          pinSpacing: true,
          scrub: 1.2,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const idx = Math.round(self.progress * totalItems);
            if (idx !== currentIndexRef.current) {
              currentIndexRef.current = idx;
              setActiveIndex(idx);
              playIconDraw(idx);
            } else {
              currentIndexRef.current = idx;
              setActiveIndex(idx);
            }
          },
        },
      });

      infographicData.forEach((_, index) => {
        if (index === 0) return;

        const prevText = desktopTextRefs.current[index - 1];
        const curText = desktopTextRefs.current[index];
        const prevNumber = desktopNumberRefs.current[index - 1];
        const curNumber = desktopNumberRefs.current[index];

        tl.to({}, { duration: 0.45 });
        tl.addLabel(`transition-${index}`);

        // icon visibility + stroke draw is handled by playIconDraw() on reveal,
        // not by this scrubbed timeline — otherwise the icon would appear
        // with stale dashoffset:0 for one frame before the reset.

        tl.to(
          prevText,
          {
            opacity: 0,
            y: -22,
            filter: "blur(8px)",
            duration: 0.55,
            ease: "power3.inOut",
          },
          "<"
        );

        tl.fromTo(
          curText,
          { opacity: 0, y: 22, filter: "blur(8px)" },
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 0.65,
            ease: "power4.out",
          },
          "<+0.08"
        );

        tl.to(
          prevNumber,
          { y: -8, scale: 0.96, duration: 0.35, ease: "power2.out" },
          "<"
        );
        tl.fromTo(
          curNumber,
          { y: 8, scale: 0.96 },
          { y: 0, scale: 1, duration: 0.35, ease: "power2.out" },
          "<"
        );
      });

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: () => `+=${window.innerHeight * 6}`,
        snap: {
          snapTo: snapPoints,
          duration: 0.6,
          ease: "power2.inOut",
        },
      });
    }, sectionRef);

    return () => {
      ctx.revert();
      mobileTlRef.current?.kill();
    };
  }, [snapPoints]);

  return (
    <section
      data-theme="light"
      ref={sectionRef}
      className="relative min-h-screen bg-white"
    >
      {/* DESKTOP */}
      <div className="hidden h-full grid-cols-[120px_1fr_320px] items-center px-6 lg:grid lg:px-10">
        {/* LEFT — slide numbers */}
        <div className="flex justify-center">
          <div className="flex flex-col lg:gap-5">
            {infographicData.map((item, index) => (
              <button
                key={item.id}
                onClick={() => jumpTo(index)}
                className="group flex justify-center"
                aria-label={`Go to ${item.stat}`}
              >
                <span
                  ref={(el) => {
                    desktopNumberRefs.current[index] = el;
                  }}
                  className={`block font-['Inter_Tight'] text-[32px] font-medium uppercase leading-[20px] tracking-[1.2px] transition-colors duration-500 ${
                    index === activeIndex
                      ? "!text-[#1A1814]"
                      : "!text-[#BFBFBF]"
                  }`}
                >
                  {item.id}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* CENTER — stroke icon (no disc bg) */}
        <div className="flex items-center justify-center xl:ml-[18%]">
          <div className="relative h-[clamp(280px,40vw,460px)] w-[clamp(280px,40vw,460px)]">

            {/* stacked icons */}
            {infographicData.map((_, index) => {
              const Icon = iconComponents[index];
              return (
                <div
                  key={infographicData[index].id}
                  ref={(el) => {
                    desktopIconRefs.current[index] = el;
                  }}
                  className="absolute inset-0 flex items-center justify-center p-10 sm:p-12 will-change-transform"
                  style={{ zIndex: index }}
                >
                  <div className="h-full w-full max-h-[320px] max-w-[320px]">
                    <Icon />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* RIGHT — stat text */}
        <div className="flex justify-center text-center">
          <div className="relative min-h-[220px] w-[300px]">
            {infographicData.map((item, index) => (
              <div
                key={item.id}
                ref={(el) => {
                  desktopTextRefs.current[index] = el;
                }}
                className="absolute inset-0 flex will-change-transform flex-col items-center justify-center"
              >
                <p className="font-body text-[14px] font-light uppercase tracking-[0.18em] text-[#9A9A9A]">
                  View Infographics
                </p>
                <h2 className="mt-1 font-['Inter_Tight'] text-[36px] font-medium leading-[150%] text-[#1A1814]">
                  {item.stat}
                </h2>
                <p className="font-['Inter_Tight'] text-center text-[18px] font-light leading-[150%] text-[#222222]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* MOBILE + TABLET */}
      <div className="flex h-full flex-col items-center px-6 pb-8 pt-20 lg:hidden">
        <div className="mb-10 mt-10 flex items-center justify-center">
          <div className="relative h-[min(78vw,400px)] w-[min(78vw,400px)]">

            {infographicData.map((_, index) => {
              const Icon = iconComponents[index];
              return (
                <div
                  key={infographicData[index].id}
                  ref={(el) => {
                    mobileIconRefs.current[index] = el;
                  }}
                  className="absolute inset-0 flex items-center justify-center p-8"
                  style={{ zIndex: index }}
                >
                  <div className="h-full w-full max-h-[260px] max-w-[260px]">
                    <Icon />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Stat text */}
        <div className="relative flex min-h-[140px] w-full max-w-[320px] flex-col items-center justify-center text-center">
          {infographicData.map((item, index) => (
            <div
              key={item.id}
              ref={(el) => {
                mobileTextRefs.current[index] = el;
              }}
              className="absolute inset-0 flex flex-col items-center justify-center"
            >
              <p className="font-body text-[13px] font-light uppercase tracking-[0.18em] text-[#9A9A9A]">
                View Infographics
              </p>
              <h2 className="font-['Inter_Tight'] text-[38px] font-medium leading-[120%] text-[#1A1814]">
                {item.stat}
              </h2>
              <p className="font-['Inter_Tight'] text-[16px] font-light text-[#555]">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Arrow nav */}
        <div className="mt-6 flex items-center gap-4">
          <button
            onClick={() => animateToIndex(currentIndexRef.current - 1, "prev")}
            aria-label="Previous"
            className="flex h-[42px] w-[42px] items-center justify-center rounded-full border border-[#D2D2D2] transition-transform duration-300 active:scale-95"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={() => animateToIndex(currentIndexRef.current + 1, "next")}
            aria-label="Next"
            className="flex h-[42px] w-[42px] items-center justify-center rounded-full bg-[#EEF1F5] transition-transform duration-300 active:scale-95"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        {/* dots */}
        <div className="mt-5 flex gap-2">
          {infographicData.map((_, i) => (
            <span
              key={i}
              className={`h-[6px] w-[6px] rounded-full transition-colors ${i === activeIndex ? "bg-[#1A1814]" : "bg-black/15"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
