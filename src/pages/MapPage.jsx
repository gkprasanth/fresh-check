// components/MapsPage.js
import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const MapPage = () => {
  const markets = [
    { lat: 51.505, lng: -0.09, name: "Market 1" },
    { lat: 51.515, lng: -0.1, name: "Market 2" },
    // Add more market locations...
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-6">Nearby Markets</h1>
      <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: "400px", width: "100%" }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {markets.map((market, index) => (
          <Marker key={index} position={[market.lat, market.lng]}>
            <Popup>{market.name}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapPage;