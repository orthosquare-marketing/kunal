import React from "react";
// import { Button } from "../ui/button";
import ModalButton from "../../components/ui/modal-button";

const SmileSol: React.FC = () => {

    const transformations = [
        {
            title: "Orthodontic Treatments",
            pic: "/sol1.png",
        },
        {
            title: "Dental Implants",
            pic: "/sol2.png",
        },
        {
            title: "Smile Designing",
            pic: "/sol3.png",
        },
        {
            title: "Full Mouth Rehabilitation",
            pic: "/sol4.png",
        },
        {
            title: "Smile Enhancement ",
            pic: "/sol5.png",
        },
        {
            title: " Restorative Dentistry",
            pic: "/sol6.png",
        }
    ];


    return (
        <section className="bg-[#EAF8FF]  md:lg:bg-[url('/rectangle-474.svg')] bg-cover bg-center  overflow-hidden pb-12">
            <div className="container mx-auto max-w-7xl px-4 md:px-8 lg:px-0 lg:mx-auto lg:max-w-4xl">
            <h2 className="text-3xl mt-[5%] md:text-4xl lg:text-5xl font-bold text-[#0578b1]  text-center mb-12 lg:mb-10 ">
                        Dr. Kunal Shet’s Smile Solutions
                    </h2>
                <div className="relative">
                    
                    {/* Add lg:mx-auto and lg:px-XX for large screen margins */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {transformations.map((item, index) => (
                            <div
                                key={index}
                                className="w-full max-w-[250px] aspect-square bg-white rounded-lg shadow-lg overflow-hidden flex flex-col items-center p-4 mx-auto"
                                onClick={() => {
                                    window.open('https://wa.me/919167195818', '_blank')
                                  }}
                            >
                                <img
                                    src={item.pic}
                                    alt={item.title}
                                    className="w-full h-1/1  object-cover rounded-md mb-2"
                                />
                                <h3 className="text-center text-black/60 text-base font-medium">
                                    {item.title}
                                </h3>
                            </div>
                        ))}
                    </div>

                </div>
                {/* CTA Button */}
                {/* <Button
                    onClick={() => {
                        window.open('https://wa.me/919167195818', '_blank')
                    }}
                    className="mt-8 bg-[#ff7f50] rounded-[5px] flex items-center justify-between px-5 py mx-auto hover:bg-[#046a9d] transition duration-200">
                    <span className="whitespace-nowrap overflow-hidden text-ellipsis font-['Poppins'] font-medium text-white text-sm sm:text-base lg:text-[20px] tracking-[-0.5px] leading-normal text-center p-3">
                        Quick Connect via Video Call only at ₹500
                    </span>
                    <img
                        className="w-[20px] h-[20px] ml-2"
                        alt="Frame"
                        src="/math.png"
                    />
                </Button> */}
                <ModalButton  
              buttonText="Quick Connect via Video Call only at ₹500"
              className=" mt-8 bg-[#ff7f50] rounded-[5px] flex items-center justify-between px-5 py mx-auto hover:bg-[#046a9d] transition duration-200"
            />
            </div>
        </section>
    );
};

export default SmileSol;