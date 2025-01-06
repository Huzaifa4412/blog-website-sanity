"use client";
import { useState } from "react";
import Link from "next/link";
import { MdOutlineWbSunny } from "react-icons/md";
import { BsMoonStarsFill } from "react-icons/bs";

export default function Header() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <header
      className={`${
        darkMode ? "bg-gray-900" : "bg-white"
      } shadow-md sticky top-0 z-50 transition-colors duration-300`}
    >
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <div className="flex items-center space-x-2">
          <span
            className={`${
              darkMode
                ? "bg-gradient-to-r from-yellow-400 to-orange-500"
                : "bg-gradient-to-r from-blue-500 to-indigo-500"
            } text-white rounded-full p-2`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 20.25V3.75M5.25 12H18.75"
              />
            </svg>
          </span>
          <Link href="/">
            <h1
              className={`text-2xl font-extrabold tracking-tight ${
                darkMode ? "text-white" : "text-gray-800"
              }`}
            >
              Huxaifa Writes
            </h1>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-6">
          <Link href="/">
            <span
              className={`text-lg font-medium ${
                darkMode
                  ? "text-gray-300 hover:text-yellow-400"
                  : "text-gray-700 hover:text-blue-500"
              } transition duration-300`}
            >
              Home
            </span>
          </Link>
          <Link href="/About">
            <span
              className={`text-lg font-medium ${
                darkMode
                  ? "text-gray-300 hover:text-yellow-400"
                  : "text-gray-700 hover:text-blue-500"
              } transition duration-300`}
            >
              About
            </span>
          </Link>
          <Link href="/">
            <span
              className={`text-lg font-medium ${
                darkMode
                  ? "text-gray-300 hover:text-yellow-400"
                  : "text-gray-700 hover:text-blue-500"
              } transition duration-300`}
            >
              Blog
            </span>
          </Link>
        </nav>

        {/* Light/Dark Theme Toggle */}
        <button
          className="hidden md:flex items-center bg-gray-200 dark:bg-gray-700 p-2 rounded-full shadow-md hover:scale-105 transition-transform duration-300"
          onClick={toggleDarkMode}
        >
          {darkMode ? (
            <MdOutlineWbSunny className="h-6 w-6 text-yellow-400" />
          ) : (
            <BsMoonStarsFill className="h-6 w-6 text-blue-500" />
          )}
        </button>

        {/* Mobile Menu Icon */}
        <button className="md:hidden text-gray-700 dark:text-gray-300 focus:outline-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </header>
  );
}
