import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { Link } from '../types';

interface LinkCardProps {
  link: Link;
}

export function LinkCard({ link }: LinkCardProps) {
  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block group p-6 rounded-xl shadow-lg bg-white dark:bg-gray-800 
                border border-gray-200 dark:border-gray-700
                hover:shadow-xl transition-all duration-200"
    >
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {link.title}
        </h3>
        <FaExternalLinkAlt className="w-5 h-5 text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400" />
      </div>
    </a>
  );
}