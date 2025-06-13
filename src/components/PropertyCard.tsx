
import React from 'react';

interface PropertyCardProps {
  type: string;
  location: string;
  rooms: string;
  rent: string;
  measurement?: string;
  bgColor: string;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ 
  type, 
  location, 
  rooms, 
  rent, 
  measurement, 
  bgColor 
}) => {
  return (
    <div className="relative z-10 overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-500 cursor-pointer">
      <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-cyan-500"></div>
      <div className="relative z-10 p-6 text-white">
        <h3 className="font-bold text-lg mb-2">{type}</h3>
        <p className="text-sm mb-1">LOCATION: {location}</p>
        <p className="text-sm mb-1">TOTAL ROOM: {rooms}</p>
        {measurement && <p className="text-sm mb-1">MEASUREMENT: {measurement}</p>}
        <p className="text-sm font-semibold">RENT PER MONTH: {rent}</p>
      </div>
    </div>
  );
};

export default PropertyCard;
