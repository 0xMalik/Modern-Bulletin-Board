import React from 'react';
import { CircularCarousel } from './CircularCarousel';
import { circulars } from '../data/circulars';

export function CircularSection() {
  return (
    <section className="lg:sticky lg:top-8 space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          Corporate Circulars
        </h2>
        <span className="px-3 py-1 text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30 rounded-full">
          {circulars.length} Updates
        </span>
      </div>
      
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-4">
        <CircularCarousel circulars={circulars} />
      </div>
    </section>
  );
}