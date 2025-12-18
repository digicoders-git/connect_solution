import React, { useState } from 'react';
import { User, Mail, Phone, MapPin, Upload, Briefcase, GraduationCap, Send, CheckCircle } from 'lucide-react';
import Slider from '../components/Slider';

const Career = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    location: '',
    cv: null
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState({ type: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData(prev => ({ ...prev, cv: file }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.phone || !formData.position || !formData.cv) {
      setFormStatus({
        type: 'error',
        message: 'Please fill in all required fields and upload your CV.'
      });
      return;
    }

    setIsSubmitting(true);
    
    setTimeout(() => {
      setFormStatus({
        type: 'success',
        message: 'Thank you for your application! We will review your CV and get back to you soon.'
      });
      setFormData({ name: '', email: '', phone: '', position: '', experience: '', location: '', cv: null });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-white">
      <Slider 
        h1="Join Our Team"
        subH1="Build your career with Connect Solution"
        img1="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1920&q=80"
        
        h2="Career Opportunities"
        subH2="Grow professionally in a dynamic telemarketing environment"
        img2="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1920&q=80"
        
        h3="Your Future Starts Here"
        subH3="Apply now and become part of our success story"
        img3="https://images.unsplash.com/photo-1556761175-b46475ddff6e?w=1920&q=80"
      />

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1FA4C4] mb-4">
              Apply for a Position
            </h2>
            <p className="text-lg text-gray-600">
              Submit your application and join our professional telemarketing team
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 shadow-lg">
            {formStatus.message && (
              <div className={`mb-6 p-4 rounded-lg flex items-center gap-3 ${
                formStatus.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
              }`}>
                {formStatus.type === 'success' ? 
                  <CheckCircle className="w-5 h-5" /> : 
                  <User className="w-5 h-5" />
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
              </div>

              <div className="grid md:grid-cols-2 gap-6">
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

                <div>
                  <label className="block text-sm font-semibold text-[#1FA4C4] mb-2">
                    Position Applied For *
                  </label>
                  <div className="relative">
                    <Briefcase className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <select
                      name="position"
                      value={formData.position}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 rounded-lg border-2 border-gray-300 focus:border-[#1FA4C4] focus:outline-none transition-all duration-300 appearance-none cursor-pointer"
                      required
                    >
                      <option value="">Select position</option>
                      <option value="telecaller">Telecaller</option>
                      <option value="team-leader">Team Leader</option>
                      <option value="quality-analyst">Quality Analyst</option>
                      <option value="sales-executive">Sales Executive</option>
                      <option value="customer-support">Customer Support</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-[#1FA4C4] mb-2">
                    Experience
                  </label>
                  <div className="relative">
                    <GraduationCap className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <select
                      name="experience"
                      value={formData.experience}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 rounded-lg border-2 border-gray-300 focus:border-[#1FA4C4] focus:outline-none transition-all duration-300 appearance-none cursor-pointer"
                    >
                      <option value="">Select experience</option>
                      <option value="fresher">Fresher</option>
                      <option value="1-2-years">1-2 Years</option>
                      <option value="3-5-years">3-5 Years</option>
                      <option value="5-plus-years">5+ Years</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#1FA4C4] mb-2">
                    Current Location
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      placeholder="Enter your current location"
                      className="w-full pl-10 pr-4 py-3 rounded-lg border-2 border-gray-300 focus:border-[#1FA4C4] focus:outline-none transition-all duration-300"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#1FA4C4] mb-2">
                  Upload CV/Resume *
                </label>
                <div className="relative">
                  <input
                    type="file"
                    name="cv"
                    onChange={handleFileChange}
                    accept=".pdf,.doc,.docx"
                    className="hidden"
                    id="cv-upload"
                    required
                  />
                  <label
                    htmlFor="cv-upload"
                    className="w-full flex items-center justify-center gap-3 py-4 px-6 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-[#1FA4C4] hover:bg-gray-50 transition-all duration-300"
                  >
                    <Upload className="w-6 h-6 text-gray-400" />
                    <span className="text-gray-600">
                      {formData.cv ? formData.cv.name : 'Click to upload CV/Resume (PDF, DOC, DOCX)'}
                    </span>
                  </label>
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
                    Submitting Application...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Submit Application
                  </>
                )}
              </button>
            </form>
          </div>

          <div className="mt-12 text-center">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6 bg-white rounded-lg shadow-md">
                <Briefcase className="w-12 h-12 text-[#7BC043] mx-auto mb-4" />
                <h3 className="font-bold text-[#1FA4C4] mb-2">Growth Opportunities</h3>
                <p className="text-gray-600 text-sm">Career advancement and skill development</p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-md">
                <User className="w-12 h-12 text-[#7BC043] mx-auto mb-4" />
                <h3 className="font-bold text-[#1FA4C4] mb-2">Professional Environment</h3>
                <p className="text-gray-600 text-sm">Work with experienced professionals</p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-md">
                <CheckCircle className="w-12 h-12 text-[#7BC043] mx-auto mb-4" />
                <h3 className="font-bold text-[#1FA4C4] mb-2">Competitive Benefits</h3>
                <p className="text-gray-600 text-sm">Attractive salary and benefits package</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Career;