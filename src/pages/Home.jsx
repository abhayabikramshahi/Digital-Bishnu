import React from 'react';
import { Link } from 'react-router-dom';
import heroImage from '../assets/hero-image.jpg'; // Replace with your own image

function Home() {
  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      {/* Hero Section */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 py-12 md:py-20 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
              Learn Affiliate Marketing the Right Way
            </h1>
            <p className="text-gray-700 mb-4 sm:mb-6 text-sm sm:text-base md:text-lg">
              Discover strategies, tips, and tools to grow your online business in Nepal. Start earning smarter, not harder!
            </p>
            <Link
              to="/courses"
              className="inline-block bg-red-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium text-sm sm:text-base hover:bg-red-700 transition-colors"
            >
              Explore Courses
            </Link>
          </div>
          <div className="md:w-1/2 mt-6 md:mt-0">
            <img
              src={heroImage}
              alt="Affiliate Marketing"
              className="w-full max-w-sm md:max-w-md mx-auto rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8 sm:mb-12">
            Why AffilHub Nepal?
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-white p-4 sm:p-6 rounded-xl shadow hover:shadow-lg transition transform hover:-translate-y-1 sm:hover:-translate-y-2">
              <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2 text-red-600">Expert Tips</h3>
              <p className="text-gray-700 text-sm sm:text-base">
                Learn from industry experts who’ve made affiliate marketing work in Nepal’s context.
              </p>
            </div>
            <div className="bg-white p-4 sm:p-6 rounded-xl shadow hover:shadow-lg transition transform hover:-translate-y-1 sm:hover:-translate-y-2">
              <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2 text-red-600">Step-by-Step Guides</h3>
              <p className="text-gray-700 text-sm sm:text-base">
                Follow easy-to-understand tutorials and grow your affiliate business from scratch.
              </p>
            </div>
            <div className="bg-white p-4 sm:p-6 rounded-xl shadow hover:shadow-lg transition transform hover:-translate-y-1 sm:hover:-translate-y-2">
              <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2 text-red-600">Tools & Resources</h3>
              <p className="text-gray-700 text-sm sm:text-base">
                Access free tools, templates, and insider resources to boost your campaigns.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-red-600 text-white py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
            Ready to Start Earning?
          </h2>
          <p className="mb-6 sm:mb-8 text-sm sm:text-base md:text-lg">
            Join thousands of learners in Nepal mastering affiliate marketing with AffilHub.
          </p>
          <Link
            to="/refer"
            className="bg-white text-red-600 px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-medium text-sm sm:text-base hover:bg-gray-100 transition-colors"
          >
            Get Started Now
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-6 md:py-10 shadow-inner mt-12 md:mt-20">
        <div className="max-w-7xl mx-auto px-4 text-center text-gray-700 text-xs sm:text-sm">
          &copy; {new Date().getFullYear()} AffilHub Nepal. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default Home;
