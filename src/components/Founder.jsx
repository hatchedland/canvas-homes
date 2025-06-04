import React from "react";
import founderImage from "../assets/Rahul.jpeg"; // Replace with actual image path

const FounderSection = () => {
  return (
    <div className="bg-[#1f2a44] text-white py-32 px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-center">
        
        {/* Founder Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={founderImage}
            alt="Founder"
            className="w-96 h-96 object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Founder Info */}
        <div className="w-full md:w-1/2 md:pl-20 flex flex-col justify-center">
          <h2 className="text-5xl font-bold text-center md:text-left mb-10">
            Our Founder
          </h2>
          <h3 className="text-3xl font-semibold text-center md:text-left mb-6">
            Rahul Khandelwal
          </h3>
          <p className="text-xl text-gray-300 leading-relaxed text-center md:text-left">
            Entrepreneur with a passion for driving innovative solutions and 
            creating value in competitive markets. With a strong foundation in 
            sales, excelling in identifying opportunities, building meaningful 
            relationships, and delivering results that align with business goals.
          </p>
        </div>
        
      </div>
    </div>
  );
};

export default FounderSection;
