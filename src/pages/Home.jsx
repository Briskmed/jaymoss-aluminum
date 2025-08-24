import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaShieldAlt, FaTools, FaStar, FaCheck } from 'react-icons/fa';

// Sample images (replace with actual images)
const heroImage = '/assets/specs/WhatsApp Image 2025-08-21 at 20.50.49_7690ae20.jpg';
const service1 = 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80';
const service2 = 'https://images.unsplash.com/photo-1600585154526-990dced4b6c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80';
const service3 = 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80';

const services = [
  {
    title: 'Windows & Doors',
    description: 'High-quality aluminum windows and doors for modern homes and businesses.',
    icon: <FaShieldAlt className="text-3xl text-accent mb-4" />,
    image: '/assets/specs/WhatsApp Image 2025-08-21 at 20.50.48_336fb5cc.jpg',
  },
  {
    title: 'Balustrades',
    description: 'Elegant and durable glass and aluminum balustrades for any property.',
    icon: <FaTools className="text-3xl text-accent mb-4" />,
    image: '/assets/specs/OIP.webp',
  },
  {
    title: 'Custom Solutions',
    description: 'Tailored aluminum and glass solutions to meet your specific needs.',
    icon: <FaStar className="text-3xl text-accent mb-4" />,
    image: '/assets/specs/WhatsApp Image 2025-08-21 at 20.50.51_239d070d.jpg',
  },
];

const features = [
  '20+ Years of Experience',
  'Premium Quality Materials',
  'Professional Installation',
  'Competitive Pricing',
  'Free Consultations',
  'Warranty on All Products',
];

const Home = () => {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <img 
          src={heroImage} 
          alt="Luxury aluminum and glass installation" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="container mx-auto px-4 relative z-20 text-white">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Premium Aluminum & Glass Solutions
            </h1>
            <p className="text-xl mb-8">
              Transform your space with our high-quality aluminum and glass installations. 
              Perfect for both residential and commercial properties.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link 
                to="/contact" 
                className="bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-md font-medium text-lg transition-colors flex items-center justify-center"
              >
                Get Free Quote <FaArrowRight className="ml-2" />
              </Link>
              <Link 
                to="/services" 
                className="border-2 border-white hover:bg-white/10 text-white px-8 py-4 rounded-md font-medium text-lg transition-colors flex items-center justify-center"
              >
                Our Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-md flex items-start space-x-4"
              >
                <FaCheck className="text-green-500 mt-1 flex-shrink-0" />
                <span className="text-lg font-medium">{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Services</h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer a wide range of aluminum and glass solutions tailored to your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    {service.icon}
                    <h3 className="text-xl font-bold">{service.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Link 
                    to="/services" 
                    className="text-accent font-medium flex items-center hover:underline"
                  >
                    Learn more <FaArrowRight className="ml-2 text-sm" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              to="/services" 
              className="inline-block bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-md font-medium text-lg transition-colors"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Contact us today for a free consultation and quote. Our team is ready to bring your vision to life.
          </p>
          <Link 
            to="/contact" 
            className="inline-block bg-white text-primary hover:bg-gray-100 px-8 py-3 rounded-md font-medium text-lg transition-colors"
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
