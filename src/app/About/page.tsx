import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div className="bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white py-12 sm:py-16 lg:py-24">
      <div className="max-w-screen-xl mx-auto px-6 sm:px-8">
        {/* Title Section */}
        <div className="text-center mb-10 sm:mb-16">
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-purple-500 tracking-tight mb-4">
            About Me
          </h1>
          <p className="text-lg sm:text-xl opacity-75">
            Discover my story, passions, and journey as a developer.
          </p>
        </div>

        {/* Content Section */}
        <div className="flex flex-col lg:flex-row gap-8 items-center justify-center bg-gray-800 p-8 sm:p-12 rounded-3xl shadow-2xl transform transition-all duration-300 hover:scale-105 overflow-hidden">
          {/* Left Section: Your Image */}
          <div className="sm:w-1/3 mb-8 sm:mb-0 rounded-full overflow-hidden">
            <Image
              src={"/images/me.png"}
              className="w-full h-auto rounded-md"
              alt="Huzaifa"
              width={300}
              height={300}
            />
          </div>

          {/* Right Section: About You */}
          <div className="sm:w-2/3 text-gray-200">
            <p className="text-xl sm:text-2xl mb-6 font-semibold text-gray-200">
              Hey there! I'm <span className="text-teal-400">Huzaifa</span>, a
              passionate web developer from Pakistan. Currently studying at
              GIAIC (Global Institute of Artificial Intelligence and Computing),
              I focus on expanding my knowledge of cutting-edge web
              technologies.
            </p>

            <p className="text-lg sm:text-xl mb-6 text-gray-300 leading-relaxed">
              Born and raised in Pakistan, my fascination with technology
              started at a young age. What began as curiosity quickly
              transformed into a deep passion for coding. I’ve always been
              captivated by the idea of creating something from nothing with
              just lines of code. This passion led me to explore web
              development, and now, it’s what I do every day.
            </p>

            <p className="text-lg sm:text-xl mb-6 text-gray-300 leading-relaxed">
              When I’m not coding, I’m either playing or watching cricket — my
              second love. Cricket gives me the perfect balance of relaxation
              and excitement, and it serves as a great way to take a break from
              the screen and connect with friends.
            </p>

            <p className="text-lg sm:text-xl mb-6 text-gray-300 leading-relaxed">
              My journey as a developer is driven by a constant desire to learn,
              improve, and create meaningful projects. I believe in the power of
              technology to solve real-world problems, and I strive to make a
              positive impact through my work.
            </p>

            <p className="text-lg sm:text-xl font-semibold text-gray-200 mt-8">
              "Code is like art: it’s all about the details." – *Unknown*
            </p>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="mt-12 text-center">
          <a
            href="mailto:mukhtarhuzaifa436@gmail.com"
            className="inline-block px-8 py-3 bg-teal-500 text-white text-lg rounded-lg shadow-lg hover:bg-teal-600 transform transition duration-300 hover:scale-105"
          >
            Let’s Connect
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
