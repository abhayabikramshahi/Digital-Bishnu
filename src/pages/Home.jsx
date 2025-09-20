import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <main className="min-h-screen bg-[#000000] text-gray-200 flex flex-col justify-center items-center px-4 sm:px-6 md:px-8 py-12">
      
      {/* Hero Section */}
      <section className="text-center max-w-3xl w-full">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
          Welcome to <span className="text-red-500">DIGITAL BISHNU</span>
        </h1>
        <p className="mt-4 text-base sm:text-lg text-gray-400">
          A modern platform to <span className="text-white">Learn</span>,{" "}
          <span className="text-white">Build</span>, and{" "}
          <span className="text-white">Grow</span>.  
          Join us and start your digital journey today.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/refer"
            className="bg-red-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-600 transition-colors shadow-md text-center"
          >
            Get Started
          </Link>
          <Link
            to="/book"
            className="border border-gray-500 text-gray-300 px-6 py-3 rounded-lg font-semibold hover:border-red-500 hover:text-red-400 transition-colors text-center"
          >
            Book
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="mt-16 md:mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl w-full text-center">
        <div className="p-6 bg-gray-900 rounded-lg shadow-md hover:shadow-lg transition">
          <h3 className="text-xl font-bold text-white mb-2">🚀 Fast</h3>
          <p className="text-gray-400">
            Experience lightning-fast performance and optimized design.
          </p>
        </div>
        <div className="p-6 bg-gray-900 rounded-lg shadow-md hover:shadow-lg transition">
          <h3 className="text-xl font-bold text-white mb-2">🎯 Reliable</h3>
          <p className="text-gray-400">
            Built with modern technologies to ensure reliability and security.
          </p>
        </div>
        <div className="p-6 bg-gray-900 rounded-lg shadow-md hover:shadow-lg transition">
          <h3 className="text-xl font-bold text-white mb-2">🌐 Connected</h3>
          <p className="text-gray-400">
            Join a growing digital community and expand your reach.
          </p>
        </div>
      </section>
    </main>
  );
}

export default Home;
