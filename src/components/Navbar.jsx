import { Link } from "react-router-dom";
import { useUserStore } from "../store/userStore";

const Navbar = () => {
  const user = useUserStore((state) => state.user); // Access the user state
  const clearUser = useUserStore((state) => state.clearUser); // Access the logout function

  const handleLogout = () => {
    clearUser(); // Clear the user state on logout
  };

  return (
    <nav className="bg-green-600 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo or Brand Name */}
        <div className="text-white text-xl font-bold">
          <Link to="/home">FreshCheck</Link>
        </div>

        {/* Navigation Links */}
        <ul className="flex items-center space-x-6">
          <li>
            <Link to="/vegetables" className="text-white hover:text-gray-200">
              Vegetables
            </Link>
          </li>
          <li>
            <Link to="/fruits" className="text-white hover:text-gray-200">
              Fruits
            </Link>
          </li>
          <li>
            <Link to="/maps" className="text-white hover:text-gray-200">
              Maps
            </Link>
          </li>
          <li>
            <Link to="/gardening" className="text-white hover:text-gray-200">
              Gardening Tips
            </Link>
          </li>

          {/* Conditional Links */}
          {!user && (
            <>
              <li>
                <Link
                  to="/login"
                  className="text-white bg-blue-500 px-4 py-2 rounded hover:bg-blue-600 transition"
                >
                  Login
                </Link>
              </li>
              <li>
                <Link
                  to="/signup"
                  className="text-white bg-yellow-500 px-4 py-2 rounded hover:bg-yellow-600 transition"
                >
                  Sign Up
                </Link>
              </li>
            </>
          )}
          {user && (
            <>
              <li>
                <button
                  onClick={handleLogout}
                  className="text-white bg-red-600 px-4 py-2 rounded hover:bg-red-700 transition"
                >
                  Log Out
                </button>
              </li>
              <li>
                <span className="text-white font-medium">Welcome, {user.name}!</span>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
