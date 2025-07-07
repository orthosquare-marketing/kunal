
import { Button } from '../ui/button';


const Clinics = () => {

  return (
    <div>
      <section className="py-16 md:py-24 px-4 md:px-8 lg:px-0">
      <div className="container mx-auto max-w-7xl lg:mx-auto lg:max-w-6xl">
  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0578b1] text-center mb-12">
    Explore Our Dental Tourism Location
  </h2>

  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
    
    {/* IMAGE: Show first on mobile, second on desktop */}
    <div className="order-1 lg:order-2 flex items-center justify-center">
      <img
        src="/map.png"
        alt="India Dental Locations Map"
        className="w-full max-w-[500px] h-auto"
      />
    </div>

    {/* TEXT + VIDEO: Show second on mobile, first on desktop */}
    <div className="order-2 lg:order-1 flex flex-col gap-6">
      <p className="text-lg leading-relaxed">
        With over 117 state-of-the-art dental clinics across India, our network ensures seamless, modern, and personalized care for implants, aligners, cosmetic makeovers, and full smile rehabilitations. From vibrant cities like Mumbai, Pune, Bangalore, and Delhi to rapidly growing destinations in Ahmedabad, Hyderabad, Kochi, and beyond, high-quality dental care is never far away. For international patients, we offer a complete care experience, including premium treatments, transparent procedures, and dedicated travel support, ensuring a smooth journey from treatment planning to post-care.
      </p>

      <div className="relative rounded-lg overflow-hidden">
        <div className="relative h-[300px] md:h-[400px]">
          <iframe
            className="absolute top-0 left-0 w-full h-full transition-opacity duration-500"
            src="https://www.youtube.com/embed/tQIQlmsN54o?rel=0&modestbranding=1&autoplay=1&mute=1&loop=1&playlist=tQIQlmsN54o"
            title="Dental Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  </div>
</div>

        <Button
              onClick={() => {
                window.open('https://wa.me/919167195818', '_blank')
              }}
              className="mt-8 bg-[#ff7f50] rounded-[5px] flex items-center justify-between px-5 mx-auto hover:bg-[#046a9d] transition duration-200">
              <span className="whitespace-nowrap overflow-hidden text-ellipsis font-['Poppins'] font-medium text-white text-sm sm:text-base lg:text-[20px] tracking-[-0.5px] leading-normal text-center p-3">
              Expert Video Consultation with Dr. Shet
              </span>
              <img
                className="w-[20px] h-[20px] ml-2"
                alt="Frame"
                src="/math.png"
              />
            </Button>
      </section>
    </div>
  );
};

export default Clinics;
