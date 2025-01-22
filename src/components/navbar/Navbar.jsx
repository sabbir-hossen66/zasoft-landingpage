import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-[#0b1e27] bg-opacity-70 backdrop-blur-md" : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="text-white text-xl font-semibold">
              CareerLTD
            </Link>
          </div>
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4 uppercase">
              <a to="#" className="text-white" exact>
                Home
              </a>
              <a href="#about" className="text-white">About</a>
              <a href="#services" className="text-white">Services</a>
              <a href="#partners" className="text-white">Partners</a>
              <a href="#contact" className="text-white">Contact</a>
            </div>
          </div>
          <div className="hidden md:block">
            <button className="px-4 py-2 border border-white border-opacity-30 rounded-md text-sm font-medium text-white bg-transparent hover:bg-white hover:bg-opacity-10 transition duration-300">
              Login
            </button>
          </div>
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-white hover:text-gray-300 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#0b1e27] bg-opacity-70 backdrop-blur-md">
          <div className="px-4 pt-4 pb-4 space-y-2">
            <NavLink to="/" exact onClick={() => setIsMobileMenuOpen(false)}>
              Home
            </NavLink>
            <NavLink to="/about" onClick={() => setIsMobileMenuOpen(false)}>
              About
            </NavLink>
            <NavLink to="/services" onClick={() => setIsMobileMenuOpen(false)}>
              Services
            </NavLink>
            <NavLink to="/partners" onClick={() => setIsMobileMenuOpen(false)}>
              Partners
            </NavLink>
            <NavLink to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
              Contact
            </NavLink>
            <button
              className="w-full px-4 py-2 border border-white border-opacity-30 rounded-md text-sm font-medium text-white bg-transparent hover:bg-white hover:bg-opacity-10 transition duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Login
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

const NavLink = ({ children, ...props }) => {
  return (
    <Link
      {...props}
      className="block text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium transition duration-300"
      activeClassName="text-white font-bold"
    >
      {children}
    </Link>
  );
};

export default Navbar;
