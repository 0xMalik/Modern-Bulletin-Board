import React, { useState, useEffect, useCallback } from 'react';
import { FaChevronLeft, FaChevronRight, FaCalendarAlt, FaBuilding } from 'react-icons/fa';
import { Circular } from '../types';
import { formatDate } from '../utils/dateUtils';

interface CircularCarouselProps {
  circulars: Circular[];
}

export function CircularCarousel({ circulars }: CircularCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) => 
      prevIndex === circulars.length - 1 ? 0 : prevIndex + 1
    );
  }, [circulars.length]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? circulars.length - 1 : prevIndex - 1
    );
  };

  // Auto-swipe functionality
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(goToNext, 3000);
      return () => clearInterval(interval);
    }
  }, [goToNext, isPaused]);

  const current = circulars[currentIndex];

  return (
    <div 
      className="w-full bg-white dark:bg-gray-800 rounded-lg overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* A4 aspect ratio container */}
      <div className="relative aspect-[1/1.4142]">
        <img
          src={current.imageUrl}
          alt={current.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        {/* Navigation buttons */}
        <div className="absolute inset-0 flex items-center justify-between p-4">
          <button
            onClick={goToPrevious}
            className="p-2 rounded-full bg-black/30 hover:bg-black/50 text-white transition-colors"
            aria-label="Previous circular"
          >
            <FaChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={goToNext}
            className="p-2 rounded-full bg-black/30 hover:bg-black/50 text-white transition-colors"
            aria-label="Next circular"
          >
            <FaChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Info overlay */}
        <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-4">
          <h3 className="text-xl font-bold mb-2">{current.title}</h3>
          <div className="flex items-center gap-4 text-sm">
            <div className="flex items-center gap-1">
              <FaCalendarAlt className="w-4 h-4" />
              <span>{formatDate(current.date)}</span>
            </div>
            <div className="flex items-center gap-1">
              <FaBuilding className="w-4 h-4" />
              <span>{current.department}</span>
            </div>
          </div>
        </div>

        {/* Pagination dots */}
        <div className="absolute bottom-4 right-4 flex gap-2">
          {circulars.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex ? 'bg-white' : 'bg-white/50'
              }`}
              aria-label={`Go to circular ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}