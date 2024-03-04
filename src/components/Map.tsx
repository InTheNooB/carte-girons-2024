import { FC, useEffect, useRef } from "react";
import { Giron } from "../App";
import { getFormattedGironDetails } from "../utils";

const DEFAULT_CENTER = { lat: 46.69425890210601, lng: 6.876708506648145 };
const DEFAULT_ZOOM = 10;

const addGironMarker = ({
  giron,
  map,
}: {
  giron: Giron;
  map: google.maps.Map;
}) => {
  const marker = new google.maps.Marker({
    position: giron.latlng,
    map,
  });

  const { imageSrc, fromDate, toDate } = getFormattedGironDetails(giron);

  const infoWindow = new google.maps.InfoWindow({
    content: `  <div class="flex flex-row gap-3 text-neutral-950">
    <img src=${imageSrc} alt="flag" class="w-10 object-contain" />
    <div>
      <h2 class="uppercase font-black text-xl">${giron.city}</h2>
      <p>${giron.details}</p>
      <p>
        du ${fromDate} au ${toDate}
      </p>
    </div>
  </div>`,
  });

  marker.addListener("click", () => {
    infoWindow.open(map, marker);
  });
};

const GoogleMaps: FC<{ girons: Giron[] }> = ({ girons }) => {
  // Ref
  const ref = useRef(null);

  // Screen size to set the map size to be full screen
  const width = window.innerWidth;
  const height = window.innerHeight * 0.8;

  useEffect(() => {
    // Display the map
    if (ref != null && ref.current) {
      const mapInstance = new window.google.maps.Map(ref.current, {
        center: DEFAULT_CENTER,
        zoom: DEFAULT_ZOOM,
        gestureHandling: "greedy",
        disableDefaultUI: true,
      });

      girons.forEach((giron) => {
        if (!giron.latlng) return;
        // Add markers
        addGironMarker({
          giron,
          map: mapInstance,
        });
      });
    }
  }, [ref, girons]);

  return <div ref={ref} style={{ width, height }} />;
};

export default GoogleMaps;
