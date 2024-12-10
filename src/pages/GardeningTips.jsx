import React, { useState } from "react";
import { Link } from "react-router-dom";

const GardeningTips = () => {
    // State for controlling the modal visibility
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState({});

    // Function to open the modal with dynamic content
    const openModal = (content) => {
        setModalContent(content);
        setIsModalOpen(true);
    };

    // Function to close the modal
    const closeModal = () => {
        setIsModalOpen(false);
    };

    const tipsData = [
        {
            title: "Planting Basics",
            image: "https://shorturl.at/vDRKL",
            description: "Learn the essential techniques for planting seeds and young plants to ensure they thrive in your garden.",
            fullContent: `
        Planting is the foundation of every successful garden. Start by selecting the right seeds for your climate and soil. Before planting, prepare your garden bed by loosening the soil and adding compost or organic matter to improve its texture and fertility.
  
        1. **Choose the Right Time**: Plant according to your local growing season. Most plants have specific temperature requirements for germination.
        2. **Proper Depth**: Make sure to plant your seeds at the recommended depth. This ensures the roots will have room to grow and access nutrients.
        3. **Watering**: After planting, water thoroughly to help the seeds settle into the soil. Keep the soil moist, but not soaking wet.
        4. **Spacing**: Leave enough space between plants for proper air circulation and root development.
  
        **Pro Tip**: Companion planting can help some plants grow better when planted together, while also deterring pests naturally.
      `
        },
        {
            title: "Watering Your Garden",
            image: "https://shorturl.at/7TvRf",
            description: "Discover the best practices for watering your plants to keep them healthy and hydrated.",
            fullContent: `
        Watering is crucial for plant health. Too much water can lead to root rot, while too little can cause plants to wither. Here are some tips to ensure your garden gets the right amount of water:
  
        1. **Water Early in the Morning**: Watering early helps prevent evaporation and gives plants a full day of moisture before the heat of the afternoon sets in.
        2. **Water at the Base**: Focus on watering at the plant’s base rather than overhead. This prevents mold and mildew growth on leaves and keeps water from evaporating too quickly.
        3. **Soil Moisture**: Check the soil moisture regularly. Stick your finger in the soil up to the second knuckle – if it’s dry, it’s time to water.
        4. **Drip Irrigation or Soaker Hoses**: These systems deliver water directly to the roots, reducing waste and ensuring deep watering.
  
        **Pro Tip**: During hot weather, water your plants deeply but less frequently to encourage deep root growth. Shallow watering can result in weak, shallow roots.
      `
        },
        {
            title: "Pest Control",
            image: "https://www.ugaoo.com/cdn/shop/articles/shutterstock_682576462.jpg?v=1661875027",
            description: "Keep your garden safe from pests with natural remedies and tips for prevention.",
            fullContent: `
        Pests are a common challenge for gardeners, but you don’t have to rely on chemical pesticides. Here are some organic and sustainable ways to keep your garden pest-free:
   
        1. **Beneficial Insects**: Ladybugs, predatory beetles, and lacewings can help control aphids, caterpillars, and other pests. Introduce them into your garden to act as natural pest controllers.
        2. **Neem Oil**: This natural oil is effective against a wide range of garden pests and diseases. It’s safe for plants, humans, and beneficial insects when used correctly.
        3. **Diatomaceous Earth**: Sprinkle diatomaceous earth around the base of plants. It’s a natural powder that kills pests like slugs and aphids without harming your plants.
        4. **Garlic and Hot Pepper Spray**: Homemade sprays made from garlic, hot pepper, and water can act as a natural deterrent for pests. Spray it on your plants to create a barrier that pests will avoid.
  
        **Pro Tip**: Encourage biodiversity in your garden by planting a variety of flowers and herbs. This will attract pollinators and beneficial insects, reducing the need for pest control.
      `
        }
    ];

    return (
        <div className="bg-gray-50">
            {/* Hero Section */}
            <section className="relative bg-cover bg-center h-[50vh]" style={{ backgroundImage: 'url(/path/to/gardening-hero-image.jpg)' }}>
                <div className="absolute inset-0 bg-black opacity-60"></div>
                <div className="container mx-auto px-6 py-24 text-center text-white relative z-10">
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">Gardening Tips for Every Season</h1>
                    <p className="text-xl md:text-2xl mb-8">
                        Discover expert tips, seasonal advice, and the best practices for creating and maintaining your garden.
                    </p>
                    <Link to="/signup" className="bg-green-500 text-white py-3 px-8 rounded-full text-lg font-semibold transform transition duration-300 hover:bg-green-600">
                        Join Our Gardening Community
                    </Link>
                </div>
            </section>

            {/* Gardening Tips Section */}
            <section className="py-16 px-5">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-semibold mb-8">Essential Gardening Tips</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
                        {tipsData.map((tip, index) => (
                            <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105">
                                <img src={tip.image} alt={tip.title} className="w-full h-56 object-cover" />
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold mb-4">{tip.title}</h3>
                                    <p className="text-gray-600 mb-4">{tip.description}</p>
                                    <button
                                        onClick={() => openModal(tip)}
                                        className="text-green-500 font-semibold hover:underline">
                                        Learn More
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white p-8 rounded-lg max-w-4xl w-full">
                        <button onClick={closeModal} className="absolute top-4 right-4 text-xl font-semibold text-gray-600">X</button>
                        <h2 className="text-3xl font-semibold mb-4">{modalContent.title}</h2>
                        <img src={modalContent.image} alt={modalContent.title} className="w-full h-72 object-cover mb-4" />
                        <p className="text-gray-600 mb-6">{modalContent.fullContent}</p>
                        <button onClick={closeModal} className="bg-green-500 text-white py-3 px-8 rounded-full text-lg font-semibold transform transition duration-300 hover:bg-green-600">
                            Close
                        </button>
                    </div>
                </div>
            )}

            {/* Seasonal Gardening Section */}
            <section className="bg-green-100 py-16 px-5 ">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-semibold mb-8">Seasonal Gardening Advice</h2>
                    <p className="text-xl md:text-2xl text-gray-600 mb-8">
                        Gardening needs change with the seasons. Explore tips for each time of year to keep your garden blooming year-round.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <h3 className="text-xl font-semibold mb-4">Spring</h3>
                            <p className="text-gray-600">
                                Spring is the season of renewal—learn what to plant and how to prepare your garden.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <h3 className="text-xl font-semibold mb-4">Summer</h3>
                            <p className="text-gray-600">
                                Keep your garden thriving in the heat—discover watering schedules and pest control tips.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <h3 className="text-xl font-semibold mb-4">Fall</h3>
                            <p className="text-gray-600">
                                Fall is perfect for planting perennials and preparing for winter—learn the best practices.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <h3 className="text-xl font-semibold mb-4">Winter</h3>
                            <p className="text-gray-600">
                                Winter gardening tips for keeping plants protected and preparing for the next season.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default GardeningTips;
