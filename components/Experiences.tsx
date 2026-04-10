'use client';

import { motion } from 'framer-motion';
import { 
  CalendarOutlined, 
  EnvironmentOutlined, 
  TrophyOutlined,
  CodeOutlined
} from '@ant-design/icons';
import { useScroll } from '../hooks/useScroll';
import { useSectionReady } from '@/hooks/useSectionReady';
import { ExperiencesSkeleton } from '@/components/skeletons/SectionSkeletons';

const Experiences = () => {
  const { scrollY } = useScroll();
  const ready = useSectionReady(380);
  
  const experiences = [
    {
      id: 1,
      title: 'Software Engineer',
      company: 'Quantum Technology Nusantara',
      location: 'Jakarta, Indonesia',
      period: '2024 - Present',
      type: 'full-time',
      description: 'A technology agency located in South Jakarta, my responsibility is to meet client needs and develop several products andapplications to be sold or used as Quantum products, such as Meepo, Kenangan, and others.',
      achievements: [
        'Remake BSMR Website and Implementation RBAC',
        'Created Tools for Meepo Application',
        'Remake Avian Website for Avian Company'
      ],
      technologies: ['React', 'MySQL', 'AWS', 'NextJS', 'Docker', 'Python', 'SQLAlchemy', 'FastifyJS', 'GIT', 'Figma']
    },
    {
      id: 2,
      title: 'EHS & Compliance Assurance (IT Developer)',
      company: 'Mattel',
      location: 'Cikarang, Indonesia',
      period: '2025 - Nov 2025',
      type: 'Internship',
      description: 'One of the toy manufacturing companies, especially its well-known products, Hot Wheels and Barbie, is responsible for developing various applications to solve problems within the company.',
      achievements: [
        'Create Safety Patrol Websit',
        'Create 5S Shufe Schedule Website',
        'Maintenance PTW System and Added some features',
        'Create Safety Walk Schedule using VBA Excel',
        'Manage data in SQL Server and make some report in Microsoft Excel'
      ],
      technologies: ['Bootstrap', 'SQL Server', 'Power BI', 'Power Automate', 'Power Point', 'VBA Excel', '.NET', 'Azure DevOps', 'Sharepoint', 'Firewall']
    },
    {
      id: 3,
      title: 'Freelancer',
      company: 'On Going',
      location: 'Cikarang, Indonesia',
      period: '2022 - Present',
      type: 'Part-time',
      description: 'Started my journey building responsive websites and learning modern web development practices. Contributed to various startup projects.',
      achievements: [
        'Developed 10+ responsive websites',
        'Learned React and Next.js',
        'Participated in agile development'
      ],
      technologies: ['Base on Clients Need']
    }
  ];

  if (!ready) {
    return <ExperiencesSkeleton />;
  }

  return (
    <motion.section 
      id="experiences" 
      className="px-4 py-16 sm:px-8 sm:py-20" 
      style={{ 
        backgroundColor: '#FFF8F0',
        y: scrollY * -0.15,
        opacity: Math.max(0.85, 1 - scrollY * 0.0006)
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
            Professional Journey
          </h2>
          <div className="w-20 h-1 mx-auto mb-6" style={{ backgroundColor: '#C08552' }}></div>
          <p className="text-base sm:text-lg max-w-3xl mx-auto px-1" style={{ color: '#C08552' }}>
            My career path as a web developer, from freelance projects to leading development teams
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div
            className="absolute left-4 sm:left-6 top-0 bottom-0 w-1"
            style={{ backgroundColor: '#EED9B9' }}
          ></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ amount: 0.2 }}
              className="relative mb-12 pl-12 sm:pl-16"
            >
              {/* Timeline dot */}
              <div
                className="absolute left-4 sm:left-6 top-6 -translate-x-1/2 w-6 h-6 rounded-full border-4 border-white z-10"
                style={{ backgroundColor: '#C08552' }}
              ></div>

              {/* Content card */}
              <div className="w-full">
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="bg-white rounded-2xl shadow-xl p-6 border border-purple-100"
                >
                  <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div className="min-w-0">
                      <h3 className="text-lg sm:text-xl font-bold mb-2 wrap-break-word" style={{ color: '#5E0006' }}>
                        {exp.title}
                      </h3>
                      <div className="flex items-center gap-2 text-purple-600 mb-2 min-w-0">
                        <CodeOutlined className="shrink-0" />
                        <span className="font-medium wrap-break-word">{exp.company}</span>
                      </div>
                    </div>
                    <div
                      className={`shrink-0 self-start px-3 py-1 rounded-full text-xs font-medium ${
                        exp.type === 'freelance'
                          ? 'bg-pink-100 text-pink-700'
                          : exp.type === 'full-time'
                            ? 'bg-purple-100 text-purple-700'
                            : 'bg-amber-100 text-amber-800'
                      }`}
                    >
                      {exp.type === 'freelance'
                        ? 'Freelance'
                        : exp.type === 'full-time'
                          ? 'Full-time'
                          : exp.type}
                    </div>
                  </div>

                  <div className="mb-4 flex flex-col gap-2 text-sm text-gray-600 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-4 sm:gap-y-1">
                    <div className="flex min-w-0 items-center gap-1">
                      <CalendarOutlined className="shrink-0" />
                      <span className="wrap-break-word">{exp.period}</span>
                    </div>
                    <div className="flex min-w-0 items-center gap-1">
                      <EnvironmentOutlined className="shrink-0" />
                      <span className="wrap-break-word">{exp.location}</span>
                    </div>
                  </div>

                  <p className="text-gray-700 mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  {exp.achievements.length > 0 && (
                    <div className="mb-4">
                      <h4 className="font-semibold mb-2 flex items-center space-x-2" style={{ color: '#C08552' }}>
                        <TrophyOutlined />
                        <span>Key Achievements</span>
                      </h4>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx} className="text-sm text-gray-600 flex items-start">
                            <span className="mr-2" style={{ color: '#EED9B9' }}>•</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, idx) => (
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
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Experiences;
