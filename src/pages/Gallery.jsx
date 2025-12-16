import React, { useState, useEffect } from 'react';
import { X, ZoomIn, ChevronLeft, ChevronRight, ArrowRight, Phone, Users, Award, BookOpen, ChevronDown } from 'lucide-react';
import Slider from '../components/Slider';
import front from '../assets/front.jpg'
import img1 from '../assets/img1.jpg'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.jpg'
import img4 from '../assets/img4.jpg'
import img5 from '../assets/img5.jpg'
import img7 from '../assets/img7.jpg'
import img8 from '../assets/img8.jpg'
import img9 from '../assets/img9.jpg'
import { NavLink } from 'react-router-dom';

const Gallery = () => {
  const [isVisible, setIsVisible] = useState({});
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);

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

  useEffect(() => {
    if (selectedImage !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedImage]);

  const categories = [
    { name: 'All', icon: null },
    { name: 'Office Setup', icon: Award },
    { name: 'Our Team', icon: Users },
    { name: 'Training Sessions', icon: BookOpen },
    { name: 'Calling Operations', icon: Phone }
  ];

  const galleryImages = [
    { id: 1, category: 'Office Setup', title: 'Office Front View', description: 'Our professional entrance', image: front },
    { id: 2, category: 'Our Team', title: 'Team at Work', description: 'Professional telecallers', image: img1 },
    { id: 3, category: 'Training Sessions', title: 'Training Session', description: 'Skill development', image: img2 },
    { id: 4, category: 'Calling Operations', title: 'Calling Floor', description: 'Team in action', image: img3 },
    { id: 5, category: 'Office Setup', title: 'Workspace', description: 'Modern office setup', image: img4 },
    { id: 6, category: 'Our Team', title: 'Team Collaboration', description: 'Working together', image: img5 },
    { id: 7, category: 'Training Sessions', title: 'Learning Session', description: 'Professional development', image: img7 },
    { id: 8, category: 'Calling Operations', title: 'Operations Floor', description: 'Daily operations', image: img8 },
    { id: 9, category: 'Office Setup', title: 'Office Interior', description: 'Work environment', image: img9 }
  ];

  const filteredImages = activeCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  const openLightbox = (index) => {
    setSelectedImage(filteredImages[index]);
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const newIndex = (lightboxIndex + 1) % filteredImages.length;
    setLightboxIndex(newIndex);
    setSelectedImage(filteredImages[newIndex]);
  };

  const prevImage = () => {
    const newIndex = (lightboxIndex - 1 + filteredImages.length) % filteredImages.length;
    setLightboxIndex(newIndex);
    setSelectedImage(filteredImages[newIndex]);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedImage) {
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowRight') nextImage();
        if (e.key === 'ArrowLeft') prevImage();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, lightboxIndex]);

  return (
    <div className="min-h-screen bg-white">
      {/* Page Banner */}
      <Slider 
        h1="Our Gallery"
        subH1="A glimpse into our professional work environment"
        img1="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80"
        
        h2="Our Office & Team"
        subH2="See where the magic happens - our dedicated workspace"
        img2="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1920&q=80"
        
        h3="Behind the Scenes"
        subH3="Transparency through visuals - see our team in action"
        img3="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80"
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
            Transparency Through Visuals
          </h2>
          <p className="text-lg text-[#1F2937] leading-relaxed">
            At Connect Solution, we believe that a{' '}
            <span className="text-[#7BC043] font-semibold">strong work environment</span>{' '}
            plays a key role in delivering quality telemarketing services. Our gallery showcases our team, office setup, training sessions, and daily operations, giving you a transparent view of how we work and represent our clients.
          </p>
        </div>
      </section>

      {/* Category Filters */}
      <section 
        id="filters" 
        data-animate
        className={`py-8 px-6 bg-[#F8FAFC] transition-all duration-1000 ${
          isVisible.filters ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => {
              const Icon = category.icon;
              const isActive = activeCategory === category.name;
              
              return (
                <button
                  key={index}
                  onClick={() => setActiveCategory(category.name)}
                  className={`group px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 ${
                    isActive
                      ? 'bg-[#F7941D] text-white shadow-lg scale-105'
                      : 'bg-white text-[#1FA4C4] hover:border-[#7BC043] border-2 border-transparent hover:scale-105'
                  }`}
                  style={{ 
                    animationDelay: `${index * 100}ms`,
                    opacity: isVisible.filters ? 1 : 0,
                    transform: isVisible.filters ? 'translateY(0)' : 'translateY(-20px)',
                    transition: `all 0.5s ease-out ${index * 100}ms`
                  }}
                >
                  {Icon && <Icon className="w-5 h-5" />}
                  {category.name}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section 
        id="gallery" 
        data-animate
        className={`py-16 px-6 bg-[#F8FAFC] transition-all duration-1000 ${
          isVisible.gallery ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image, index) => (
              <div
                key={image.id}
                className={`group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl cursor-pointer transform transition-all duration-500 ${
                  isVisible.gallery 
                    ? 'translate-y-0 opacity-100' 
                    : 'translate-y-20 opacity-0'
                }`}
                style={{ 
                  transitionDelay: `${index * 50}ms`,
                  aspectRatio: '4/3'
                }}
                onClick={() => openLightbox(index)}
              >
                {/* Actual Image */}
                <img 
                  src={image.image} 
                  alt={image.title}
                  className="w-full h-full object-cover"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0  bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center">
                  <div className="transform scale-0 group-hover:scale-100 transition-all duration-300">
                    <div className="w-16 h-16 bg-[#F7941D] rounded-full flex items-center justify-center shadow-2xl">
                      <ZoomIn className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </div>

                {/* Image Info Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-lg font-bold mb-1">{image.title}</h3>
                    <p className="text-sm opacity-90">{image.description}</p>
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[#1FA4C4] text-xs font-semibold shadow-lg">
                  {image.category}
                </div>
              </div>
            ))}
          </div>

          {/* No Results Message */}
          {filteredImages.length === 0 && (
            <div className="text-center py-20">
              <p className="text-xl text-[#1F2937]">No images found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-95 flex items-center justify-center p-4 animate-fade-in">
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 w-12 h-12 bg-[#F7941D] hover:bg-[#7BC043] rounded-full flex items-center justify-center text-white transition-all duration-300 transform hover:scale-110 hover:rotate-90 z-50"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Previous Button */}
          <button
            onClick={prevImage}
            className="absolute left-4 w-12 h-12  hover:bg-[#7BC043] rounded-full flex items-center justify-center text-white transition-all duration-300 transform hover:scale-110 z-50"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next Button */}
          <button
            onClick={nextImage}
            className="absolute right-4 w-12 h-12  hover:bg-[#7BC043] rounded-full flex items-center justify-center text-white transition-all duration-300 transform hover:scale-110 z-50"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Image Container */}
          <div className="max-w-5xl w-full animate-zoom-in">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl" style={{ aspectRatio: '16/9' }}>
              <img 
                src={selectedImage.image} 
                alt={selectedImage.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex items-end p-8">
                <div className="text-white">
                  <h3 className="text-3xl md:text-4xl font-bold mb-2">{selectedImage.title}</h3>
                  <p className="text-xl opacity-90 mb-2">{selectedImage.description}</p>
                  <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold">
                    {selectedImage.category}
                  </div>
                </div>
              </div>
            </div>

            {/* Image Counter */}
            <div className="text-white text-center mt-6 text-lg">
              {lightboxIndex + 1} / {filteredImages.length}
            </div>
          </div>
        </div>
      )}

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
          <div className="absolute bottom-0 left-0 w-64 h-64  rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 animate-fade-in">
            Want to Work with a Professional Telemarketing Team?
          </h2>
          
          <p className="text-lg md:text-xl mb-10 text-orange-100 animate-fade-in-delay">
            Partner with Connect Solution and experience transparent, reliable, and result-driven telemarketing services.
          </p>
          
          <NavLink to='/contact' className="group  hover:bg-[#7BC043] text-white px-10 py-4 rounded-full text-lg font-semibold shadow-2xl transform hover:scale-105 transition-all duration-300 inline-flex items-center gap-3">
            Contact Us Today
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

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes fade-in-delay {
          0% {
            opacity: 0;
          }
          50% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }

        @keyframes zoom-in {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
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

        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }

        .animate-fade-in-delay {
          animation: fade-in-delay 1s ease-out;
        }

        .animate-zoom-in {
          animation: zoom-in 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Gallery;