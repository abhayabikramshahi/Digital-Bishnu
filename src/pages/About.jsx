import React from 'react';
import aboutImage from '../assets/hero-image.jpg'; // Add your own image

function About() {
  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      {/* Header */}
      <section className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-16 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About AffilHub Nepal
          </h1>
          <p className="text-gray-700 mb-6 text-sm sm:text-base md:text-lg">
            Empowering Nepali learners to master affiliate marketing, grow online businesses, and earn smarter.
          </p>
        </div>
      </section>

      {/* Our Mission & Vision */}
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-700 mb-6 text-sm sm:text-base md:text-lg">
              To provide high-quality affiliate marketing education and resources for learners across Nepal, helping them start and grow profitable online businesses.
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Our Vision</h2>
            <p className="text-gray-700 text-sm sm:text-base md:text-lg">
              To become the leading knowledge hub for affiliate marketing in Nepal, inspiring financial freedom and entrepreneurship through online skills.
            </p>
          </div>
          <div className="md:w-1/2 mt-6 md:mt-0">
            <img
              src={aboutImage}
              alt="About AffilHub Nepal"
              className="w-full max-w-md mx-auto rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Why Choose AffilHub Nepal?
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition transform hover:-translate-y-1 sm:hover:-translate-y-2 text-center">
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-red-600">Expert Guidance</h3>
              <p className="text-gray-700 text-sm sm:text-base">
                Learn from experienced Nepali affiliate marketers with proven results.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition transform hover:-translate-y-1 sm:hover:-translate-y-2 text-center">
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-red-600">Step-by-Step Learning</h3>
              <p className="text-gray-700 text-sm sm:text-base">
                Easy-to-follow tutorials designed to take you from beginner to pro.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition transform hover:-translate-y-1 sm:hover:-translate-y-2 text-center">
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-red-600">Tools & Resources</h3>
              <p className="text-gray-700 text-sm sm:text-base">
                Access templates, checklists, and insider resources to boost your campaigns.
              </p>
            </div>
          </div>
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

export default About;
