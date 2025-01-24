const MobileWarning = () => {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center bg-white p-4 text-center">
      <h1 className="text-3xl font-bold text-blue-500 mb-4">⚠️ Desktop Only</h1>
      <p className="text-xl text-gray-700">
        This portfolio is designed specifically for desktop viewing. Please
        visit this site on a PC for the best experience.
      </p>
    </div>
  );
};

export default MobileWarning;
