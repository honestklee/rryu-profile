'use client';

import { motion } from 'framer-motion';
import {
  PythonOutlined,
  Html5Outlined,
  ClusterOutlined,
  RocketOutlined,
  ApiOutlined,
  EnvironmentOutlined,
  LayoutOutlined,
  AppstoreOutlined,
  DotNetOutlined,
  ConsoleSqlOutlined,
} from '@ant-design/icons';
import { useScroll } from '../hooks/useScroll';
import { useSectionReady } from '@/hooks/useSectionReady';
import { AboutSkeleton } from '@/components/skeletons/SectionSkeletons';

const About = () => {
  const { scrollY } = useScroll();
  const ready = useSectionReady(320);
  
  const skills = [
    { name: 'Python', icon: <PythonOutlined />, level: 95 },
    { name: 'React', icon: <ClusterOutlined />, level: 85 },
    { name: 'Next.js', icon: <RocketOutlined />, level: 95 },
    { name: 'Laravel', icon: <ApiOutlined />, level: 90 },
    { name: 'Three.js', icon: <EnvironmentOutlined />, level: 70 },
    { name: 'Nuxt.js', icon: <LayoutOutlined />, level: 60 },
    { name: 'Vue.js', icon: <AppstoreOutlined />, level: 65 },
    { name: '.NET', icon: <DotNetOutlined />, level: 65 },
    { name: 'HTML/CSS', icon: <Html5Outlined />, level: 100 },
    { name: 'MySQL', icon: <ConsoleSqlOutlined />, level: 100 },
  ];

  const technologies = [
    'React', 'Next.js', 'TypeScript', 'Python', 'Three.js', 'Vue.js', 
    'GSAP', 'Tailwind CSS', 'MySQL', 'SQL Server', 'Docker', 'Nuxt.js', 'Vue.js', 'HTML/CSS', 'Laravel', '.NET',
    'Power BI', 'Power Automate', 'Power Point', 'VBA Excel', 'Azure DevOps', 'GIT', 'Blender', 'Sharepoint', 'Figma', 'Slack', 'Microsoft Teams'
  ];

  if (!ready) {
    return <AboutSkeleton />;
  }

  return (
    <motion.section 
      id="about" 
      className="px-4 py-16 sm:px-8 sm:py-20 bg-white/50"
      style={{ 
        y: scrollY * -0.1,
        opacity: Math.max(0.8, 1 - scrollY * 0.0005)
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
            About Me
          </h2>
          <div className="w-20 h-1 mx-auto mb-6" style={{ backgroundColor: '#C08552' }}></div>
        </motion.div>

        <div className="grid gap-10 md:grid-cols-2 md:gap-12 md:items-center">
          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ amount: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-4" style={{ color: '#C08552' }}>
              Passionate Full Stack Developer
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              I&apos;m a creative developer with a passion for building exceptional digital experiences. 
              With expertise in modern web technologies and a keen eye for design, I transform ideas 
              into powerful, scalable applications that users love.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              My journey in web development has led me to specialize in React ecosystems, 3D web 
              experiences with Three.js, and creating performant, accessible applications. I believe 
              in writing clean, maintainable code and staying updated with the latest industry trends.
            </p>
            
            <div className="mb-8">
              <h4 className="text-lg font-semibold mb-4" style={{ color: '#5E0006' }}>
                Technologies I Work With:
              </h4>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ amount: 0.2 }}
                    className="px-4 py-2 rounded-full text-sm font-medium"
                    style={{ 
                      backgroundColor: '#EED9B9', 
                      color: '#5E0006' 
                    }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ amount: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-6" style={{ color: '#C08552' }}>
              Technical Skills
            </h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ amount: 0.2 }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-3">
                      <span className="text-xl" style={{ color: '#C08552' }}>
                        {skill.icon}
                      </span>
                      <span className="font-medium" style={{ color: '#5E0006' }}>
                        {skill.name}
                      </span>
                    </div>
                    <span className="text-sm font-medium" style={{ color: '#C08552' }}>
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      viewport={{ amount: 0.2 }}
                      className="h-2 rounded-full"
                      style={{ backgroundColor: '#C08552' }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ amount: 0.2 }}
          className="mt-12 grid grid-cols-2 gap-6 sm:gap-8 md:mt-16 md:grid-cols-4"
        >
          {[
            { number: '15+', label: 'Projects Completed' },
            { number: '2+', label: 'Years Experience' },
            { number: '2', label: 'Internships Completed' },
            { number: '∞', label: 'Coffee Consumed' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ amount: 0.2 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold mb-2" style={{ color: '#C08552' }}>
                {stat.number}
              </div>
              <div className="text-sm font-medium" style={{ color: '#5E0006' }}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
