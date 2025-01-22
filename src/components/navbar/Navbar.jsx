import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0
      setScrolled(isScrolled)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${scrolled ? "bg-[#0b1e27] bg-opacity-70 backdrop-blur-md" : "bg-transparent"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="text-white text-xl font-semibold">
              CareerLTD
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLink to="/" exact>
                Home
              </NavLink>
              <NavLink to="/about">About</NavLink>
              <NavLink to="/services">Services</NavLink>
              <NavLink to="/contact">Contact</NavLink>
            </div>
          </div>
          <div className="hidden md:block">
            <button className="px-4 py-2 border border-white border-opacity-30 rounded-md text-sm font-medium text-white bg-transparent hover:bg-white hover:bg-opacity-10 transition duration-300">
              Login
            </button>
          </div>
          <div className="md:hidden">
            <button className="text-white hover:text-gray-300 focus:outline-none">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

const NavLink = ({ children, ...props }) => {
  return (
    <Link
      {...props}
      className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium transition duration-300"
      activeClassName="text-white font-bold"
    >
      {children}
    </Link>
  )
}

export default Navbar