'use client'

import React from 'react';
import { motion } from 'framer-motion';
import {
  Code,
  Calendar,
  MapPin,
  ExternalLink,
  Tractor,
  Database,
  Globe,
  Users,
  Zap,
  Building2,
  Car
} from 'lucide-react';
import Image from 'next/image';
import type { StaticImageData } from 'next/image';

// Logos
// import DOALogo from '/public/assets/DOA-whiteLogo.png';
import FramttLogo from '/public/assets/framtt-logo.png'; 

// Screenshots for DealsOfAgro only
// import ss3 from '/public/assets/DOA-ss1.png';
// import ss2 from '/public/assets/DOA-ss2.png';
// import ss1 from '/public/assets/DealsOfAgroImage.png';

interface WorkExperience {
  company: string;
  role: string;
  duration: string;
  location: string;
  description: string[];
  logo: string | StaticImageData;
  screenshots?: (string | StaticImageData)[];
  website: string;
  achievements: string[];
  techStack: string[];
}

const workData: WorkExperience[] = [
  // {
  //   company: 'DealsOfAgro',
  //   role: 'Full-Stack Developer',
  //   duration: 'April 2025 - Present',
  //   location: 'Odisha, India',
  //   description: [
  //     'Spearheading the development of an innovative e-commerce platform that revolutionizes how farmers access agricultural machinery across Odisha.',
  //     'Architected and implemented a scalable, responsive web application using Next.js, TypeScript, and modern web technologies.',
  //     'Designed intuitive user interfaces specifically tailored for the agricultural community, ensuring ease of use for farmers of all technical backgrounds.',
  //     'Developed comprehensive backend systems handling product catalogs, secure transactions, user management, and dealer networks.',
  //     'Integrated advanced search and filtering capabilities to help farmers find the right machinery for their specific needs.',
  //     'Collaborated closely with stakeholders to align technical solutions with business objectives and user requirements.'
  //   ],
  //   logo: DOALogo,
  //   screenshots: [ss1, ss2, ss3],
  //   website: 'https://www.dealsofagro.com',
  //   achievements: [
  //     'Serving 30+ Districts across Odisha',
  //     '500+ Agricultural Machinery Listed',
  //     '100+ Active Dealers on Platform',
  //     'Built from Scratch to Production'
  //   ],
  //   techStack: [
  //     'Next.js', 'TypeScript', 'Tailwind CSS',
  //     'Node.js', 'Firebase', 'Figma', 'Vercel'
  //   ]
  // },
  {
    company: 'Framtt',
    role: 'Full-Stack Developer',
    duration: 'May 2025 - Present',
    location: 'Remote, India',
    description: [
      'Developing the main car rental management dashboard for a fast-growing startup.',
      'Building tenant-focused features where companies manage car details, bookings, availability, and customer data.',
      'Implementing scalable backend services for booking logic, availability tracking, and secure data handling.',
      'Collaborating with the startup team to deliver a seamless, user-friendly platform optimized for both admins and tenants.'
    ],
    logo: FramttLogo,
    website: 'https://www.framtt.com',
    achievements: [
      'Designed and developed the core tenant dashboard',
      'Improved booking and management workflows',
      'Collaborated with a cross-functional startup team',
      'Delivered scalable full-stack solutions'
    ],
    techStack: [
      'Next.js', 'Tailwind CSS','Framer Motion',
      'Node.js', 'Express', 'Supabase', 'TypeScript'
    ]
  }
];

