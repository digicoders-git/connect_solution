import React, { useState, useEffect } from 'react';
import { Phone, Target, Users, CheckCircle, ArrowRight, TrendingUp, BarChart3, Headphones, Award, Shield, Zap } from 'lucide-react';
import Slider from '../components/Slider';
import { NavLink } from 'react-router-dom';

const Telemarketing = () => {
  const [isVisible, setIsVisible] = useState({});

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

  const benefits = [
    {
      icon: Target,
      title: 'Targeted Outreach',
      description: 'We reach out to your ideal customers with precision targeting and customized messaging.'
    },
    {
      icon: TrendingUp,
      title: 'Increased Sales',
      description: 'Our proven strategies help convert prospects into paying customers effectively.'
    },
    {
      icon: Users,
      title: 'Brand Awareness',
      description: 'Build strong brand recognition through consistent and professional communication.'
    },
    {
      icon: BarChart3,
      title: 'Measurable Results',
      description: 'Track campaign performance with detailed analytics and regular reporting.'
    }
  ];

  const services = [
    'Cold calling campaigns',
    'Appointment scheduling',
    'Product/service promotions',
    'Market research calls',
    'Customer surveys',
    'Follow-up campaigns'
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Slider */}
      <Slider 
        h1="Professional Telemarketing Services"
        subH1="Reach your target audience with effective calling campaigns"
        img1="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1920&q=80"
        
        h2="Drive Business Growth"
        subH2="Convert prospects into loyal customers with our expert team"
        img2="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1920&q=80"
        
        h3="Results-Driven Approach"
        subH3="Measurable outcomes that impact your bottom line"
        img3="https://images.unsplash.com/photo-1560264280-88b68371db39?w=1920&q=80"
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
            What is Telemarketing?
          </h2>
          <p className="text-lg text-[#1F2937] leading-relaxed">
            Telemarketing is a direct marketing strategy where trained professionals reach out to potential customers via phone calls. At Connect Solution, we specialize in{' '}
            <span className="text-[#7BC043] font-semibold">outbound telemarketing campaigns</span>{' '}
            that help businesses generate leads, promote products/services, and build valuable customer relationships.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section 
        id="benefits" 
        data-animate
        className={`py-16 px-6 bg-[#F8FAFC] transition-all duration-1000 ${
          isVisible.benefits ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1FA4C4] mb-4">
              Benefits of Telemarketing
            </h2>
            <div className="w-24 h-1 bg-[#F7941D] mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transform transition-all duration-500 hover:-translate-y-2 border-2 border-transparent hover:border-[#7BC043] ${
                    isVisible.benefits 
                      ? 'translate-y-0 opacity-100' 
                      : 'translate-y-20 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#7BC043] to-[#68a837] flex items-center justify-center mb-6 shadow-lg">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1FA4C4] mb-3">{benefit.title}</h3>
                  <p className="text-[#1F2937]">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services List Section */}
      <section 
        id="services-list" 
        data-animate
        className={`py-16 px-6 bg-white transition-all duration-1000 ${
          isVisible['services-list'] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
        }`}
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1FA4C4] mb-8">
                Our Telemarketing Services
              </h2>
              <div className="space-y-4">
                {services.map((service, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-4 bg-[#F8FAFC] rounded-xl hover:bg-[#7BC043]/10 transition-all duration-300"
                    style={{ 
                      animationDelay: `${index * 100}ms`,
                      opacity: isVisible['services-list'] ? 1 : 0,
                      transform: isVisible['services-list'] ? 'translateX(0)' : 'translateX(-20px)',
                      transition: `all 0.5s ease-out ${index * 100}ms`
                    }}
                  >
                    <div className="w-10 h-10 rounded-full bg-[#F7941D] flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <p className="text-lg text-[#1F2937] font-medium">{service}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-[#7BC043]">
                <img 
                  src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80" 
                  alt="Telemarketing Services" 
                  className="w-full h-[400px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#F7941D] rounded-full opacity-20 blur-2xl"></div>
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
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#1FA4C4] rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Boost Your Sales with Telemarketing?
          </h2>
          
          <p className="text-lg md:text-xl mb-10 text-orange-100">
            Let Connect Solution help you reach more customers and grow your business.
          </p>
          
          <NavLink to='/consultation' className="group bg-[#1FA4C4] hover:bg-[#7BC043] text-white px-10 py-4 rounded-full text-lg font-semibold shadow-2xl transform hover:scale-105 transition-all duration-300 inline-flex items-center gap-3">
            Get Free Consultation
            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
          </NavLink>
        </div>
      </section>
    </div>
  );
};

export default Telemarketing;
