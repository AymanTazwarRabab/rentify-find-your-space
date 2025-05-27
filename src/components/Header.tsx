
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white/90 backdrop-blur-xl shadow-lg border-b border-white/20 sticky top-0 z-50 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-3 hover-lift">
            <img 
              src="/lovable-uploads/28f45773-a45d-4885-85c3-90a57d69dd0c.png" 
              alt="Rentify Logo" 
              className="h-12 w-auto animate-pulse-glow"
            />
            <span className="text-3xl font-bold gradient-text">RENTIFY</span>
          </Link>
          
          <nav className="hidden md:flex space-x-8">
            <Link 
              to="/" 
              className={`${isActive('/') ? 'text-teal-600 border-b-2 border-teal-600' : 'text-gray-700 hover:text-teal-600'} px-4 py-3 transition-all duration-300 font-semibold text-lg hover:scale-105`}
            >
              HOME
            </Link>
            <Link 
              to="/about" 
              className={`${isActive('/about') ? 'text-teal-600 border-b-2 border-teal-600' : 'text-gray-700 hover:text-teal-600'} px-4 py-3 transition-all duration-300 font-semibold text-lg hover:scale-105`}
            >
              ABOUT US
            </Link>
            <Link 
              to="/qna" 
              className={`${isActive('/qna') ? 'text-teal-600 border-b-2 border-teal-600' : 'text-gray-700 hover:text-teal-600'} px-4 py-3 transition-all duration-300 font-semibold text-lg hover:scale-105`}
            >
              QNA
            </Link>
            <Link 
              to="/contact" 
              className={`${isActive('/contact') ? 'text-teal-600 border-b-2 border-teal-600' : 'text-gray-700 hover:text-teal-600'} px-4 py-3 transition-all duration-300 font-semibold text-lg hover:scale-105`}
            >
              CONTACT
            </Link>
          </nav>

          <Link 
            to="/login" 
            className="bg-gradient-to-r from-teal-500 via-cyan-500 to-emerald-500 text-white px-8 py-3 rounded-2xl hover:from-teal-600 hover:via-cyan-600 hover:to-emerald-600 transition-all duration-500 transform hover:scale-105 shadow-2xl font-semibold hover-lift"
          >
            LOGIN / REGISTER
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
