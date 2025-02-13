import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    'Company Info': ['About Us', 'Carrier', 'We are hiring', 'Blog'],
    'Legal': ['About Us', 'Carrier', 'We are hiring', 'Blog'],
    'Features': ['Business Marketing', 'User Analytic', 'Live Chat', 'Unlimited Support'],
    'Resources': ['IOS & Android', 'Watch a Demo', 'Customers', 'API']
  };

  return (
    <footer className="bg-white py-12 mt-auto">
      <div className="max-w-6xl mx-auto px-4">
        {/* Top Section */}
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-2xl font-bold">Bandage</h2>
          <div className="flex space-x-4">
            <a href="#" className="text-blue-500 hover:text-blue-600">
              <Facebook className="w-6 h-6" />
            </a>
            <a href="#" className="text-blue-500 hover:text-blue-600">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="#" className="text-blue-500 hover:text-blue-600">
              <Twitter className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-bold mb-4">{title}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a 
                      href="#" 
                      className="text-gray-600 hover:text-gray-900"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter Section */}
          <div>
            <h3 className="font-bold mb-4">Get In Touch</h3>
            <div className="space-y-4">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="flex-1 px-4 py-2 border border-r-0 rounded-l focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
                <button className="px-6 py-2 bg-blue-500 text-white rounded-r hover:bg-blue-600 transition-colors">
                  Subscribe
                </button>
              </div>
              <p className="text-gray-500 text-sm">
                Lore imp sum dolor Amit
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t">
          <p className="text-gray-600 text-sm">
            Made With Love By Finland All Right Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
