const ThankYou = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 px-4">
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-xl p-8 md:p-16 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-6" style={{ color: '#017ab8' }}>
          Thank You! We Appreciate Your Interest in Orthosquare Multispeciality Dental Chain!
        </h1>

        <p className="text-gray-700 text-lg md:text-xl mb-6 leading-relaxed">
          Thank you for reaching out to us! Your message has been received, and our dedicated team will connect with you shortly to ensure you receive the exceptional dental care you deserve. Your journey to a brighter, healthier smile begins with us!
        </p>

        <p className="text-xl md:text-2xl font-semibold mb-8" style={{ color: '#017ab8' }}>
          We look forward to helping you achieve a healthier smile!
        </p>

        <button
          onClick={() => window.location.href = '/'}
          className="px-8 py-3 rounded-lg font-semibold text-white transition-all duration-300 hover:opacity-90"
          style={{ backgroundColor: '#017ab8' }}
        >
          Return to Home
        </button>
      </div>
    </div>
  );
};

export default ThankYou;
