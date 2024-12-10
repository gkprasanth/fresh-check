import React, { useState } from "react";

const vegetables = [
  {
    name: "Tomato",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Tomato_je.jpg/1200px-Tomato_je.jpg",
    tips: [
      "Pick firm tomatoes with a rich red color.",
      "Avoid tomatoes with blemishes or soft spots.",
      "Smell the stem end; fresh tomatoes have a fragrant aroma.",
      "Look for tomatoes that feel heavy for their size."
    ],
  },
  {
    name: "Carrot",
    image: "https://organicmandya.com/cdn/shop/files/OotyCarrot.jpg",
    tips: [
      "Choose firm carrots with bright orange color.",
      "Avoid carrots that are limp or cracked.",
      "Check for smooth skin without deep grooves.",
      "Avoid carrots with a greenish top, as this indicates overexposure to sunlight."
    ],
  },
  {
    name: "Broccoli",
    image: "https://organicmandya.com/cdn/shop/files/Broccoli.jpg?v=1721371046&width=1000",
    tips: [
      "Look for dark green florets that are tightly packed.",
      "Avoid broccoli with yellow or brown spots.",
      "Stems should be firm and moist, not woody.",
      "Check for a fresh, earthy smell."
    ],
  },
  {
    name: "Potato",
    image: "https://www.netafimindia.com/cdn-cgi/image/format=auto,fit=crop,quality=80,width=750,/contentassets/98512e81691249368e1ca89dcaa7abcd/potatoes_challenge-1-1.png",
    tips: [
      "Choose potatoes with smooth, firm skin.",
      "Avoid potatoes with green spots or sprouts.",
      "Heavier potatoes are often fresher and more moist.",
      "Avoid potatoes with wrinkles or cuts."
    ],
  },
  {
    name: "Spinach",
    image: "https://5.imimg.com/data5/JB/JY/MY-5825651/spinach_-500x500.jpg",
    tips: [
      "Pick fresh spinach with crisp, dark green leaves.",
      "Avoid spinach with yellow or wilted leaves.",
      "Check for a fresh, earthy smell without sliminess.",
      "Smaller leaves are usually more tender and less bitter."
    ],
  },
  {
    name: "Cucumber",
    image: "https://freshkartfarms.com/assets/img/product_img/450X450/english-cucumber.jpg",
    tips: [
      "Choose cucumbers that are firm and dark green in color.",
      "Avoid cucumbers with soft spots or yellow patches.",
      "Smaller cucumbers are generally less seedy.",
      "Check for a smooth, shiny skin."
    ],
  },
  {
    name: "Bell Pepper",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/85/Green-Yellow-Red-Pepper-2009.jpg",
    tips: [
      "Look for glossy, firm skin with vibrant color.",
      "Avoid peppers with wrinkles or soft spots.",
      "The stem should be green and fresh-looking.",
      "Heavier peppers are typically juicier."
    ],
  },
  {
    name: "Zucchini",
    image: "https://gabbarfarms.com/cdn/shop/products/zucchini_600x.jpg?v=1634635707",
    tips: [
      "Choose zucchini that is firm and has a bright green color.",
      "Avoid zucchini with soft spots or blemishes.",
      "Smaller zucchinis are more tender and flavorful.",
      "Look for a slightly shiny surface."
    ],
  },
  {
    name: "Cauliflower",
    image: "https://www.veggycation.com.au/siteassets/veggycationvegetable/cauliflower.jpg",
    tips: [
      "Choose cauliflower with tightly packed, creamy white florets.",
      "Avoid heads with brown spots or loose, separated florets.",
      "Leaves should be fresh and green.",
      "Feel for a heavy, dense head."
    ],
  },
  
];


const VegetablesPage = () => {
  const [selectedVegetable, setSelectedVegetable] = useState(null);

  const handleCloseModal = () => setSelectedVegetable(null);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-6">Fresh Vegetables</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {vegetables.map((veg, index) => (
          <div
            key={index}
            className="border rounded-lg p-4 cursor-pointer hover:shadow-lg transition"
            onClick={() => setSelectedVegetable(veg)}
          >
            <img
              src={veg.image}
              alt={veg.name}
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h2 className="text-2xl font-semibold">{veg.name}</h2>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedVegetable && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 w-11/12 md:w-2/3 lg:w-1/2">
            <button
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
              onClick={handleCloseModal}
            >
              close
            </button>
            <img
              src={selectedVegetable.image}
              alt={selectedVegetable.name}
              className="w-full h-60 object-cover rounded-lg mb-4"
            />
            <h2 className="text-3xl font-bold mb-4">{selectedVegetable.name}</h2>
            <ul className="list-disc list-inside text-gray-700">
              {selectedVegetable.tips.map((tip, idx) => (
                <li key={idx} className="mb-2">{tip}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default VegetablesPage;
