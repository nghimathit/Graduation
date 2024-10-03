
import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ targetDate }) => {
    const calculateTimeLeft = () => {
        const difference = new Date(targetDate) - new Date();
        let timeLeft = {};
    
        if (difference > 0) {
          timeLeft = {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
            minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
            seconds: Math.floor((difference % (1000 * 60)) / 1000),
          };
        }
    
        return timeLeft;
      };
      const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

      useEffect(() => {
        const timer = setInterval(() => {
          setTimeLeft(calculateTimeLeft());
        }, 1000);
    
        return () => clearInterval(timer);
      }, []);

  return (
   
    <div className="bg-white/50 rounded-lg shadow-lg p-1 text-center w-[200px]">
      {timeLeft.days !== undefined ? (
        <div className="flex justify-center space-x-4">
          <div className="flex flex-col items-center">
            <span className="text-[25px] font-bold text-blue-600">{timeLeft.days}:</span>
            <span className="text-[8px] text-gray-500">Ngày</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-[25px] font-bold text-blue-600">{timeLeft.hours}:</span>
            <span className="text-[8px] text-gray-500">Giờ</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-[25px] font-bold text-blue-600">{timeLeft.minutes}:</span>
            <span className="text-[8px] text-gray-500">Phút</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-[25px] font-bold text-blue-600">{timeLeft.seconds}</span>
            <span className="text-[8px] text-gray-500">Giây</span>
          </div>
        </div>
      ) : (
        <span className="text-2xl text-red-600">Thời gian đã hết!</span>
      )}
  </div>
  )
}

export default CountdownTimer