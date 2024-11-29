import React, { useState } from "react";
import { account } from "../config"; // Ensure this points to your Appwrite config file
import { useNavigate } from "react-router-dom";

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
  
    try {
      // Check for an active session
      const currentSession = await account.getSession("current");
      if (currentSession) {
        const userData = {
          name: currentSession.userName || "User",
          profilePic: "https://via.placeholder.com/50", // Default profile picture
        };
        onLogin(userData);
        navigate("/home");
        return;
      }
    } catch (err) {
      // No active session found, continue with login
      console.log("No active session found, creating a new one.");
    }
  
    try {
      // Create a new session if no active session exists
      const session = await account.createEmailPasswordSession(email, password);
      const userData = {
        name: session.name, // Ensure this matches the Appwrite user object
        profilePic: session.profilePic || "https://via.placeholder.com/50",
      };
      onLogin(userData);
      navigate("/home");
    } catch (err) {
      setError(err.message || "An error occurred");
    }
  };
  

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Login
        </h1>
        <form onSubmit={handleLogin} className="space-y-4">
          {error && (
            <div className="text-red-600 text-sm text-center">{error}</div>
          )}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600 transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
