import React from "react";
import emailjs from "emailjs-com";

const Contactus = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_oxu06kf", // Replace with your EmailJS service ID
        "template_gal2myl", // Replace with your EmailJS template ID
        e.target, // The form itself
        "uDtbrKow3bq08WTkS" // Replace with your EmailJS user ID
      )
      .then(
        (result) => {
          console.log(result.text);
          // alert("Message sent successfully!");
          window.location.reload();
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <div
      id="contact"
      className="py-12 px-6"
      style={{
        background: "black",
      }}
    >
      <div className="mx-auto grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Left Side: Contact Form */}
        <div className="md:col-span-7 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-4xl font-bold text-black mb-6">Get in Touch</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label className="block text-gray-700 mb-2" htmlFor="from_name">
                Your Name
              </label>
              <input
                className="w-full px-4 py-3 bg-gray-100 text-black rounded-lg focus:outline-none focus:ring-4 focus:ring-black transition duration-300"
                placeholder="Enter your name"
                type="text"
                name="from_name"
                id="from_name"
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 mb-2" htmlFor="message">
                Your Message
              </label>
              <textarea
                className="w-full px-4 py-3 bg-gray-100 text-black rounded-lg focus:outline-none focus:ring-4 focus:ring-black transition duration-300"
                rows={4}
                placeholder="Enter your message"
                name="message"
                id="message"
                required
              />
            </div>
            <button
              className="w-full bg-black text-white py-3 px-6 rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-black transition duration-300"
              type="submit"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Right Side: Hotel Details */}
        <div className="md:col-span-5 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Hotel Details
          </h2>
          <ul className="space-y-4 text-gray-700 text-base md:text-lg">
            <li className="flex items-center gap-2 text-base md:text-xl">
              <span className="font-bold text-black">Hotel Name:</span> The
              Grand Horizon
            </li>
            <li className="flex items-center gap-2 text-base md:text-xl">
              <span className="font-bold text-black">Phone:</span> +1 (800)
              123-4567
            </li>
            <li className="flex items-center gap-2 text-base md:text-xl">
              <span className="font-bold text-black">Email:</span>{" "}
              contact@grandhorizon.com
            </li>
            <li className="flex items-center gap-2 text-base md:text-xl">
              <span className="font-bold text-black">Address:</span> 456 Horizon
              Lane, Cityview, State, Country
            </li>
            <li className="flex items-center gap-2 text-base md:text-xl">
              <span className="font-bold text-black">Business Hours:</span> Open
              24/7
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
