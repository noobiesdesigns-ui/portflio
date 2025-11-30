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
  description?: string;
  client?: string;
  tags?: string[];
}

export interface ServiceProject {
  id: string;
  title: string;
  client: string;
  description: string;
  year: string;
  imageUrl: string; // URL or placeholder
}

export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  projects?: ServiceProject[];
}

export interface SectionProps {
  x: MotionValue<number>;
  onServiceClick?: (serviceId: string) => void;
  onWorkClick?: (project: Project) => void;
}