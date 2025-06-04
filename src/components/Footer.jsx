import React from "react";

const Footer = () => {
  return (
    <footer className="w-full">
      {/* Upper dark section */}
      <div className="w-full h-12 bg-[#1f2a44]"></div>

      {/* Lower light gray section */}
      <div className="w-full h-12 bg-gray-400 flex justify-end items-center px-8">
        <a
          href="/terms-of-use"
          className="text-gray-800 text-sm hover:underline mr-6"
        >
          Terms of Use
        </a>
        <a
          href="/privacy-policy"
          className="text-gray-800 text-sm hover:underline"
        >
          Privacy Policy
        </a>
      </div>
    </footer>
  );
};

export default Footer;
