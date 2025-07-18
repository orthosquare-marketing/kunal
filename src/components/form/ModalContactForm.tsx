import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Button } from '../ui/button';
import { X } from 'lucide-react';

// Define an interface for your form data
interface FormData {
  firstName: string;
  lastName: string;
  emailAddress: string;
  contactNumber: string;
  countryOfResidence: string;
  privacyConsent: boolean;
}

interface ModalContactFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const ModalContactForm: React.FC<ModalContactFormProps> = ({ isOpen, onClose }) => {
  // State to hold form input values, explicitly typed
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    emailAddress: '',
    contactNumber: '',
    countryOfResidence: '',
    privacyConsent: false,
  });

  // State for submission status and messages
  const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [submissionMessage, setSubmissionMessage] = useState<string>('');

  // Google Apps Script Web App URL - REPLACE THIS WITH YOUR ACTUAL URL
  const GOOGLE_APPS_SCRIPT_URL: string = 'https://script.google.com/macros/s/AKfycbzvTiR1KKnsrD_S7ooYzqbMu8xB8MOih9HYWexkIA5wYdWIAVe6UxdCrfh3FPpUgosA/exec';

  // Handler for input changes, with explicit event type
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value, type, checked } = e.target;
    setFormData(prevData => ({
      ...prevData,
      // TypeScript is smart enough to infer the type here, but explicit casting can be done if needed
      [id]: type === 'checkbox' ? checked : value,
    }));
  };

  // Handler for form submission, with explicit event type
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent default form submission behavior (page reload)

    setSubmissionStatus('submitting');
    setSubmissionMessage('Sending your inquiry...');

    // Prepare data for submission
    const dataToSend = new URLSearchParams({
      firstName: formData.firstName,
      lastName: formData.lastName,
      emailAddress: formData.emailAddress,
      contactNumber: formData.contactNumber,
      countryOfResidence: formData.countryOfResidence,
      privacyConsent: formData.privacyConsent.toString(), // Convert boolean to string "true" or "false"
    }).toString();

    try {
      const response = await fetch(GOOGLE_APPS_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors', // Essential for direct client-side POST to Apps Script
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: dataToSend,
      });

      // As explained before, due to 'no-cors' mode, we assume success if no fetch error.
      setSubmissionStatus('success');
      setSubmissionMessage('Thank you! Your inquiry has been sent.');
      // Clear the form after successful submission
      setFormData({
        firstName: '',
        lastName: '',
        emailAddress: '',
        contactNumber: '',
        countryOfResidence: '',
        privacyConsent: false,
      });

      // Close modal after 2 seconds on success
      setTimeout(() => {
        onClose();
        setSubmissionStatus('idle');
        setSubmissionMessage('');
      }, 2000);

    } catch (error: any) { // Type 'any' for general error catching, or more specific if known
      console.error('Error submitting form:', error);
      setSubmissionStatus('error');
      // Optionally, you can try to get a more specific error message
      setSubmissionMessage(`There was an error sending your inquiry. Please try again later. Error: ${error.message || 'Unknown error'}`);
    }
  };

  // Close modal when clicking outside
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Modal Header */}
        <div className="flex justify-between items-center p-6 border-b">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#0578b1]">
              Plan Your Visit with Dr. Shet Today
            </h2>
            <p className="text-gray-700 text-sm md:text-base mt-2">
              Please fill out the form below to either{" "}
              <span
                onClick={() => {
                  window.open("https://wa.me/919167195818", "_blank");
                }}
                className="underline text-[#0578b1] cursor-pointer"
              >
                schedule a video consultation
              </span>{" "}
              with Dr. Shet or begin planning your dental trip to India.
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 p-2"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          <form onSubmit={handleSubmit}>
            <div className="border-2 border-[#0578b1] rounded-lg p-6 grid grid-cols-1 md:grid-cols-2 gap-6 text-[#0578b1] font-medium">
              <div className="flex flex-col">
                <label htmlFor="firstName" className="mb-1">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  className="border-b-2 border-[#0578b1] outline-none py-1 bg-transparent"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="lastName" className="mb-1">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  className="border-b-2 border-[#0578b1] outline-none py-1 bg-transparent"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="emailAddress" className="mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="emailAddress"
                  name="emailAddress"
                  className="border-b-2 border-[#0578b1] outline-none py-1 bg-transparent"
                  value={formData.emailAddress}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="contactNumber" className="mb-1">
                  Contact Number
                </label>
                <input
                  type="text"
                  id="contactNumber"
                  name="contactNumber"
                  className="border-b-2 border-[#0578b1] outline-none py-1 bg-transparent"
                  value={formData.contactNumber}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="flex flex-col md:col-span-2">
                <label htmlFor="countryOfResidence" className="mb-1">
                  Country Of Residence
                </label>
                <input
                  type="text"
                  id="countryOfResidence"
                  name="countryOfResidence"
                  className="border-b-2 border-[#0578b1] outline-none py-1 bg-transparent"
                  value={formData.countryOfResidence}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="md:col-span-2 flex items-start gap-2 text-sm text-[#0578b1]">
                <input
                  type="checkbox"
                  id="privacyConsent"
                  name="privacyConsent"
                  className="mt-1"
                  checked={formData.privacyConsent}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="privacyConsent" className="leading-snug">
                  By checking this box, I confirm that I agree to Orthosquare M.D.C.
                  Pvt. Ltd.'s Privacy Policy and consent to the use of my
                  information as stated
                </label>
              </div>

              {/* Submission status message */}
              {submissionStatus !== "idle" && (
                <p
                  className={`md:col-span-2 text-center mt-4 ${
                    submissionStatus === "success"
                      ? "text-green-600"
                      : submissionStatus === "error"
                      ? "text-red-600"
                      : "text-gray-600"
                  }`}
                >
                  {submissionMessage}
                </p>
              )}

              <div className="md:col-span-2 flex justify-center">
                <Button
                  type="submit"
                  className="bg-[#ff7f50] rounded-[5px] flex items-center justify-between px-5 hover:bg-[#046a9d] transition duration-200"
                  disabled={submissionStatus === "submitting"}
                >
                  <span className="whitespace-nowrap overflow-hidden text-ellipsis font-['Poppins'] font-medium text-white text-sm sm:text-base lg:text-[18px] tracking-[-0.5px] leading-normal text-center p-3">
                    {submissionStatus === "submitting"
                      ? "Submitting..."
                      : "Get Instant Consultation at ₹500"}
                  </span>
                  <img
                    className="w-[20px] h-[20px] ml-2"
                    alt="Frame"
                    src="/math.png"
                  />
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ModalContactForm;