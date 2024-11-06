import React, { useState, useEffect, useRef } from "react";
import { FaRegHeart, FaRegUser } from "react-icons/fa";
import { GrCart } from "react-icons/gr";
import { IoSearchOutline } from "react-icons/io5";
import Link from "next/link";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <section>
      <div className="flex flex-col items-center justify-between w-full mb-8 border-b border-gray-300 md:flex-row md:space-x-6 md:px-12">
        {/* Logo Section */}
        <div className="flex items-center justify-between w-full md:w-auto">
          <h2 className="text-3xl font-bold">MarketBase</h2>
        </div>

        {/* Navigation Links */}
        <div className="w-full md:w-auto">
          <div className="flex flex-col items-center justify-between w-full p-3 md:flex-row">
            <Link href="/" className="px-6 py-3 hover:underline">
              Home
            </Link>
            <Link href="/contact" className="px-6 py-3 hover:underline">
              Contact
            </Link>
            <Link href="/about" className="px-6 py-3 hover:underline">
              About
            </Link>
          </div>
        </div>

        {/* Search Bar & Icons */}
        <div className="flex items-center justify-between w-full space-x-3 md:space-x-6 md:w-auto md:justify-end">
          <div className="relative w-full md:w-auto">
            <input
              type="text"
              placeholder="Search"
              className="w-full px-3 py-2 pr-10 text-sm border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            />
            <IoSearchOutline className="absolute text-gray-400 transform -translate-y-1/2 right-3 top-1/2" />
          </div>

          {/* User Icon with Dropdown */}
          <div className="relative flex" ref={dropdownRef}>
            <button onClick={toggleDropdown} className="focus:outline-none">
              <FaRegUser
                size="1.2rem"
                className="text-gray-700 hover:text-blue-500"
              />
            </button>
            {dropdownOpen && (
              <div className="absolute right-0 z-10 w-48 mt-8 bg-white border border-gray-300 rounded-lg shadow-lg">
                {isLoggedIn ? (
                  <>
                    <Link
                      href="/account"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Manage My Account
                    </Link>
                    <Link
                      href="/orders"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      My Orders
                    </Link>
                    <Link
                      href="/orders"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      My Cancellations
                    </Link>
                    <Link
                      href="/orders"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      My Reviews
                    </Link>
                    <button
                      onClick={() => setIsLoggedIn(false)}
                      className="block w-full px-4 py-2 text-sm text-left text-gray-700 hover:bg-gray-100"
                    >
                      Sign Out
                    </button>
                  </>
                ) : (
                  <>
                    <Link
                      href="/signin"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Sign In
                    </Link>
                    <Link
                      href="/signup"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Sign Up
                    </Link>
                    <Link
                      href="/help"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Help Center
                    </Link>
                  </>
                )}
              </div>
            )}
          </div>

          {/* Favorite and Cart Icons */}
          {router.pathname !== "/signin" &&
            router.pathname !== "/signup" &&
            isLoggedIn && (
              <>
                <FaRegHeart
                  size="1.2rem"
                  className="text-gray-700 hover:text-blue-500"
                />
                <GrCart
                  size="1.2rem"
                  className="text-gray-700 hover:text-blue-500"
                />
              </>
            )}
        </div>
      </div>
    </section>
  );
};

export default Header;
