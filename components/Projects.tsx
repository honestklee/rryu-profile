'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  GithubOutlined, 
  GlobalOutlined, 
  EyeOutlined,
  HeartOutlined,
  CodeOutlined
} from '@ant-design/icons';
import { useState } from 'react';
import { useScroll } from '../hooks/useScroll';
import { useSectionReady } from '@/hooks/useSectionReady';
import { ProjectsSkeleton } from '@/components/skeletons/SectionSkeletons';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const { scrollY } = useScroll();
  const ready = useSectionReady(440);

  const isPublicProjectImage = (src: string) =>
    src.startsWith('/') &&
    !src.includes('placeholder') &&
    /\.(png|jpe?g|webp|gif|avif|svg)$/i.test(src);

  const projects = [
    {
      id: 2,
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with real-time inventory, payment processing, and admin dashboard. (Remake Website) from Avian',
      image: '/Web/Avian.png',
      technologies: ['Next.js', 'React', 'Tailwind'],
      category: 'frontend',
      github: 'https://github.com',
      live: 'https://example.com',
      likes: 38,
      views: 980
    },
    {
      id: 3,
      title: 'BSMR Website',
      description: 'Implementation RBAC, Payment Gateway, Create Statistic for report, Email Schedule, and Makesure the website User Friendly. (Remake Website) From BSMR',
      image: '/Web/BSMR.png',
      technologies: ['React', 'Python', 'Tailwind', 'MySQL', 'NextJS', 'aws', 'SQLAlchemy'],
      category: 'fullstack',
      github: 'https://github.com',
      live: 'https://example.com',
      likes: 56,
      views: 2100
    },
    {
      id: 4,
      title: 'Fall Detection System',
      description: 'Fall detection System is Security from us to make sure all patients when they go into bathroom, so its makes patients more safe. We Implement RBAC and AI Summarize for the Accident.',
      image: '/Web/FallDetection.png',
      technologies: ['Next.js', 'OpenAI API', 'MySQL', 'PrismaDB', 'React', 'Tailwind'],
      category: 'fullstack',
      github: 'https://github.com',
      live: 'https://example.com',
      likes: 71,
      views: 3200
    },
    {
      id: 6,
      title: 'Safety Patrol Dashboard',
      description: 'Safety Patrol its a web for staff doing their works at all areas, and for their reporting some accidents on the areas.',
      image: '/Web/SafetyPatrol.png',
      technologies: ['.NET', 'SQL Server', 'Bootsrap', 'Sharepoint', 'Power Automate'],
      category: 'fullstack',
      github: 'https://github.com',
      live: 'https://example.com',
      likes: 45,
      views: 1560
    },
    {
      id: 7,
      title: 'Cat in a Box — Grease Pencil',
      description:
        'A stylized 2D-in-3D scene in Blender using Grease Pencil: a minimalist black cat peeks from a cardboard box with bold outlines, simple props, and lighting that reads like illustration inside a real 3D viewport.',
      image: '/3D/CatGreasePencil.png',
      technologies: ['Blender', 'Grease Pencil'],
      category: '3d',
      github: 'https://github.com',
      live: 'https://example.com',
      likes: 31,
      views: 720
    },
    {
      id: 8,
      title: 'Pou-Inspired Character — Grease Pencil',
      description:
        'A playful character study blending round, Pou-like shapes with cat ears and whiskers in a corner stage. Grease Pencil line work and flat color meet a 3D layout, with small details like chopsticks and a tail.',
      image: '/3D/PouGreasePencil.png',
      video: '/3D/PouGreasePencil.mkv',
      technologies: ['Blender', 'Grease Pencil'],
      category: '3d',
      github: 'https://github.com',
      live: 'https://example.com',
      likes: 27,
      views: 640
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: '3d', label: '3D Projects' },
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'frontend', label: 'Frontend' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  if (!ready) {
    return <ProjectsSkeleton />;
  }

  return (
    <motion.section 
      id="projects" 
      className="px-4 py-16 sm:px-8 sm:py-20 bg-white/50"
      style={{ 
        y: scrollY * -0.12,
        opacity: Math.max(0.9, 1 - scrollY * 0.0004)
      }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ amount: 0.2 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6" style={{ color: '#5E0006' }}>
            Featured Projects
          </h2>
          <div className="w-20 h-1 mx-auto mb-6" style={{ backgroundColor: '#C08552' }}></div>
          <p className="text-base sm:text-lg max-w-3xl mx-auto mb-8 px-1" style={{ color: '#C08552' }}>
            Explore my latest work and creative experiments in web development
          </p>

          {/* Filter buttons */}
          <div className="flex justify-center flex-wrap gap-2 sm:gap-3 px-1">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setFilter(category.id)}
                className={`min-h-10 px-4 py-2 text-sm sm:px-6 sm:text-base rounded-full font-medium transition-all ${
                  filter === category.id
                    ? 'text-white shadow-lg'
                    : 'bg-white text-purple-700 hover:bg-purple-50'
                }`}
                style={{ 
                  backgroundColor: filter === category.id ? '#C08552' : undefined 
                }}
              >
                {category.label}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Projects grid */}
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ amount: 0.2 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-purple-100 h-full flex flex-col">
                {/* Project image */}
                <div className="relative h-48 overflow-hidden bg-linear-to-br from-purple-100 to-pink-100">
                  {'video' in project && project.video ? (
                    <video
                      className="absolute inset-0 h-full w-full object-cover object-center bg-black"
                      src={project.video}
                      controls
                      playsInline
                      preload="metadata"
                      poster={
                        isPublicProjectImage(project.image) ? project.image : undefined
                      }
                    >
                      <source src={project.video} type="video/x-matroska" />
                    </video>
                  ) : isPublicProjectImage(project.image) ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <CodeOutlined className="text-6xl" style={{ color: '#C08552' }} />
                    </div>
                  )}
                  <div className="pointer-events-none absolute inset-0 hidden items-center justify-center bg-black/0 transition-colors duration-300 group-hover:bg-black/20 sm:flex">
                    <div className="flex space-x-4 opacity-0 pointer-events-none transition-opacity duration-300 group-hover:pointer-events-auto group-hover:opacity-100">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-12 h-12 bg-white/90 backdrop-blur rounded-full flex items-center justify-center shadow-lg"
                      >
                        <GithubOutlined className="text-xl" style={{ color: '#C08552' }} />
                      </motion.a>
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-12 h-12 bg-white/90 backdrop-blur rounded-full flex items-center justify-center shadow-lg"
                      >
                        <GlobalOutlined className="text-xl" style={{ color: '#C08552' }} />
                      </motion.a>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-end gap-2 border-b border-purple-100/80 bg-purple-50/50 px-4 py-2 sm:hidden">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-10 min-w-10 items-center justify-center rounded-full bg-white/95 text-lg shadow-md"
                    style={{ color: '#C08552' }}
                    aria-label="GitHub repository"
                  >
                    <GithubOutlined />
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-10 min-w-10 items-center justify-center rounded-full bg-white/95 text-lg shadow-md"
                    style={{ color: '#C08552' }}
                    aria-label="Live demo"
                  >
                    <GlobalOutlined />
                  </a>
                </div>

                {/* Project content */}
                <div className="p-4 sm:p-6 grow flex flex-col">
                  <h3 className="text-lg sm:text-xl font-bold mb-3 wrap-break-word" style={{ color: '#5E0006' }}>
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 grow leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-full text-xs font-medium"
                        style={{ 
                          backgroundColor: '#EED9B9', 
                          color: '#5E0006' 
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="flex flex-col gap-3 text-sm text-gray-500 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center space-x-1">
                        <HeartOutlined />
                        <span>{project.likes}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <EyeOutlined />
                        <span>{project.views}</span>
                      </div>
                    </div>
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      className="self-start font-medium hover:opacity-90 sm:self-auto"
                      style={{ color: '#C08552' }}
                    >
                      View Project →
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Load more button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ amount: 0.2 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full max-w-md px-8 py-3 border-2 rounded-full font-semibold transition-colors sm:w-auto"
            style={{ 
              borderColor: '#C08552', 
              color: '#C08552' 
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#C08552';
              e.currentTarget.style.color = 'white';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = '#C08552';
            }}
          >
            View All Projects on GitHub
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Projects;
