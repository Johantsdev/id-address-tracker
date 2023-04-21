const Details = ({ ip, country, region, timezone, isp }) => {
  return (
    <div className="details-container">
      <div className="detail">
        <h2>IP ADDRESS</h2>
        <span>{ip}</span>
      </div>
      <div className="detail">
        <h2>LOCATION</h2>
        <span>
          {region}, {country}
        </span>
      </div>
      <div className="detail">
        <h2>TIMEZONE</h2>
        <span>UTC {timezone}</span>
      </div>
      <div className="detail">
        <h2>ISP</h2>
        <span>{isp}</span>
      </div>
    </div>
  );
};
export default Details;
