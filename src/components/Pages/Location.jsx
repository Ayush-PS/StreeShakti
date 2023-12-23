import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import css from "../Styles/Location.module.css";

const Location = () => {
  const [location, setLocation] = useState(null);

  const handleDetectLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ latitude, longitude });
        },
        (error) => {
          console.error("Error getting location:", error.message);
        }
      );
    } else {
      console.error("Geolocation is not supported by your browser.");
    }
  };

  const customIcon = new L.Icon({
    iconUrl:
      "https://pngfreepic.com/wp-content/uploads/2021/02/location-13-lg.png",
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  });

  const imgurl =
    "https://static.vecteezy.com/system/resources/previews/014/273/466/non_2x/abstract-colorful-blob-shapes-element-design-free-png.png";
  const imgurl2 =
    "https://i.pinimg.com/originals/c5/36/c9/c536c9cdd607000657528893e5005848.png";

  return (
    <div className={css.wrapper}>
      <img src={imgurl} alt="" className={css.i1} />
      <img src={imgurl2} alt="" className={css.i2} />
      <button onClick={handleDetectLocation}>DETECT MY LIVE LOCATION</button>
      {location && (
        <div>
          <h2>Live Location:</h2>
          <p>Latitude: {location.latitude}</p>
          <p>Longitude: {location.longitude}</p>
          <MapContainer
            center={[location.latitude, location.longitude]}
            zoom={13}
            className={css.map}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker
              position={[location.latitude, location.longitude]}
              icon={customIcon}
            >
              <Popup>Your Live Location</Popup>
            </Marker>
          </MapContainer>
          <button>Share</button>
        </div>
      )}
    </div>
  );
};

export default Location;
