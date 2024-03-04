import GironList from "./components/GironList";
import { GoogleMapsWrapper } from "./components/GoogleMapWrapper";
import Header from "./components/Header";
import Map from "./components/Map";

export type Giron = {
  canton: "VD" | "FR";
  month: number;
  fromDate: Date;
  toDate: Date;
  city: string;
  details: string;
  latlng?: google.maps.LatLngLiteral;
};

const girons: Giron[] = [
  {
    canton: "FR",
    month: 6,
    details: "Giron de la sarine",
    city: "villarlod",
    fromDate: new Date(2024, 5, 26),
    toDate: new Date(2024, 5, 30),
  },
  {
    canton: "VD",
    month: 8,
    details: "Cantonale FVJC",
    city: "givrins",
    fromDate: new Date(2024, 6, 1),
    toDate: new Date(2024, 7, 18),
  },
  {
    canton: "FR",
    month: 8,
    details: "Giron de la Broye",
    city: "Cugy",
    fromDate: new Date(2024, 6, 3),
    toDate: new Date(2024, 6, 7),
    latlng: { lat: 46.814077831604706, lng: 6.891333566506397 },
  },
];
const App = () => {
  return (
    <div className="overflow-hidden">
      <GoogleMapsWrapper>
        <Header />
        <Map girons={girons} />
        <GironList girons={girons} />
      </GoogleMapsWrapper>
    </div>
  );
};

export default App;
