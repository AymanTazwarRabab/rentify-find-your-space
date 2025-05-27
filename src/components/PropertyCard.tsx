
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
    <div className={`bg-gradient-to-r from-teal-500 to-cyan-500 p-6 rounded-3xl text-white shadow-2xl hover-lift cursor-pointer transition-all duration-500`}>
      <h3 className="font-bold text-lg mb-2">{type}</h3>
      <p className="text-sm mb-1">LOCATION: {location}</p>
      <p className="text-sm mb-1">TOTAL ROOM: {rooms}</p>
      {measurement && <p className="text-sm mb-1">MEASUREMENT: {measurement}</p>}
      <p className="text-sm font-semibold">RENT PER MONTH: {rent}</p>
    </div>
  );
};

export default PropertyCard;
