import GironList from "./components/GironList";
import { GoogleMapsWrapper } from "./components/GoogleMapWrapper";
import Header from "./components/Header";
import Map from "./components/Map";

export type Giron = {
  canton: "VD" | "FR";
  month: number;
  fromDate: Date;
  toDate?: Date;
  city: string;
  details: string;
  latlng: google.maps.LatLngLiteral;
  website?: string;
};

const girons: Giron[] = [
  {
    canton: "FR",
    month: 6,
    details: "Giron de la Sarine",
    city: "villarlod",
    fromDate: new Date(2024, 5, 26),
    toDate: new Date(2024, 5, 30),
    latlng: { lat: 46.70531586775365, lng: 7.021763917630578 },
    website: "https://villarlod-2024.ch/",
  },
  {
    canton: "VD",
    month: 8,
    details: "Cantonale FVJC",
    city: "givrins",
    fromDate: new Date(2024, 6, 31),
    toDate: new Date(2024, 7, 18),
    latlng: { lat: 46.42888428601185, lng: 6.203337331590857 },
    website: "https://givrins2024.ch/",
  },
  {
    canton: "FR",
    month: 7,
    details: "Giron de la Broye",
    city: "Cugy",
    fromDate: new Date(2024, 6, 3),
    toDate: new Date(2024, 6, 7),
    latlng: { lat: 46.814077831604706, lng: 6.891333566506397 },
    website: "https://gironcugy2024.ch/",
  },
  {
    canton: "FR",
    month: 7,
    details: "Giron de la Glâne",
    city: "Villaraboud",
    fromDate: new Date(2024, 6, 17),
    toDate: new Date(2024, 6, 21),
    latlng: { lat: 46.66628395423493, lng: 6.916926936152474 },
    website: "https://villaraboud2024.ch/",
  },
  {
    canton: "FR",
    month: 7,
    details: "Rencontre des jeunesses gruériennes",
    city: "Vuadens",
    fromDate: new Date(2024, 6, 3),
    toDate: new Date(2024, 6, 7),
    latlng: { lat: 46.61783287608617, lng: 7.025067118413992 },
    website: "https://rjg-2024.ch/",
  },
  {
    canton: "FR",
    month: 8,
    details: "Giron de la Veveyse",
    city: "St-Martin",
    fromDate: new Date(2024, 7, 14),
    toDate: new Date(2024, 7, 18),
    latlng: { lat: 46.57665636882984, lng: 6.869013742944149 },
    website: "https://st-martin2024.ch/",
  },
  {
    canton: "VD",
    month: 7,
    details: "Rencontres FVJC à RMC",
    city: "Jorat-Mézières",
    fromDate: new Date(2024, 6, 10),
    toDate: new Date(2024, 6, 14),
    latlng: { lat: 46.59587116517112, lng: 6.7702290072024365 },
    website: "https://rmc2024.ch/",
  },
  {
    canton: "VD",
    month: 5,
    details: "Rallye FVJC",
    city: "Bioley-Magnoux & Ogens",
    fromDate: new Date(2024, 4, 15),
    toDate: new Date(2024, 4, 19),
    latlng: { lat: 46.72696696961714, lng: 6.711366477589637 },
    website: "http://rallye2024.ch/",
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
