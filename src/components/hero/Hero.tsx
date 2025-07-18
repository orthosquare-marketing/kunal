// import { Button } from "../ui/button";
import ModalButton from "../../components/ui/modal-button";


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
            <ModalButton  
              buttonText="Quick Dental Consult at ₹500"
              className="w-full h-12 mt-8 lg:mt-[100px]"
            />
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
