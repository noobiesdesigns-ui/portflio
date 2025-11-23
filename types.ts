import { MotionValue } from 'framer-motion';

export interface NavItem {
  label: string;
  id: string;
}

export interface Project {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
  year: string;
}

export interface Service {
  id: number;
  title: string;
  description: string;
}

export interface SectionProps {
  x: MotionValue<number>;
}