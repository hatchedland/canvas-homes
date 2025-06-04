import React from "react";
import herobanner from "../assets/HOME3.jpg";

// eslint-disable-next-line react/prop-types
export const Home = ({ contactmodal, setContactModal }) => {
  // Background style
  const containerStyle = {
    backgroundImage: `url(${herobanner})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  // Darker overlay for better text visibility
  const opacBackground = {
    backgroundColor: "rgba(0, 0, 5, 0.6)", // Increased opacity for better contrast
  };

  return (
    <div
      id="Home"
      className="w-full h-[30rem] min-h-[40vh] md:min-h-[88vh]"
      style={containerStyle}
    >
      {/* Dark Overlay */}
      <div
        className="relative flex flex-col gap-6 justify-center items-center h-[30rem] min-h-[60vh] md:min-h-[90vh] w-full"
        style={opacBackground}
      >
        {/* Content Section */}
        <div className="px-10 lg:px-20 flex flex-col justify-center items-center w-full text-white lg:items-start relative">
          <div className="w-full max-w-10xl justify-center items-center lg:items-start text-center lg:text-left">
            {/* Main Title & Subtitle */}
            <div className="w-full md:w-2/3 flex flex-col justify-start max-w-6xl gap-6">
              <p className="font-body text-white md:text-6xl text-2xl font-bold lg:w-5/6 mx-auto lg:mx-0 drop-shadow-lg">
                Buy
              </p>
              <h1 className="font-heading text-4xl md:text-7xl font-bold my-2 drop-shadow-lg">
                Exclusive Prelaunch Properties
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
