import { FC, useEffect, useRef } from "react";
import { Giron } from "../App";
import { getFormattedGironDetails } from "../utils";

const DEFAULT_CENTER = { lat: 46.69425890210601, lng: 6.876708506648145 };
const DEFAULT_ZOOM = 10;
let currentInfoWindow: google.maps.InfoWindow | null = null;

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
  let dates = "";

  if (!toDate) {
    dates = `le ${fromDate}`;
  } else {
    dates = `du ${fromDate} au ${toDate}`;
  }

  const link = giron.website
    ? `<a href=${giron.website} target="_blank" rel="noreferrer">${giron.website}</a>`
    : "";

  const infoWindow = new google.maps.InfoWindow({
    content: `  <div class="flex flex-row gap-3 text-neutral-950">
    <img src=${imageSrc} alt="flag" class="w-10 object-contain" />
    <div>
      <h2 class="uppercase font-black text-xl">${giron.city}</h2>
      <p>${giron.details}</p>
      <p>${dates}</p>
      ${link}
    </div>
  </div>`,
  });

  marker.addListener("click", () => {
    // Close the currently open InfoWindow
    if (currentInfoWindow) {
      currentInfoWindow.close();
    }

    // Open the clicked marker's InfoWindow
    infoWindow.open(map, marker);

    // Update the currently open InfoWindow
    currentInfoWindow = infoWindow;
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
