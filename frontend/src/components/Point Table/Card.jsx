import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function Cards({ houseName, score, events, image }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='relative max-w-md mx-auto sm:max-w-lg md:max-w-xl lg:max-w-2xl'>
      <div  className='cursor-pointer relative'>
        <img className='w-full object-cover mt-6' src={image} alt='Card Background' />

        <div  className='absolute inset-0 flex justify-between items-end px-4 pb-6 sm:px-8 sm:pb-8'>
          <p  onClick={() => setIsOpen(!isOpen)} className='text-2xl sm:text-3xl lg:text-4xl text-black font-bold h-6 w-1/4'>{score}</p>
          <p onClick={() => setIsOpen(!isOpen)} className='text-2xl sm:text-3xl lg:text-4xl text-black font-bold h-6 w-3/4'>{houseName}</p>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className='mx-auto mt-[-0.6rem] p-2 border  bg-white shadow-lg ml-[3.1rem] w-[14.7rem] max-w-sm sm:max-w-md md:max-w-lg'
          >
            <table className='w-full text-left border-collapse'>
              <thead>
                <tr>
                  <th className='border-b-2 p-2 text-sm sm:text-base'>Event Name</th>
                  <th className='border-b-2 p-2 text-sm sm:text-base'>Winner Name</th>
                  <th className='border-b-2 p-2 text-sm sm:text-base'>Points</th>
                </tr>
              </thead>
              <tbody>
                {events.map((event, index) => (
                  <tr key={index}>
                    <td className='border-b p-2 text-xs sm:text-sm'>{event.EventName}</td>
                    <td className='border-b p-2 text-xs sm:text-sm'>{event.WinnersName}</td>
                    <td className='border-b p-2 text-xs sm:text-sm'>{event.PonintSequre}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Cards;