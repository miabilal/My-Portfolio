import React from 'react';
import { Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { contactInfo } from '@/data/portfolio';
import VisitorCounter from '@/components/VisitorCounter';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: `https://github.com/miabilal`, label: 'GitHub' },
    { icon: Linkedin, href: `https://www.linkedin.com/in/miabilal/`, label: 'LinkedIn' },
    { icon: Mail, href: `mailto:${contactInfo.email}`, label: 'Email' },
    { icon: Phone, href: `tel:${contactInfo.phone}`, label: 'Phone' }
  ];
  

  return (
    <footer className="bg-gray-900 dark:bg-gray-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Personal Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-blue-400">Muhammad Bilal</h3>
            <p className="text-gray-300">
              Software Engineer specializing in mobile development, IoT solutions, and full-stack applications.
            </p>
            <div className="flex items-center space-x-2 text-gray-300">
              <MapPin size={16} />
              <span>{contactInfo.location}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">
                  About
                </a>
              </li>
              <li>
                <a href="#experience" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">
                  Experience
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">
                  Projects
                </a>
              </li>
              <li>
                <a href="#skills" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">
                  Skills
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Get In Touch</h4>
            <div className="space-y-2">
              <a
                href={`mailto:${contactInfo.email}`}
                className="flex items-center space-x-2 text-gray-300 hover:text-blue-400 transition-colors duration-200"
              >
                <Mail size={16} />
                <span>{contactInfo.email}</span>
              </a>
              <a
                href={`tel:${contactInfo.phone}`}
                className="flex items-center space-x-2 text-gray-300 hover:text-blue-400 transition-colors duration-200"
              >
                <Phone size={16} />
                <span>{contactInfo.phone}</span>
              </a>
            </div>
            <div className="flex space-x-4 pt-2">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-800 rounded-lg hover:bg-blue-600 transition-colors duration-200"
                  aria-label={label}
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400">
              © {currentYear} Muhammad Bilal. All rights reserved. Built with Next.js & Tailwind CSS.
            </p>
            <VisitorCounter />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
