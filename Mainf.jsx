export default function Main(props) {
  console.log(props);

  return (
    <main>
      <div className="card">
        <img src={props.img} alt={props.img.alt} className="image" />
        <div className="info">
          <div className="location">
            <div className="country">
              <img src="https://cdn.hugeicons.com/icons/location-01-solid-rounded.svg" alt="Marker" className="marker" />
              <h4>{props.place1}</h4>
            </div>
            <a href={props.location1} target="_blank" rel="noopener noreferrer">View on Google Maps</a>
          </div>
          <h1>{props.name}</h1>
          <h4 className="dates">1 Feb, 2025 - 24 Feb, 2021</h4>
          <p className="description">{props.description1}</p>
        </div>
      </div>
    </main>
  );
}

