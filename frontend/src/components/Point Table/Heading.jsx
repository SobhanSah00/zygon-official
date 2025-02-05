import React from 'react';

function Heading() {
  return (
    <div className="relative w-60 sm:w-72 md:w-96 lg:w-1/2 h-20 sm:h-24 md:h-32 lg:h-40 mx-auto">
      <img 
        className="w-full h-full object-cover rounded-lg" 
        src="/Heading.png" 
        alt="Wooden Background" 
      />
      <div className="absolute inset-0 flex items-center justify-center z-20">
        <h1 className="text-sm sm:text-lg md:text-2xl lg:text-3xl font-extrabold text-amber-800 uppercase">
          Points Table
        </h1>
      </div>
    </div>
  );
}

export default Heading;