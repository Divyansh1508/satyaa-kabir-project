import React from "react";

const Header = () => {
  return (
    <div>
      <header className="bg-white shadow-sm py-4 px-4 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="text-2xl font-bold text-blue-600">MBBS WAy</div>
          </div>

          <div className="flex flex-wrap item-centre gap-3 md:gap-6">
            <button className="bg-black text-white font-bold p-3  ">
              🎙️live counselling
            </button>
            <div className="text-xs md:text-sm">
              <div className="font-semibold flex items-center gap-1">
                📞<span className="hidden sm:inline ">Call us</span>
              </div>
              <div className="text-gray-700">9826919871</div>
            </div>
            <div className="text-xs md:text-sm">
              <div className="font-semibold flex items-center gap-1">
                📱<span className="hidden sm:inline ">whatsapp</span>
              </div>
              <div className="text-gray-700">9826919871</div>
            </div>
            <div className="text-xs md:text-sm">
              <div className="font-semibold flex items-center gap-1">
                ✉️<span className="hidden sm:inline ">email us</span>
              </div>
              <div className="text-gray-700">example@gmail.com</div>
            </div>
            <button className="bg-black text-white font-bold p-3  ">
              📆Book appointment
            </button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
