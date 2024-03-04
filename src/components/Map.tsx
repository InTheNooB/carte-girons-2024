import { useEffect, useRef } from "react";

const DEFAULT_CENTER = { lat: 46.69425890210601, lng: 6.876708506648145 };
const DEFAULT_ZOOM = 10;

const GoogleMaps = () => {
  // Ref
  const ref = useRef<HTMLDivElement | null>(null);

  // Screen size to set the map size to be full screen
  const width = window.innerWidth;
  const height = window.innerHeight;

  useEffect(() => {
    // Display the map
    if (ref.current) {
      new window.google.maps.Map(ref.current, {
        center: DEFAULT_CENTER,
        zoom: DEFAULT_ZOOM,
      });
    }
  }, [ref]);

  return <div ref={ref} style={{ width, height }} />;
};

export default GoogleMaps;
