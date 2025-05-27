
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-slate-900 via-gray-900 to-slate-800 text-white animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-4 mb-6 md:mb-0 animate-scale-in">
            <img 
              src="/lovable-uploads/28f45773-a45d-4885-85c3-90a57d69dd0c.png" 
              alt="Rentify Logo" 
              className="h-12 w-auto filter brightness-0 invert hover-lift"
            />
            <span className="text-3xl font-bold gradient-text">RENTIFY</span>
          </div>
          
          <div className="flex items-center space-x-6 mb-6 md:mb-0 animate-slide-up">
            <span className="text-lg text-gray-300 font-medium">© All Rights Reserved - 2025</span>
          </div>
          
          <div className="flex space-x-8 animate-fade-in">
            <Link to="/terms" className="text-lg hover:text-teal-400 transition-all duration-300 hover:scale-110 font-medium">
              TERMS & CONDITIONS
            </Link>
            <Link to="/privacy" className="text-lg hover:text-teal-400 transition-all duration-300 hover:scale-110 font-medium">
              PRIVACY POLICY
            </Link>
          </div>
        </div>
        
        <div className="flex justify-center space-x-6 mt-8 pt-8 border-t border-gray-700 animate-bounce-in">
          <div className="w-14 h-14 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full flex items-center justify-center cursor-pointer hover:scale-125 transition-all duration-300 shadow-2xl hover:shadow-teal-500/25">
            <span className="text-white text-lg font-bold">i</span>
          </div>
          <div className="w-14 h-14 bg-gradient-to-r from-cyan-600 to-blue-700 rounded-full flex items-center justify-center cursor-pointer hover:scale-125 transition-all duration-300 shadow-2xl hover:shadow-cyan-500/25">
            <span className="text-white text-lg font-bold">f</span>
          </div>
          <div className="w-14 h-14 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full flex items-center justify-center cursor-pointer hover:scale-125 transition-all duration-300 shadow-2xl hover:shadow-emerald-500/25">
            <span className="text-white text-lg font-bold">w</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
