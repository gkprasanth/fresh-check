import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ user, onLogout }) => (
  <div className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
    <div className="container mx-auto flex justify-between items-center p-4">
      <h1 className="text-xl font-bold text-blue-500">Freshness Checker</h1>
      <div className="flex items-center space-x-6">
        <Link to="/gardening-tips" className="text-blue-500 hover:underline">
          Gardening Tips
        </Link>
        <Link to="/markets-nearby" className="text-blue-500 hover:underline">
          Markets Nearby
        </Link>
        <Link to="/veg-fruits-guide" className="text-blue-500 hover:underline">
          Veg & Fruits
        </Link>
        {user ? (
          <div className="flex items-center space-x-4">
            <Link to="/profile" className="flex items-center space-x-2">
              <img
                src={user.profilePic}
                alt="Profile"
                className="w-8 h-8 rounded-full"
              />
              <span className="text-gray-700">{user.name}</span>
            </Link>
            <button
              onClick={onLogout}
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="flex space-x-4">
            <Link to="/login" className="text-blue-500 hover:underline">
              Login
            </Link>
            <Link to="/signup" className="text-blue-500 hover:underline">
              Signup
            </Link>
          </div>
        )}
      </div>
    </div>
  </div>
);

export default Navbar;
