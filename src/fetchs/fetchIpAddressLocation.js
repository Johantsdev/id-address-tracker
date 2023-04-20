async function fetchIpAddressLocation(ipAddress) {
  const API_KEY = "at_KQ1lIw3biXvTHOGTlDeDKjClcgsHC";

  const res = await fetch(
    `https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}&ipAddress=${ipAddress}`
  );

  if (!res.ok) {
    throw new Error(`search for ${ipAddress} failed`);
  }

  const data = await res.json();

  return data;
}

export default fetchIpAddressLocation;
