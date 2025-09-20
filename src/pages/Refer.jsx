import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Refer() {
  const navigate = useNavigate();

  const [referralLink, setReferralLink] = useState("");
  const expiryDate = "31 Dec 2025";

  // Generate referral link
  const generateLink = () => {
    const randomId = Math.random().toString(36).substring(2, 10).toUpperCase();
    const newLink = `https://digital-bishnu.vercel.app/refer/${randomId}`;
    setReferralLink(newLink);
  };

  // Copy referral link
  const copyLink = () => {
    if (referralLink) {
      navigator.clipboard.writeText(referralLink);
      alert("Referral link copied!");
    }
  };

  const handleInvite = () => {
    navigate("/book");
  };

  return (
    <main className="min-h-screen bg-[#000000] flex flex-col justify-center items-center text-gray-200 px-6">
      <section className="text-center max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-bold text-white">
          Refer & <span className="text-red-500">Earn Rewards</span>
        </h1>
        <p className="mt-4 text-gray-400">
          Generate your unique referral link and share it with friends.  
          When they join <span className="text-white">DIGITAL BISHNU</span>, you earn rewards.
        </p>

        {/* Referral Link Box */}
        <div className="mt-8 bg-gray-900 border border-gray-700 rounded-lg p-6 shadow-md">
          <p className="text-lg font-semibold text-white">Your Referral Link</p>

          <div className="flex items-center gap-2 mt-3">
            <input
              type="text"
              value={referralLink}
              readOnly
              placeholder="Click Generate to get your link"
              className="flex-1 bg-black border border-gray-700 rounded-md px-4 py-2 text-red-400 placeholder-gray-500 focus:outline-none"
            />
            <button
              onClick={generateLink}
              className="bg-red-500 text-white px-4 py-2 rounded-md font-medium hover:bg-red-600 transition-colors"
            >
              Generate
            </button>
            <button
              onClick={copyLink}
              disabled={!referralLink}
              className="bg-gray-700 text-white px-4 py-2 rounded-md font-medium hover:bg-gray-600 transition-colors disabled:opacity-50"
            >
              Copy
            </button>
          </div>

          {/* Expiry Date */}
          <p className="mt-4 text-gray-400 text-sm">
            Expiry Date: <span className="text-white">{expiryDate}</span>
          </p>
        </div>

        {/* CTA */}
        <div className="mt-8 flex gap-4 justify-center">
          <button
            onClick={handleInvite}
            disabled={!referralLink}
            className="bg-red-500 text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-red-600 transition-colors disabled:opacity-50"
          >
            Invite Friends
          </button>
          <Link
            to="/"
            className="border border-gray-500 text-gray-300 px-6 py-3 rounded-lg font-semibold hover:border-red-500 hover:text-red-400 transition-colors"
          >
            Go Home
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Refer;
