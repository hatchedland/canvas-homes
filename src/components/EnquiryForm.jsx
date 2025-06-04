import React, { useState } from "react";

const EnquiryForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Firebase Realtime Database REST API URL (Replace with your actual database URL)
    const databaseURL =
      "https://irealty-d5dc3-default-rtdb.firebaseio.com/enquiries.json";

    try {
      const response = await fetch(databaseURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Enquiry submitted successfully!");
        setFormData({ name: "", phone: "", email: "", city: "", message: "" });
      } else {
        alert("Failed to submit enquiry. Try again.");
      }
    } catch (error) {
      console.error("Error submitting enquiry:", error);
      alert("Failed to submit enquiry. Try again.");
    }
  };

  return (
    <div id="EnquiryForm" className="flex items-center justify-center min-h-screen bg-[#1f2a44]">
      <div className="bg-white w-full max-w-4xl p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold text-center text-gray-900">Make Enquiry</h2>
        <p className="text-center text-gray-600 text-sm">to buy your dream property</p>

        <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              className="w-full p-3 border rounded-md bg-gray-200 text-gray-900 focus:outline-none"
              required
            />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone: +91"
              className="w-full p-3 border rounded-md bg-gray-200 text-gray-900 focus:outline-none"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full p-3 border rounded-md bg-gray-200 text-gray-900 focus:outline-none"
              required
            />
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="City"
              className="w-full p-3 border rounded-md bg-gray-200 text-gray-900 focus:outline-none"
              required
            />
          </div>

          <div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              rows="4"
              className="w-full p-3 border rounded-md bg-gray-200 text-gray-900 focus:outline-none"
              required
            />
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-[#1f2a44] text-white py-2 px-6 rounded-md hover:bg-gray-800 transition duration-300"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EnquiryForm;
