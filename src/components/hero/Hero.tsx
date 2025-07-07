import { Button } from "../ui/button";
const Hero = () => {
  return (
    <section className="relative min-h-[500px]  bg-cover bg-center px-4 md:px-8 lg:px-0" style={{background:"#EAF8FF"}}>
      <div className="container mx-auto max-w-6xl ">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Left Column */}
          <div className="space-y-6 mt-[20%]">
            <h1 className="text-[3rem] sm:text-[40px] md:text-[60px] lg:text-[90px] font-black text-[#0578b1] leading-tight whitespace-nowrap">
              Dr. Kunal Shet
            </h1>

            <div className="font-['Beau_Rivage'] text-3xl md:text-[45px] text-[#0578b1]">
              crafting confident smiles worldwide
            </div>
            <div className="text-lg md:text-lg text-[#000000bf] font-medium">
              Award-Winning Implantologist | 80,000+ Smiles Delivered | Mentor
              to 400+ Dentists
            </div>
            <Button 
              onClick={() => {
                window.open('https://wa.me/919167195818', '_blank')
              }}
            className="w-full h-12 mt-8 lg:mt-[100px] bg-[#ff7f50] rounded-[5px] flex items-center justify-center gap-2 px-3 sm:px-4 overflow-hidden hover:bg-[#046a9d] transition duration-200">
              <div className="min-w-0 flex items-center gap-2">
                <span className="whitespace-nowrap overflow-hidden text-ellipsis font-['Poppins'] font-medium text-white text-[17px] sm:text-[18px] lg:text-[20px] tracking-[-0.5px] leading-normal text-center">
                  Quick Dental Consult at ₹500
                </span>

                <img
                  className="w-[20px] h-[20px] sm:w-[22px] sm:h-[22px] flex-shrink-0"
                  alt="Arrow Icon"
                  src="/math.png"
                />
              </div>
            </Button>
          </div>
          {/* Right Column */}
          <div className="relative ">
            <img
              src="/aasiya--2--1.png"
              alt="Dr. Kunal Shet"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
