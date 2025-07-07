import { Button } from '../ui/button';
const ContactForm = () => {
  return (
    <section className="py-16 px-4 md:px-8 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0578b1] mb-4">
          Plan Your Visit with Dr. Shet Today
        </h2>
        <p className="text-gray-700 text-base md:text-lg mb-12">
          Please fill out the form below to either{" "}
          <a  onClick={() => {
                window.open('https://wa.me/919167195818', '_blank')
              }}
               className="underline text-[#0578b1]">
            schedule a video consultation
          </a>{" "}
          with Dr. Shet or begin planning your dental trip to India. You can choose the clinic location that suits you best
        </p>
      </div>

      <form className="max-w-4xl mx-auto border-2 border-[#0578b1] rounded-lg p-6 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-6 text-[#0578b1] font-medium">
        <div className="flex flex-col">
          <label htmlFor="firstName" className="mb-1">First Name</label>
          <input type="text" id="firstName" className="border-b-2 border-[#0578b1] outline-none py-1 bg-transparent" />
        </div>

        <div className="flex flex-col">
          <label htmlFor="lastName" className="mb-1">Last Name</label>
          <input type="text" id="lastName" className="border-b-2 border-[#0578b1] outline-none py-1 bg-transparent" />
        </div>

        <div className="flex flex-col">
          <label htmlFor="email" className="mb-1">Email Address</label>
          <input type="email" id="email" className="border-b-2 border-[#0578b1] outline-none py-1 bg-transparent" />
        </div>

        <div className="flex flex-col">
          <label htmlFor="contact" className="mb-1">Contact Number</label>
          <input type="text" id="contact" className="border-b-2 border-[#0578b1] outline-none py-1 bg-transparent" />
        </div>

        <div className="flex flex-col md:col-span-2">
          <label htmlFor="country" className="mb-1">Country Of Residence</label>
          <input type="text" id="country" className="border-b-2 border-[#0578b1] outline-none py-1 bg-transparent" />
        </div>

        <div className="md:col-span-2 flex items-start gap-2 text-sm text-[#0578b1]">
          <input type="checkbox" id="consent" className="mt-1" />
          <label htmlFor="consent" className="leading-snug">
            By checking this box, I confirm that I agree to Orthosquare M.D.C. Pvt. Ltd.’s Privacy Policy and consent to the use of my information as stated
          </label>
        </div>
      </form>

          <Button
              onClick={() => {
                window.open('https://wa.me/919167195818', '_blank')
              }}
              className="mt-8 bg-[#ff7f50] rounded-[5px] flex items-center justify-between px-5 mx-auto hover:bg-[#046a9d] transition duration-200">
              <span className="whitespace-nowrap overflow-hidden text-ellipsis font-['Poppins'] font-medium text-white text-sm sm:text-base lg:text-[20px] tracking-[-0.5px] leading-normal text-center p-3">
              Get Instant Consultation at ₹500
              </span>
              <img
                className="w-[20px] h-[20px] ml-2"
                alt="Frame"
                src="/math.png"
              />
            </Button>
    </section>
  );
};

export default ContactForm;
