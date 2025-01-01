import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import './styles/preloader.css';

// Preloader functionality with accurate resource tracking
const updateLoader = (progress: number) => {
  const progressBar = document.querySelector('.progress') as HTMLElement;
  const percentage = document.querySelector('.percentage') as HTMLElement;
  const preloader = document.querySelector('#preloader') as HTMLElement;

  if (progressBar && percentage) {
    progressBar.style.width = `${progress}%`;
    percentage.textContent = `${Math.round(progress)}%`;

    if (progress >= 100) {
      setTimeout(() => {
        preloader.classList.add('fade-out');
        setTimeout(() => {
          preloader.style.display = 'none';
        }, 500);
      }, 500);
    }
  }
};

// Track actual resource loading
let loadedResources = 0;
let totalResources = 0;

// Count all resources that need to be loaded
const countResources = () => {
  // Count scripts
  const scripts = document.getElementsByTagName('script');
  // Count stylesheets
  const stylesheets = document.getElementsByTagName('link');
  // Count images
  const images = document.getElementsByTagName('img');
  
  totalResources = scripts.length + stylesheets.length + images.length;
  
  // Add event listeners to track resource loading
  Array.from(scripts).forEach(script => {
    if (script.src) {
      script.addEventListener('load', updateProgress);
      script.addEventListener('error', updateProgress);
    } else {
      loadedResources++;
    }
  });

  Array.from(stylesheets).forEach(stylesheet => {
    if (stylesheet.rel === 'stylesheet') {
      stylesheet.addEventListener('load', updateProgress);
      stylesheet.addEventListener('error', updateProgress);
    } else {
      loadedResources++;
    }
  });

  Array.from(images).forEach(image => {
    if (image.complete) {
      loadedResources++;
    } else {
      image.addEventListener('load', updateProgress);
      image.addEventListener('error', updateProgress);
    }
  });

  // Update initial progress
  updateProgress();
};

// Update progress based on loaded resources
const updateProgress = () => {
  loadedResources++;
  const progress = (loadedResources / Math.max(totalResources, 1)) * 100;
  updateLoader(Math.min(progress, 100));
};

// Initialize resource counting
document.addEventListener('DOMContentLoaded', countResources);

// Ensure minimum loading time and smooth progress
setTimeout(() => {
  if (loadedResources < totalResources) {
    loadedResources = totalResources;
    updateLoader(100);
  }
}, 2000);

// Load React app
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
