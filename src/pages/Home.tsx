
import React from 'react';
import PropertyCard from '../components/PropertyCard';

const Home = () => {
  const properties = [
    {
      type: "FAMILY HOUSE",
      location: "MIRPUR - 12",
      rooms: "02",
      rent: "12000 BDT",
      bgColor: "bg-yellow-600"
    },
    {
      type: "BACHELOR HOUSE",
      location: "MIRPUR PALLABI",
      rooms: "03",
      rent: "12000 BDT",
      bgColor: "bg-yellow-600"
    },
    {
      type: "COMMERCIAL SPACE",
      location: "MIRPUR - 12",
      rooms: "",
      rent: "50000 BDT",
      measurement: "3000 SQ FT",
      bgColor: "bg-yellow-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Welcome to RENTIFY!
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Rent Smart | Live Safe
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-yellow-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-yellow-600 transition-colors">
              RENT YOU HOUSE
            </button>
            <button className="bg-yellow-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-yellow-600 transition-colors">
              FIND YOUR PLACE
            </button>
          </div>
        </div>
      </div>

      {/* Recently Added Section */}
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-yellow-500 text-white p-4 rounded-t-lg">
            <h2 className="text-xl font-bold">Recently Added:</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            {properties.map((property, index) => (
              <PropertyCard
                key={index}
                type={property.type}
                location={property.location}
                rooms={property.rooms}
                rent={property.rent}
                measurement={property.measurement}
                bgColor={property.bgColor}
              />
            ))}
          </div>
          
          {/* Pagination dots */}
          <div className="flex justify-center space-x-2 mt-8">
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
            <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
