import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, just show a success message. Later, you can integrate API.
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      {/* Header */}
      <section className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-16 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Contact Us
          </h1>
          <p className="text-gray-700 mb-6 text-sm sm:text-base md:text-lg">
            Have questions or suggestions? Reach out to us and we’ll get back to you as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-12 md:py-20">
        <div className="max-w-md mx-auto bg-white p-6 rounded-xl shadow">
          {submitted && (
            <div className="bg-green-100 text-green-800 p-3 rounded mb-4 text-center font-medium">
              Your message has been sent successfully!
            </div>
          )}
          <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
            <div>
              <label className="block text-gray-700 font-medium mb-1" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-600"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-600"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1" htmlFor="message">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-600 resize-none"
              />
            </div>

            <button
              type="submit"
              className="bg-red-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-red-700 transition-colors"
            >
              Send Message
            </button>
          </form>
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

export default Contact;
