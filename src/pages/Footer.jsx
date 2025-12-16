import React, { useState } from 'react';
import { Facebook, Instagram, Twitter, Linkedin, Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [hoveredLink, setHoveredLink] = useState(null);
  const [hoveredIcon, setHoveredIcon] = useState(null);

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/Services' },
    { name: 'Contact Us', href: '/contact' }
  ];

  const services = [
    { name: 'Telemarketing', href: '/telemarketing' },
    { name: 'Telesales', href: '/telesales' },
    { name: 'Lead Generation', href: '/lead-generation' }
  ];

  return (
    <footer className="bg-[#0F5F73] text-[#E5E7EB] relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-[#7BC043] rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#F7941D] rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Column 1 - About Connect Solution */}
          <div className="transform transition-all duration-500 hover:translate-y-[-4px]">
            <h3 className="text-white text-lg font-bold mb-4 relative inline-block">
              About Connect Solution
              <span className="absolute bottom-[-8px] left-0 w-12 h-1 bg-[#7BC043] transition-all duration-300"></span>
            </h3>
            <p className="text-[#E5E7EB] leading-relaxed text-sm opacity-0 animate-[fadeIn_0.8s_ease-in-out_0.2s_forwards]">
              Connect Solution is a professional telemarketing and telesales service provider dedicated to helping businesses generate quality leads, increase sales, and build long-term customer relationships through ethical and result-driven calling strategies.
            </p>
          </div>

          {/* Column 2 - Quick Links */}
          <div className="transform transition-all duration-500 hover:translate-y-[-4px]">
            <h3 className="text-white text-lg font-bold mb-4 relative inline-block">
              Quick Links
              <span className="absolute bottom-[-8px] left-0 w-12 h-1 bg-[#7BC043] transition-all duration-300"></span>
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li 
                  key={index}
                  className="opacity-0 animate-[fadeIn_0.6s_ease-in-out_forwards]"
                  style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                >
                  <Link
                    to={link.href}
                    onMouseEnter={() => setHoveredLink(link.name)}
                    onMouseLeave={() => setHoveredLink(null)}
                    className={`text-sm transition-all duration-300 inline-block ${
                      hoveredLink === link.name 
                        ? 'text-[#F7941D] translate-x-2 underline' 
                        : 'text-[#E5E7EB] hover:text-white'
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Our Services */}
          <div className="transform transition-all duration-500 hover:translate-y-[-4px]">
            <h3 className="text-white text-lg font-bold mb-4 relative inline-block">
              Our Services
              <span className="absolute bottom-[-8px] left-0 w-12 h-1 bg-[#7BC043] transition-all duration-300"></span>
            </h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li 
                  key={index}
                  className="opacity-0 animate-[fadeIn_0.6s_ease-in-out_forwards]"
                  style={{ animationDelay: `${0.4 + index * 0.1}s` }}
                >
                  <Link
                    to={service.href}
                    onMouseEnter={() => setHoveredLink(service.name)}
                    onMouseLeave={() => setHoveredLink(null)}
                    className={`text-sm transition-all duration-300 inline-block ${
                      hoveredLink === service.name 
                        ? 'text-[#F7941D] translate-x-2' 
                        : 'text-[#E5E7EB] hover:text-white'
                    }`}
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Contact Details */}
          <div className="transform transition-all duration-500 hover:translate-y-[-4px]">
            <h3 className="text-white text-lg font-bold mb-4 relative inline-block">
              Contact Us
              <span className="absolute bottom-[-8px] left-0 w-12 h-1 bg-[#7BC043] transition-all duration-300"></span>
            </h3>
            <div className="space-y-4">
              {/* Phone */}
              <div 
                className="flex items-start gap-3 opacity-0 animate-[fadeIn_0.6s_ease-in-out_0.5s_forwards] group cursor-pointer"
                onMouseEnter={() => setHoveredIcon('phone')}
                onMouseLeave={() => setHoveredIcon(null)}
              >
                <Phone 
                  className={`w-5 h-5 mt-1 transition-all duration-300 ${
                    hoveredIcon === 'phone' ? 'text-[#F7941D] scale-110 rotate-12' : 'text-white'
                  }`} 
                />
                <div>
                  <p className="text-sm text-[#E5E7EB] group-hover:text-white transition-colors">
                    +91 88810 55055
                  </p>
                </div>
              </div>

              {/* Email */}
              <div 
                className="flex items-start gap-3 opacity-0 animate-[fadeIn_0.6s_ease-in-out_0.6s_forwards] group cursor-pointer"
                onMouseEnter={() => setHoveredIcon('email')}
                onMouseLeave={() => setHoveredIcon(null)}
              >
                <Mail 
                  className={`w-5 h-5 mt-1 transition-all duration-300 ${
                    hoveredIcon === 'email' ? 'text-[#F7941D] scale-110' : 'text-white'
                  }`} 
                />
                <div>
                  <p className="text-sm text-[#E5E7EB] break-words group-hover:text-white transition-colors">
                    jiteshdhameja191990@gmail.com
                  </p>
                </div>
              </div>

              {/* Address */}
              <div 
                className="flex items-start gap-3 opacity-0 animate-[fadeIn_0.6s_ease-in-out_0.7s_forwards] group"
                onMouseEnter={() => setHoveredIcon('location')}
                onMouseLeave={() => setHoveredIcon(null)}
              >
                <MapPin 
                  className={`w-5 h-5 mt-1 transition-all duration-300 flex-shrink-0 ${
                    hoveredIcon === 'location' ? 'text-[#F7941D] scale-110' : 'text-white'
                  }`} 
                />
                <div>
                  <p className="text-sm text-[#E5E7EB] leading-relaxed group-hover:text-white transition-colors">
                    House No – B-3/010-CC<br />
                    House ID – 9157G54086<br />
                    Zone 4, Ward – Gomti Nagar (110)
                  </p>
                </div>
              </div>

              {/* Social Media */}
              <div className="pt-2 opacity-0 animate-[fadeIn_0.6s_ease-in-out_0.8s_forwards] flex gap-3">
                <a
                  href="https://www.facebook.com/profile.php?id=100010823233843"
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => setHoveredIcon('facebook')}
                  onMouseLeave={() => setHoveredIcon(null)}
                  className={`inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 transition-all duration-300 ${
                    hoveredIcon === 'facebook' 
                      ? 'bg-[#1877F2] scale-110 rotate-12 shadow-lg shadow-[#1877F2]/50' 
                      : 'hover:bg-white/20'
                  }`}
                >
                  <Facebook className="w-5 h-5 text-white" />
                </a>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => setHoveredIcon('instagram')}
                  onMouseLeave={() => setHoveredIcon(null)}
                  className={`inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 transition-all duration-300 ${
                    hoveredIcon === 'instagram' 
                      ? 'bg-[#E4405F] scale-110 rotate-12 shadow-lg shadow-[#E4405F]/50' 
                      : 'hover:bg-white/20'
                  }`}
                >
                  <Instagram className="w-5 h-5 text-white" />
                </a>
                <a
                  href="https://twitter.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => setHoveredIcon('twitter')}
                  onMouseLeave={() => setHoveredIcon(null)}
                  className={`inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 transition-all duration-300 ${
                    hoveredIcon === 'twitter' 
                      ? 'bg-[#1DA1F2] scale-110 rotate-12 shadow-lg shadow-[#1DA1F2]/50' 
                      : 'hover:bg-white/20'
                  }`}
                >
                  <Twitter className="w-5 h-5 text-white" />
                </a>
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => setHoveredIcon('linkedin')}
                  onMouseLeave={() => setHoveredIcon(null)}
                  className={`inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 transition-all duration-300 ${
                    hoveredIcon === 'linkedin' 
                      ? 'bg-[#0A66C2] scale-110 rotate-12 shadow-lg shadow-[#0A66C2]/50' 
                      : 'hover:bg-white/20'
                  }`}
                >
                  <Linkedin className="w-5 h-5 text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider Line */}
        <div className="my-8 lg:my-12 opacity-0 animate-[fadeIn_1s_ease-in-out_0.9s_forwards]">
          <div className="h-[2px] bg-gradient-to-r from-transparent via-[#7BC043] to-transparent opacity-50"></div>
        </div>

        {/* Bottom Footer - Copyright */}
        <div className="text-center opacity-0 animate-[fadeIn_1s_ease-in-out_1s_forwards]">
          <p className="text-sm text-[#E5E7EB]">
            © 2025 Connect Solution All Rights Reserved | Design and Developed By <a target='_blank' href="https://digicoders.in"><span>#TeamDigiCoders</span></a>
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;