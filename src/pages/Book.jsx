import React, { useState } from "react";

const countryCodes = [
  { code: "+977", country: "Nepal" },
  { code: "+91", country: "India" },
  // add more as needed
];

function Book() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    countryCode: "+977",
    phone: "",
    message: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
    setSuccess("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { fullName, email, phone, message, countryCode } = formData;

    if (!fullName || !email || !phone || !message) {
      setError("All fields are required!");
      return;
    }

    // Simple email check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address!");
      return;
    }

    // Phone number check
    const phoneRegex = /^[0-9]{7,15}$/;
    if (!phoneRegex.test(phone)) {
      setError("Please enter a valid phone number!");
      return;
    }

    // Fake/real detection (simple heuristic: not starting with 0, correct length)
    if (phone.startsWith("0") || phone.length < 7 || phone.length > 15) {
      setError("Invalid phone number detected.");
      return;
    }

    // No server connected
    setError("Unable to submit: NodeJs not connected.");
  };

  return (
    <div className="min-h-screen bg-[#000000] flex items-center justify-center px-6 py-12">
      <div className="max-w-6xl w-full bg-gray-900 rounded-2xl shadow-xl grid md:grid-cols-2 gap-8 p-8">
        {/* DESCRIPTION (LHS) */}
        <div className="flex flex-col justify-center space-y-4">
          <h3 className="text-2xl font-bold text-white">Why Book With Us?</h3>
          <p className="text-gray-300 leading-relaxed">
            Booking with us ensures a seamless and hassle-free experience.  
            Fill in the form, and our team will guide you with next steps.
          </p>
          <ul className="list-disc list-inside text-gray-400 space-y-1">
            <li>Easy online booking process</li>
            <li>Instant confirmation</li>
            <li>Flexible dates & rescheduling</li>
            <li>Friendly customer support</li>
          </ul>
        </div>

        {/* FORM (RHS) */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-white">Book Your Slot</h2>
          <form className="space-y-4" autoComplete="off" onSubmit={handleSubmit}>
            {/* Full Name */}
            <div>
              <label className="block text-gray-300 text-sm mb-1">Full Name</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter your full name"
                autoComplete="off"
                className="w-full px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded-lg focus:ring-2 focus:ring-red-500 outline-none"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-300 text-sm mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                autoComplete="off"
                className="w-full px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded-lg focus:ring-2 focus:ring-red-500 outline-none"
              />
            </div>

            {/* Phone with Country Code */}
            <div>
              <label className="block text-gray-300 text-sm mb-1">Phone Number</label>
              <div className="flex gap-2">
                <select
                  name="countryCode"
                  value={formData.countryCode}
                  onChange={handleChange}
                  className="bg-gray-800 text-white border border-gray-700 rounded-lg px-3 py-2 focus:ring-2 focus:ring-red-500 outline-none"
                >
                  {countryCodes.map((c) => (
                    <option key={c.code} value={c.code}>
                      {c.country} ({c.code})
                    </option>
                  ))}
                </select>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter phone number"
                  autoComplete="off"
                  className="flex-1 px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded-lg focus:ring-2 focus:ring-red-500 outline-none"
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-gray-300 text-sm mb-1">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Enter your message"
                rows={4}
                autoComplete="off"
                className="w-full px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded-lg focus:ring-2 focus:ring-red-500 outline-none resize-none"
              />
            </div>

            {/* Error / Success */}
            {error && <p className="text-red-500 text-sm">{error}</p>}
            {success && <p className="text-green-500 text-sm">{success}</p>}

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg font-medium transition duration-200"
            >
              Confirm Booking
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Book;
