// pages/MarketsNearby.jsx
import React from "react";

const MarketsNearby = () => (
  <div className="min-h-screen">
    <h1 className="text-3xl font-bold text-center mt-6">Markets Nearby</h1>
    <div className="h-96 mt-6">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18..."
        width="100%"
        height="100%"
        allowFullScreen=""
        loading="lazy"
        title="Markets Nearby"
      ></iframe>
    </div>
  </div>
);

export default MarketsNearby;
