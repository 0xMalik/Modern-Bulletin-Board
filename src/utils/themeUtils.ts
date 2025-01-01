export function getInitialTheme(): boolean {
  if (typeof window === 'undefined') return true;
  
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme !== null) {
    return savedTheme === 'dark';
  }
  
  return true; // Default to dark theme
}

export function updateTheme(isDark: boolean): void {
  if (isDark) {
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  } else {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  }
}