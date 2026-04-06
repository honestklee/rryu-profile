'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HomeOutlined, UserOutlined, ProjectOutlined, MailOutlined, InfoCircleOutlined } from '@ant-design/icons';
import { useSectionReady } from '@/hooks/useSectionReady';
import { NavbarSkeleton } from '@/components/skeletons/SectionSkeletons';

const navItems = [
  { id: 'home', label: 'Home', icon: <HomeOutlined />, href: '#home' },
  { id: 'about', label: 'About', icon: <InfoCircleOutlined />, href: '#about' },
  { id: 'experiences', label: 'Experiences', icon: <UserOutlined />, href: '#experiences' },
  { id: 'projects', label: 'Projects', icon: <ProjectOutlined />, href: '#projects' },
  { id: 'contacts', label: 'Contacts', icon: <MailOutlined />, href: '#contacts' },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const navReady = useSectionReady(140);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.id);
      const scrollPosition = window.scrollY + 100;

      // Special handling for Home section
      if (scrollPosition < 300) {
        setActiveSection('home');
        return;
      }

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!navReady) {
    return <NavbarSkeleton />;
  }

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="fixed top-[max(0.75rem,env(safe-area-inset-top))] left-1/2 z-50 w-[min(100vw-0.75rem,42rem)] max-w-[calc(100vw-0.75rem)] -translate-x-1/2 px-1 sm:px-0"
    >
      <motion.div
        className="bg-white/95 backdrop-blur-2xl rounded-full shadow-2xl border border-purple-200/50 px-1 py-1.5 sm:px-2 sm:py-2"
        style={{ backgroundColor: 'rgba(241, 233, 233, 0.95)' }}
        whileHover={{ scale: 1.02 }}
        layout
      >
        <div className="flex items-center justify-center gap-0.5 overflow-x-auto overscroll-x-contain [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:gap-1">
          {navItems.map((item, index) => (
            <motion.button
              key={item.id}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => scrollToSection(item.id)}
              className={`relative shrink-0 px-2.5 py-2 sm:px-4 rounded-full transition-all duration-300 flex items-center gap-1.5 sm:gap-2 ${
                activeSection === item.id
                  ? 'text-purple-900 font-semibold'
                  : 'text-gray-800 hover:text-purple-900'
              }`}
              style={{
                backgroundColor: activeSection === item.id ? 'rgba(152, 37, 152, 0.1)' : 'transparent',
              }}
              whileHover={{ 
                scale: activeSection === item.id ? 1.02 : 1.05,
                backgroundColor: activeSection === item.id ? 'rgba(152, 37, 152, 0.15)' : 'rgba(152, 37, 152, 0.05)'
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-base sm:text-lg">{item.icon}</span>
              <span className="font-medium text-sm hidden sm:inline">{item.label}</span>
              
              {/* Active indicator - simplified for better readability */}
              {activeSection === item.id && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute inset-0 rounded-full border-2 border-purple-300"
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
            </motion.button>
          ))}
        </div>
        
        {/* Active section indicator */}
        <motion.div
          className="absolute -bottom-1 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <div className="w-1 h-1 bg-green-500 rounded-full animate-pulse"></div>
        </motion.div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
