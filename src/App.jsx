import ReactDOM from "react-dom/client";
import SearchInput from "./components/SearchInput";
import Attribution from "./components/Attribution";

const App = () => {
  var map = L.map("map").setView([51.505, -0.09], 13);
  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution:
      '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map);
  return (
    <div>
      <h1>IP Address Tracker</h1>
      <SearchInput />
      <Attribution />
    </div>
  );
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<App />);
