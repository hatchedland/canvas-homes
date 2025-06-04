import React from "react";

// Import client logos (Replace these paths with actual images in your project)
import assetz from "../assets/clients/assets.jpeg";
import brigade from "../assets/clients/brigade.png";
import godrej from "../assets/clients/godrej.jpg";
import lnt from "../assets/clients/lnt.jpg";
import nambiarlogo from "../assets/clients/nambiarlogo.webp";
import prestige from "../assets/clients/prestige.jpg";
import tata from "../assets/clients/tata.jpg";
import provident from "../assets/clients/provident.png";
import lodha from "../assets/clients/lodha.png";

// Array of client logos
const clients = [
  { id: 1, img: assetz, alt: "Assetz" },
  { id: 2, img: brigade, alt: "Brigade" },
  { id: 3, img: godrej, alt: "Godrej Properties" },
  { id: 4, img: lnt, alt: "L&T Realty" },
  { id: 5, img: nambiarlogo, alt: "Nambiar Builders" },
  { id: 6, img: prestige, alt: "Prestige Group" },
  { id: 7, img: tata, alt: "Tata Housing" },
  { id: 8, img: provident, alt: "Provident" },
  { id: 9, img: lodha, alt: "Lodha" },
];

const ClientsSection = () => {
  return (
    <div id="Clients" className="py-20 bg-white flex flex-col items-center">
      {/* Section Title */}
      <h2 className="text-4xl font-bold text-center text-gray-900 mb-10">
        Our Clients
      </h2>

      {/* Clients Grid Container */}
      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 justify-items-center">
        {clients.map((client) => (
          <div
            key={client.id}
            className="flex items-center justify-center w-64 h-40 bg-white rounded-lg shadow-lg"
          >
            <img src={client.img} alt={client.alt} className="object-contain max-h-full max-w-full" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientsSection;
