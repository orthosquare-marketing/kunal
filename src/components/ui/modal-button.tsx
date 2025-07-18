import React, { useState } from 'react';
import { Button } from './button';
import ModalContactForm from '../form/ModalContactForm';

interface ModalButtonProps {
  buttonText?: string;
  className?: string;
}

const ModalButton: React.FC<ModalButtonProps> = ({ 
  buttonText = "Get Consultation at ₹500",
  className = ""
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <Button
        onClick={openModal}
        className={`bg-[#ff7f50] rounded-[5px] flex items-center justify-between px-5 hover:bg-[#046a9d] transition duration-200 ${className}`}
      >
        <span className="whitespace-nowrap overflow-hidden text-ellipsis font-['Poppins'] font-medium text-white text-sm sm:text-base lg:text-[20px] tracking-[-0.5px] leading-normal text-center p-3">
          {buttonText}
        </span>
        <img
          className="w-[20px] h-[20px] ml-2"
          alt="Frame"
          src="/math.png"
        />
      </Button>

      <ModalContactForm 
        isOpen={isModalOpen} 
        onClose={closeModal} 
      />
    </>
  );
};

export default ModalButton;