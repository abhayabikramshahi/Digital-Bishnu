import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-gray-200 flex flex-col justify-center items-center px-4 sm:px-6 md:px-8 py-12">
      
      {/* Hero Section */}
      <section className="text-center max-w-3xl w-full">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
          Make Money with <span className="text-red-500">DIGITAL BISHNU</span>
        </h1>
        <p className="mt-4 text-base sm:text-lg text-gray-400">
          The ultimate platform to <span className="text-white font-semibold">Learn</span>,{" "}
          <span className="text-white font-semibold">Promote</span>, and{" "}
          <span className="text-white font-semibold">Earn</span>. 
          Start your affiliate journey and boost your online income today.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/refer"
            className="bg-red-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-600 transition-all shadow-lg text-center"
          >
            Join & Earn
          </Link>
          <Link
            to="/book"
            className="border border-gray-500 text-gray-300 px-6 py-3 rounded-lg font-semibold hover:border-red-500 hover:text-red-400 transition-all text-center"
          >
            Learn More
          </Link>
        </div>
      </section>

      {/* Benefits / Features Section */}
      <section className="mt-16 md:mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl w-full text-center">
        <div className="p-6 bg-gray-900 rounded-lg shadow-md hover:shadow-xl transition">
          <h3 className="text-xl font-bold text-white mb-2">💸 High Commissions</h3>
          <p className="text-gray-400">
            Earn generous commissions by promoting our products with zero hassle.
          </p>
        </div>
        <div className="p-6 bg-gray-900 rounded-lg shadow-md hover:shadow-xl transition">
          <h3 className="text-xl font-bold text-white mb-2">📈 Track Performance</h3>
          <p className="text-gray-400">
            Monitor your clicks, conversions, and earnings in real-time with our dashboard.
          </p>
        </div>
        <div className="p-6 bg-gray-900 rounded-lg shadow-md hover:shadow-xl transition">
          <h3 className="text-xl font-bold text-white mb-2">🌍 Global Audience</h3>
          <p className="text-gray-400">
            Promote to users worldwide and scale your affiliate business faster.
          </p>
        </div>
      </section>

      {/* Testimonials / Social Proof (Optional for Trust) */}
      <section className="mt-16 max-w-4xl w-full text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
          Trusted by Affiliates Worldwide
        </h2>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <div className="bg-gray-800 p-4 rounded-lg shadow-md">
            <p className="text-gray-300">"I doubled my earnings in just 2 months!"</p>
            <p className="mt-2 font-semibold text-red-500">— Ramesh, Nepal</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg shadow-md">
            <p className="text-gray-300">"Best platform for beginners to start affiliate marketing."</p>
            <p className="mt-2 font-semibold text-red-500">— Sita, India</p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
