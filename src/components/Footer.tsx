
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <div className="w-8 h-8 bg-yellow-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">R</span>
            </div>
            <span className="text-lg font-bold">RENTIFY</span>
          </div>
          
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <span className="text-sm">© All Rights Reserved - 2025</span>
          </div>
          
          <div className="flex space-x-6">
            <Link to="/terms" className="text-sm hover:text-yellow-400 transition-colors">
              TERMS & CONDITIONS
            </Link>
            <Link to="/privacy" className="text-sm hover:text-yellow-400 transition-colors">
              PRIVACY POLICY
            </Link>
          </div>
        </div>
        
        <div className="flex justify-center space-x-4 mt-4 pt-4 border-t border-gray-700">
          <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center cursor-pointer hover:bg-pink-600 transition-colors">
            <span className="text-white text-sm">i</span>
          </div>
          <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-700 transition-colors">
            <span className="text-white text-sm">f</span>
          </div>
          <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center cursor-pointer hover:bg-green-600 transition-colors">
            <span className="text-white text-sm">w</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
