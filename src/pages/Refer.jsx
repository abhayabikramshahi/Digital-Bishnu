import React, { useState } from 'react';

function Refer() {
  const [referralCode, setReferralCode] = useState('AFFILHUB123'); // Example code
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(referralCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset after 2s
  };

  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      {/* Header */}
      <section className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-16 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Invite Friends & Earn Rewards
          </h1>
          <p className="text-gray-700 mb-6 text-sm sm:text-base md:text-lg">
            Share your referral code and help others start learning affiliate marketing. Earn exciting rewards when they join!
          </p>
        </div>
      </section>

      {/* Referral Code Section */}
      <section className="py-12">
        <div className="max-w-md mx-auto bg-white p-6 rounded-xl shadow text-center">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Your Referral Code
          </h2>
          <div className="flex items-center justify-center space-x-4 mb-4">
            <span className="text-red-600 font-bold text-lg md:text-xl">{referralCode}</span>
            <button
              onClick={copyToClipboard}
              className="bg-red-600 text-white px-3 py-1 rounded-lg text-sm hover:bg-red-700 transition-colors"
            >
              {copied ? 'Copied!' : 'Copy'}
            </button>
          </div>
          <p className="text-gray-600 text-sm">
            Share this code with friends or on social media to invite others.
          </p>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            How It Works
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition transform hover:-translate-y-1 sm:hover:-translate-y-2">
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-red-600">Share Your Code</h3>
              <p className="text-gray-700 text-sm sm:text-base">
                Copy your referral code and share it with friends, family, or on social media.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition transform hover:-translate-y-1 sm:hover:-translate-y-2">
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-red-600">They Sign Up</h3>
              <p className="text-gray-700 text-sm sm:text-base">
                Your friends use your referral code when signing up for courses at AffilHub Nepal.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition transform hover:-translate-y-1 sm:hover:-translate-y-2">
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-red-600">Earn Rewards</h3>
              <p className="text-gray-700 text-sm sm:text-base">
                Every successful referral earns you points, discounts, or exclusive perks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-red-600 text-white py-12 md:py-20 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
          Start Referring Now!
        </h2>
        <p className="mb-6 text-sm sm:text-base md:text-lg">
          Invite as many friends as you want and maximize your rewards.
        </p>
        <button
          onClick={copyToClipboard}
          className="bg-white text-red-600 px-6 py-2 sm:px-8 sm:py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
        >
          Copy Referral Code
        </button>
      </section>

    </div>
  );
}

export default Refer;
