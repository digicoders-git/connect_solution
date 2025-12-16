import { Target, Eye, Shield, Users, TrendingUp, Award, CheckCircle, Phone, Sparkles, Heart, Zap, ArrowRight } from 'lucide-react';
import Slider from '../components/Slider';
import img7 from '../assets/img7.jpg'
import { NavLink } from 'react-router-dom';

export default function About() {
  const values = [
    {
      icon: <Shield className="w-10 h-10" />,
      title: "Integrity",
      desc: "We believe in honest communication and ethical sales practices in every customer interaction."
    },
    {
      icon: <Heart className="w-10 h-10" />,
      title: "Customer Focus",
      desc: "Our calling strategies are designed around customer needs, ensuring meaningful and respectful conversations."
    },
    {
      icon: <Award className="w-10 h-10" />,
      title: "Quality Over Quantity",
      desc: "We focus on generating quality leads, not just high call volumes."
    },
    {
      icon: <TrendingUp className="w-10 h-10" />,
      title: "Continuous Improvement",
      desc: "We regularly train our team and refine our strategies to deliver better results for our clients."
    }
  ];

  const trustPoints = [
    "Experienced and well-trained telecalling professionals",
    "Transparent working process and regular reporting",
    "Customized telemarketing strategies for each client",
    "Strong focus on lead quality and conversion",
    "Affordable and scalable service plans"
  ];

  return (
    <div className="w-full overflow-hidden">
      {/* Hero Section with Breadcrumb */}
      <Slider 
        h1="About Connect Solution"
        subH1="Discover our journey and commitment to excellence"
        img1="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80"
        
        h2="Our Mission & Vision"
        subH2="Building lasting partnerships through professional telemarketing"
        img2="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1920&q=80"
        
        h3="Meet Our Expert Team"
        subH3="Dedicated professionals committed to your business success"
        img3="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1920&q=80"
      />

      {/* Company Introduction */}
      <section className="py-16 md:py-24 bg-white relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-20 right-0 w-96 h-96 bg-[#7BC043]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-[#1FA4C4]/5 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-slide-in-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#1FA4C4]/10 rounded-full text-[#1FA4C4] font-semibold text-sm mb-4">
                <Users className="w-4 h-4" />
                Our Story
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1FA4C4] leading-tight">
                Who <span className="text-[#7BC043] relative">
                  We Are
                  <div className="absolute -bottom-2 left-0 w-full h-1 bg-[#F7941D] rounded-full"></div>
                </span>
              </h2>
              <p className="text-lg text-[#1F2937] leading-relaxed">
                <span className="font-semibold text-[#7BC043]">Connect Solution</span> is a professional telemarketing and telesales service provider committed to helping businesses connect with the right customers. We specialize in <span className="font-semibold text-[#1FA4C4]">outbound and inbound calling solutions</span> that focus on quality conversations, genuine leads, and measurable results.
              </p>
              <p className="text-lg text-[#6B7280] leading-relaxed">
                With a trained team and structured calling strategies, we help brands grow their customer base while maintaining ethical communication standards. Our approach is simple — understand the client's goal, connect with customers effectively, and deliver consistent value.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 pt-6">
                <div className="text-center p-4 bg-gradient-to-br from-[#1FA4C4]/10 to-[#1FA4C4]/5 rounded-xl hover:shadow-lg transition-all duration-300">
                  <div className="text-3xl font-bold text-[#1FA4C4]">500+</div>
                  <div className="text-sm text-[#6B7280] mt-1">Happy Clients</div>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-[#7BC043]/10 to-[#7BC043]/5 rounded-xl hover:shadow-lg transition-all duration-300">
                  <div className="text-3xl font-bold text-[#7BC043]">10K+</div>
                  <div className="text-sm text-[#6B7280] mt-1">Leads Generated</div>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-[#F7941D]/10 to-[#F7941D]/5 rounded-xl hover:shadow-lg transition-all duration-300">
                  <div className="text-3xl font-bold text-[#F7941D]">98%</div>
                  <div className="text-sm text-[#6B7280] mt-1">Success Rate</div>
                </div>
              </div>
            </div>

            <div className="animate-slide-in-right relative">
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-[#F7941D] rounded-full opacity-20 blur-3xl"></div>
              <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-[#7BC043] rounded-full opacity-20 blur-3xl"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-[#7BC043] hover:scale-105 transition-transform duration-500">
                <img 
                  src={img7} 
                  alt="Connect Solution Team" 
                  className="w-full h-full object-cover"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1FA4C4]/80 via-transparent to-transparent flex items-end p-8">
                  <div className="text-white">
                    <h3 className="text-2xl font-bold mb-2">Dedicated Team</h3>
                    <p className="text-white/90">Committed to your success</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-24 bg-[#F8FAFC] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#1FA4C4] via-[#7BC043] to-[#F7941D]"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full text-[#1FA4C4] font-semibold text-sm mb-4 shadow-md">
              <Target className="w-4 h-4" />
              Our Direction
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1FA4C4] mb-4">
              Mission & <span className="text-[#7BC043]">Vision</span>
            </h2>
            <div className="w-24 h-1 bg-[#F7941D] mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission Card */}
            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-[#7BC043] group animate-slide-in-left">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#7BC043] to-[#7BC043]/80 text-white flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <Target className="w-8 h-8" />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#1FA4C4] mb-4 flex items-center gap-2">
                    🎯 Our Mission
                  </h3>
                  <p className="text-[#1F2937] leading-relaxed">
                    To deliver reliable and result-driven telemarketing solutions that help businesses increase sales, build strong customer relationships, and achieve sustainable growth through ethical communication practices.
                  </p>
                </div>
              </div>
              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-[#7BC043] opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-bl-full"></div>
            </div>

            {/* Vision Card */}
            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-[#F7941D] group animate-slide-in-right">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#F7941D] to-[#F7941D]/80 text-white flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <Eye className="w-8 h-8" />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#1FA4C4] mb-4 flex items-center gap-2">
                    👁️ Our Vision
                  </h3>
                  <p className="text-[#1F2937] leading-relaxed">
                    To become a trusted telemarketing partner for businesses across industries by consistently providing high-quality calling services and innovative customer engagement strategies.
                  </p>
                </div>
              </div>
              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-[#F7941D] opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-bl-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 md:py-24 bg-white relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-20 left-20 w-64 h-64 bg-[#F7941D]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-[#7BC043]/5 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#7BC043]/10 rounded-full text-[#7BC043] font-semibold text-sm mb-4">
              <Zap className="w-4 h-4" />
              Core Values
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1FA4C4] mb-4">
              What <span className="text-[#7BC043]">We Stand For</span>
            </h2>
            <div className="w-24 h-1 bg-[#F7941D] mx-auto mb-4 rounded-full"></div>
            <p className="text-lg text-[#6B7280] max-w-2xl mx-auto">
              Our core values guide every interaction and decision we make
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div 
                key={index}
                className="relative p-8 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-[#7BC043] group animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Hover Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#7BC043]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#7BC043] to-[#7BC043]/80 text-white flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-lg">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#1FA4C4] mb-3 group-hover:text-[#F7941D] transition-colors duration-300">
                    {value.title}
                  </h3>
                  <div className="w-12 h-1 bg-[#F7941D] mb-4 rounded-full group-hover:w-full transition-all duration-300"></div>
                  <p className="text-[#6B7280] leading-relaxed">
                    {value.desc}
                  </p>
                </div>

                {/* Decorative Corner */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-[#F7941D] opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-bl-full"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Trust Us */}
      <section className="py-16 md:py-24 bg-[#F8FAFC] relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-1/4 w-64 h-64 border-4 border-[#1FA4C4] rounded-full"></div>
          <div className="absolute bottom-0 right-1/4 w-48 h-48 border-4 border-[#F7941D] rounded-full"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-slide-in-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full text-[#1FA4C4] font-semibold text-sm mb-4 shadow-md">
                <CheckCircle className="w-4 h-4" />
                Why Choose Us
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1FA4C4] leading-tight">
                Why Businesses <span className="text-[#7BC043]">Choose Us</span>
              </h2>
              <div className="w-24 h-1 bg-[#F7941D] rounded-full"></div>

              <div className="space-y-4 pt-4">
                {trustPoints.map((point, index) => (
                  <div 
                    key={index}
                    className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#F7941D] to-[#F7941D]/80 text-white flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <CheckCircle className="w-5 h-5" />
                      </div>
                    </div>
                    <p className="text-[#1F2937] leading-relaxed pt-1 flex-1">
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="animate-slide-in-right relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-[#1FA4C4]">
                    <div className="w-12 h-12 rounded-xl bg-[#1FA4C4] text-white flex items-center justify-center mb-4">
                      <Users className="w-6 h-6" />
                    </div>
                    <div className="text-3xl font-bold text-[#1FA4C4] mb-1">50+</div>
                    <div className="text-sm text-[#6B7280]">Expert Team Members</div>
                  </div>
                  <div className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-[#7BC043]">
                    <div className="w-12 h-12 rounded-xl bg-[#7BC043] text-white flex items-center justify-center mb-4">
                      <Award className="w-6 h-6" />
                    </div>
                    <div className="text-3xl font-bold text-[#7BC043] mb-1">5+</div>
                    <div className="text-sm text-[#6B7280]">Years Experience</div>
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-[#F7941D]">
                    <div className="w-12 h-12 rounded-xl bg-[#F7941D] text-white flex items-center justify-center mb-4">
                      <Target className="w-6 h-6" />
                    </div>
                    <div className="text-3xl font-bold text-[#F7941D] mb-1">95%</div>
                    <div className="text-sm text-[#6B7280]">Client Satisfaction</div>
                  </div>
                  <div className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-[#1FA4C4]">
                    <div className="w-12 h-12 rounded-xl bg-[#1FA4C4] text-white flex items-center justify-center mb-4">
                      <TrendingUp className="w-6 h-6" />
                    </div>
                    <div className="text-3xl font-bold text-[#1FA4C4] mb-1">24/7</div>
                    <div className="text-sm text-[#6B7280]">Support Available</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-[#1FA4C4] to-[#1890b0] relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-48 h-48 bg-white rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white font-semibold text-sm mb-6">
            <Phone className="w-4 h-4" />
            Get Started Today
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Want to Grow Your Business with Professional Telemarketing?
          </h2>
          <p className="text-xl text-white/90 mb-10">
            Get in touch with Connect Solution today and experience the difference
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <NavLink to='/contact' className="px-10 py-4 bg-[#F7941D] text-white font-semibold rounded-xl text-lg hover:bg-[#e87a0d] transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-xl flex items-center justify-center gap-2 group">
              Contact Us Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </NavLink>
            <a href='tel:+91 88810 55055' className="px-10 py-4 bg-white text-[#1FA4C4] font-semibold rounded-xl text-lg hover:bg-gray-50 transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-xl flex items-center justify-center gap-2">
              <Phone className="w-5 h-5" />
              Call Now
            </a>
          </div>
        </div>
      </section>

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

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
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

        .animate-slide-up {
          animation: slideUp 0.8s ease-out backwards;
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