import React from 'react';
import { NavItem } from '../types';

interface NavigationProps {
  items: NavItem[];
  currentSection: string;
  onNavigate: (index: number) => void;
}

export const Navigation: React.FC<NavigationProps> = ({ items, currentSection, onNavigate }) => {
  return (
    <nav className="fixed top-8 right-8 z-50 hidden md:block">
      <ul className="flex space-x-8">
        {items.map((item, index) => (
          <li key={item.id}>
            <button
              onClick={() => onNavigate(index)}
              className={`text-sm font-display uppercase tracking-widest transition-all duration-300 hover:line-through decoration-1 ${
                currentSection === item.id ? 'font-bold border-b-2 border-black' : 'font-normal'
              }`}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};