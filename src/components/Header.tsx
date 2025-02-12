"use client";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header
      className={` shadow-md sticky top-0 z-50 transition-colors duration-300`}
    >
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <span className={` text-white rounded-full p-2`}>
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
            <h1 className={`text-2xl font-extrabold tracking-tight `}>
              Huxaifa Writes
            </h1>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <Link href="/">
            <span className={`text-lg font-medium  transition duration-300`}>
              Home
            </span>
          </Link>
          <Link href="/About">
            <span className={`text-lg font-medium  transition duration-300`}>
              About
            </span>
          </Link>
          <Link href="/Blog">
            <span className={`text-lg font-medium  transition duration-300`}>
              Blog
            </span>
          </Link>
        </nav>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-gray-700 dark:text-gray-300 focus:outline-none"
          aria-label="Toggle Mobile Menu"
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
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className={`md:hidden  bg-white py-6 shadow-lg transition-all`}>
          <nav className="flex flex-col items-center space-y-4">
            <Link href="/">
              <span className={`text-lg font-medium  transition duration-300`}>
                Home
              </span>
            </Link>
            <Link href="/About">
              <span className={`text-lg font-medium  transition duration-300`}>
                About
              </span>
            </Link>
            <Link href="/Blog">
              <span className={`text-lg font-medium  transition duration-300`}>
                Blog
              </span>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
