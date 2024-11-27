import React, { useState } from "react";
import ItemCard from "../components/ItemCard";
import InstructionsModal from "../components/InstructionsModal";

const items = {
  Vegetables: [
    {
      name: "Tomato",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Tomato_je.jpg/800px-Tomato_je.jpg",
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
      image:
        "https://post.healthline.com/wp-content/uploads/2019/05/spinach-1296x728-header.jpg",
      instructions: [
        "Look for fresh, green leaves without yellowing.",
        "Avoid leaves with holes or slimy texture.",
        "Ensure stems are firm and not wilted.",
      ],
    },
    {
      name: "Potato",
      image:
        "https://www.simplotfoods.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F0dkgxhks0leg%2FRKiZ605RAV8kjDQnxFCWP%2Fb03b8729817c90b29b88d536bfd37ac5%2F9-Unusual-Uses-For-Potatoes.jpg%3Ffm%3Dwebp&w=1920&q=75",
      instructions: [
        "Look for firm potatoes with smooth, unblemished skin.",
        "Avoid green spots, which indicate solanine, a toxic compound.",
        "Avoid sprouted or wrinkled potatoes.",
      ],
    },
    {
      name: "Cucumber",
      image:
        "https://www.usatoday.com/gcdn/authoring/authoring-images/2024/07/17/USAT/74441065007-getty-images-182888377.jpg?crop=1999,1125,x0,y75&width=1999&height=1125&format=pjpg&auto=webp",
      instructions: [
        "Choose cucumbers that are firm and dark green.",
        "Avoid soft spots, yellowing, or wrinkled skin.",
        "Check for a smooth texture without blemishes.",
      ],
    },
    {
      name: "Broccoli",
      image:
        "https://static.toiimg.com/thumb/msid-114193352,width-1280,height-720,imgsize-117908,resizemode-6,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
      instructions: [
        "Choose broccoli with tightly closed, dark green florets.",
        "Avoid yellowing or flowering heads.",
        "The stem should be firm and not woody.",
      ],
    },
  ],
  Fruits: [
    {
      name: "Banana",
      image:
        "https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2022-10/bananas-mc-221004-02-3ddd88.jpg",
      instructions: [
        "Check for a vibrant yellow color.",
        "Avoid bananas with large dark spots.",
        "Smell for a sweet, ripe aroma.",
      ],
    },
    {
      name: "Apple",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJIedWzt27boVIM6v6rOMebOMDn_saF8iYuDEp2iPk7F2wPIfzSXqW0wTDWXbCzFZytvI&usqp=CAU",
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
    {
      name: "Strawberry",
      image:
        "https://cdn.britannica.com/62/154162-050-8E68A2FB/Garden-strawberries.jpg",
      instructions: [
        "Pick strawberries that are bright red and shiny.",
        "Avoid strawberries with white or green patches.",
        "Inspect for bruises, mold, or shriveled stems.",
      ],
    },
    {
      name: "Grapes",
      image:
        "https://www.thespruceeats.com/thmb/l1_lV7wgpqRArWBwpG3jzHih_e8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/what-are-grapes-5193263-hero-01-80564d77b6534aa8bfc34f378556e513.jpg",
      instructions: [
        "Choose plump, firm grapes still attached to green stems.",
        "Avoid shriveled, soft, or moldy grapes.",
        "Check for consistent color throughout the bunch.",
      ],
    },
    {
      name: "Pineapple",
      image:
        "https://vcdn1-english.vnecdn.net/2024/10/28/pineapple-8979389-1280-3514-1730062408.jpg?w=680&h=0&q=100&dpr=2&fit=crop&s=djm3Ia1wLOby4rTo0ZdQRA",
      instructions: [
        "Smell the base; it should have a sweet, fragrant aroma.",
        "Press gently; it should give slightly without being mushy.",
        "Avoid pineapples with brown or soft spots.",
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