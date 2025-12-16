import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import { NavLink } from "react-router-dom";
import "swiper/css";
import "swiper/css/effect-fade";

export default function Slider({
  h1 = "Grow Your Business with Smart Telemarketing",
  subH1 = "High-quality leads, better conversions, real results",
  img1 = "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1920&q=80",
  
  h2 = "Professional Telecalling & Telesales Services",
  subH2 = "Expert calling solutions designed to convert prospects into customers",
  img2 = "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1920&q=80",

  h3 = "Trusted Partner for Business Growth",
  subH3 = "Helping businesses scale faster with reliable telemarketing solutions",
  img3 = "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1920&q=80",
}) {
  const slides = [
    {
      heading: h1,
      subheading: subH1,
      bgImage:
        img1,
    },
    {
     heading: h2,
      subheading: subH2,
      bgImage:
        img2,
    },
    {
      heading: h3,
      subheading: subH3,
      bgImage:
        img3,
    },
  ];

  return (
    <div className="relative w-full h-[35vh] sm:h-[60vh] md:h-100 mt-16">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        loop={true}
        speed={1000}
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${slide.bgImage})` }}
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black opacity-70"></div>

              {/* Content */}
              <div className="relative z-10 flex items-center justify-center h-full px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto text-center">
                  {/* Heading */}
                  <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-2 sm:mb-4 leading-tight animate-fade-in">
                    {slide.heading}
                  </h1>

                  {/* Subheading */}
                  <p className="text-sm sm:text-base md:text-xl text-white mb-4 sm:mb-6 leading-relaxed animate-fade-in-delay">
                    {slide.subheading}
                  </p>

                  {/* Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-delay-2">
                    {/* Primary Button */}
                    <NavLink to="/consultation">
                      <button
                        className="w-full sm:w-auto px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold text-white text-sm sm:text-base transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                        style={{ backgroundColor: "#F7941D" }}
                        onMouseEnter={(e) =>
                          (e.target.style.backgroundColor = "#d87a15")
                        }
                        onMouseLeave={(e) =>
                          (e.target.style.backgroundColor = "#F7941D")
                        }
                      >
                      Get Free Consultation
                    </button>
                  </NavLink>

                    {/* Secondary Button */}
                    <a href="tel:+91 88810 55055" className="w-full sm:w-auto px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold text-white text-sm sm:text-base border-2 border-white bg-transparent transition-all duration-300 transform hover:scale-105 hover:bg-white hover:text-[#1FA4C4]">
                      Call Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style>{`
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

        .animate-fade-in {
          animation: fadeIn 0.8s ease-out;
        }

        .animate-fade-in-delay {
          animation: fadeIn 0.8s ease-out 0.2s backwards;
        }

        .animate-fade-in-delay-2 {
          animation: fadeIn 0.8s ease-out 0.4s backwards;
        }
      `}</style>
    </div>
  );
}
