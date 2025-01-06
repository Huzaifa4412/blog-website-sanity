import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white py-8">
      <div className="max-w-screen-xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div className="mb-4 sm:mb-0">
            <h4 className="text-2xl font-semibold">Huzaifa</h4>
            <p className="text-lg">Web Developer from Pakistan</p>
          </div>

          {/* Middle section: Message */}
          <div className="text-center sm:text-left">
            <p className="text-lg mb-2">
              Crafted with ❤️ and passion for the web
            </p>
            <p className="text-sm">Thank you for visiting my blog!</p>
          </div>

          <div className="mt-4 sm:mt-0 flex space-x-4">
            <a
              href="https://twitter.com"
              className="text-white hover:text-gray-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
            <a
              href="https://github.com/Huzaifa4412"
              className="text-white hover:text-gray-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/huzaifa-mukhtar-8ba0492b5/"
              className="text-white hover:text-gray-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
        <div className="mt-6 text-center text-sm">
          <p>© {new Date().getFullYear()} Huzaifa | All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
