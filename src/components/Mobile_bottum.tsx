const MobileBottom = () => {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 block lg:hidden z-50"
      style={{ paddingBottom: 'env(safe-area-inset-bottom)' }} // Key Fix
    >
      <div className="grid grid-cols-2 gap-0">
        <a
          href="https://wa.me/919167195818"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-center bg-[#ff7f50] p-3 font-bold text-lg"
        >
          Enquiry Now
        </a>
        <a
          href="tel:919167195818"
          className="text-white text-center bg-[#141414]/65 p-3 font-bold text-lg"
        >
          Call Now
        </a>
      </div>
    </div>
  );
};

export default MobileBottom;
