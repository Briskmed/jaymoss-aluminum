import { motion } from 'framer-motion';

// Image paths for specifications
const images = {
  // Glass Types
  temperedGlass: '/assets/specs/WhatsApp Image 2025-08-21 at 20.50.51_239d070d.jpg',
  laminatedGlass: '/assets/specs/WhatsApp Image 2025-08-21 at 20.50.51_710b402a.jpg',
  
  // Spigots
  coreMountSpigot: '/assets/specs/Core-Mount Spigot for 10-12mm glass.jpeg',
  surfaceMountSpigot: '/assets/specs/Surface-Mount Spigot for 6-12mm glass.jpeg',
  
  // Glass Clamps
  glassClamp: '/assets/specs/Wall-to-glass clamps.jpg',
  
  // U-Channels & Handrails
  uChannel: '/assets/specs/U-Channels & Base Shoes.avif',
  handrail: '/assets/specs/Handrail Caps & Connectors.jpg',
  
  // Mounting Hardware
  mountingHardware: '/assets/specs/Accessories & Mounting Hardware.webp'
};

const ImageWithCaption = ({ src, alt, caption, className = '' }) => (
  <div className={`flex flex-col items-center ${className}`}>
    <img 
      src={src} 
      alt={alt} 
      className="w-full h-48 object-cover rounded-lg shadow-md mb-2"
      loading="lazy"
    />
    <p className="text-sm text-gray-600 text-center">{caption}</p>
  </div>
);

