import { 
  Database, 
  Terminal, 
  Globe, 
  Code2, 
  Layers, 
  Cpu 
} from 'lucide-react';
import React from 'react';

export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  github: string;
  demo: string;
  category: 'Fullstack' | 'Frontend' | 'Backend';
  image: string;
}

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "ERP Management System",
    description: "A collaborative full-stack ERP system for managing sales, purchases, inventory, and customer accounts. Built with the MERN stack as part of a team project.",
    tags: ["MongoDB", "Express", "React", "Node.js", "Tailwind CSS"],
    github: "https://github.com/jumana18",
    demo: "https://github.com/jumana18",
    category: "Fullstack",
    image: "https://picsum.photos/seed/erp/1200/800"
  },
  {
    id: 2,
    title: "E-Commerce Frontend",
    description: "A modern, responsive e-commerce storefront with product listings, shopping cart functionality, and a seamless user interface. Built with React and Tailwind CSS.",
    tags: ["React", "Tailwind CSS", "JavaScript", "Responsive Design"],
    github: "https://github.com/jumana18",
    demo: "https://github.com/jumana18",
    category: "Frontend",
    image: "https://picsum.photos/seed/ecommerce/1200/800"
  }
];

export const HIGHLIGHT_SKILLS = [
  { name: "MongoDB", category: "Database", icon: React.createElement(Database, { size: 20 }) },
  { name: "Express", category: "Backend", icon: React.createElement(Cpu, { size: 20 }) },
  { name: "React", category: "Frontend", icon: React.createElement(Globe, { size: 20 }) },
  { name: "Node.js", category: "Runtime", icon: React.createElement(Terminal, { size: 20 }) },
  { name: "TypeScript", category: "Logic", icon: React.createElement(Code2, { size: 20 }) },
  { name: "Tailwind", category: "Design", icon: React.createElement(Layers, { size: 20 }) },
  { name: "JWT", category: "Security", icon: React.createElement(Cpu, { size: 20 }) },
  { name: "REST API", category: "Architecture", icon: React.createElement(Globe, { size: 20 }) },
];
