import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaHome, FaArrowRight } from 'react-icons/fa';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 py-24">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-6xl md:text-8xl font-bold text-gray-800 mb-4">404</h1>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Page Not Found</h2>
        <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
        <p className="text-gray-600 text-lg mb-8 max-w-md mx-auto">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/"
            className="bg-accent hover:bg-accent/90 text-white px-6 py-3 rounded-md font-medium flex items-center justify-center transition-colors"
          >
            <FaHome className="mr-2" /> Go to Homepage
          </Link>
          
          <Link
            to="/contact"
            className="border-2 border-accent text-accent hover:bg-accent hover:text-white px-6 py-3 rounded-md font-medium flex items-center justify-center transition-colors"
          >
            Contact Us <FaArrowRight className="ml-2" />
          </Link>
        </div>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="mt-16 text-center"
      >
        <p className="text-gray-500 mb-2">Here are some helpful links:</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/services" className="text-accent hover:underline">Services</Link>
          <Link to="/projects" className="text-accent hover:underline">Projects</Link>
          <Link to="/about" className="text-accent hover:underline">About Us</Link>
          <Link to="/contact" className="text-accent hover:underline">Contact</Link>
        </div>
      </motion.div>
    </div>
  );
};

export default NotFound;
