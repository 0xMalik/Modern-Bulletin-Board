export interface Link {
  title: string;
  url: string;
  category: string;
  description: string;
  featured?: boolean;
}

export interface Circular {
  id: string;
  title: string;
  date: string;
  imageUrl: string;
  department: string;
}

export interface ThemeToggleProps {
  isDark: boolean;
  onToggle: () => void;
}