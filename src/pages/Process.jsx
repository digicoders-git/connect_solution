import React, { useState } from 'react';
import { Phone, Target, Lightbulb, Users, CheckCircle, BarChart3, ArrowRight, ChevronDown } from 'lucide-react';
import Slider from '../components/Slider';
import { NavLink } from 'react-router-dom';

const Process = () => {
  const [activeStep, setActiveStep] = useState(null);

  const steps = [
    {
      number: 1,
      title: 'Requirement Analysis',
      description: 'We begin by understanding your business, target audience, products or services, and sales objectives. This step helps us align our calling strategy with your expectations and market requirements.',
      outcome: 'Clear goals, target audience definition, and campaign scope.',
      icon: Target,
      bg: 'bg-[#F8FAFC]',
      align: 'left'
    },
    {
      number: 2,
      title: 'Strategy Planning',
      description: 'Based on the requirements, we design a customized telemarketing strategy. This includes call scripts, target segments, call timing, and lead qualification criteria.',
      outcome: 'A clear and structured calling plan tailored to your business.',
      icon: Lightbulb,
      bg: 'bg-white',
      align: 'right'
    },
    {
      number: 3,
      title: 'Campaign Execution',
      description: 'Our trained telecalling professionals start the calling campaign using approved scripts and ethical communication practices. Each call is handled with professionalism to represent your brand positively.',
      outcome: 'Active customer engagement and lead generation.',
      icon: Phone,
      bg: 'bg-[#F8FAFC]',
      align: 'left'
    },
    {
      number: 4,
      title: 'Lead Qualification',
      description: 'We evaluate customer responses and filter genuine prospects based on predefined criteria. Only interested and relevant leads are shared with the client\'s sales team.',
      outcome: 'High-quality and conversion-ready leads.',
      icon: CheckCircle,
      bg: 'bg-white',
      align: 'right'
    },
    {
      number: 5,
      title: 'Reporting & Optimization',
      description: 'We provide regular performance reports including call volume, lead status, and conversion insights. Based on analysis, strategies are refined to improve campaign performance.',
      outcome: 'Continuous improvement and measurable results.',
      icon: BarChart3,
      bg: 'bg-[#F8FAFC]',
      align: 'left'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Page Banner */}
      <Slider 
        h1="Our Working Process"
        subH1="A structured approach to delivering consistent results"
        img1="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&q=80"
        
        h2="Step-by-Step Methodology"
        subH2="From requirement analysis to performance optimization"
        img2="https://images.unsplash.com/photo-1531538606174-0f90ff5dce83?w=1920&q=80"
        
        h3="Transparent & Efficient"
        subH3="Clear processes that keep you informed at every stage"
        img3="https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=1920&q=80"
      />

      {/* Process Overview */}
      <section className="py-12 md:py-16 px-4 sm:px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1FA4C4] mb-6">
            Process Overview
          </h2>
          <p className="text-base md:text-lg text-[#1F2937] leading-relaxed">
            At Connect Solution, we follow a well-defined and result-oriented process to ensure every calling campaign delivers value. Our approach focuses on understanding client objectives, engaging customers professionally, and{' '}
            <span className="text-[#7BC043] font-semibold">continuously improving performance</span>{' '}
            through analysis and reporting.
          </p>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-12">
        {steps.map((step, index) => {
          const Icon = step.icon;
          const isActive = activeStep === index;
          
          return (
            <div
              key={index}
              className={`${step.bg}`}
            >
              <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 md:py-16">
                <div className={`flex flex-col ${step.align === 'right' ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-6 lg:gap-8 items-center`}>
                  {/* Icon Section */}
                  <div className="flex-shrink-0 relative">
                    <div className="w-24 h-24 md:w-32 md:h-32 bg-white rounded-2xl shadow-lg flex items-center justify-center">
                      <Icon className="w-12 h-12 md:w-16 md:h-16 text-[#F7941D]" strokeWidth={1.5} />
                    </div>
                    
                    {/* Step Number Badge */}
                    <div className="absolute -top-2 -right-2 md:-top-4 md:-right-4 w-8 h-8 md:w-12 md:h-12 bg-[#F7941D] text-white rounded-full flex items-center justify-center text-sm md:text-xl font-bold shadow-lg">
                      {step.number}
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="flex-1 text-center lg:text-left">
                    <div 
                      className="cursor-pointer"
                      onClick={() => setActiveStep(isActive ? null : index)}
                    >
                      <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#1FA4C4] mb-4">
                        Step {step.number}: {step.title}
                      </h3>
                      
                      <p className="text-[#1F2937] text-base md:text-lg leading-relaxed mb-4">
                        {step.description}
                      </p>
                      
                      {isActive && (
                        <div className="bg-white border-l-4 border-[#7BC043] p-4 rounded-r-lg shadow-sm mt-4">
                          <p className="text-sm font-semibold text-[#7BC043] mb-2">
                            ✓ Outcome:
                          </p>
                          <p className="text-[#1F2937] text-sm md:text-base">{step.outcome}</p>
                        </div>
                      )}

                      {/* Expand Indicator */}
                      {!isActive && (
                        <button className="mt-4 text-[#1FA4C4] flex items-center gap-2 font-semibold mx-auto lg:mx-0">
                          View Outcome <ArrowRight className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                  </div>
                </div>

                {/* Connection Line */}
                {index < steps.length - 1 && (
                  <div className="flex justify-center mt-6 md:mt-8">
                    <div className="w-1 h-8 md:h-12 bg-gradient-to-b from-[#1FA4C4] to-transparent rounded-full"></div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </section>

      {/* CTA Section */}
      <section className="bg-[#F7941D] text-white py-16 md:py-20 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#1FA4C4] rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-6">
            Want to Start a Result-Driven Telemarketing Campaign?
          </h2>
          
          <p className="text-base md:text-lg lg:text-xl mb-8 md:mb-10 text-orange-100">
            Let Connect Solution manage your calling process with professionalism and transparency.
          </p>
          
          <NavLink to='/consultation' className="bg-[#1FA4C4] hover:bg-[#7BC043] text-white px-6 md:px-10 py-3 md:py-4 rounded-full text-base md:text-lg font-semibold shadow-2xl transition-all duration-300 inline-flex items-center gap-3">
            Get Free Consultation
            <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
          </NavLink>
        </div>
      </section>

      <style jsx>{`
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
            transform: translateY(-20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
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

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }

        .animate-fade-in-delay {
          animation: fade-in-delay 1.2s ease-out;
        }

        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }

        .delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </div>
  );
};

export default Process;