const Specifications = () => {
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Technical Specifications</h1>
          <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Premium materials and engineering excellence for your aluminum and glass solutions
          </p>
        </motion.div>

        {/* Glass Types Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Glass Types & Thicknesses</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Tempered Glass */}
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="md:flex gap-6">
                <div className="md:w-1/3 mb-4 md:mb-0">
                  <ImageWithCaption 
                    src={images.temperedGlass}
                    alt="Tempered Glass"
                    caption="Tempered glass with safety break pattern"
                  />
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-xl font-semibold mb-4">Tempered (Toughened) Glass</h3>
                  <ul className="space-y-2">
                    <li>✓ Manufactured to ASTM C1048 safety standards</li>
                    <li>✓ Breaks into small, blunt granules for safety</li>
                    <li className="font-medium mt-4">Available Thicknesses:</li>
                    <li>• 6 mm • 8 mm • 10 mm • 12 mm</li>
                    <li className="font-medium mt-2">Applications:</li>
                    <li>Balconies, stair balustrades, pool fencing, terraces</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Laminated Glass */}
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="md:flex gap-6">
                <div className="md:w-1/3 mb-4 md:mb-0">
                  <ImageWithCaption 
                    src={images.laminatedGlass}
                    alt="Laminated Glass"
                    caption="Laminated glass showing interlayer and safety features"
                  />
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-xl font-semibold mb-4">Laminated Safety Glass</h3>
                  <ul className="space-y-2">
                    <li>✓ Multiple glass layers with PVB interlayer</li>
                    <li>✓ Maintains structural integrity when shattered</li>
                    <li>✓ Complies with fall protection regulations</li>
                    <li className="font-medium mt-4">Available Thicknesses:</li>
                    <li>• 6.38 mm • 8.38 mm • 10.38 mm • 12.38 mm</li>
                    <li className="text-sm">(Includes interlayer thickness)</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Fittings & Accessories */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Fittings & Accessories</h2>
          
          {/* Spigots */}
          <motion.div 
            className="bg-white p-6 rounded-lg shadow-md mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-4">Spigots (Frameless Systems)</h3>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <ImageWithCaption 
                src={images.coreMountSpigot}
                alt="Core-Mount Spigot"
                caption="Core-Mount Spigot for 10-12mm glass"
              />
            </div>
            <div>
              <ImageWithCaption 
                src={images.surfaceMountSpigot}
                alt="Surface-Mount Spigot"
                caption="Surface-Mount Spigot for 6-12mm glass"
              />
            </div>
          </div>
          <div className="overflow-x-auto mb-4">
            <table className="min-w-full bg-white">
              <thead>
                <tr className="bg-gray-100">
                  <th className="py-2 px-4 border text-left">Type</th>
                  <th className="py-2 px-4 border text-left">Material</th>
                  <th className="py-2 px-4 border text-left">Glass Thickness</th>
                  <th className="py-2 px-4 border text-left">Finish Options</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2 px-4 border">Core-Mount Spigots</td>
                  <td className="py-2 px-4 border">2205 Stainless Steel</td>
                  <td className="py-2 px-4 border">10–12 mm</td>
                  <td className="py-2 px-4 border">Polished / Satin</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border">Surface-Mount Spigots</td>
                  <td className="py-2 px-4 border">2205 Stainless Steel</td>
                  <td className="py-2 px-4 border">6–12 mm</td>
                  <td className="py-2 px-4 border">Polished / Satin / Matte Black</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-600">
            Engineered for secure floor mounting with drainage and leveling adjustment features.
          </p>
          </motion.div>

          {/* Glass Clamps */}
          <motion.div 
            className="bg-white p-6 rounded-lg shadow-md mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-xl font-semibold mb-4">Glass Clamps</h3>
            <div className="grid md:grid-cols-3 gap-6">
            <div className="md:col-span-1">
              <ImageWithCaption 
                src={images.glassClamp}
                alt="Glass Clamp"
                caption="Stainless steel glass clamp for secure installation"
              />
            </div>
            <div className="md:col-span-2">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-2">Types:</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Wall-to-glass clamps</li>
                    <li>Glass-to-glass clamps</li>
                    <li>Post-mounted clamps</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Specifications:</h4>
                  <ul className="space-y-2">
                    <li>• Compatible Thickness: 6 mm – 12 mm</li>
                    <li>• Materials: 304/316 Stainless Steel, Aluminum Alloy</li>
                    <li>• Finishes: Polished, Brushed, Matte Black</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          </motion.div>

          {/* U-Channels & Base Shoes */}
          <motion.div 
            className="bg-white p-6 rounded-lg shadow-md mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-4">U-Channels & Base Shoes</h3>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <ImageWithCaption 
                src={images.uChannel}
                alt="U-Channel Profile"
                caption="U-Channel profile for glass installation"
              />
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-2 px-4 border text-left">Use Case</th>
                    <th className="py-2 px-4 border text-left">Material</th>
                    <th className="py-2 px-4 border text-left">Glass Thickness</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2 px-4 border">Structural U-Channels</td>
                    <td className="py-2 px-4 border">Aluminum / Stainless Steel</td>
                    <td className="py-2 px-4 border">10 mm – 12 mm</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border">Decorative U-Channels</td>
                    <td className="py-2 px-4 border">Aluminum</td>
                    <td className="py-2 px-4 border">6 mm – 10 mm</td>
                  </tr>
                </tbody>
              </table>
              <div className="mt-4 space-y-2">
                <p>• Includes EPDM rubber gaskets</p>
                <p>• Available in recessed or surface-mount profiles</p>
                <p>• Suitable for frameless balustrades and railing systems</p>
              </div>
            </div>
          </div>
          </motion.div>

          {/* Handrail Caps & Connectors */}
          <motion.div 
            className="bg-white p-6 rounded-lg shadow-md mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-xl font-semibold mb-4">Handrail Caps & Connectors</h3>
            <div className="grid md:grid-cols-3 gap-6">
            <div className="md:col-span-1">
              <ImageWithCaption 
                src={images.handrail}
                alt="Handrail with Caps"
                caption="Handrail with various cap and connector options"
              />
            </div>
            <div className="md:col-span-2">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-2">Profiles:</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Round</li>
                    <li>Square</li>
                    <li>Slotted</li>
                  </ul>
                  <h4 className="font-medium mt-4 mb-2">Materials:</h4>
                  <p>Aluminum, 316 Stainless Steel</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Finishes:</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Polished</li>
                    <li>Brushed</li>
                    <li>Matte Black</li>
                    <li>Gold Anodized (on request)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
            <div className="mt-4">
              <h4 className="font-medium mb-2">Accessories Include:</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                <span className="bg-gray-100 px-3 py-1 rounded">90°/180° Connectors</span>
                <span className="bg-gray-100 px-3 py-1 rounded">End Caps</span>
                <span className="bg-gray-100 px-3 py-1 rounded">Adjustable Connectors</span>
                <span className="bg-gray-100 px-3 py-1 rounded">Rubber Lining</span>
              </div>
            </div>
          </motion.div>

          {/* Accessories & Mounting Hardware */}
          <motion.div 
            className="bg-white p-6 rounded-lg shadow-md mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-xl font-semibold mb-4">Accessories & Mounting Hardware</h3>
            <div className="grid md:grid-cols-4 gap-6 mb-6">
            <div className="md:col-span-1">
              <ImageWithCaption 
                src={images.mountingHardware}
                alt="Mounting Hardware"
                caption="Complete mounting hardware kit for glass installation"
              />
            </div>
            <div className="md:col-span-3">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-gray-50 p-4 rounded">
                  <h4 className="font-medium mb-2">Mounting Hardware</h4>
                  <ul className="space-y-1">
                    <li>• Anchor bolts</li>
                    <li>• Expansion bolts</li>
                    <li>• Rubber spacers</li>
                    <li>• Leveling shims</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-4 rounded">
                  <h4 className="font-medium mb-2">Brackets</h4>
                  <ul className="space-y-1">
                    <li>• Side mounting brackets</li>
                    <li>• Floor mounting brackets</li>
                    <li>• Cover plates</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-4 rounded">
                  <h4 className="font-medium mb-2">Finishes</h4>
                  <ul className="space-y-1">
                    <li>• Polished Stainless</li>
                    <li>• Brushed/Satin</li>
                    <li>• Matte Black</li>
                    <li>• Gold/Bronze (on request)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          </motion.div>

          {/* Compliance */}
          <motion.div 
            className="bg-white p-6 rounded-lg shadow-md"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <h3 className="text-xl font-semibold mb-4">Compliance & Certifications</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium mb-2">Safety Standards</h4>
                <ul className="space-y-2">
                  <li>• SABS/SANS Compliant</li>
                  <li>• ISO Certified</li>
                  <li>• EN Standards</li>
                  <li>• ASTM C1048 (Tempered Glass)</li>
                </ul>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                <h4 className="font-medium text-blue-800 mb-2">Engineering Support</h4>
                <p className="text-blue-700">
                  Structural engineer–approved components available for all installations. Contact us for custom engineering solutions.
                </p>
              </div>
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
};

export default Specifications;
