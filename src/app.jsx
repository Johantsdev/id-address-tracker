import ReactDOM from "react-dom/client";
import SearchInput from "./components/SearchInput";
import Attribution from "./components/Attribution";

const App = () => {
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
