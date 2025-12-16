import React, { useState, useEffect } from 'react';
import { Phone, DollarSign, Users, CheckCircle, ArrowRight, TrendingUp, Target, Award, ShoppingCart, Handshake } from 'lucide-react';
import Slider from '../components/Slider';

const Telesales = () => {
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
      icon: DollarSign,
      title: 'Increased Revenue',
      description: 'Our skilled telesales team closes deals effectively, directly impacting your bottom line.'
    },
    {
      icon: Handshake,
      title: 'Customer Relationships',
      description: 'Build trust and lasting relationships through personalized sales conversations.'
    },
    {
      icon: Target,
      title: 'Focused Selling',
      description: 'Targeted approach to reach decision-makers and qualified prospects.'
    },
    {
      icon: TrendingUp,
      title: 'Scalable Growth',
      description: 'Scale your sales operations without the overhead of an in-house team.'
    }
  ];

  const process = [
    {
      step: 1,
      title: 'Understanding Your Product',
      description: 'We thoroughly learn about your products/services to represent your brand professionally.'
    },
    {
      step: 2,
      title: 'Prospect Identification',
      description: 'We identify and qualify potential customers who are most likely to convert.'
    },
    {
      step: 3,
      title: 'Professional Pitch',
      description: 'Our trained team delivers persuasive yet ethical sales pitches tailored to each prospect.'
    },
    {
      step: 4,
      title: 'Closing & Follow-up',
      description: 'We close deals and maintain follow-up for maximum conversion rates.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Slider */}
      <Slider 
        h1="Expert Telesales Services"
        subH1="Convert prospects into customers with professional selling"
        img1="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1920&q=80"
        
        h2="Drive Revenue Growth"
        subH2="Skilled sales professionals closing deals for your business"
        img2="https://images.unsplash.com/photo-1560264280-88b68371db39?w=1920&q=80"
        
        h3="Ethical Sales Practices"
        subH3="Building trust while achieving sales targets"
        img3="https://images.unsplash.com/photo-1573167243872-43c6433b9d40?w=1920&q=80"
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
            What is Telesales?
          </h2>
          <p className="text-lg text-[#1F2937] leading-relaxed">
            Telesales is the process of selling products or services directly over the phone. Unlike telemarketing which focuses on lead generation, telesales aims to{' '}
            <span className="text-[#7BC043] font-semibold">close deals and generate revenue</span>{' '}
            through skilled sales conversations. Our trained telesales professionals use persuasive yet ethical techniques to convert prospects into paying customers.
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
              Benefits of Telesales
            </h2>
            <div className="w-24 h-1 bg-[#F7941D] mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transform transition-all duration-500 hover:-translate-y-2 border-2 border-transparent hover:border-[#F7941D] ${
                    isVisible.benefits 
                      ? 'translate-y-0 opacity-100' 
                      : 'translate-y-20 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#F7941D] to-[#e87a0d] flex items-center justify-center mb-6 shadow-lg">
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

      {/* Process Section */}
      <section 
        id="process" 
        data-animate
        className={`py-16 px-6 bg-white transition-all duration-1000 ${
          isVisible.process ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1FA4C4] mb-4">
              Our Telesales Process
            </h2>
            <div className="w-24 h-1 bg-[#7BC043] mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {process.map((item, index) => (
              <div
                key={index}
                className={`flex gap-6 p-6 bg-[#F8FAFC] rounded-2xl hover:shadow-lg transition-all duration-300 ${
                  isVisible.process 
                    ? 'translate-y-0 opacity-100' 
                    : 'translate-y-20 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#1FA4C4] to-[#1890b0] flex items-center justify-center text-white font-bold text-xl shadow-lg">
                    {item.step}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#1FA4C4] mb-2">{item.title}</h3>
                  <p className="text-[#1F2937]">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        id="cta" 
        data-animate
        className={`bg-gradient-to-br from-[#1FA4C4] to-[#1890b0] text-white py-20 px-6 relative overflow-hidden transition-all duration-1000 ${
          isVisible.cta ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#7BC043] rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Increase Your Sales?
          </h2>
          
          <p className="text-lg md:text-xl mb-10 text-blue-100">
            Let our expert telesales team help you close more deals and grow revenue.
          </p>
          
          {/* <button className="group bg-[#F7941D] hover:bg-[#7BC043] text-white px-10 py-4 rounded-full text-lg font-semibold shadow-2xl transform hover:scale-105 transition-all duration-300 inline-flex items-center gap-3">
            Start Selling Today
            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
          </button> */}
        </div>
      </section>
    </div>
  );
};

export default Telesales;
