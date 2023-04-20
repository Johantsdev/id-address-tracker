import { useEffect, useState } from "react";
import Details from "./Details";

const SearchInput = () => {
  const [datas, setDatas] = useState(null);
  const [ipAddress, setIpAddress] = useState("192.212.174.101");

  useEffect(() => {
    fetchIpAddressLocation(ipAddress);
  }, []);

  async function fetchIpAddressLocation(ipAddress) {
    const API_KEY = "at_KQ1lIw3biXvTHOGTlDeDKjClcgsHC";
    const res = await fetch(
      `https://geo.ipify.org/api/v2/country?apiKey=${API_KEY}&ipAddress=${ipAddress}`
    );

    if (!res.ok) {
      throw new Error(`search for ${ipAddress} failed`);
    }

    const json = await res.json();
    setDatas(json);
  }
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          fetchIpAddressLocation(ipAddress);
        }}
      >
        <input
          onChange={(e) => {
            setIpAddress(e.target.value);
          }}
          type="text"
          name="ipAddress"
          value={ipAddress}
        />
        <button>&gt;</button>
      </form>
      {datas === null ? null : (
        <Details
          ip={datas.ip}
          country={datas.location.country}
          region={datas.location.region}
          timezone={datas.location.timezone}
          isp={datas.isp}
        />
      )}
    </div>
  );
};

export default SearchInput;
