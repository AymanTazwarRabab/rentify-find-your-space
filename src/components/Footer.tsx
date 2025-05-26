
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-slate-800 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-3 mb-4 md:mb-0">
            <img 
              src="/lovable-uploads/28f45773-a45d-4885-85c3-90a57d69dd0c.png" 
              alt="Rentify Logo" 
              className="h-8 w-auto filter brightness-0 invert"
            />
            <span className="text-xl font-bold">RENTIFY</span>
          </div>
          
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <span className="text-sm text-gray-300">© All Rights Reserved - 2025</span>
          </div>
          
          <div className="flex space-x-6">
            <Link to="/terms" className="text-sm hover:text-amber-400 transition-colors duration-200">
              TERMS & CONDITIONS
            </Link>
            <Link to="/privacy" className="text-sm hover:text-amber-400 transition-colors duration-200">
              PRIVACY POLICY
            </Link>
          </div>
        </div>
        
        <div className="flex justify-center space-x-4 mt-6 pt-6 border-t border-gray-700">
          <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-200 shadow-lg">
            <span className="text-white text-sm font-bold">i</span>
          </div>
          <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-200 shadow-lg">
            <span className="text-white text-sm font-bold">f</span>
          </div>
          <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-200 shadow-lg">
            <span className="text-white text-sm font-bold">w</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
