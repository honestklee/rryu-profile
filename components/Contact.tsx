'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { 
  MailOutlined, 
  PhoneOutlined, 
  EnvironmentOutlined,
  GithubOutlined,
  LinkedinOutlined,
  TwitterOutlined,
  SendOutlined
} from '@ant-design/icons';
import { useScroll } from '../hooks/useScroll';
import { useSectionReady } from '@/hooks/useSectionReady';
import { ContactSkeleton } from '@/components/skeletons/SectionSkeletons';
import { CONTACT_EMAIL, gmailComposeTo } from '@/lib/gmailCompose';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const { scrollY } = useScroll();
  const ready = useSectionReady(500);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    alert('Thank you for your message! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: <MailOutlined />,
      label: 'Email',
      value: CONTACT_EMAIL,
      href: gmailComposeTo(CONTACT_EMAIL)
    },
    {
      icon: <PhoneOutlined />,
      label: 'Phone',
      value: '+62 821-2974-4243',
      href: 'tel:+6282129744243'
    },
    {
      icon: <EnvironmentOutlined />,
      label: 'Location',
      value: 'Cikarang, Indonesia',
      href: '#'
    }
  ];

  const socialLinks = [
    {
      icon: <GithubOutlined />,
      href: 'https://github.com/honestklee',
      label: 'GitHub'
    },
    {
      icon: <LinkedinOutlined />,
      href: 'https://www.linkedin.com/in/rizky-ryu-245869271',
      label: 'LinkedIn'
    },
    {
      icon: <TwitterOutlined />,
      href: 'https://twitter.com',
      label: 'Twitter'
    }
  ];

  if (!ready) {
    return <ContactSkeleton />;
  }

  return (
    <motion.section 
      id="contacts" 
      className="px-4 py-16 sm:px-8 sm:py-20" 
      style={{ 
        backgroundColor: '#FFF8F0',
        y: scrollY * -0.08,
        opacity: Math.max(0.95, 1 - scrollY * 0.0003)
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
            Get In Touch
          </h2>
          <div className="w-20 h-1 mx-auto mb-6" style={{ backgroundColor: '#C08552' }}></div>
          <p className="text-base sm:text-lg max-w-3xl mx-auto px-1" style={{ color: '#C08552' }}>
            Let&apos;s discuss your next project or just say hello. I&apos;m always interested in hearing about new opportunities.
          </p>
        </motion.div>

        <div className="grid gap-10 md:grid-cols-2 md:gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ amount: 0.2 }}
          >
            <div className="bg-white rounded-2xl shadow-xl p-5 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold mb-6" style={{ color: '#5E0006' }}>
                Send Me a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2" style={{ color: '#5E0006' }}>
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full min-h-12 rounded-lg border border-gray-300 px-4 py-3 text-base focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-colors"
                    placeholder="John Doe"
                    autoComplete="name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2" style={{ color: '#5E0006' }}>
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full min-h-12 rounded-lg border border-gray-300 px-4 py-3 text-base focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-colors"
                    placeholder="john@example.com"
                    autoComplete="email"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2" style={{ color: '#5E0006' }}>
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full min-h-12 rounded-lg border border-gray-300 px-4 py-3 text-base focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-colors"
                    placeholder="Project Discussion"
                    autoComplete="off"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2" style={{ color: '#5E0006' }}>
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 text-base focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-colors"
                    placeholder="Tell me about your project..."
                    autoComplete="off"
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 rounded-lg font-semibold text-white transition-colors flex items-center justify-center space-x-2 disabled:opacity-50"
                  style={{ backgroundColor: '#C08552' }}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <SendOutlined />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ amount: 0.2 }}
            className="space-y-8"
          >
            {/* Contact Details */}
            <div className="bg-white rounded-2xl shadow-xl p-5 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold mb-6" style={{ color: '#5E0006' }}>
                Contact Information
              </h3>
              
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.href}
                    {...(info.href.startsWith('http')
                      ? { target: '_blank' as const, rel: 'noopener noreferrer' }
                      : {})}
                    className="flex min-w-0 items-center gap-4 p-3 sm:p-4 rounded-lg hover:bg-purple-50 transition-colors group"
                    whileHover={{ x: 5 }}
                  >
                    <div className="w-12 h-12 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform"
                         style={{ backgroundColor: '#EED9B9' }}>
                      <span className="text-xl" style={{ color: '#5E0006' }}>
                        {info.icon}
                      </span>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">{info.label}</div>
                      <div className="font-medium wrap-break-word" style={{ color: '#5E0006' }}>
                        {info.value}
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white rounded-2xl shadow-xl p-5 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold mb-6" style={{ color: '#5E0006' }}>
                Connect With Me
              </h3>
              
              <p className="text-gray-600 mb-6">
                Follow me on social media to see my latest projects and updates.
              </p>
              
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
                    style={{ backgroundColor: '#C08552' }}
                  >
                    <span className="text-2xl text-white">
                      {social.icon}
                    </span>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="bg-linear-to-r from-purple-100 to-pink-100 rounded-2xl p-5 sm:p-8 border border-purple-200">
              <h3 className="text-xl font-bold mb-4" style={{ color: '#5E0006' }}>
                Current Availability
              </h3>
              <div className="flex items-center space-x-2 mb-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="font-medium" style={{ color: '#5E0006' }}>
                  Available for Freelance Projects
                </span>
              </div>
              <p className="text-gray-700">
                I&apos;m currently open to interesting projects and collaborations. 
                Feel free to reach out if you&apos;d like to work together!
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
