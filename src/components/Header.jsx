import React, { useState } from 'react';
import { User, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2" onClick={() => window.scrollTo(0, 0)}>
            <User className="w-6 h-6 text-gray-900" />
            <span className="text-xl font-semibold text-gray-900">Remote</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link to="/about" className="text-gray-600 hover:text-gray-900 transition-colors" onClick={() => window.scrollTo(0, 0)}>About</Link>
            <Link to="/feature" className="text-gray-600 hover:text-gray-900 transition-colors" onClick={() => window.scrollTo(0, 0)}>Feature</Link>
            <Link to="/pricing" className="text-gray-600 hover:text-gray-900 transition-colors" onClick={() => window.scrollTo(0, 0)}>Pricing</Link>
            <Link to="/contact" className="text-gray-600 hover:text-gray-900 transition-colors" onClick={() => window.scrollTo(0, 0)}>Contact</Link>
            <Link to="/blog" className="text-gray-600 hover:text-gray-900 transition-colors" onClick={() => window.scrollTo(0, 0)}>Blog</Link>
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link to="/pricing" className="text-gray-600 hover:text-gray-900 transition-colors" onClick={() => window.scrollTo(0, 0)}>
              Try for free
            </Link>
            <Link to="/contact" className="bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors" onClick={() => window.scrollTo(0, 0)}>
              Get a demo
            </Link>
          </div>

          {/* Mobile menu button */}
          <button 
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-900" />
            ) : (
              <Menu className="w-6 h-6 text-gray-900" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-100">
            <nav className="flex flex-col space-y-4 mt-4">
              <Link to="/about" className="text-gray-600 hover:text-gray-900 transition-colors" onClick={() => window.scrollTo(0, 0)}>About</Link>
              <Link to="/feature" className="text-gray-600 hover:text-gray-900 transition-colors" onClick={() => window.scrollTo(0, 0)}>Feature</Link>
              <Link to="/pricing" className="text-gray-600 hover:text-gray-900 transition-colors" onClick={() => window.scrollTo(0, 0)}>Pricing</Link>
              <Link to="/contact" className="text-gray-600 hover:text-gray-900 transition-colors" onClick={() => window.scrollTo(0, 0)}>Contact</Link>
              <Link to="/blog" className="text-gray-600 hover:text-gray-900 transition-colors" onClick={() => window.scrollTo(0, 0)}>Blog</Link>
              <div className="flex flex-col space-y-3 pt-4 border-t border-gray-100">
                <Link to="/pricing" className="text-gray-600 hover:text-gray-900 transition-colors text-left" onClick={() => window.scrollTo(0, 0)}>
                  Try for free
                </Link>
                <Link to="/contact" className="bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors text-left" onClick={() => window.scrollTo(0, 0)}>
                  Get a demo
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;