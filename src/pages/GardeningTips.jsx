// pages/GardeningTips.jsx
import React from "react";

const tips = [
  {
    plant: "Tomatoes",
    image: "https://via.placeholder.com/150?text=Tomatoes",
    tips: [
      "Water deeply and consistently to avoid splitting.",
      "Use stakes or cages to support growth.",
      "Remove yellowing leaves to prevent disease.",
    ],
  },
  {
    plant: "Basil",
    image: "https://via.placeholder.com/150?text=Basil",
    tips: [
      "Harvest leaves regularly to promote growth.",
      "Keep the soil moist but not waterlogged.",
      "Pinch flower buds to encourage leafy growth.",
    ],
  },
  {
    plant: "Carrots",
    image: "https://via.placeholder.com/150?text=Carrots",
    tips: [
      "Ensure loose, well-drained soil for straight roots.",
      "Thin seedlings to avoid overcrowding.",
      "Water consistently to prevent cracking.",
    ],
  },
  {
    plant: "Cucumbers",
    image: "https://via.placeholder.com/150?text=Cucumbers",
    tips: [
      "Provide a trellis for climbing varieties.",
      "Keep soil evenly moist but avoid waterlogging.",
      "Harvest frequently to encourage more fruit.",
    ],
  },
];

const GardeningTips = () => (
  <div className="min-h-screen p-6 bg-gray-50">
    <h1 className="text-4xl font-bold text-center mb-10 text-green-600">
      House Gardening Tips
    </h1>
    <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {tips.map((tip, index) => (
        <div
          key={index}
          className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow"
        >
          <img
            src={tip.image}
            alt={tip.plant}
            className="w-full h-40 object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-3 text-green-700">
              {tip.plant}
            </h2>
            <ul className="list-disc pl-5 text-gray-700 space-y-2">
              {tip.tips.map((tipDetail, idx) => (
                <li key={idx}>{tipDetail}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default GardeningTips;
