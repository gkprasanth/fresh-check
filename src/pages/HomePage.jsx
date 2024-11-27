import React, { useState } from "react";
import ItemCard from "../components/ItemCard";
import InstructionsModal from "../components/InstructionsModal";

const items = {
  Vegetables: [
    {
      name: "Tomato",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Tomato_je.jpg/800px-Tomato_je.jpg",
      instructions: [
        "Look for a bright red color.",
        "Press gently; it should be firm but not too hard.",
        "Avoid wrinkles, mold, or soft spots.",
      ],
    },
    {
      name: "Carrot",
      image: "https://www.hhs1.com/hubfs/carrots%20on%20wood-1.jpg",
      instructions: [
        "Choose carrots that are firm and smooth.",
        "Avoid carrots with cracks or soft spots.",
        "The color should be vibrant orange.",
      ],
    },
    {
      name: "Spinach",
      image: "https://post.healthline.com/wp-content/uploads/2019/05/spinach-1296x728-header.jpg",
      instructions: [
        "Look for fresh, green leaves without yellowing.",
        "Avoid leaves with holes or slimy texture.",
        "Ensure stems are firm and not wilted.",
      ],
    },
  ],
  Fruits: [
    {
      name: "Banana",
      image: "https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2022-10/bananas-mc-221004-02-3ddd88.jpg",
      instructions: [
        "Check for a vibrant yellow color.",
        "Avoid bananas with large dark spots.",
        "Smell for a sweet, ripe aroma.",
      ],
    },
    {
      name: "Apple",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJIedWzt27boVIM6v6rOMebOMDn_saF8iYuDEp2iPk7F2wPIfzSXqW0wTDWXbCzFZytvI&usqp=CAU",
      instructions: [
        "Look for a smooth and shiny skin.",
        "Press gently; it should feel firm.",
        "Avoid apples with bruises or brown spots.",
      ],
    },
    {
      name: "Orange",
      image: "https://cdn.britannica.com/24/174524-050-A851D3F2/Oranges.jpg",
      instructions: [
        "Choose oranges that are firm and heavy for their size.",
        "The skin should be bright and evenly colored.",
        "Avoid oranges with soft spots or mold.",
      ],
    },
  ],
};

const HomePage = () => {
    const [selectedItem, setSelectedItem] = useState(null);
  
    return (
      <div className="p-6">
        <h1 className="text-3xl font-extrabold text-center text-gray-800 mb-8">
          Freshness Checker
        </h1>
        {Object.entries(items).map(([category, categoryItems]) => (
          <div key={category} className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-gray-700">
              {category}
            </h2>
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {categoryItems.map((item, index) => (
                <ItemCard key={index} item={item} onClick={setSelectedItem} />
              ))}
            </div>
          </div>
        ))}
        {selectedItem && (
          <InstructionsModal
            item={selectedItem}
            onClose={() => setSelectedItem(null)}
          />
        )}
      </div>
    );
  };
  
  export default HomePage;