// Header.tsx

import { useState, useEffect } from "react";
import { Menu, X, User, ChevronDown } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [user, setUser] = useState<string | null>(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Simulate fetching user data from localStorage or context
    const loggedInUser = localStorage.getItem("username");
    setUser(loggedInUser);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("token");
    setUser(null);
    navigate("/login");
  };

  return (
    <header className="sticky top-0 z-50 bg-[#efe2db] shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-1xl font-bold text-[#7c160f]">
            <Link to="/">World Cuisine</Link>
          </h1>
        </div>

        <nav className="hidden md:flex space-x-9">
          <Link to="/about" className="text-[#1e0907] hover:text-[#bb6f57] font-medium">
            About
          </Link>
          <Link to="/restaurants" className="text-[#1e0907] hover:text-[#bb6f57] font-medium">
            Restaurants
          </Link>
          <Link to="/posts" className="text-[#1e0907] hover:text-[#bb6f57] font-medium">
            Posts
          </Link>
          <Link to="/contact" className="text-[#1e0907] hover:text-[#bb6f57] font-medium">
            Contact
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          {user ? (
            <div className="relative">
              <button
                className="flex items-center text-[#1e0907] hover:text-[#bb6f57] font-medium"
                onClick={toggleDropdown}
              >
                {user} <ChevronDown className="h-5 w-5 ml-1" />
              </button>
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-[#efe2db] border rounded shadow-md">
                  <Link
                    to="/account"
                    className="block px-4 py-2 text-[#1e0907] hover:bg-[#c8907e]"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    My Account
                  </Link>
                  <button
                    className="block w-full text-left px-4 py-2 text-[#1e0907] hover:bg-[#c8907e]"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link
              to="/login"
              state={{ fromHeader: true }}
              className="text-[#1e0907] hover:text-[#bb6f57] font-medium flex items-center"
            >
              <User className="h-5 w-5 mr-1" /> Login
            </Link>
          )}
        </div>

        <button className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <X className="h-6 w-6 text-[#1e0907]" /> : <Menu className="h-6 w-6 text-[#1e0907]" />}
        </button>

        {isMenuOpen && (
          <div className="md:hidden bg-[#efe2db] py-4 px-4 shadow-md">
            <nav className="flex flex-col space-y-4">
              <Link to="/about" className="text-[#1e0907] hover:text-[#bb6f57] font-medium" onClick={toggleMenu}>
                About
              </Link>
              <Link to="/restaurants" className="text-[#1e0907] hover:text-[#bb6f57] font-medium" onClick={toggleMenu}>
                Restaurants
              </Link>
              <Link to="/posts" className="text-[#1e0907] hover:text-[#bb6f57] font-medium" onClick={toggleMenu}>
                Posts
              </Link>
              <Link to="/contact" className="text-[#1e0907] hover:text-[#bb6f57] font-medium" onClick={toggleMenu}>
                Contact
              </Link>
              {!user && (
                <Link
                  to="/login"
                  state={{ fromHeader: true }}
                  className="text-[#1e0907] hover:text-[#bb6f57] font-medium flex items-center"
                  onClick={toggleMenu}
                >
                  <User className="h-5 w-5 mr-1" /> Login
                </Link>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