const WorkExperience: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
  };

  return (
    <section className="py-16 sm:py-20 w-full bg-black text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
          backgroundSize: '20px 20px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900 border border-zinc-800 mb-4 sm:mb-6">
            <Building2 className="w-4 h-4 text-green-400" />
            <span className="text-xs sm:text-sm text-gray-300">Professional Experience</span>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent mb-3 sm:mb-4">
            Work Experience
          </h2>
          <p className="text-sm sm:text-base md:text-xl text-gray-400 max-w-2xl mx-auto">
            Building impactful solutions that transform industries
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {workData.map((work, idx) => (
            <motion.div key={idx} variants={cardVariants} className="mb-10 sm:mb-12">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-zinc-600 via-zinc-500 to-zinc-600 rounded-2xl blur opacity-10 group-hover:opacity-20 transition duration-500"></div>
                <div className="relative bg-zinc-900 p-6 sm:p-8 rounded-2xl border border-zinc-800 hover:border-zinc-700 transition-all duration-300">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6 sm:mb-8">
                    <div className="flex items-center mb-4 lg:mb-0">
                      <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-green-900 to-emerald-600 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                        <Image src={work.logo} alt="logo" className="object-contain" />
                      </div>
                      <div>
                        <h3 className="text-xl sm:text-3xl font-bold text-white mb-1">{work.company}</h3>
                        <p className="text-sm sm:text-xl text-green-400 font-semibold">{work.role}</p>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 text-gray-400 text-xs sm:text-sm">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{work.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{work.location}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mb-6 sm:mb-8">
                    <p className="text-sm sm:text-lg text-gray-300 leading-relaxed mb-4">
                      {work.company === 'DealsOfAgro'
                        ? "At DealsOfAgro, I’m pioneering the development of a comprehensive e-commerce platform that’s transforming how farmers across Odisha access and purchase agricultural machinery — creating a digital bridge between technology and traditional farming."
                        : "At Framtt, I’m building the core car rental management dashboard, empowering tenants to efficiently manage cars, bookings, and operations for a streamlined rental experience."}
                    </p>
                  </div>

                  {/* Achievements */}
                  <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6 sm:mb-8">
                    {work.achievements.map((achievement, index) => (
                      <motion.div
                        key={index}
                        variants={itemVariants}
                        className="bg-zinc-800 rounded-lg p-3 sm:p-4 text-center border border-green-900 hover:border-green-500/50 transition-colors duration-300"
                      >
                        <div className="text-green-400 font-bold text-base mb-1">
                          {index === 0 && <Users className="w-5 h-5 mx-auto mb-1" />}
                          {index === 1 && (work.company === 'DealsOfAgro' ? <Tractor className="w-5 h-5 mx-auto mb-1" /> : <Car className="w-5 h-5 mx-auto mb-1" />)}
                          {index === 2 && <Globe className="w-5 h-5 mx-auto mb-1" />}
                          {index === 3 && <Zap className="w-5 h-5 mx-auto mb-1" />}
                        </div>
                        <p className="text-xs sm:text-sm text-gray-300 font-medium">{achievement}</p>
                      </motion.div>
                    ))}
                  </div>

                  {/* Responsibilities */}
                  <div className="mb-6 sm:mb-8">
                    <h4 className="text-lg sm:text-xl font-semibold text-white mb-4 flex items-center gap-2">
                      <Code className="w-5 h-5 text-green-400" />
                      Key Responsibilities
                    </h4>
                    <ul className="space-y-3">
                      {work.description.map((point, index) => (
                        <motion.li key={index} variants={itemVariants} className="flex items-start group">
                          <div className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2 flex-shrink-0 group-hover:bg-green-300 transition-colors"></div>
                          <span className="text-sm sm:text-base text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors">
                            {point}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack */}
                  <div className="mb-6 sm:mb-8">
                    <h4 className="text-lg sm:text-xl font-semibold text-white mb-3 flex items-center gap-2">
                      <Database className="w-5 h-5 text-blue-400" />
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2 sm:gap-3">
                      {work.techStack.map((tech, index) => (
                        <motion.span
                          key={index}
                          variants={itemVariants}
                          className="px-3 py-1 sm:px-4 sm:py-2 bg-zinc-800 text-gray-300 rounded-full text-xs sm:text-sm border border-emerald-900 hover:border-blue-500/50 hover:text-blue-300 transition-all duration-300"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Only show screenshots if available */}
                  {work.screenshots && (
                    <div className="mb-6 sm:mb-8">
                      <h4 className="text-lg sm:text-xl font-semibold text-white mb-4 flex items-center gap-2">
                        <Globe className="w-5 h-5 text-purple-400" />
                        Platform Preview
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
                        {work.screenshots.map((screenshot, index) => (
                          <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ scale: 1.01, y: -1 }}
                            transition={{ duration: 0.3 }}
                            className="relative group cursor-pointer"
                          >
                            <div className="absolute -inset-1 bg-gradient-to-r from-zinc-600 to-zinc-500 rounded-lg blur opacity-10 group-hover:opacity-20 transition duration-300"></div>
                            <div className="relative bg-zinc-800 rounded-lg overflow-hidden border border-zinc-700 aspect-video">
                              <Image src={screenshot} alt="screenshot" fill className="object-cover" />
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center justify-between pt-5 border-t border-zinc-800">
                    <p className="text-sm text-gray-400 flex items-center gap-2">
                      {work.company === 'DealsOfAgro'
                        ? <Tractor className="w-5 h-5 text-green-400" />
                        : <Car className="w-5 h-5 text-green-400" />}
                      {work.company === 'DealsOfAgro'
                        ? 'Revolutionizing agriculture through technology'
                        : 'Transforming car rental management with technology'}
                    </p>
                    <motion.a
                      href={work.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center gap-2 px-6 py-2 sm:py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-green-500/25 transition-all duration-300 group text-sm sm:text-base"
                    >
                      Visit {work.company}
                      <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WorkExperience;
