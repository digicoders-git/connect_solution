import { useState } from 'react';
import { Phone, Users, Target, TrendingUp, Headphones, Calendar, CheckCircle, BarChart, Shield, DollarSign, FileText, Zap, Building2, GraduationCap, Wallet, Heart, Laptop, ShoppingCart, Star, Quote } from 'lucide-react';
import Slider from '../components/Slider';
import front from '../assets/front.jpg'
import img1 from '../assets/img1.jpg'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.jpg'
import img4 from '../assets/img4.jpg'
import img5 from '../assets/img5.jpg'
import img7 from '../assets/img7.jpg'
import { NavLink } from 'react-router-dom';
export default function Home() {
  const [selectedImage, setSelectedImage] = useState(null);

  const services = [
    { icon: <Phone className="w-8 h-8" />, title: "Outbound Telemarketing", desc: "Proactive outreach to generate quality leads" },
    { icon: <Headphones className="w-8 h-8" />, title: "Inbound Calling", desc: "Professional handling of customer inquiries" },
    { icon: <Target className="w-8 h-8" />, title: "Lead Generation", desc: "Targeted campaigns for qualified prospects" },
    { icon: <TrendingUp className="w-8 h-8" />, title: "Telesales", desc: "Converting prospects into loyal customers" },
    { icon: <Users className="w-8 h-8" />, title: "Customer Support", desc: "24/7 support for customer satisfaction" },
    { icon: <Calendar className="w-8 h-8" />, title: "Appointment Scheduling", desc: "Efficient calendar management for your team" }
  ];

  const whyChooseUs = [
    { icon: <Users className="w-12 h-12" />, title: "Experienced Telecalling Team", desc: "Skilled professionals with proven track records" },
    { icon: <Target className="w-12 h-12" />, title: "Result-Oriented Approach", desc: "Focused on delivering measurable outcomes" },
    { icon: <Shield className="w-12 h-12" />, title: "Ethical Sales Practices", desc: "Transparent and honest communication always" },
    { icon: <Zap className="w-12 h-12" />, title: "Customized Strategies", desc: "Tailored solutions for your unique needs" },
    { icon: <DollarSign className="w-12 h-12" />, title: "Affordable Pricing", desc: "Cost-effective packages for every budget" },
    { icon: <FileText className="w-12 h-12" />, title: "Regular Performance Reports", desc: "Detailed insights and analytics tracking" }
  ];

  const processSteps = [
    { number: 1, title: "Requirement Analysis", icon: <BarChart className="w-6 h-6" /> },
    { number: 2, title: "Strategy Planning", icon: <Target className="w-6 h-6" /> },
    { number: 3, title: "Campaign Execution", icon: <Zap className="w-6 h-6" /> },
    { number: 4, title: "Lead Qualification", icon: <CheckCircle className="w-6 h-6" /> },
    { number: 5, title: "Reporting & Optimization", icon: <TrendingUp className="w-6 h-6" /> }
  ];

  const industries = [
    { icon: <Building2 className="w-10 h-10" />, name: "Real Estate" },
    { icon: <GraduationCap className="w-10 h-10" />, name: "Education" },
    { icon: <Wallet className="w-10 h-10" />, name: "Finance & Insurance" },
    { icon: <Heart className="w-10 h-10" />, name: "Healthcare" },
    { icon: <Laptop className="w-10 h-10" />, name: "IT Services" },
    { icon: <ShoppingCart className="w-10 h-10" />, name: "E-commerce" }
  ];

  const galleryImages = [
    img7,
    img1,
    img2,
    img3,
    img4,
    img5,
  ];

  const testimonials = [
    { name: "Rajesh Kumar", designation: "CEO, Real Estate Co.", text: "Connect Solution helped us generate 200+ qualified leads in just 2 months. Highly recommended!", rating: 5 },
    { name: "Priya Sharma", designation: "Marketing Head, EdTech", text: "Professional team with excellent communication skills. Our sales increased by 40%.", rating: 5 },
    { name: "Amit Patel", designation: "Founder, Finance Solutions", text: "Their ethical approach and transparent reporting made all the difference. Great ROI!", rating: 5 }
  ];

  return (
    <div className="w-full overflow-hidden">
      {/* Hero Slider */}
      <Slider 
        h1="Connect Solution - Your Telemarketing Partner"
        subH1="Professional telecalling services to boost your business growth"
        img1="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1920&q=80"
        
        h2="Generate Quality Leads with Expert Calling"
        subH2="Experienced team delivering measurable results for your business"
        img2="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1920&q=80"
        
        h3="Scale Your Business with Smart Telemarketing"
        subH3="Trusted by businesses across industries for reliable lead generation"
        img3="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1920&q=80"
      />

      {/* About Section */}
      <section id="about" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-slide-in-left">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1FA4C4]">
                About <span className="text-[#7BC043]">Connect Solution</span>
              </h2>
              <p className="text-lg text-[#1F2937] leading-relaxed">
                <span className='font-semibold text-[#7BC043]'>Connect Solution </span>is a trusted telemarketing and telesales service provider dedicated to helping businesses reach the right audience. We offer reliable <span className="font-semibold text-[#1FA4C4]">outbound and inbound calling services</span> focused on meaningful conversations, quality leads, and measurable growth.
              </p>
              <p className="text-lg text-[#6B7280] leading-relaxed">
                With a skilled team and well-planned calling processes, we support brands in expanding their customer reach while following ethical communication practices. Our method is clear — understand client objectives, engage customers effectively, and deliver consistent results.
              </p>
              <div className="flex gap-4 pt-4">
                <NavLink to='/about' className="px-6 py-3 rounded-lg font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg" style={{ backgroundColor: '#F7941D' }}>
                  Learn More
                </NavLink>
              </div>
            </div>
            <div className="animate-slide-in-right">
              <img 
                src={front} 
                alt="About Connect Solution" 
                className="w-full rounded-lg shadow-xl border-4 border-[#F7941D] hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1FA4C4] mb-4">Our Services</h2>
            <p className="text-lg text-gray-600">Comprehensive telemarketing solutions for your business growth</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:border-[#7BC043] border-2 border-transparent group animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-[#1FA4C4] group-hover:text-[#F7941D] transition-colors duration-300 mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-[#1FA4C4] mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why-choose" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1FA4C4] mb-4">Why Choose Us</h2>
            <div className="w-24 h-1 bg-[#F7941D] mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <div 
                key={index}
                className="text-center p-6 rounded-lg hover:bg-gray-50 transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-[#7BC043] inline-block mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-[#1FA4C4] mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-16 md:py-24 bg-gradient-to-br from-[#1FA4C4] to-[#1890b0] relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">Our Process</h2>
            <div className="w-24 h-1 bg-[#F7941D] mx-auto mb-4"></div>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
              Simple, transparent, and result-driven approach to telemarketing success
            </p>
          </div>

          {/* Desktop View */}
          <div className="hidden md:block relative">
            <div className="flex justify-between items-start relative">
              {/* Connection Line */}
              <div className="absolute top-16 left-0 right-0 h-1 bg-white/20" style={{ width: 'calc(100% - 80px)', left: '40px' }}></div>
              
              {processSteps.map((step, index) => (
                <div
                  key={index}
                  className="relative flex flex-col items-center text-center w-48 animate-scale-in group"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  {/* Step Circle with Icon */}
                  <div className="relative mb-6">
                    <div className="w-32 h-32 rounded-full bg-white shadow-2xl flex items-center justify-center border-4 border-[#7BC043] text-[#F7941D] transition-all duration-300 group-hover:scale-110 group-hover:border-[#F7941D] group-hover:shadow-[0_0_30px_rgba(247,148,29,0.5)] relative z-10">
                      <div className="text-center">
                        <div className="mb-1">{step.icon}</div>
                        <div className="text-2xl font-bold text-[#1FA4C4]">{step.number}</div>
                      </div>
                    </div>
                    {/* Pulse Effect */}
                    <div className="absolute inset-0 rounded-full bg-[#7BC043] opacity-0 group-hover:opacity-20 group-hover:scale-125 transition-all duration-500"></div>
                  </div>

                  {/* Step Title */}
                  <div className="bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg border border-white/20 group-hover:bg-white/20 transition-all duration-300">
                    <h3 className="text-white font-semibold text-base leading-tight">
                      {step.title}
                    </h3>
                  </div>

                  {/* Arrow Connector */}
                  {index < processSteps.length - 1 && (
                    <div className="absolute top-16 -right-12 text-white/40 text-2xl animate-bounce-horizontal">
                      →
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Mobile View */}
          <div className="md:hidden space-y-6">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="relative animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4 bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300">
                  {/* Step Circle */}
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 rounded-full bg-white shadow-lg flex items-center justify-center border-4 border-[#7BC043] text-[#F7941D]">
                      <div className="text-center">
                        <div className="mb-1">{step.icon}</div>
                        <div className="text-xl font-bold text-[#1FA4C4]">{step.number}</div>
                      </div>
                    </div>
                  </div>

                  {/* Step Content */}
                  <div className="flex-1 pt-3">
                    <h3 className="text-white font-semibold text-lg mb-2">{step.title}</h3>
                    <p className="text-white/80 text-sm">Step {step.number} of {processSteps.length}</p>
                  </div>
                </div>

                {/* Vertical Connector */}
                {index < processSteps.length - 1 && (
                  <div className="flex justify-center py-2">
                    <div className="w-1 h-6 bg-white/20 rounded-full"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <style>{`
          @keyframes bounceHorizontal {
            0%, 100% {
              transform: translateX(0);
            }
            50% {
              transform: translateX(10px);
            }
          }

          .animate-bounce-horizontal {
            animation: bounceHorizontal 2s infinite;
          }
        `}</style>
      </section>

      {/* Industries We Serve */}
      <section id="industries" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1FA4C4] mb-4">Industries We Serve</h2>
            <p className="text-lg text-gray-600">Trusted across multiple sectors</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {industries.map((industry, index) => (
              <div 
                key={index}
                className="p-6 border-2 border-blue-100 rounded-lg text-center hover:shadow-lg hover:shadow-[#F7941D]/20 transition-all duration-300 hover:scale-105 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-[#7BC043] mb-3 flex justify-center">{industry.icon}</div>
                <h3 className="text-sm font-semibold text-[#1FA4C4]">{industry.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1FA4C4] mb-4">Inside Connect Solution</h2>
            <p className="text-lg text-gray-600">A glimpse of our professional work environment and team</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((img, index) => (
              <div 
                key={index}
                className="relative overflow-hidden rounded-lg cursor-pointer group animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedImage(img)}
              >
                <img src={img} alt={`Gallery ${index + 1}`} className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110" />
                <div className="absolute inset-0 bg-[#1FA4C4] opacity-0 group-hover:opacity-60 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-[#F7941D] text-4xl">+</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-[#F7941D]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">Ready to Boost Your Sales?</h2>
          <p className="text-xl text-white mb-8">Let our telemarketing experts help your business grow faster.</p>
          <button className="px-10 py-4 bg-[#1FA4C4] text-white font-semibold rounded-lg text-lg hover:bg-[#7BC043] transition-all duration-300 hover:scale-105 hover:shadow-xl">
            Contact Us Now
          </button>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1FA4C4] mb-4">What Our Clients Say</h2>
            <p className="text-lg text-gray-600">Real feedback from satisfied customers</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <Quote className="w-10 h-10 text-[#F7941D] mb-4" />
                <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                <div className="flex items-center gap-2 mb-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#F7941D] text-[#F7941D]" />
                  ))}
                </div>
                <h4 className="font-bold text-[#1FA4C4]">{testimonial.name}</h4>
                <p className="text-sm text-gray-500">{testimonial.designation}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <img src={selectedImage} alt="Gallery" className="max-w-full max-h-full rounded-lg" />
          <button 
            className="absolute top-4 right-4 text-white text-4xl hover:text-[#F7941D] transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            ×
          </button>
        </div>
      )}

      <style>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

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

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-slide-in-left {
          animation: slideInLeft 0.8s ease-out;
        }

        .animate-slide-in-right {
          animation: slideInRight 0.8s ease-out;
        }

        .animate-fade-in {
          animation: fadeIn 0.8s ease-out;
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out backwards;
        }

        .animate-scale-in {
          animation: scaleIn 0.5s ease-out backwards;
        }
      `}</style>
    </div>
  );
}