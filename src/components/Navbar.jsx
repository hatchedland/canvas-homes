import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Function to smoothly scroll to section
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false); // Close menu on mobile after clicking
    }
  };

  return (
    <nav className="bg-[#0c1625] p-4 fixed w-full top-0 left-0 z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center relative">
        {/* Logo */}
        <h1
          className="text-white text-xl font-bold cursor-pointer"
          onClick={() => scrollToSection("Home")}
        >
         Canvas Homes
        </h1>

        {/* Mobile Menu Button */}
        <button
          className="text-white md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✖" : "☰"}
        </button>

        {/* Navigation Links */}
        <ul
          className={`md:flex md:space-x-6 absolute md:static bg-[#0c1625] w-full md:w-auto top-16 left-0 transition-all duration-300 ease-in-out transform ${
            isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
          } md:opacity-100 md:translate-y-0`}
        >
          <li
            className="text-white p-4 md:p-0 hover:underline cursor-pointer"
            onClick={() => scrollToSection("Home")}
          >
            Home
          </li>
          <li
            className="text-white p-4 md:p-0 hover:underline cursor-pointer"
            onClick={() => scrollToSection("Overview")}
          >
            About
          </li>
          
          <li
            className="text-white p-4 md:p-0 hover:underline cursor-pointer"
            onClick={() => scrollToSection("EnquiryForm")}
          >
            Contact Us
          </li>
          <li
            className="text-white p-4 md:p-0 hover:underline cursor-pointer"
            onClick={() => scrollToSection("Clients")}
          >
            Clients
          </li>
        </ul>
      </div>
    </nav>
  );
}
