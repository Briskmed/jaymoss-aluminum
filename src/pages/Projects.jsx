import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaSearch, FaExternalLinkAlt, FaArrowRight } from 'react-icons/fa';

// Sample project images (replace with actual project images)
const projects = [
  {
    id: 1,
    title: 'Luxury Villa Windows',
    category: 'residential',
    description: 'Custom aluminum windows for a modern luxury villa with energy-efficient glass.',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1453&q=80',
    tags: ['Windows', 'Residential', 'Energy Efficient']
  },
  {
    id: 2,
    title: 'Office Glass Partitions',
    category: 'commercial',
    description: 'Modern glass partitions for a corporate office space, enhancing natural light and collaboration.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    tags: ['Partitions', 'Commercial', 'Modern Design']
  },
  {
    id: 3,
    title: 'Glass Balustrades',
    category: 'residential',
    description: 'Elegant glass balustrades for a luxury apartment complex.',
    image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    tags: ['Balustrades', 'Residential', 'Luxury']
  },
  {
    id: 4,
    title: 'Shopping Mall Facade',
    category: 'commercial',
    description: 'Impressive glass facade for a modern shopping mall.',
    image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    tags: ['Facade', 'Commercial', 'Large Scale']
  },
  {
    id: 5,
    title: 'Penthouse Windows & Doors',
    category: 'residential',
    description: 'Panoramic windows and sliding doors for a luxury penthouse with stunning city views.',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80',
    tags: ['Windows', 'Doors', 'Luxury']
  },
  {
    id: 6,
    title: 'Hotel Lobby Partitions',
    category: 'commercial',
    description: 'Elegant glass partitions for a 5-star hotel lobby.',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    tags: ['Partitions', 'Commercial', 'Hospitality']
  },
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'residential', name: 'Residential' },
    { id: 'commercial', name: 'Commercial' },
  ];

  const filteredProjects = projects.filter(project => {
    const matchesCategory = activeCategory === 'all' || project.category === activeCategory;
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Projects</h1>
          <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our portfolio of completed projects showcasing our expertise in aluminum and glass solutions.
          </p>
        </div>
      </section>

      {/* Projects Filter */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-4">
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 rounded-full font-medium transition-colors ${
                    activeCategory === category.id
                      ? 'bg-accent text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
            
            <div className="relative w-full md:w-64">
              <input
                type="text"
                placeholder="Search projects..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <FaSearch className="absolute left-3 top-3 text-gray-400" />
            </div>
          </div>

          {/* Projects Grid */}
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
                >
                  <div className="relative overflow-hidden h-64">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <button className="bg-white text-accent p-3 rounded-full hover:bg-accent hover:text-white transition-colors">
                        <FaExternalLinkAlt className="text-xl" />
                      </button>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                      <div className="flex flex-wrap gap-2 mb-2">
                        {project.tags.map((tag, i) => (
                          <span key={i} className="bg-white/20 text-white text-xs px-2 py-1 rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <button className="text-accent font-medium flex items-center group-hover:underline">
                      View Project <FaArrowRight className="ml-2 text-sm" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="text-gray-400 text-5xl mb-4">
                <FaSearch className="inline-block" />
              </div>
              <h3 className="text-xl font-semibold mb-2">No projects found</h3>
              <p className="text-gray-600">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Have a Project in Mind?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Let's discuss how we can bring your vision to life with our premium aluminum and glass solutions.
          </p>
          <button className="bg-white text-primary hover:bg-gray-100 px-8 py-3 rounded-md font-medium text-lg transition-colors flex items-center mx-auto">
            Get a Free Quote <FaArrowRight className="ml-2" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default Projects;
