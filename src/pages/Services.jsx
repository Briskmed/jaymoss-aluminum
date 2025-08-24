import { motion } from 'framer-motion';

// Sample images (replace with actual images)
const service1 = 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80';
const service2 = 'https://images.unsplash.com/photo-1600585154526-990dced4b6c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80';
const service3 = 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80';
const service4 = 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1453&q=80';

const services = [
  {
    id: 'skylight-installation',
    title: 'Skylight Installation',
    description: 'Professional installation of high-quality skylights that bring natural light into your space while maintaining energy efficiency and weather resistance.',
    features: [
      'Custom sizing and shapes',
      'Energy-efficient glazing options',
      'Waterproof and weatherproof',
      'UV protection',
      'Ventilation options',
      'Professional installation'
    ],
    image: '/assets/specs/WhatsApp Image 2025-08-21 at 20.50.50_02e67031.jpg',
  },
  {
    id: 'shower-cubicles',
    title: 'Shower Cubicle Installation',
    description: 'Professional installation of premium shower cubicles that combine functionality with elegant design. Our expert team ensures a perfect fit and finish for your bathroom space.',
    features: [
      'Custom sizing to fit any space',
      'Framed and frameless options',
      'Toughened safety glass',
      'Wide range of finishes',
      'Waterproof seals',
      'Easy maintenance'
    ],
    image: '/assets/specs/WhatsApp Image 2025-08-21 at 20.50.51_ead60a34.jpg',
  },
  {
    id: 'staircase',
    title: 'Staircase Installation',
    description: 'Stunning staircase solutions featuring aluminum and glass components. We create beautiful, durable staircases that become the centerpiece of your space.',
    features: [
      'Custom designs',
      'Glass and aluminum combinations',
      'Safety-compliant railings',
      'Various finish options',
      'Precision engineering',
      'Professional installation'
    ],
    image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'aluminum-windows',
    title: 'Aluminum Window Installation',
    description: 'High-performance aluminum windows that offer durability, energy efficiency, and modern aesthetics for both residential and commercial properties.',
    features: [
      'Thermally broken frames',
      'Noise reduction glass',
      'Custom sizes and styles',
      'Enhanced security features',
      'Low maintenance',
      'Weather-resistant'
    ],
    image: '/assets/specs/aluminum windows.jpg',
  },
  {
    id: 'aluminum-balustrades',
    title: 'Aluminum Balustrades',
    description: 'Modern and durable aluminum balustrades that provide safety without compromising on style. Perfect for balconies, terraces, and staircases.',
    features: [
      'Sleek, modern designs',
      'Powder-coated finishes',
      'Custom heights and patterns',
      'Weather-resistant',
      'Low maintenance',
      'Durable construction'
    ],
    image: '/assets/specs/Powder-Coated-Aluminium-Balustrade-3.jpg',
  },
  {
    id: 'glass-balustrades',
    title: 'Glass Balustrades',
    description: 'Elegant glass balustrade systems with premium hardware including spigots, U-channels, and various clamps for a seamless look.',
    features: [
      'Toughened safety glass',
      'Glass to wall clamps',
      'Glass to glass clamps',
      'Stainless steel hardware',
      'Frameless designs',
      'Custom solutions'
    ],
    image: '/assets/specs/glass-balustrades.jpg',
  },
  {
    id: 'aluminum-rails',
    title: 'Aluminum Rails & Fittings',
    description: 'Premium aluminum rails and fittings including engraved aluminum options to complement your glass and metal installations.',
    features: [
      'Sleek, modern designs',
      'Engraved options available',
      'Various color finishes',
      'Durable construction',
      'Custom lengths',
      'Easy installation'
    ],
    image: '/assets/specs/P9230584.jpg',
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h1>
          <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive range of aluminum and glass solutions designed to enhance your space with style and functionality.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-800">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <svg className="h-5 w-5 text-accent mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
