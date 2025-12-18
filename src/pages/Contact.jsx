import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Mail, Send, CheckCircle, AlertCircle, Clock, ChevronDown } from 'lucide-react';
import Slider from '../components/Slider';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const Contact = () => {
  const [isVisible, setIsVisible] = useState({});
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[data-animate]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Office Address',
      content: 'House No – B-3/010-CC House ID – 9157G54086',
      subContent: 'Zone 4, Ward – Gomti Nagar (110)',
      color: '#7BC043'
    },
    {
      icon: Phone,
      title: 'Phone Number',
      content: '+91 8881055055 / 8881033033',
      subContent: 'Available during business hours',
      color: '#7BC043'
    },
    {
      icon: Mail,
      title: 'Email Address',
      content: 'jiteshdhameja191990@gmail.com',
      subContent: 'We usually respond within 24 hours',
      color: '#7BC043'
    }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    // Validation
    if (!formData.name || !formData.mobile || !formData.email || !formData.message) {
      toast.error('Please fill in all required fields.');
      return;
    }

    setIsSubmitting(true);
    setFormStatus({ type: '', message: '' });

    try {
      const response = await axios.post(`${import.meta.env.VITE_APP_BASE_URL}/contact/create`, formData);
      
      if (response.status === 200 || response.status === 201) {
        toast.success('Thank you for contacting us! We will get back to you shortly.');
        setFormData({ name: '', mobile: '', email: '', message: '' });
      }
    } catch (error) {
      if (error.response) {
        toast.error(`Error: ${error.response.data.message || 'Failed to send message'}`);
      } else if (error.request) {
        toast.error('Network error. Please check your connection and try again.');
      } else {
        toast.error('Something went wrong. Please try again.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Page Banner */}
      <Slider 
        h1="Get in Touch with Connect Solution"
        subH1="We're here to help you grow your business"
        img1="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920&q=80"
        
        h2="Let's Start a Conversation"
        subH2="Reach out to our team for customized telemarketing solutions"
        img2="https://images.unsplash.com/photo-1534536281715-e28d76689b4d?w=1920&q=80"
        
        h3="Your Success is Our Priority"
        subH3="Contact us today and take the first step towards business growth"
        img3="https://images.unsplash.com/photo-1596524430615-b46475ddff6e?w=1920&q=80"
      />

      {/* Contact Info Cards */}
      <section 
        id="contact-info" 
        data-animate
        className={`py-16 px-6 bg-[#F8FAFC] transition-all duration-1000 ${
          isVisible['contact-info'] ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              
              return (
                <div
                  key={index}
                  className={`group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl border-2 border-transparent hover:border-[#F7941D] transform hover:-translate-y-2 transition-all duration-500 ${
                    isVisible['contact-info'] 
                      ? 'translate-y-0 opacity-100' 
                      : 'translate-y-20 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="relative mb-6">
                    <div 
                      className="w-16 h-16 rounded-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg"
                      style={{ backgroundColor: info.color }}
                    >
                      <Icon className="w-8 h-8 text-white" strokeWidth={2} />
                    </div>
                    
                    {/* Animated pulse ring */}
                    <div className="absolute inset-0 w-16 h-16 rounded-2xl animate-ping opacity-20" style={{ backgroundColor: info.color }}></div>
                  </div>

                  <h3 className="text-xl font-bold text-[#1FA4C4] mb-4">
                    {info.title}
                  </h3>

                  {info.title === 'Phone Number' ? (
                    <a 
                      href={`tel:${info.content}`}
                      className="text-[#1F2937] font-semibold mb-2 break-words hover:text-[#F7941D] transition-colors duration-300 cursor-pointer"
                    >
                      {info.content}
                    </a>
                  ) : info.title === 'Email Address' ? (
                    <a 
                      href={`mailto:${info.content}`}
                      className="text-[#1F2937] font-semibold mb-2 break-words hover:text-[#F7941D] transition-colors duration-300 cursor-pointer"
                    >
                      {info.content}
                    </a>
                  ) : (
                    <p className="text-[#1F2937] font-semibold mb-2 break-words">
                      {info.content}
                    </p>
                  )}

                  <p className="text-sm text-gray-600 flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#7BC043]" />
                    {info.subContent}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section 
        id="contact-form" 
        data-animate
        className={`py-16 px-6 bg-white transition-all duration-1000 ${
          isVisible['contact-form'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
            {/* Left: Intro Text */}
            <div className="lg:col-span-2 order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1FA4C4] mb-6">
                Get in Touch with Connect Solution
              </h2>
              <p className="text-lg text-[#1F2937] leading-relaxed mb-8">
                Have questions about our telemarketing services or want to discuss your business requirements? Fill out the form below and our team will get back to you shortly.
              </p>

              {/* Trust Indicators */}
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#7BC043] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-[#1F2937]">Quick response within 24 hours</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#7BC043] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-[#1F2937]">Free consultation and strategy discussion</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#7BC043] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-[#1F2937]">Professional and transparent communication</p>
                </div>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="lg:col-span-3 order-1 lg:order-2">
              <div className="bg-[#F8FAFC] rounded-2xl p-8 shadow-lg">
                <div className="space-y-6">
                  {/* Name Field */}
                  <div className="transform transition-all duration-300 hover:scale-[1.02]">
                    <label className="block text-sm font-semibold text-[#1FA4C4] mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-[#1FA4C4] focus:outline-none transition-all duration-300 bg-white"
                    />
                  </div>

                  {/* Phone Field */}
                  <div className="transform transition-all duration-300 hover:scale-[1.02]">
                    <label className="block text-sm font-semibold text-[#1FA4C4] mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleChange}
                      placeholder="Enter your contact number"
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-[#1FA4C4] focus:outline-none transition-all duration-300 bg-white"
                    />
                  </div>

                  {/* Email Field */}
                  <div className="transform transition-all duration-300 hover:scale-[1.02]">
                    <label className="block text-sm font-semibold text-[#1FA4C4] mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email address"
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-[#1FA4C4] focus:outline-none transition-all duration-300 bg-white"
                    />
                  </div>

                  {/* Message Field */}
                  <div className="transform transition-all duration-300 hover:scale-[1.02]">
                    <label className="block text-sm font-semibold text-[#1FA4C4] mb-2">
                      Your Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your requirement"
                      rows="5"
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-[#1FA4C4] focus:outline-none transition-all duration-300 resize-none bg-white"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="w-full bg-[#F7941D] hover:bg-[#1FA4C4] text-white font-bold py-4 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        Submit
                        <Send className="w-5 h-5" />
                      </>
                    )}
                  </button>

                  {/* Form Status Message */}
                  {formStatus.message && (
                    <div className={`p-4 rounded-lg flex items-start gap-3 animate-slide-down ${
                      formStatus.type === 'success' 
                        ? 'bg-green-50 border border-green-200' 
                        : 'bg-red-50 border border-red-200'
                    }`}>
                      {formStatus.type === 'success' ? (
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      ) : (
                        <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                      )}
                      <p className={formStatus.type === 'success' ? 'text-green-800' : 'text-red-800'}>
                        {formStatus.message}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Map Section */}
      <section 
        id="map" 
        data-animate
        className={`py-16 px-6 bg-[#F8FAFC] transition-all duration-1000 ${
          isVisible.map ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1FA4C4] mb-4">
              Find Us on Map
            </h2>
            <p className="text-lg text-[#1F2937]">
              Connect Solution – Gomti Nagar, Lucknow
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-[#1FA4C4]/20">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.0982677938973!2d80.99491631504419!3d26.865157183144685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd991f32b16b%3A0x93ccba8909978be7!2sGomti%20Nagar%2C%20Lucknow%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            ></iframe>
          </div>
        </div>
      </section>

      <ToastContainer 
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      <style jsx>{`
        @keyframes slide-down {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes expand {
          from {
            width: 0;
          }
          to {
            width: 5rem;
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }

        @keyframes float-delayed {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-15px) rotate(-5deg);
          }
        }

        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-slide-down {
          animation: slide-down 0.8s ease-out;
        }

        .animate-slide-up {
          animation: slide-up 0.8s ease-out 0.2s both;
        }

        .animate-expand {
          animation: expand 0.8s ease-out;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 3s ease-in-out infinite;
        }

        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Contact;