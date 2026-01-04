import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const Loader = ({ isLoading = true }) => {
  const [isVisible, setIsVisible] = useState(isLoading);

  // Handle the loading state with a smooth exit animation
  useEffect(() => {
    if (!isLoading) {
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 500); // Match this with the exit animation duration
      return () => clearTimeout(timer);
    }
    setIsVisible(true);
  }, [isLoading]);

  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-white"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: 'easeInOut' }}
    >
      <div className="flex flex-col items-center">
        <div className="relative w-16 h-16">
          {/* Outer circle */}
          <div className="absolute inset-0 border-4 border-gray-200 rounded-full"></div>
          {/* Spinning circle */}
          <motion.div
            className="absolute inset-0 border-4 border-t-accent border-r-accent border-b-transparent border-l-transparent rounded-full"
            animate={{ rotate: 360 }}
            transition={{
              duration: 1,
              ease: 'linear',
              repeat: Infinity,
            }}
          ></motion.div>
          {/* Logo or text in center */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-lg font-bold text-accent">JAYMOSS</span>
          </div>
        </div>
        <p className="mt-4 text-sm font-medium text-gray-600">Loading...</p>
      </div>
    </motion.div>
  );
};

export default Loader;
