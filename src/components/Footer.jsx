import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  const services = [
    { name: 'Windows & Doors', path: '/services#windows' },
    { name: 'Glass Partitions', path: '/services#partitions' },
    { name: 'Balustrades', path: '/services#balustrades' },
    { name: 'Custom Solutions', path: '/services#custom' },
    { name: 'Maintenance', path: '/services#maintenance' },
  ];

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt className="text-accent" />,
      text: 'Kamukunji, Nairobi, Kenya',
    },
    {
      icon: <FaPhone className="text-accent" />,
      text: '+254 724 348 301 / +254 724 356 696',
      href: 'tel:+254724348301',
    },
    {
      icon: <FaEnvelope className="text-accent" />,
      text: 'jaymoss005@gmail.com',
      href: 'mailto:jaymoss005@gmail.com',
    },
  ];

  const socialLinks = [
    { icon: <FaFacebook />, url: 'https://facebook.com' },
    { icon: <FaTwitter />, url: 'https://twitter.com' },
    { icon: <FaInstagram />, url: 'https://instagram.com' },
    { icon: <FaLinkedin />, url: 'https://linkedin.com' },
  ];

  return (
    <footer className="bg-dark text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center text-white font-bold">
                JAG
              </div>
              <span className="text-xl font-bold">Jaymoss Aluminum & Glass</span>
            </div>
            <p className="text-gray-400 mb-6">
              Premium aluminum and glass solutions for residential and commercial properties. 
              Transforming spaces with quality and precision since 2003.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-300 hover:bg-accent hover:text-white transition-colors"
                  aria-label={`${social.url.split('.')[1]} social link`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 relative pb-2">
              Quick Links
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-accent"></span>
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path}
                    className="text-gray-400 hover:text-accent transition-colors flex items-center"
                  >
                    <span className="w-1.5 h-1.5 bg-accent rounded-full mr-2"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6 relative pb-2">
              Our Services
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-accent"></span>
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link 
                    to={service.path}
                    className="text-gray-400 hover:text-accent transition-colors flex items-center"
                  >
                    <span className="w-1.5 h-1.5 bg-accent rounded-full mr-2"></span>
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6 relative pb-2">
              Contact Us
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-accent"></span>
            </h3>
            <ul className="space-y-4">
              {contactInfo.map((item, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <div className="mt-1">{item.icon}</div>
                  {item.href ? (
                    <a 
                      href={item.href}
                      className="text-gray-400 hover:text-accent transition-colors"
                    >
                      {item.text}
                    </a>
                  ) : (
                    <span className="text-gray-400">{item.text}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
          <p>
            &copy; {currentYear} Jaymoss Aluminum & Glass. All rights reserved.
          </p>
          <div className="mt-2 text-sm">
            <Link to="/privacy" className="hover:text-accent transition-colors">
              Privacy Policy
            </Link>
            <span className="mx-2">|</span>
            <Link to="/terms" className="hover:text-accent transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
