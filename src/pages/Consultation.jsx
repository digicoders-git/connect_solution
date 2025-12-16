import React, { useState } from 'react';
import { Phone, Mail, User, MessageSquare, Send, CheckCircle } from 'lucide-react';
import Slider from '../components/Slider';

const Consultation = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    business: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState({ type: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone || !formData.email) {
      setFormStatus({
        type: 'error',
        message: 'Please fill in all required fields.'
      });
      return;
    }

    setIsSubmitting(true);
    
    setTimeout(() => {
      setFormStatus({
        type: 'success',
        message: 'Thank you! We will contact you within 24 hours for your free consultation.'
      });
      setFormData({ name: '', phone: '', email: '', business: '', message: '' });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-white">
      <Slider 
        h1="Get Your Free Consultation"
        subH1="Expert telemarketing advice tailored to your business needs"
        img1="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1920&q=80"
        
        h2="Boost Your Sales Today"
        subH2="Professional consultation to maximize your business growth"
        img2="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1920&q=80"
        
        h3="Start Your Success Journey"
        subH3="Connect with our experts and transform your business"
        img3="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1920&q=80"
      />

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1FA4C4] mb-4">
              Schedule Your Free Consultation
            </h2>
            <p className="text-lg text-gray-600">
              Fill out the form below and our experts will contact you within 24 hours
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 shadow-lg">
            {formStatus.message && (
              <div className={`mb-6 p-4 rounded-lg flex items-center gap-3 ${
                formStatus.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
              }`}>
                {formStatus.type === 'success' ? 
                  <CheckCircle className="w-5 h-5" /> : 
                  <MessageSquare className="w-5 h-5" />
                }
                {formStatus.message}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-[#1FA4C4] mb-2">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      className="w-full pl-10 pr-4 py-3 rounded-lg border-2 border-gray-300 focus:border-[#1FA4C4] focus:outline-none transition-all duration-300"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#1FA4C4] mb-2">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter your phone number"
                      className="w-full pl-10 pr-4 py-3 rounded-lg border-2 border-gray-300 focus:border-[#1FA4C4] focus:outline-none transition-all duration-300"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-[#1FA4C4] mb-2">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email address"
                      className="w-full pl-10 pr-4 py-3 rounded-lg border-2 border-gray-300 focus:border-[#1FA4C4] focus:outline-none transition-all duration-300"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#1FA4C4] mb-2">
                    Business Type
                  </label>
                  <div className="relative">
                    <select
                      name="business"
                      value={formData.business}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-[#1FA4C4] focus:outline-none transition-all duration-300 bg-white appearance-none cursor-pointer hover:border-[#F7941D] focus:ring-2 focus:ring-[#1FA4C4]/20"
                    >
                      <option value="" className="text-gray-500">Select your business type</option>
                      <option value="real-estate" className="text-gray-800 py-2">Real Estate</option>
                      <option value="education" className="text-gray-800 py-2">Education</option>
                      <option value="finance" className="text-gray-800 py-2">Finance & Insurance</option>
                      <option value="healthcare" className="text-gray-800 py-2">Healthcare</option>
                      <option value="it-services" className="text-gray-800 py-2">IT Services</option>
                      <option value="ecommerce" className="text-gray-800 py-2">E-commerce</option>
                      <option value="other" className="text-gray-800 py-2">Other</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#1FA4C4] mb-2">
                  Message (Optional)
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your requirements..."
                    rows="4"
                    className="w-full pl-10 pr-4 py-3 rounded-lg border-2 border-gray-300 focus:border-[#1FA4C4] focus:outline-none transition-all duration-300 resize-none"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#F7941D] text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-[#d87a15] transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    Submitting...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Get Free Consultation
                  </>
                )}
              </button>
            </form>
          </div>

          <div className="mt-12 text-center">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6 bg-white rounded-lg shadow-md">
                <CheckCircle className="w-12 h-12 text-[#7BC043] mx-auto mb-4" />
                <h3 className="font-bold text-[#1FA4C4] mb-2">Free Consultation</h3>
                <p className="text-gray-600 text-sm">No hidden charges or commitments</p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-md">
                <Phone className="w-12 h-12 text-[#7BC043] mx-auto mb-4" />
                <h3 className="font-bold text-[#1FA4C4] mb-2">Quick Response</h3>
                <p className="text-gray-600 text-sm">We'll contact you within 24 hours</p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-md">
                <User className="w-12 h-12 text-[#7BC043] mx-auto mb-4" />
                <h3 className="font-bold text-[#1FA4C4] mb-2">Expert Advice</h3>
                <p className="text-gray-600 text-sm">Personalized strategy for your business</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Consultation;