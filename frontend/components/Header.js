import React, { useState, useEffect, useRef } from "react";
import { FaRegHeart, FaRegUser, FaBars } from "react-icons/fa";
import { GrCart } from "react-icons/gr";
import { IoSearchOutline } from "react-icons/io5";
import Link from "next/link";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="w-full bg-white border-b border-gray-300">
      <div className="flex items-center justify-between p-4 md:px-12">
        {/* Logo */}
        <Link href="/" className="text-3xl font-bold">
          MarketBase
        </Link>

        {/* Hamburger Menu Icon for Mobile */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <FaBars size="1.5rem" />
        </button>

        {/* Desktop Navigation */}
        <nav className="items-center hidden space-x-6 md:flex">
          <Link href="/" className="hover:underline">
            Trending Now
          </Link>
          <Link href="/" className="hover:underline">
            Flash Deals
          </Link>
          <Link href="/" className="hover:underline">
            Daily Surprise
          </Link>
          <Link href="/" className="hover:underline">
            Color My World
          </Link>
          <Link href="/" className="hover:underline">
            Snap Shop
          </Link>
        </nav>

        {/* Search and Icons */}
        <div className="items-center hidden space-x-6 md:flex">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="w-full px-3 py-2 pr-10 text-sm border border-gray-300 rounded-lg focus:outline-none"
            />
            <IoSearchOutline className="absolute text-gray-400 transform -translate-y-1/2 right-3 top-1/2" />
          </div>
          {/* {isLoggedIn && ( */}
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
          {/* )} */}

          {/* User Icon and Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button onClick={() => setDropdownOpen(!dropdownOpen)}>
              <FaRegUser size="1.2rem" className="text-gray-700" />
            </button>
            {dropdownOpen && (
              <div className="absolute right-0 w-48 mt-2 bg-white border border-gray-300 rounded-lg shadow-lg">
                {isLoggedIn ? (
                  <>
                    <Link
                      href="/account"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Manage My Account
                    </Link>
                    <Link
                      href="/orders"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      My Orders
                    </Link>
                    <button
                      onClick={() => setIsLoggedIn(false)}
                      className="w-full px-4 py-2 text-left hover:bg-gray-100"
                    >
                      Sign Out
                    </button>
                  </>
                ) : (
                  <>
                    <Link
                      href="/signin"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Sign In
                    </Link>
                    <Link
                      href="/signup"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Sign Up
                    </Link>
                    <Link
                      href="/help"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Help Center
                    </Link>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="bg-white border-t border-gray-300 md:hidden">
          <nav className="flex flex-col items-center py-4 space-y-4">
            <Link
              href="/"
              className="hover:underline"
              onClick={() => setMenuOpen(false)}
            >
              Trending Now
            </Link>
            <Link
              href="/"
              className="hover:underline"
              onClick={() => setMenuOpen(false)}
            >
              Flash Deals
            </Link>
            <Link
              href="/"
              className="hover:underline"
              onClick={() => setMenuOpen(false)}
            >
              Daily Surprise
            </Link>
            <Link
              href="/"
              className="hover:underline"
              onClick={() => setMenuOpen(false)}
            >
              Color My World
            </Link>
            <Link
              href="/"
              className="hover:underline"
              onClick={() => setMenuOpen(false)}
            >
              Snap Shop
            </Link>
          </nav>
          {/* Search and User Options in Mobile Menu */}
          <div className="flex flex-col items-center py-4 space-y-4">
            <div className="relative w-3/4">
              <input
                type="text"
                placeholder="Search"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              />
              <IoSearchOutline className="absolute text-gray-400 transform -translate-y-1/2 right-3 top-1/2" />
            </div>
            <div className="flex items-center space-x-4">
              <FaRegUser size="1.2rem" className="text-gray-700" />
              <FaRegHeart size="1.2rem" className="text-gray-700" />
              <GrCart size="1.2rem" className="text-gray-700" />
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
