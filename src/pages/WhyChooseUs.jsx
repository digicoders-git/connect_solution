import React, { useState, useEffect } from 'react';
import { Users, Target, Shield, Lightbulb, BarChart3, DollarSign, ArrowRight, CheckCircle, Award, TrendingUp, Heart, ChevronDown } from 'lucide-react';
import Slider from '../components/Slider';
import { NavLink } from 'react-router-dom';

const WhyChooseUs = () => {
  const [isVisible, setIsVisible] = useState({});
  const [hoveredCard, setHoveredCard] = useState(null);

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

  const reasons = [
    {
      icon: Users,
      title: 'Experienced Telecalling Team',
      description: 'Our team consists of trained and experienced telecalling professionals who understand customer behavior and communicate with clarity and confidence.',
      color: 'from-[#7BC043] to-[#68a837]'
    },
    {
      icon: Target,
      title: 'Result-Oriented Approach',
      description: 'We focus on outcomes, not just call numbers. Every campaign is designed to generate quality leads and higher conversions.',
      color: 'from-[#7BC043] to-[#68a837]'
    },
    {
      icon: Shield,
      title: 'Ethical Communication Practices',
      description: 'We follow transparent and respectful communication standards that protect your brand reputation and build customer trust.',
      color: 'from-[#7BC043] to-[#68a837]'
    },
    {
      icon: Lightbulb,
      title: 'Customized Calling Strategies',
      description: 'Every business is different. We create customized telemarketing strategies based on your industry, target audience, and goals.',
      color: 'from-[#7BC043] to-[#68a837]'
    },
    {
      icon: BarChart3,
      title: 'Regular Reporting & Transparency',
      description: 'You receive clear and timely reports on campaign performance, lead status, and improvement areas.',
      color: 'from-[#7BC043] to-[#68a837]'
    },
    {
      icon: DollarSign,
      title: 'Cost-Effective Solutions',
      description: 'Our services are designed to be affordable and scalable, making professional telemarketing accessible for businesses of all sizes.',
      color: 'from-[#7BC043] to-[#68a837]'
    }
  ];

  const differentiators = [
    {
      icon: Award,
      text: 'Dedicated calling team for each project',
      color: '#F7941D'
    },
    {
      icon: TrendingUp,
      text: 'Focus on long-term partnerships, not short-term gains',
      color: '#F7941D'
    },
    {
      icon: CheckCircle,
      text: 'Strong emphasis on lead quality',
      color: '#7BC043'
    },
    {
      icon: Heart,
      text: 'Transparent processes and ethical sales practices',
      color: '#F7941D'
    }
  ];

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Page Banner */}
      <Slider 
        h1="Why Choose Connect Solution"
        subH1="Discover what makes us the right choice for your business"
        img1="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1920&q=80"
        
        h2="Experience & Excellence"
        subH2="Professional team delivering exceptional telemarketing results"
        img2="https://images.unsplash.com/photo-1560264280-88b68371db39?w=1920&q=80"
        
        h3="Your Trusted Partner"
        subH3="Ethical practices, transparent processes, and measurable outcomes"
        img3="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1920&q=80"
      />

      {/* Introduction Section */}
      <section 
        id="intro" 
        data-animate
        className={`py-16 px-6 bg-white transition-all duration-1000 ${
          isVisible.intro ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1FA4C4] mb-6">
            Why This Matters
          </h2>
          <p className="text-lg text-[#1F2937] leading-relaxed">
            Choosing the right telemarketing partner can make a significant difference in your business growth. At Connect Solution, we combine{' '}
            <span className="text-[#7BC043] font-semibold">experience, strategy, and ethical communication</span>{' '}
            to deliver consistent and measurable results for our clients.
          </p>
        </div>
      </section>

      {/* Key Reasons Section */}
      <section 
        id="reasons" 
        data-animate
        className={`py-16 px-6 bg-[#F8FAFC] transition-all duration-1000 ${
          isVisible.reasons ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1FA4C4] mb-4">
              Key Reasons to Choose Us
            </h2>
            <div className="w-24 h-1 bg-[#F7941D] mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;
              const isHovered = hoveredCard === index;
              
              return (
                <div
                  key={index}
                  className={`group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transform transition-all duration-500 cursor-pointer ${
                    isVisible.reasons 
                      ? 'translate-y-0 opacity-100' 
                      : 'translate-y-20 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className="relative mb-6">
                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${reason.color} flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                      <Icon className="w-10 h-10 text-white" strokeWidth={2} />
                    </div>
                    
                    {/* Animated corner accent */}
                    <div className={`absolute -top-2 -right-2 w-8 h-8  rounded-lg transform transition-all duration-300 ${
                      isHovered ? 'scale-100 rotate-12' : 'scale-0'
                    }`}></div>
                  </div>

                  <h3 className="text-xl font-bold text-[#1FA4C4] mb-4 group-hover:text-[#F7941D] transition-colors duration-300">
                    {reason.title}
                  </h3>

                  <p className="text-[#1F2937] leading-relaxed">
                    {reason.description}
                  </p>

                  {/* Hover indicator */}
                  {/* <div className={`mt-6 flex items-center gap-2 text-[#F7941D] font-semibold transition-all duration-300 ${
                    isHovered ? 'opacity-100 translate-x-2' : 'opacity-0 translate-x-0'
                  }`}>
                    Learn more <ArrowRight className="w-4 h-4" />
                  </div> */}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* What Makes Us Different Section */}
      <section 
        id="different" 
        data-animate
        className={`py-16 px-6 bg-white transition-all duration-1000 ${
          isVisible.different ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
        }`}
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1FA4C4] mb-8">
                What Makes Us Different
              </h2>

              <div className="space-y-6">
                {differentiators.map((item, index) => {
                  const Icon = item.icon;
                  
                  return (
                    <div
                      key={index}
                      className="flex items-start gap-4 group cursor-pointer transform transition-all duration-300 hover:translate-x-2"
                      style={{ 
                        animationDelay: `${index * 150}ms`,
                        opacity: isVisible.different ? 1 : 0,
                        transform: isVisible.different ? 'translateX(0)' : 'translateX(-20px)',
                        transition: `all 0.6s ease-out ${index * 150}ms`
                      }}
                    >
                      <div 
                        className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110"
                        style={{ backgroundColor: item.color }}
                      >
                        <Icon className="w-6 h-6 text-white" strokeWidth={2} />
                      </div>

                      <div className="flex-1 pt-2">
                        <p className="text-lg text-[#1F2937] group-hover:text-[#1FA4C4] transition-colors duration-300">
                          {item.text.includes('lead quality') ? (
                            <>
                              Strong emphasis on <span className="text-[#7BC043] font-semibold">lead quality</span>
                            </>
                          ) : (
                            item.text
                          )}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right: Visual Element */}
            <div className="relative">
              <div className="relative z-10">
                {/* Animated Circles */}
                <div className="relative w-full aspect-square max-w-md mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#1FA4C4] to-[#1fa4c480] rounded-full animate-spin-slow opacity-20"></div>
                  <div className="absolute inset-8 bg-gradient-to-br from-[#F7941D] to-[#f7941d80] rounded-full animate-spin-reverse opacity-20"></div>
                  <div className="absolute inset-16 bg-gradient-to-br from-[#7BC043] to-[#7bc04380] rounded-full animate-pulse opacity-30"></div>
                  
                  {/* Center Icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-32 h-32 bg-white rounded-full shadow-2xl flex items-center justify-center animate-float">
                      <Award className="w-16 h-16 text-[#F7941D]" strokeWidth={2} />
                    </div>
                  </div>

                  {/* Floating Icons */}
                  <div className="absolute top-0 right-0 w-16 h-16 bg-[#7BC043] rounded-full shadow-lg flex items-center justify-center animate-float-delayed">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute bottom-0 left-0 w-16 h-16 bg-[#1FA4C4] rounded-full shadow-lg flex items-center justify-center animate-float">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        id="cta" 
        data-animate
        className={`bg-[#F7941D] text-white py-20 px-6 relative overflow-hidden transition-all duration-1000 ${
          isVisible.cta ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#1FA4C4] rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 animate-fade-in">
            Looking for a Reliable Telemarketing Partner?
          </h2>
          
          <p className="text-lg md:text-xl mb-10 text-orange-100 animate-fade-in-delay">
            Let Connect Solution help you connect with the right customers and grow your business efficiently.
          </p>
          
          <NavLink to='/consultation' className="group bg-[#1FA4C4] hover:bg-[#7BC043] text-white px-10 py-4 rounded-full text-lg font-semibold shadow-2xl transform hover:scale-105 transition-all duration-300 inline-flex items-center gap-3 animate-bounce-subtle">
            Get Free Consultation
            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
          </NavLink>
        </div>
      </section>

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

        @keyframes bounce-subtle {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes spin-reverse {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-delay {
          0% {
            opacity: 0;
            transform: translateY(-20px);
          }
          50% {
            opacity: 0;
          }
          100% {
            opacity: 1;
            transform: translateY(0);
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

        .animate-bounce-subtle {
          animation: bounce-subtle 2s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }

        .animate-spin-reverse {
          animation: spin-reverse 15s linear infinite;
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }

        .animate-fade-in-delay {
          animation: fade-in-delay 1.2s ease-out;
        }
      `}</style>
    </div>
  );
};

export default WhyChooseUs;