// components/FruitsPage.js
import React, { useState } from "react";

const fruits = [
  {
    name: "Apple",
    image: "https://assets.clevelandclinic.org/transform/cd71f4bd-81d4-45d8-a450-74df78e4477a/Apples-184940975-770x533-1_jpg",
    tips: [
      "Choose firm apples with no bruising.",
      "Pick apples that are brightly colored, depending on the variety.",
      "Smell the apple; a fresh apple has a sweet aroma.",
      "Avoid apples with soft spots or wrinkles.",
      "Larger apples tend to have a more developed flavor."
    ],
  },
  {
    name: "Banana",
    image: "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1240w,f_auto,q_auto:best/rockcms/2022-10/bananas-mc-221004-02-3ddd88.jpg",
    tips: [
      "Pick bananas with a slight greenish tinge for freshness.",
      "Choose bananas that are firm to the touch, not overly soft.",
      "Avoid bananas with too many brown spots, as they may be overripe.",
      "Yellow bananas with small brown spots are perfect for sweetness.",
      "Bananas should not have wrinkles along the skin."
    ],
  },
  {
    name: "Orange",
    image: "https://cdn.britannica.com/24/174524-050-A851D3F2/Oranges.jpg",
    tips: [
      "Choose oranges that are firm and heavy for their size.",
      "Look for bright, vibrant orange skin with no green patches.",
      "Avoid oranges with soft or wrinkled skin, as this indicates age.",
      "A fresh orange will have a pleasant citrus aroma when you smell it.",
      "Oranges with slightly bumpy skin tend to be juicier."
    ],
  },
  {
    name: "Strawberry",
    image: "https://cdn.britannica.com/62/154162-050-8E68A2FB/Garden-strawberries.jpg",
    tips: [
      "Pick bright red strawberries with fresh green leaves.",
      "Avoid strawberries with white or green tips, as they are underripe.",
      "Check for shiny skin; dull strawberries may be overripe.",
      "Strawberries should feel firm and not mushy.",
      "Smell the strawberries for a sweet, fragrant aroma."
    ],
  },
  {
    name: "Pineapple",
    image: "https://shorturl.at/bhecy",
    tips: [
      "Choose pineapples with a sweet smell at the base.",
      "Look for a firm, golden-colored pineapple with no soft spots.",
      "The leaves should be green and fresh-looking, not dried out.",
      "Check for a slight softness when pressing the fruit.",
      "A heavier pineapple often indicates better juiciness."
    ],
  },
  {
    name: "Mango",
    image: "https://www.fortheloveofnature.in/cdn/shop/products/Mangiferaindica-Priyur_Mango_1.jpg?v=1640246617",
    tips: [
      "Pick mangoes that are slightly soft to the touch.",
      "Choose mangoes with a fragrant, sweet smell at the stem end.",
      "Look for vibrant color, depending on the variety.",
      "Avoid mangoes with wrinkles, dark spots, or hard areas.",
      "A ripe mango will yield slightly under pressure and have a smooth skin."
    ],
  },
  {
    name: "Watermelon",
    image: "https://cdn4.dravinashtank.in/wp-content/uploads/2023/08/Watermelon.jpg.webp",
    tips: [
      "Choose watermelon that feels heavy for its size.",
      "Look for a deep green color with a smooth, uniform skin.",
      "A ripe watermelon will have a dull skin with a yellowish spot on the bottom.",
      "Tap the watermelon; a ripe one will produce a hollow sound.",
      "Avoid watermelons with any soft or sunken spots."
    ],
  },
  {
    name: "Grapes",
    image: "https://cdn.mos.cms.futurecdn.net/Us7L9tSDomCam2Cyb6hQoB.jpg",
    tips: [
      "Choose grapes that are firm and attached to the stem.",
      "Look for grapes that are plump and evenly colored.",
      "Avoid grapes with wrinkles or signs of dehydration.",
      "The skin of the grape should be smooth and free of blemishes.",
      "Fresh grapes should be sweet-smelling, not sour."
    ],
  },
  {
    name: "Peach",
    image: "https://images-prod.healthline.com/hlcmsresource/images/AN_images/peach-fruit-benefits-1296x728-feature.jpg",
    tips: [
      "Pick peaches that are firm yet slightly soft when squeezed.",
      "Look for peaches with vibrant color and smooth, fuzz-free skin.",
      "Avoid peaches with wrinkled or overly soft skin, as they may be overripe.",
      "A fresh peach will have a sweet, fruity aroma.",
      "Check for slight yielding under gentle pressure to ensure ripeness."
    ],
  },
  {
    name: "Pear",
    image: "https://images.healthshots.com/healthshots/en/uploads/2024/08/23190908/Pear.jpg",
    tips: [
      "Pick pears that are firm but yield slightly to pressure at the stem end.",
      "Look for a smooth skin with no bruising or blemishes.",
      "Avoid pears that are too hard or overly soft, as they may be under or overripe.",
      "Smell the pear for a sweet aroma near the stem.",
      "Heavier pears often have more juice and flavor."
    ],
  },
  {
    name: "Avocado",
    image: "https://nutritionsource.hsph.harvard.edu/wp-content/uploads/2022/04/pexels-antonio-filigno-8538296-1024x657.jpg",
    tips: [
      "Choose avocados that are slightly soft but not mushy.",
      "Look for a rich, dark green to black skin, depending on the variety.",
      "Avoid avocados with dark sunken spots or cracks.",
      "A ripe avocado will yield gently when pressed.",
      "Check the stem; if it comes off easily and is green underneath, the avocado is ripe."
    ],
  },
  {
    name: "Cherry",
    image: "https://cdn.shopify.com/s/files/1/0442/8929/4491/files/cherry-167341_1920.jpg?v=1627055020",
    tips: [
      "Pick cherries with bright, deep color, and smooth skin.",
      "Avoid cherries with wrinkles or spots.",
      "Fresh cherries should feel firm, not mushy.",
      "Look for a fresh green stem, as this indicates they were picked recently.",
      "Sweet-smelling cherries are often a sign of ripeness."
    ],
  },
];

const FruitsPage = () => {
  const [selectedFruit, setSelectedFruit] = useState(null);

  // Function to open modal with fruit data
  const openModal = (fruit) => {
    setSelectedFruit(fruit);
  };

  // Function to close the modal
  const closeModal = () => {
    setSelectedFruit(null);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-6">Fresh Fruits</h1>

      {/* Fruits Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {fruits.map((fruit, index) => (
          <div key={index} className="border rounded-lg p-4 cursor-pointer" onClick={() => openModal(fruit)}>
            <img
              src={fruit.image}
              alt={fruit.name}
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h2 className="text-2xl font-semibold">{fruit.name}</h2>
            <p className="text-gray-600">{fruit.description}</p>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedFruit && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg p-6 w-3/4 md:w-1/2 lg:w-1/3">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-xl font-bold text-gray-500 hover:text-gray-700"
            >
              ×
            </button>
            <h2 className="text-3xl font-semibold mb-4">{selectedFruit.name}</h2>
            <img
              src={selectedFruit.image}
              alt={selectedFruit.name}
              className="w-full h-56 object-cover rounded-lg mb-4"
            />
            <p className="text-lg mb-4">{selectedFruit.description}</p>
            <h3 className="text-2xl font-semibold mb-2">Tips for Selecting:</h3>
            <ul className="list-disc pl-6 space-y-2">
              {selectedFruit.tips.map((tip, index) => (
                <li key={index} className="text-gray-700">{tip}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default FruitsPage;