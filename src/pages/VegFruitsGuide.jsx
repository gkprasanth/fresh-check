// pages/VegFruitsGuide.jsx
import React from "react";

const VegFruitsGuide = () => (
  <div className="min-h-screen p-6">
    <h1 className="text-3xl font-bold mb-6">Vegetables and Fruits Guide</h1>
    <ul className="space-y-4">
      <li>
        <strong>Tomatoes:</strong> Look for firm, bright red tomatoes with no
        wrinkles.
      </li>
      <li>
        <strong>Bananas:</strong> Choose vibrant yellow bananas with no dark
        spots.
      </li>
      {/* Add more characteristics here */}
    </ul>
  </div>
);

export default VegFruitsGuide;
