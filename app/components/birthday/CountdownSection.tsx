'use client';

import { useState, useEffect } from 'react';

export default function CountdownSection() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const birthday = new Date('2024-04-12'); // Replace with actual birthday date
      const now = new Date();
      const difference = birthday.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    const timer = setInterval(calculateTimeLeft, 1000);
    calculateTimeLeft();

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-purple-800 mb-12">
          Time Until Celebration
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
          <div className="card bg-purple-100 text-center p-6">
            <div className="text-4xl font-bold text-purple-800">
              {timeLeft.days}
            </div>
            <div className="text-gray-600">Days</div>
          </div>
          <div className="card bg-purple-100 text-center p-6">
            <div className="text-4xl font-bold text-purple-800">
              {timeLeft.hours}
            </div>
            <div className="text-gray-600">Hours</div>
          </div>
          <div className="card bg-purple-100 text-center p-6">
            <div className="text-4xl font-bold text-purple-800">
              {timeLeft.minutes}
            </div>
            <div className="text-gray-600">Minutes</div>
          </div>
          <div className="card bg-purple-100 text-center p-6">
            <div className="text-4xl font-bold text-purple-800">
              {timeLeft.seconds}
            </div>
            <div className="text-gray-600">Seconds</div>
          </div>
        </div>
      </div>
    </section>
  );
} 