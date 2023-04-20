import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Map from "./components/Map";
import Attribution from "./components/Attribution";

const App = () => {
  return (
    <div>
      <Header />
      <Map />
      <Attribution />
    </div>
  );
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<App />);
