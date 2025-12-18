import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.jpg';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Process', href: '/process' },
    { name: 'Why Choose Us', href: '/WhyChooseUs' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Career', href: '/career' },
    { name: 'Contact Us', href: '/contact' }
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'shadow-md' : ''
      } bg-white`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <NavLink
            to="/"
            className="transition-transform duration-300 hover:scale-105"
          >
            <img src={logo} alt="Logo" className="h-14" />
          </NavLink>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-1">
            {menuLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.href}
                className={({ isActive }) =>
                  `relative px-3 py-2 font-medium tracking-wide transition-all duration-300 group
                  ${
                    isActive
                      ? 'text-[#F7941D]'
                      : 'text-[#1FA4C4]'
                  } hover:text-[#F7941D]`
                }
              >
                {link.name}
                <span
                  className="absolute bottom-1 left-0 h-0.5 bg-[#7BC043] transition-all duration-300 w-0 group-hover:w-full"
                ></span>
              </NavLink>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <NavLink to="/consultation">
              <button
                className="px-6 py-2.5 rounded-lg font-medium text-white transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                style={{ backgroundColor: '#F7941D' }}
                onMouseEnter={(e) => (e.target.style.backgroundColor = '#d87a15')}
                onMouseLeave={(e) => (e.target.style.backgroundColor = '#F7941D')}
              >
                Get Consultation
              </button>
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md transition-transform duration-300 hover:scale-110"
              style={{ color: '#1FA4C4' }}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 ease-in-out ${
          isOpen
            ? 'max-h-screen opacity-100'
            : 'max-h-0 opacity-0 overflow-hidden'
        } bg-white shadow-lg`}
      >
        <div className="px-4 pt-2 pb-4 space-y-1">
          {menuLinks.map((link, index) => (
            <NavLink
              key={link.name}
              to={link.href}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `block px-4 py-3 rounded-lg font-medium transition-all duration-300 transform hover:translate-x-2
                ${
                  isActive
                    ? 'text-[#7BC043] bg-green-50'
                    : 'text-[#1FA4C4] hover:bg-blue-50 hover:text-[#F7941D]'
                }`
              }
              style={{
                animation: isOpen
                  ? `slideIn 0.3s ease-out ${index * 0.05}s backwards`
                  : 'none'
              }}
            >
              {link.name}
            </NavLink>
          ))}

          {/* Mobile CTA */}
          <NavLink to="/consultation" onClick={() => setIsOpen(false)}>
            <button
              className="w-full mt-4 px-6 py-3 rounded-lg font-medium text-white transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg"
              style={{
                backgroundColor: '#F7941D',
                animation: isOpen
                  ? `slideIn 0.3s ease-out ${
                      menuLinks.length * 0.05
                    }s backwards`
                  : 'none'
              }}
              onMouseEnter={(e) => (e.target.style.backgroundColor = '#d87a15')}
              onMouseLeave={(e) => (e.target.style.backgroundColor = '#F7941D')}
            >
              Get Consultation
            </button>
          </NavLink>
        </div>
      </div>

      <style>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </nav>
  );
}
