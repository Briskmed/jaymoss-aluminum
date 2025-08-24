import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaPhoneAlt } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Specifications', path: '/specifications' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY > 50;
      if (offset) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-white/90 py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl">
              JAG
            </div>
            <span className="text-xl font-bold text-primary">Jaymoss Aluminum & Glass</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`font-medium transition-colors ${
                  location.pathname === link.path
                    ? 'text-accent font-semibold'
                    : 'text-gray-700 hover:text-accent'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <a 
              href="tel:+254724348301" 
              className="ml-4 bg-accent text-white px-4 py-2 rounded-md flex items-center space-x-2 hover:bg-opacity-90 transition-all"
            >
              <FaPhoneAlt className="text-sm" />
              <span>Call Us</span>
            </a>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-accent focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 rounded-md ${
                    location.pathname === link.path
                      ? 'bg-accent text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <a
                href="tel:+254724348301"
                className="flex items-center justify-center px-4 py-2 bg-accent text-white rounded-md hover:bg-opacity-90 transition-colors"
              >
                <FaPhoneAlt className="text-sm" />
                <span>Call Us: +254724348301</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
