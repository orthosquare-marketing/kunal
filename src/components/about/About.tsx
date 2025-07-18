// import { Button } from "../ui/button";
import ModalButton from "../../components/ui/modal-button";

const About = () => {
  return (
    <div>
      <section className="  md:py-24  md:px-8 lg:px-0  ">
        <div className="container mb-10 text-center !p-0">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#0578b1]">
            Meet Dr. Kunal Shet: The Smile Architect
          </h2>
        </div>



        <div className=" ">
          <div className="grid grid-cols-1 lg:grid-cols-3 ">
            {/* Image section - displayed first on mobile */}
            <div className="order-1 lg:order-2 relative flex flex-col items-center ">
              <img
                src="/group-168.png"
                alt="Dr. Kunal Shet Portrait"
                className="w-full max-w-md mx-auto object-contain"
                style={{ height: "300px" }}
              />

              <div className="text-center mt-4 ">
                <h3 className="text-xl font-black text-[#0578b1]">
                  Dr. Kunal Shet
                </h3>
                <p className="text-sm text-[#0578b1] m-2">
                  (BDS, MDS, Orthodontics & Dentofacial Orthopedics,
                  Implantologist (Masters in Cortical Implantology))
                </p>
              </div>
            </div>

            {/* Text section - displayed second on mobile */}
            <div className="space-y-6 order-2 lg:order-1 col-span-2 lg:ml-20 ">

              <div className="text-lg text-[#4a4a4a] space-y-4 ">
                <p className="mx-5 md:mx-0 lg:mx-0">
                  Dr. Kunal Shet is a celebrated implantologist and a pioneer in
                  modern dentistry, renowned for transforming over 80,000 smiles
                  across India. With a BDS, a postgrad in Orthodontics and
                  Dentofacial Orthopedics, and a Master's in Cortical
                  Implantology from Italy, he brings unmatched expertise,
                  warmth, and visionary leadership to the field.
                </p>
                <p className="mx-5 md:mx-0 lg:mx-0">
                As the founder of Orthosquare Multispeciality Dental Clinic — India’s fastest-growing and award-winning dental network with over 120 clinics across India — Dr. Shet is admired for his precision, passion, and patient-first philosophy. Widely regarded as one of the country’s finest implantologists, he is among the few experts skilled in both immediate and delayed implant loading techniques.
                </p>
                <p className="mx-5 md:mx-0 lg:mx-0">
                His relentless pursuit of excellence has earned Orthosquare the prestigious "All on Four Centre of Excellence" recognition by Nobel Biocare, affirming his commitment to delivering world-class, high-quality dental solutions.
                </p>
              </div>
            </div>
          </div>
          {/* CTA Button */}
          <div className="w-full text-center mb-10">
            {/* <Button
              onClick={() => {
                window.open('https://wa.me/919167195818', '_blank')
              }}
              className="mt-8 bg-[#ff7f50] rounded-[5px] flex items-center justify-between px-5 mx-auto hover:bg-[#046a9d] transition duration-200">
              <span className="whitespace-nowrap overflow-hidden text-ellipsis font-['Poppins'] font-medium text-white text-sm sm:text-base lg:text-[20px] tracking-[-0.5px] leading-normal text-center p-3">
              Consult with Dr. Shet via Video Call at ₹500
              </span>
              <img
                className="w-[20px] h-[20px] ml-2"
                alt="Frame"
                src="/math.png"
              />
            </Button> */}

            <ModalButton  
              buttonText="Consult with Dr. Shet via Video Call at ₹500"
              className="mt-8 bg-[#ff7f50] rounded-[5px] flex items-center justify-between px-5 mx-auto hover:bg-[#046a9d] transition duration-200"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
