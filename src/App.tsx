import { GoogleMapsWrapper } from "./components/GoogleMapWrapper";
import Header from "./components/Header";
import Map from "./components/Map";

const App = () => {
  return (
    <div className="overflow-hidden">
      <GoogleMapsWrapper>
        <Header />
        <Map />
      </GoogleMapsWrapper>
    </div>
  );
};

export default App;
