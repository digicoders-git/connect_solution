import React, { useState, useEffect } from 'react';
import { Target, Users, CheckCircle, ArrowRight, TrendingUp, Filter, Database, UserCheck, BarChart3, Zap } from 'lucide-react';
import Slider from '../components/Slider';

const LeadGeneration = () => {
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
      icon: UserCheck,
      title: 'Qualified Leads',
      description: 'We deliver only verified and interested prospects ready for conversion.'
    },
    {
      icon: Filter,
      title: 'Smart Filtering',
      description: 'Advanced qualification criteria to ensure lead relevance and quality.'
    },
    {
      icon: TrendingUp,
      title: 'Higher Conversions',
      description: 'Quality leads translate to better conversion rates and ROI.'
    },
    {
      icon: Database,
      title: 'Data-Driven',
      description: 'Comprehensive lead data with insights for your sales team.'
    }
  ];

  const leadTypes = [
    {
      title: 'B2B Lead Generation',
      description: 'Connect with decision-makers in businesses across industries.',
      icon: Target
    },
    {
      title: 'B2C Lead Generation',
      description: 'Reach individual consumers interested in your products/services.',
      icon: Users
    },
    {
      title: 'Appointment Setting',
      description: 'Schedule qualified meetings with potential customers.',
      icon: CheckCircle
    },
    {
      title: 'Database Building',
      description: 'Create targeted contact databases for your campaigns.',
      icon: Database
    }
  ];

  const process = [
    { step: 1, title: 'Define Target Audience', icon: Target },
    { step: 2, title: 'Outreach Campaign', icon: Zap },
    { step: 3, title: 'Qualify Prospects', icon: Filter },
    { step: 4, title: 'Deliver Quality Leads', icon: UserCheck },
    { step: 5, title: 'Track & Optimize', icon: BarChart3 }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Slider */}
      <Slider 
        h1="Professional Lead Generation"
        subH1="Quality leads that convert into paying customers"
        img1="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1920&q=80"
        
        h2="Fuel Your Sales Pipeline"
        subH2="Consistent flow of qualified prospects for your business"
        img2="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&q=80"
        
        h3="Data-Driven Results"
        subH3="Measurable lead generation campaigns with real ROI"
        img3="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&q=80"
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
            What is Lead Generation?
          </h2>
          <p className="text-lg text-[#1F2937] leading-relaxed">
            Lead generation is the process of identifying and attracting potential customers interested in your products or services. At Connect Solution, we specialize in generating{' '}
            <span className="text-[#7BC043] font-semibold">high-quality, conversion-ready leads</span>{' '}
            through targeted calling campaigns, ensuring your sales team spends time only on prospects who are genuinely interested.
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
              Why Choose Our Lead Generation?
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
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#1FA4C4] to-[#1890b0] flex items-center justify-center mb-6 shadow-lg">
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

      {/* Lead Types Section */}
      <section 
        id="lead-types" 
        data-animate
        className={`py-16 px-6 bg-white transition-all duration-1000 ${
          isVisible['lead-types'] ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1FA4C4] mb-4">
              Our Lead Generation Services
            </h2>
            <div className="w-24 h-1 bg-[#7BC043] mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {leadTypes.map((type, index) => {
              const Icon = type.icon;
              return (
                <div
                  key={index}
                  className={`flex gap-6 p-8 bg-[#F8FAFC] rounded-2xl hover:shadow-xl transition-all duration-300 group border-2 border-transparent hover:border-[#F7941D] ${
                    isVisible['lead-types'] 
                      ? 'translate-y-0 opacity-100' 
                      : 'translate-y-20 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#F7941D] to-[#e87a0d] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#1FA4C4] mb-2 group-hover:text-[#F7941D] transition-colors">{type.title}</h3>
                    <p className="text-[#1F2937]">{type.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section 
        id="process" 
        data-animate
        className={`py-16 px-6 bg-gradient-to-br from-[#1FA4C4] to-[#1890b0] transition-all duration-1000 ${
          isVisible.process ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Lead Generation Process
            </h2>
            <div className="w-24 h-1 bg-[#F7941D] mx-auto rounded-full"></div>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {process.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className={`flex flex-col items-center text-center w-40 ${
                    isVisible.process 
                      ? 'translate-y-0 opacity-100' 
                      : 'translate-y-20 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="w-20 h-20 rounded-full bg-white shadow-xl flex items-center justify-center mb-4 border-4 border-[#7BC043]">
                    <Icon className="w-8 h-8 text-[#F7941D]" />
                  </div>
                  <div className="w-8 h-8 rounded-full bg-[#F7941D] text-white font-bold flex items-center justify-center -mt-6 mb-2 shadow-lg">
                    {item.step}
                  </div>
                  <h3 className="text-white font-semibold text-sm">{item.title}</h3>
                </div>
              );
            })}
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
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#7BC043] rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Fill Your Sales Pipeline?
          </h2>
          
          <p className="text-lg md:text-xl mb-10 text-orange-100">
            Let Connect Solution generate quality leads that convert into customers.
          </p>
          
          {/* <button className="group bg-[#1FA4C4] hover:bg-[#7BC043] text-white px-10 py-4 rounded-full text-lg font-semibold shadow-2xl transform hover:scale-105 transition-all duration-300 inline-flex items-center gap-3">
            Get Quality Leads Now
            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
          </button> */}
        </div>
      </section>
    </div>
  );
};

export default LeadGeneration;
