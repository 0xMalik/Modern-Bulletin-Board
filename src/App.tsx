import React, { useState, useEffect } from 'react';
import { BulletinBoard } from './components/BulletinBoard';
import { ThemeToggle } from './components/ThemeToggle';
import { FaNewspaper } from 'react-icons/fa';
import { getInitialTheme, updateTheme } from './utils/themeUtils';

function App() {
  const [isDark, setIsDark] = useState(getInitialTheme);

  useEffect(() => {
    updateTheme(isDark);
  }, [isDark]);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-200">
      <ThemeToggle isDark={isDark} onToggle={() => setIsDark(!isDark)} />
      
      <header className="pt-16 pb-8 px-6 text-center">
        <div className="flex items-center justify-center mb-4">
          <FaNewspaper className="w-12 h-12 text-blue-600 dark:text-blue-400" />
        </div>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
          لوحة الإعلانات الرقمية
        </h1>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          ابق على اطلاع بآخر التحديثات المؤسسية والموارد الأساسية
        </p>
      </header>

      <main className="container mx-auto px-4 pb-16">
        <BulletinBoard />
      </main>
    </div>
  );
}

export default App;