import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function Refer() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [referralLink, setReferralLink] = useState("");
  const [copied, setCopied] = useState(false); // <-- declare copied state
  const expiryDate = "31 Dec 2025";

  useEffect(() => {
    if (id) navigate("/");
  }, [id, navigate]);

  const generateLink = () => {
    const randomId = Math.random().toString(36).substring(2, 10).toUpperCase();
    const newLink = `https://digital-bishnu.vercel.app/refer/${randomId}`;
    setReferralLink(newLink);
    setCopied(false); // reset copied state
  };

  const copyLink = () => {
    if (referralLink) {
      navigator.clipboard.writeText(referralLink);
      setCopied(true); // <-- use lowercase true
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleInvite = () => {
    navigate("/book");
  };

  return (
    <main className="min-h-screen bg-[#0a0a0a] flex flex-col justify-center items-center text-gray-200 px-4 sm:px-6 lg:px-8 py-12">
      <section className="text-center w-full max-w-3xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight">
          Refer & <span className="text-red-500">Earn Rewards</span>
        </h1>
        <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-400 px-2 sm:px-0">
          Generate your unique referral link and share it with friends. When they join{" "}
          <span className="text-white font-semibold">DIGITAL BISHNU</span>, you earn rewards instantly.
        </p>

        <div className="mt-10 bg-gray-900 border border-gray-700 rounded-xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition">
          <p className="text-lg font-semibold text-white mb-3">Your Referral Link</p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <input
              type="text"
              value={referralLink}
              readOnly
              placeholder="Click Generate to get your link"
              className="flex-1 bg-black border border-gray-700 rounded-md px-4 py-2 text-red-400 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 text-sm sm:text-base"
            />
            <div className="flex gap-2 mt-2 sm:mt-0">
              <button
                onClick={generateLink}
                className="flex-1 cursor-pointer sm:flex-none bg-red-500 text-white px-4 py-2 rounded-md font-medium hover:bg-red-600 transition-colors text-sm sm:text-base"
              >
                Generate
              </button>
              <button
                onClick={copyLink}
                disabled={!referralLink}
                className="flex-1 sm:flex-none bg-gray-700 text-white px-4 py-2 rounded-md font-medium hover:bg-gray-600 transition-colors disabled:opacity-50 text-sm sm:text-base"
              >
                {copied ? "Copied!" : "Copy"}
              </button>
            </div>
          </div>

          <p className="mt-4 text-sm text-gray-400">
            <span className="font-medium">Expiry Date:</span>{" "}
            <span className="text-white">{expiryDate}</span>
          </p>
          <p className="mt-3 text-xs sm:text-sm text-gray-500">
            Tip: Share your link on social media or directly with friends to maximize your rewards.
          </p>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
          <button
            onClick={handleInvite}
            disabled={!referralLink}
            className="w-full sm:w-auto bg-red-500 text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-red-600 transition-colors disabled:opacity-50 text-sm sm:text-base"
          >
            Invite Friends
          </button>
          <Link
            to="/"
            className="w-full sm:w-auto border border-gray-500 text-gray-300 px-6 py-3 rounded-lg font-semibold hover:border-red-500 hover:text-red-400 transition-colors text-center text-sm sm:text-base"
          >
            Go Home
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Refer;
