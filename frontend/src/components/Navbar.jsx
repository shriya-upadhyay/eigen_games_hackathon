import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import blockchainLogo from '../assets/blockchainlogo.svg?url'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  // Function to check if a path is active
  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-gray-900 border-b border-gray-700 py-4 px-6 sticky top-0 z-50 w-screen">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo and Brand */}
        <div className="flex items-center">
          <img src={blockchainLogo} alt="Blockchain Logo" />
          <span className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent px-4 font-outfit">
            Sonder
          </span>
        </div>

        {/* Linking Info */ }
        <div className="hidden md:flex flex-1 justify-center">
          <div className="flex w-full max-w-2xl justify-between">
            <Link 
              to="/" 
              className={`text-white hover:text-blue-400 transition-colors pb-1 ${
                isActive('/') ? 'border-b-2 border-blue-500' : ''
              }`}
            >
              Dashboard
            </Link>
            <Link 
              to="/marketplace" 
              className={`text-white hover:text-blue-400 transition-colors pb-1 ${
                isActive('/marketplace') ? 'border-b-2 border-blue-500' : ''
              }`}
            >
              Marketplace
            </Link>
            <Link 
              to="/upload" 
              className={`text-white hover:text-blue-400 transition-colors pb-1 ${
                isActive('/upload') ? 'border-b-2 border-blue-500' : ''
              }`}
            >
              Upload Agent
            </Link>
            <Link 
              to="/stake" 
              className={`text-white hover:text-blue-400 transition-colors pb-1 ${
                isActive('/stake') ? 'border-b-2 border-blue-500' : ''
              }`}
            >
              Stake for an Agent
            </Link>
          </div>
        </div>

        {/* Profile/Connect Button */}
        <div className="hidden md:block">
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg hover:opacity-90 transition-opacity">
            Connect Wallet
          </button>
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-gray-200 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800 mt-4 py-3 px-4 rounded-lg border border-gray-700">
          <div className="flex flex-col space-y-4">
            <Link 
              to="/" 
              className={`text-white hover:text-blue-400 py-2 transition-colors ${
                isActive('/') ? 'border-l-4 border-blue-500 pl-2' : 'pl-2'
              }`}
            >
              Dashboard
            </Link>
            <Link 
              to="/marketplace" 
              className={`text-white hover:text-blue-400 py-2 transition-colors ${
                isActive('/marketplace') ? 'border-l-4 border-blue-500 pl-2' : 'pl-2'
              }`}
            >
              Marketplace
            </Link>
            <Link 
              to="/upload" 
              className={`text-white hover:text-blue-400 py-2 transition-colors ${
                isActive('/upload') ? 'border-l-4 border-blue-500 pl-2' : 'pl-2'
              }`}
            >
              Upload Agent
            </Link>
            <Link 
              to="/battles" 
              className={`text-white hover:text-blue-400 py-2 transition-colors ${
                isActive('/battles') ? 'border-l-4 border-blue-500 pl-2' : 'pl-2'
              }`}
            >
              Agent Battles
            </Link>
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg mt-2 hover:opacity-90 transition-opacity">
              Connect Wallet
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;