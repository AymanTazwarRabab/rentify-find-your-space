
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
    <div className="relative rounded-3xl shadow-xl transform transition-all duration-500 cursor-pointer hover:scale-105 hover:shadow-2xl overflow-hidden">
      <div 
        className="absolute inset-0 bg-gradient-to-r from-teal-500 to-cyan-500"
        style={{ zIndex: 1 }}
      ></div>
      <div 
        className="relative p-6 text-white"
        style={{ zIndex: 2 }}
      >
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
