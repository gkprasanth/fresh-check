import React from "react";

const ItemCard = ({ item, onClick }) => (
  <div
    className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl cursor-pointer transition transform hover:scale-105"
    onClick={() => onClick(item)}
  >
    <div className="relative overflow-hidden rounded-lg h-40">
      <img
        src={item.image}
        alt={item.name}
        className="w-full h-full object-cover"
      />
    </div>
    <h2 className="text-lg font-semibold text-gray-800 text-center mt-4">
      {item.name}
    </h2>
  </div>
);

export default ItemCard;