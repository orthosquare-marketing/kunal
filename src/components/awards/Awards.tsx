import { useState, useEffect, useCallback } from "react";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ModalButton from "../ui/modal-button";
const Awards = () => {
  const [currentIndex, setCurrentIndex] = useState(2);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const awardCards = [
    {
      title: "All-on-4 Treatment Excellence",
      description: "Recognized for world-class All-on-4 implant solutions, trusted by patients across India and international clients seeking expert care.",
      year: "2023, 2024, 2025",
      image: "/c1.png",
    },
    {
      title: "80,000+ Successful Smiles, One Smile Expert",
      description: "Dr. Shet has successfully placed over 80,000 dental implants, transforming countless smiles with precision and care.",
      year: "",
      image: "/c2.png",
    },
    {
      title: "Shaping Future of 400+ Dental Professionals",
      description: "An inspiring educator, Dr. Shet has trained and mentored over 400 dentists in advanced implantology and orthodontic techniques.",
      year: "2023, 2024, 2025",
      image: "/c3.png",
    },
    {
      title: "Spreading Dental Wisdom Worldwide ",
      description: "He is regularly invited to speak at international dental conferences and workshops, sharing clinical insights and advanced implant protocols.",
      year: "",
      image: "/c4.png",
    },
    {
      title: "Delivering World-Class Care Globally",
      description: "A destination where global travelers choose Dr. Kunal Shet for advanced, affordable treatments. Trusted & Recommendedworldwide.",
      year: "",
      image: "/c5.png",
    },
    {
      title: "Leading Dental Chain of the Year",
      description: "Honored for setting new benchmarks in patient-first dental care, welcoming smiles from India and around the globe.",
      year: "",
      image: "/c6.png",
    }
  ];

  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % awardCards.length);
  }, [awardCards.length]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? awardCards.length - 1 : prevIndex - 1
    );
  }, [awardCards.length]);

  useEffect(() => {
    const interval = setInterval(handleNext, 3000);
    return () => clearInterval(interval);
  }, [handleNext]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      handleNext();
    }
    if (touchStart - touchEnd < -75) {
      handlePrev();
    }
  };

  const getVisibleCards = () => {
    const cards = [];
    for (let i = 0; i < 5; i++) {
      const index = (currentIndex - 2 + i + awardCards.length) % awardCards.length;
      cards.push({ ...awardCards[index], position: i });
    }
    return cards;
  };

  const getCardStyle = (position: number) => {
    let scale = 1;
    let zIndex = 1;
    let opacity = 1;
    let translateX = (position - 2) * 160;

    if (position === 2) {
      scale = 1.1;
      zIndex = 3;
    } else if (position === 1 || position === 3) {
      scale = 0.9;
      zIndex = 2;
    } else {
      scale = 0.8;
      opacity = 0.6;
    }

    return {
      transform: `translateX(${translateX}px) scale(${scale})`,
      zIndex,
      opacity,
      transition: "all 0.5s ease",
      position: "absolute" as "absolute",
    };
  };

  return (
    <section className="py-12 md:py-16 px-4 md:px-8 lg:px-0 overflow-hidden lg:mx-auto lg:max-w-6xl">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#0578b1] text-center mb-8">
          Healthy Smiles,
          <br />
          <span className="font-bold">Recognized Globally</span>
        </h2>

        {/* Carousel */}
        <div 
          className="relative h-[400px] md:h-[450px] mt-8 lg:mt-12"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-colors"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 text-[#0578b1]" />
          </button>
          
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-colors"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 text-[#0578b1]" />
          </button>

          <div className="w-full h-full flex items-center justify-center relative">
            {getVisibleCards().map((award, index) => (
              <Card
                key={index}
                className="transition-all duration-500 touch-none"
                style={getCardStyle(award.position)}
              >
                <div className="w-[280px] p-6 bg-white rounded-lg shadow-lg">
                  <div className="w-full h-[120px] bg-[#eaf8ff] mb-4 overflow-hidden rounded-md">
                    <img
                      src={award.image}
                      alt={award.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-sm text-[#4a4a4a] font-semibold mb-2">
                    {award.year}
                  </div>
                  <h3 className="text-lg font-semibold text-[#0578b1] mb-2">
                    {award.title}
                  </h3>
                  <p className="text-sm text-[#4a4a4a]">
                    {award.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <ModalButton  
              buttonText="Request a Pricing Quote"
              className="mt-8 bg-[#ff7f50] rounded-[5px] flex items-center justify-between px-5 mx-auto hover:bg-[#046a9d] transition duration-200"
            />
       
      </div>
    </section>
  );
};

export default Awards;