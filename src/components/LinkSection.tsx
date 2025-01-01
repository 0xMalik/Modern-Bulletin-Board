import React from 'react';
import { LinkCard } from './LinkCard';
import { links } from '../data/links';
import { Link } from '../types';

export function LinkSection() {
  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          روابط مهمة
        </h2>
        <span className="px-3 py-1 text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30 rounded-full">
          {links.length} مصادر
        </span>
      </div>

      {/* Links grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {links.map((link: Link, index: number) => (
          <LinkCard key={index} link={link} />
        ))}
      </div>
    </section>
  );
}