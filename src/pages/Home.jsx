// pages/Home.js
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>

      <div className="relative  bg-cover bg-center h-screen" style={{ backgroundImage: 'url(https://shorturl.at/uquWM)' }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto  px-6 py-24 relative z-10 text-white text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
            Welcome to FreshCheck
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Explore the freshest vegetables, fruits, and nearby markets—right at your fingertips.
          </p>

          <div className="flex justify-center space-x-8">
            <Link
              to="/vegetables"
              className="bg-green-500 text-white py-3 px-8 rounded-full text-lg font-semibold transform transition duration-300 hover:bg-green-600 hover:scale-105"
            >
              Explore Vegetables
            </Link>
            <Link
              to="/fruits"
              className="bg-red-500 text-white py-3 px-8 rounded-full text-lg font-semibold transform transition duration-300 hover:bg-red-600 hover:scale-105"
            >
              Explore Fruits
            </Link>
            <Link
              to="/maps"
              className="bg-blue-500 text-white py-3 px-8 rounded-full text-lg font-semibold transform transition duration-300 hover:bg-blue-600 hover:scale-105"
            >
              Explore Maps
            </Link>
          </div>
        </div>
      </div>

      <section className="bg-white py-16">
  <div className="container mx-auto px-6 text-center">
    <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-gray-900">Why FreshCheck?</h2>
    <p className="text-lg md:text-2xl mb-12 text-gray-600 max-w-2xl mx-auto">
      FreshCheck brings fresh produce and local markets to your fingertips, ensuring you get the best and most recent selections for a healthy lifestyle.
    </p>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mb-8">
      <div className="flex flex-col items-center bg-gray-50 p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
        <img
          src="https://www.macspharmacy.com/wp-content/uploads/2019/08/vegetables.jpg"
          alt="Fresh Vegetables"
          className="w-24 h-24 mb-4 rounded-full shadow-md"
        />
        <h3 className="text-2xl font-medium text-gray-800 mb-2">Fresh Vegetables</h3>
        <p className="text-gray-600">
          Get access to a wide variety of fresh vegetables from local markets.
        </p>
      </div>

      <div className="flex flex-col items-center bg-gray-50 p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQseORNevMMlnZ1q0iiKSItscB3ztQsYvTr2A&s"
          alt="Fresh Fruits"
          className="w-24 h-24 mb-4 rounded-full shadow-md"
        />
        <h3 className="text-2xl font-medium text-gray-800 mb-2">Fresh Fruits</h3>
        <p className="text-gray-600">
          Discover fresh, seasonal fruits that promote a healthy lifestyle.
        </p>
      </div>

      <div className="flex flex-col items-center bg-gray-50 p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
        <img
          src="https://neocha-content.oss-cn-hongkong.aliyuncs.com/wp-content/uploads/sites/2/2016/06/Market_48011.jpg"
          alt="Nearby Markets"
          className="w-24 h-24 mb-4 rounded-full shadow-md"
        />
        <h3 className="text-2xl font-medium text-gray-800 mb-2">Nearby Markets</h3>
        <p className="text-gray-600">
          Find nearby markets to explore fresh produce in person.
        </p>
      </div>
    </div>
  </div>
</section>


      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-8">Join the FreshCheck Community</h2>
          <p className="text-xl md:text-2xl mb-4 text-gray-600">
            Sign up today and start exploring the world of fresh, local produce!
          </p>
          <Link
            to="/signup"
            className="bg-purple-500 text-white py-3 px-8 rounded-full text-lg font-semibold transform transition duration-300 hover:bg-purple-600 hover:scale-105"
          >
            Join Now
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;
