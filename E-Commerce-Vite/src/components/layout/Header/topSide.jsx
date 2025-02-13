import React from 'react';
import { Phone, Mail, Instagram, Facebook, Twitter } from 'lucide-react';

const NotificationBar = () => {
  return (
    <div className="hidden md:block w-screen bg-blue-900 text-white py-2">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center text-sm">
          {/* Contact Information */}
          <div className="flex items-center space-x-6">
            <div className="flex items-center">
              <Phone className="w-4 h-4 mr-2" />
              <span>(225) 555-0118</span>
            </div>
            <div className="flex items-center">
              <Mail className="w-4 h-4 mr-2" />
              <span>michelle.rivera@example.com</span>
            </div>
          </div>

          {/* Center Text */}
          <div className="text-center">
            <span>Follow Us and get a chance to win 50% off</span>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-4">
            <span className="mr-2">Follow Us:</span>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-300">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="hover:text-gray-300">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="hover:text-gray-300">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationBar;