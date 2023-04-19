import ReactDOM from "react-dom/client";

const App = () => {
  return (
    <div>
      IP Address Tracker Search for any IP address or domain IP Address Location
      Timezone UTC {"<!-- add offset value dynamically using the API -->"}
      ISP
      <div className="attribution">
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          rel="noreferrer"
          target="_blank"
        >
          Frontend Mentor
        </a>
        . Coded by <a href="./">Your Name Here</a>.
      </div>
    </div>
  );
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<App />);
