"use client";

import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [theme, setTheme] = useState('night-blue');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem('portfolio-theme') || 'night-blue';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'night-blue' ? 'bw' : 'night-blue';
    setTheme(newTheme);
    localStorage.setItem('portfolio-theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  if (!mounted) {
    return <div style={{ width: '42px', height: '42px' }}></div>;
  }

  return (
    <button 
      onClick={toggleTheme} 
      className="theme-switch-btn"
      aria-label="Temayı Değiştir"
      title={theme === 'night-blue' ? 'Siyah-Beyaz Moda Geç' : 'Gece Mavisi Moda Geç'}
    >
      {theme === 'night-blue' ? (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10z"/>
          <path d="M12 2a15.3 15.3 0 0 0-4 10 15.3 15.3 0 0 0 4 10z"/>
          <path d="M2 12h20"/>
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" fill="currentColor"/>
          <path d="M12 2a10 10 0 0 0 0 20z" fill="#ffffff" />
        </svg>
      )}
    </button>
  );
}
