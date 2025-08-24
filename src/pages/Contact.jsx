import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      setSubmitStatus('success');
      
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      
      // Reset status message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt className="text-3xl text-accent" />,
      title: 'Our Location',
      text: 'Kamukunji, Nairobi, Kenya',
      link: 'https://www.google.com/maps/place/Kamukunji,+Nairobi,+Kenya',
      linkText: 'View on Map'
    },
    {
      icon: <FaPhone className="text-3xl text-accent" />,
      title: 'Phone Number',
      text: '+254 724 348 301 / +254 724 356 696',
      link: 'tel:+254724348301',
      linkText: 'Call Us'
    },
    {
      icon: <FaEnvelope className="text-3xl text-accent" />,
      title: 'Email Address',
      text: 'jaymoss005@gmail.com',
      link: 'mailto:jaymoss005@gmail.com',
      linkText: 'Send Email'
    },
    {
      icon: <FaClock className="text-3xl text-accent" />,
      title: 'Working Hours',
      text: 'Monday - Friday: 9:00 AM - 6:00 PM\nSaturday: 10:00 AM - 4:00 PM\nSunday: Closed',
      link: null
    }
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions or ready to start your project? Get in touch with our team today.
          </p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
              <p className="text-gray-600 mb-8">
                We're here to answer any questions you may have about our products and services. 
                Reach out to us and we'll respond as soon as possible.
              </p>
              
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-start space-x-6 p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="mt-1">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                      <p className="text-gray-600 whitespace-pre-line mb-3">{item.text}</p>
                      {item.link && (
                        <a 
                          href={item.link} 
                          className="text-accent font-medium hover:underline inline-flex items-center"
                        >
                          {item.linkText} <FaPaperPlane className="ml-2 text-sm" />
                        </a>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
              
              {submitStatus === 'success' ? (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
                  Thank you for your message! We'll get back to you soon.
                </div>
              ) : submitStatus === 'error' ? (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
                  There was an error submitting your message. Please try again.
                </div>
              ) : null}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                    placeholder="John Doe"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                      placeholder="+1 (234) 567-8900"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
                    Subject <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                    placeholder="How can we help you?"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                    Your Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>
                
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full bg-accent hover:bg-accent/90 text-white font-medium py-3 px-6 rounded-md transition-colors flex items-center justify-center ${
                      isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                    }`}
                  >
                    {isSubmitting ? (
                      'Sending...'
                    ) : (
                      <>
                        Send Message <FaPaperPlane className="ml-2" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-96 w-full">
        <iframe
          title="Jaymoss Aluminum & Glass Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.5602986507246!2d36.85122707509033!3d-1.2882222355673583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f11b7f2b0a0a9%3A0x9e5c8f3a1a0a0a0a!2sKamukunji%2C%20Nairobi%2C%20Kenya!5e0!3m2!1sen!2sus!4v1623251431747!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          className="w-full h-full"
        ></iframe>
      </section>
    </div>
  );
};

export default Contact;
