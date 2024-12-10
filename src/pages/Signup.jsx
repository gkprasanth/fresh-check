import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { account } from "../config"; // Import your Appwrite instance
// import { useUserStore } from "../store/userStore"; // Zustand store

// Function to create a new user account
const createUserAccount = async (email, password, name) => {
  try {
    const user = await account.create("unique()", email, password, name); // Create user
    return user;
  } catch (err) {
    console.error("Signup failed: ", err);
    throw new Error("Error creating account. Please try again.");
  }
};

const Signup = () => {
  const [formData, setFormData] = useState({ email: "", password: "", name: "" });
  const [error, setError] = useState(""); // State for error message
  const navigate = useNavigate(); // Hook for navigation
  // const setUserDetails = useUserStore((state) => state.setUser);

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle the form submission for signup
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Create the user account using Appwrite
      const user = await createUserAccount(formData.email, formData.password, formData.name);
      
      // Set user details in the Zustand store
      setUserDetails({
        email: user.email,
        name: user.name,
        userId: user.$id,
      });
      
      // Automatically log in the user after account creation
      await account.createEmailPasswordSession(formData.email, formData.password);
      
      navigate("/"); // Navigate to the homepage after successful signup
    } catch (err) {
      setError(err.message || "An error occurred. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('/path/to/your/background-image.jpg')" }}>
      <div className="bg-white bg-opacity-75 rounded-lg p-10 max-w-md w-full">
        <h1 className="text-4xl font-bold text-blue-600 text-center mb-8">Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="name" className="block text-lg font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="mt-2 block w-full px-6 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 text-lg"
              placeholder="Enter your full name"
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="email" className="block text-lg font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="mt-2 block w-full px-6 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 text-lg"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-lg font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="mt-2 block w-full px-6 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 text-lg"
              placeholder="Enter your password"
              required
            />
          </div>

          {/* Display error message */}
          {error && (
            <p className="mb-6 text-red-500 text-center font-medium">
              {error}
            </p>
          )}

          <button type="submit" className="w-full bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition duration-300">
            Sign Up
          </button>
        </form>

        <p className="mt-6 text-center text-lg text-gray-600">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600 hover:underline text-lg">
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
