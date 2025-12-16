import { Phone, Headphones, Target, TrendingUp, Users, CheckCircle, ArrowRight, Sparkles, Award, Shield } from 'lucide-react';
import Slider from '../components/Slider';
import img2 from '../assets/img2.jpg'
import img8 from '../assets/img8.jpg'
import img3 from '../assets/img3.jpg'
import img5 from '../assets/img5.jpg'
import { NavLink } from 'react-router-dom';

export default function Services() {
  const services = [
    {
      id: 1,
      title: "Outbound Telemarketing",
      description: "Our outbound telemarketing services help businesses reach potential customers directly through structured and professional calling campaigns. We introduce your products or services, create interest, and generate qualified leads for your sales team.",
      benefits: [
        "Direct customer outreach",
        "Qualified lead generation",
        "Brand awareness building"
      ],
      icon: <Phone className="w-12 h-12" />,
      image: img8,
      bgColor: "white",
      imagePosition: "right"
    },
    {
      id: 2,
      title: "Inbound Call Handling",
      description: "We professionally manage incoming calls, handle customer inquiries, provide accurate information, and ensure a positive brand experience. Our team represents your business with clarity and confidence.",
      benefits: [
        "Improved customer satisfaction",
        "Faster query resolution",
        "Professional brand representation"
      ],
      icon: <Headphones className="w-12 h-12" />,
      image: img2,
      bgColor: "#F8FAFC",
      imagePosition: "left"
    },
    {
      id: 3,
      title: "Lead Generation",
      description: "Our lead generation process focuses on identifying and qualifying prospects who are genuinely interested in your offerings. We ensure that only verified and potential leads are passed to your sales team.",
      benefits: [
        "High-quality leads",
        "Better conversion rates",
        "Time-saving for sales teams"
      ],
      icon: <Target className="w-12 h-12" />,
      image: img3,
      bgColor: "white",
      imagePosition: "right"
    },
    {
      id: 4,
      title: "Telesales",
      description: "Our trained telesales professionals close deals directly over the phone using persuasive yet ethical sales techniques. We focus on conversions while maintaining customer trust.",
      benefits: [
        "Increased sales revenue",
        "Skilled sales conversations",
        "Ethical closing techniques"
      ],
      icon: <TrendingUp className="w-12 h-12" />,
      image: img5,
      bgColor: "#F8FAFC",
      imagePosition: "left"
    },
    {
      id: 5,
      title: "Customer Support & Follow-ups",
      description: "We help businesses maintain strong customer relationships through follow-up calls, feedback collection, and post-sales support. Our goal is long-term customer satisfaction.",
      benefits: [
        "Higher customer retention",
        "Better feedback insights",
        "Improved brand loyalty"
      ],
      icon: <Users className="w-12 h-12" />,
      image: img3,
      bgColor: "white",
      imagePosition: "right"
    }
  ];

  return (
    <div className="w-full overflow-hidden">
      {/* Page Banner */}
      <Slider 
        h1="Our Professional Services"
        subH1="Comprehensive telemarketing solutions tailored to your needs"
        img1="https://images.unsplash.com/photo-1560264280-88b68371db39?w=1920&q=80"
        
        h2="Expert Telecalling Solutions"
        subH2="From lead generation to customer support - we've got you covered"
        img2="https://images.unsplash.com/photo-1573167243872-43c6433b9d40?w=1920&q=80"
        
        h3="Drive Results with Our Team"
        subH3="Dedicated professionals delivering measurable business outcomes"
        img3="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1920&q=80"
      />

      {/* Services Sections */}
      {services.map((service, index) => (
        <section 
          key={service.id}
          className="py-16 md:py-24 relative overflow-hidden"
          style={{ backgroundColor: service.bgColor }}
        >
          {/* Decorative Elements */}
          <div className="absolute top-20 right-0 w-96 h-96 bg-[#7BC043]/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-0 w-96 h-96 bg-[#F7941D]/5 rounded-full blur-3xl"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className={`grid md:grid-cols-2 gap-12 items-center ${service.imagePosition === 'left' ? 'md:grid-flow-dense' : ''}`}>
              {/* Text Content */}
              <div className={`space-y-6 ${service.imagePosition === 'left' ? 'md:col-start-2' : ''} ${index % 2 === 0 ? 'animate-slide-in-left' : 'animate-slide-in-right'}`}>
                {/* Icon Badge */}
                {/* <div className="inline-flex items-center gap-3 p-4 bg-gradient-to-br from-[#F7941D] to-[#F7941D]/80 text-white rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300">
                  {service.icon}
                </div> */}

                {/* Service Number */}
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#1FA4C4] to-[#1FA4C4]/80 text-white flex items-center justify-center font-bold text-xl">
                    {service.id}
                  </div>
                  <div className="h-1 flex-1 bg-gradient-to-r from-[#F7941D] to-transparent rounded-full"></div>
                </div>

                {/* Title */}
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1FA4C4] leading-tight">
                  {service.title}
                </h2>

                {/* Description */}
                <p className="text-lg text-[#1F2937] leading-relaxed">
                  {service.description}
                </p>

                {/* Benefits */}
                <div className="space-y-3 pt-4">
                  <h3 className="font-semibold text-[#1FA4C4] flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-[#7BC043]" />
                    Key Benefits:
                  </h3>
                  {service.benefits.map((benefit, idx) => (
                    <div 
                      key={idx}
                      className="flex items-start gap-3 group animate-fade-in-up"
                      style={{ animationDelay: `${idx * 0.1}s` }}
                    >
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-6 h-6 rounded-full bg-[#7BC043] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <CheckCircle className="w-4 h-4 text-white" />
                        </div>
                      </div>
                      <p className="text-[#1F2937] leading-relaxed">{benefit}</p>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                {/* <NavLink to='/about' className="pt-6">
                  <button className="px-8 py-4 bg-[#1FA4C4] text-white font-semibold rounded-xl hover:bg-[#7BC043] transition-all duration-300 hover:scale-105 hover:shadow-xl shadow-lg flex items-center gap-2 group">
                    Learn More
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </NavLink> */}
              </div>

              {/* Image */}
              <div className={`${service.imagePosition === 'left' ? 'md:col-start-1 md:row-start-1' : ''} ${index % 2 === 0 ? 'animate-slide-in-right' : 'animate-slide-in-left'} relative`}>
                <div className="relative group">
                  {/* Decorative Background */}
                  <div className="absolute -inset-4 bg-gradient-to-br from-[#F7941D]/20 to-[#7BC043]/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Main Image */}
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white hover:scale-105 transition-transform duration-500">
                    <img 
                      src={service.image}
                      alt={service.title}
                      className="w-full h-[400px] object-cover"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1FA4C4]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Overlay Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                          {service.icon}
                        </div>
                        <div>
                          <h3 className="text-white font-bold text-lg">{service.title}</h3>
                          <p className="text-white/80 text-sm">Professional Service</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Floating Badge */}
                  {/* <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-[#F7941D] to-[#F7941D]/80 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-xl animate-pulse-slow">
                    {service.id}
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#F7941D] to-[#e87a0d] relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full animate-pulse"></div>
          <div className="absolute top-20 right-20 w-48 h-48 bg-white rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-10 left-1/2 w-64 h-64 bg-white rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        {/* Floating Icons */}
        <div className="absolute inset-0 overflow-hidden opacity-5">
          <Shield className="absolute top-20 left-20 w-16 h-16 text-white animate-float" />
          <Award className="absolute bottom-20 right-20 w-16 h-16 text-white animate-float-delayed" />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white font-semibold text-sm mb-6">
            <Phone className="w-4 h-4" />
            Get Started Today
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Looking for Reliable Telemarketing Services?
          </h2>
          
          <p className="text-xl md:text-2xl text-white/90 mb-10 leading-relaxed max-w-3xl mx-auto">
            Let Connect Solution handle your calling needs while you focus on growing your business.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <NavLink to='/consultation' className="px-10 py-4 bg-[#1FA4C4] text-white font-semibold rounded-xl text-lg hover:bg-[#7BC043] transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-xl flex items-center gap-2 group">
              Get Free Consultation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </NavLink>
            <a href='tel:91 88810 55055' className="px-10 py-4 bg-white text-[#F7941D] font-semibold rounded-xl text-lg hover:bg-gray-50 transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-xl flex items-center gap-2">
              <Phone className="w-5 h-5" />
              Call Now
            </a>
          </div>

          {/* Trust Badges */}
          <div className="mt-12 flex flex-wrap justify-center gap-8 text-white/90">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-[#7BC043]" />
              <span>Free Consultation</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-[#7BC043]" />
              <span>No Hidden Charges</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-[#7BC043]" />
              <span>24/7 Support</span>
            </div>
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
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
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

        @keyframes floatDelayed {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-15px) rotate(-5deg);
          }
        }

        @keyframes pulseSlow {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.05);
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
          animation: fadeInUp 0.5s ease-out backwards;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: floatDelayed 8s ease-in-out infinite;
          animation-delay: 1s;
        }

        .animate-pulse-slow {
          animation: pulseSlow 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}