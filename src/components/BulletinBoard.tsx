import React from 'react';
import { LinkSection } from './LinkSection';
import { CircularSection } from './CircularSection';

export function BulletinBoard() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
      <CircularSection />
      <LinkSection />
    </div>
  );
}