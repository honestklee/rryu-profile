'use client';

import { motion } from 'framer-motion';
import { GithubOutlined, LinkedinOutlined, TwitterOutlined, MailOutlined } from '@ant-design/icons';
import dynamic from 'next/dynamic';
import { LanyardErrorBoundary } from './LanyardErrorBoundary';
import { useScroll } from '../hooks/useScroll';
import { useSectionReady } from '@/hooks/useSectionReady';
import { HeroSkeleton } from '@/components/skeletons/SectionSkeletons';
import { CONTACT_EMAIL, gmailComposeTo } from '@/lib/gmailCompose';

const Lanyard = dynamic(() => import('./Lanyard'), { ssr: false });

const Hero = () => {
  const { scrollY } = useScroll();
  const ready = useSectionReady(260);
  
  const socialLinks = [
    { icon: <GithubOutlined />, href: 'https://github.com/honestklee', label: 'GitHub' },
    { icon: <LinkedinOutlined />, href: 'https://www.linkedin.com/in/rizky-ryu-245869271', label: 'LinkedIn' },
    { icon: <TwitterOutlined />, href: 'https://twitter.com', label: 'Twitter' },
    { icon: <MailOutlined />, href: gmailComposeTo(CONTACT_EMAIL), label: 'Email' },
  ];

  if (!ready) {
    return <HeroSkeleton />;
  }

  return (
    <section
      id="home"
      className="min-h-dvh min-h-[100svh] flex items-center justify-center relative overflow-hidden px-4 pb-8 pt-20 sm:px-8 sm:pb-0 sm:pt-0"
    >
      {/* 3D background layer */}
      <motion.div 
        className="absolute inset-0 z-0 pointer-events-none"
        style={{ 
          y: scrollY * 0.5,
          opacity: 1 - scrollY * 0.001
        }}
      >
        <div className="absolute inset-y-0 right-0 w-full md:w-1/2 pointer-events-none md:pointer-events-auto touch-none md:touch-auto">
          <LanyardErrorBoundary>
            <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
          </LanyardErrorBoundary>
        </div>
      </motion.div>

      <motion.div 
        className="relative z-10 mx-auto w-full max-w-6xl text-center"
        style={{ 
          y: scrollY * 0.3,
          opacity: 1 - scrollY * 0.0008
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-[clamp(1.75rem,6vw,4.5rem)] sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6 bg-linear-to-r from-purple-900 to-purple-600 bg-clip-text text-transparent leading-tight">
            Hi, I&apos;m Ryu Aditya
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-8"
        >
          <h2 className="text-lg sm:text-2xl md:text-4xl font-light text-purple-800 mb-3 sm:mb-4">
            Full Stack Developer & 3D Enthusiast
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-black/70 max-w-3xl mx-auto leading-relaxed">
            Crafting exceptional digital experiences with modern web technologies and creative 3D solutions. 
            Specialized in React, Next.js, Three.js, and building scalable applications.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-10 flex flex-col gap-3 sm:mb-12 sm:flex-row sm:justify-center sm:gap-4"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="min-h-12 w-full px-8 py-3.5 text-base sm:w-auto sm:py-4 bg-purple-800 text-white rounded-full font-semibold hover:bg-purple-900 transition-colors shadow-lg"
            style={{ backgroundColor: '#C08552' }}
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View My Work
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="min-h-12 w-full px-8 py-3.5 text-base sm:w-auto sm:py-4 border-2 border-purple-800 text-purple-800 rounded-full font-semibold hover:bg-purple-50 transition-colors"
            style={{ borderColor: '#C08552', color: '#C08552' }}
            onClick={() => document.getElementById('contacts')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get In Touch
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-wrap justify-center gap-4 sm:gap-6"
        >
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 bg-white/80 backdrop-blur rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
              style={{ color: '#C08552' }}
            >
              <span className="text-xl">{link.icon}</span>
            </motion.a>
          ))}
        </motion.div>

      </motion.div>
    </section>
  );
};

export default Hero;
