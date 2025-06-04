export const Overview = ({ contactmodal, setContactModal }) => {
    return (
      <div className="bg-white py-20 mt-10 mb-10"> {/* Added mt-24 for top space */}
        <section
          className="w-full flex flex-col items-center mx-auto max-w-7xl px-10"
          id="Overview"
        >
          {/* Title */}
          <div className="w-full text-center mb-19">
            <h2 className="font-subheading font-bold text-4xl md:text-5xl text-black">
              Why Choose Canvas Homes?
            </h2>
          </div>
  
          {/* Feature Cards */}
          <div className="flex flex-wrap justify-center gap-8 w-full">
            {/* Card 1 */}
            <div className="w-full max-w-sm bg-white rounded-lg shadow-lg p-8 text-center">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">01</h2>
              <p className="text-lg text-gray-700">
                We provide complete solutions to Property Buyers to buy their
                Apartments, Villas, Independent Homes, Plots, and Commercial
                Properties.
              </p>
            </div>
  
            {/* Card 2 */}
            <div className="w-full max-w-sm bg-white rounded-lg shadow-lg p-8 text-center">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">02</h2>
              <p className="text-lg text-gray-700">
                Our core business is exclusive prelaunch Residential Properties of
                Developers at Attractive Prices.
              </p>
            </div>
  
            {/* Card 3 */}
            <div className="w-full max-w-sm bg-white rounded-lg shadow-lg p-8 text-center">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">03</h2>
              <p className="text-lg text-gray-700">
                Most trusted real estate service provider. Buy/sell with us with
                100% trust and transparency.
              </p>
            </div>
          </div>
        </section>
      </div>
    );
  };
  
