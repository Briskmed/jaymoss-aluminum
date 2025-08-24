import { motion } from 'framer-motion';
import { FaCheck, FaUsers, FaAward, FaHome, FaBuilding, FaUserTie, FaUserCog, FaUserEdit, FaUserTie as FaUserTieAlt } from 'react-icons/fa';

// Sample images (replace with actual images)
const aboutImage = 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1453&q=80';
const teamImage = 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80';

const stats = [
  { value: '10+', label: 'Years Experience', icon: <FaAward className="text-3xl text-accent" /> },
  { value: '100+', label: 'Projects Completed', icon: <FaCheck className="text-3xl text-accent" /> },
  { value: '85+', label: 'Happy Clients', icon: <FaUsers className="text-3xl text-accent" /> },
];

const features = [
  {
    title: 'Our Mission',
    description: 'To provide exceptional aluminum and glass solutions that combine innovation, quality, and sustainability for both residential and commercial clients.',
    icon: <FaHome className="text-4xl text-accent" />,
  },
  {
    title: 'Our Vision',
    description: 'To be the leading provider of premium aluminum and glass products, setting industry standards for quality, design, and customer satisfaction.',
    icon: <FaBuilding className="text-4xl text-accent" />,
  },
];

const About = () => {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Jaymoss Aluminum & Glass</h1>
            <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Delivering excellence in aluminum and glass solutions for over 20 years. 
              Your trusted partner for quality installations and exceptional service.
            </p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <img 
                  src={aboutImage} 
                  alt="About Jaymoss Aluminum & Glass" 
                  className="w-full h-auto rounded-lg"
                />
                <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-lg w-3/4">
                  <h3 className="text-2xl font-bold mb-2">20+ Years of Excellence</h3>
                  <p className="text-gray-600">Delivering quality and innovation since 2003</p>
                </div>
              </div>
            </motion.div>

            <div className="lg:w-1/2">
              <div className="mb-8">
                <span className="text-accent font-semibold">ABOUT US</span>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Leading Aluminum & Glass Experts</h2>
                <div className="w-16 h-1 bg-accent mb-6"></div>
                <p className="text-gray-600 mb-6">
                  Founded in 2023, Jaymoss Aluminum & Glass has grown to become a trusted name in the industry. 
                  Our commitment to quality, innovation, and customer satisfaction has made us the preferred 
                  choice for both residential and commercial clients in East Africa.
                </p>
                <p className="text-gray-600 mb-8">
                  Our team of skilled professionals combines traditional craftsmanship with modern technology 
                  to deliver exceptional results on every project. We take pride in our attention to detail 
                  and our ability to bring our clients' visions to life.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <motion.div 
                    key={index}
                    className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                  >
                    <div className="mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="p-6"
              >
                <div className="mb-4">{stat.icon}</div>
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <p className="text-lg">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Leadership Team</h2>
            <div className="w-16 h-1 bg-accent mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The experienced professionals who drive Jaymoss Aluminum & Glass to excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                id: 1,
                name: 'Moses Gakuha',
                role: 'CEO & Founder',
                description: 'With over 10 years in the aluminum and glass industry, Moses founded Jaymoss with a vision for excellence and innovation.',
                icon: <FaUserTie className="text-4xl text-accent mx-auto mb-4" />,
                color: 'from-blue-500 to-blue-600'
              },
              {
                id: 2,
                name: 'Moses Mwangi',
                role: 'Lead Installer',
                description: 'Moses brings 8+ years of hands-on experience in precision installation and project management.',
                icon: <FaUserCog className="text-4xl text-accent mx-auto mb-4" />,
                color: 'from-green-500 to-green-600'
              },
              {
                id: 3,
                name: 'Sarah Chen',
                role: 'Design Specialist',
                description: 'Sarah combines technical expertise with creative vision to deliver stunning glass and aluminum solutions.',
                icon: <FaUserEdit className="text-4xl text-accent mx-auto mb-4" />,
                color: 'from-purple-500 to-purple-600'
              },
              {
                id: 4,
                name: 'Japheth Mutie',
                role: 'Project Manager',
                description: 'Japheth ensures every project runs smoothly, on time, and exceeds client expectations.',
                icon: <FaUserTieAlt className="text-4xl text-accent mx-auto mb-4" />,
                color: 'from-amber-500 to-amber-600'
              }
            ].map((member) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: member.id * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className={`h-2 bg-gradient-to-r ${member.color}`}></div>
                <div className="p-8 text-center">
                  <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gray-100 flex items-center justify-center">
                    {member.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-accent font-medium mb-4">
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-sm">
                    {member.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
