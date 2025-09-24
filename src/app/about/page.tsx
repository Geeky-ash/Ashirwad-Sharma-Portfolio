'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

// Import social icons
import profileImage from '/public/Ashirwad Profile.jpeg';

interface TimelineItem {
  id: number;
  date: string;
  title: string;
  company: string;
  location: string;
  remote: boolean;
  description: string;
  achievements: string[];
  skills: string[];
  images?: string[];
}

export default function AboutPage() {
  const [activeTimelineItem, setActiveTimelineItem] = useState(0);
  const timelineRefs = useRef<(HTMLDivElement | null)[]>([]);

  const timelineItems: TimelineItem[] = [
    {
      id: 1,
      date: "2023 - 2027",
      title: "B.Tech in Computer Engineering",
      company: "Sandip Institute of Technology & Research Centre",
      location: "Nashik, India",
      remote: false,
      description: "Pursuing a comprehensive B.Tech degree with a focus on core computer engineering principles, data structures, and algorithms. Actively participating in competitive programming and technical events to build a strong foundational knowledge.",
      achievements: [
        "Achieved an SGPA of 8.6 in Semester 1, 9.2 in Semester 2, and 8.6 in Semester 3.",
        "Winner of the college-level DSA Coding Competition, demonstrating strong problem-solving skills.",
        "Ranked as a Finalist (Top 6) in the Tech Horizon Codefest.",
      ],
      skills: ["C++", "Java", "Data Structures & Algorithms"],
    },
    {
      id: 2,
      date: "2023 - PRESENT",
      title: "AI/ML Developer & Hackathon Enthusiast",
      company: "Personal & Hackathon Projects",
      location: "Mumbai, India",
      remote: true,
      description: "As an Applied Data Scientist and AI Developer, I have hands-on expertise in Natural Language Processing (NLP), Large Language Models (LLMs), and building intelligent systems from the ground up.",
      achievements: [
        "Winner at a Hackathon hosted at Sandip University.",
        "Developed a memory-augmented Conversational AI Assistant using the Gemini Pro LLM, featuring Hinglish support and STT/TTS pipelines.",
        "Built 'MediQueue', a Smart Hospital Assistant, which was a Hackathon Finalist. The project used ML for queue optimization and AI-driven inventory management.",
        "Created a Hackathon-winning AI Donation Platform with ML-based fraud detection, real-time donation tracking, and transparency reports.",
        "Engineered a Sign Language Translator that converts gestures to text using OpenCV, including real-time video support.",
      ],
      skills: ["Python", "OpenCV", "scikit-learn", "Transformers", "LangChain", "Google Cloud APIs", "AI/ML"],
    },
    {
      id: 3,
      date: "2023 - PRESENT",
      title: "Full-Stack Developer",
      company: "Personal Projects",
      location: "Mumbai, India",
      remote: true,
      description: "Building robust and scalable full-stack applications with a focus on backend logic, database management, and seamless API integration. Passionate about creating efficient and secure server-side solutions.",
      achievements: [
        "Developed a full-stack Expense Manager application using the MERN stack.",
        "The application features intelligent AI-based categorization and tagging of expenses to provide users with insightful analytics.",
        "Implemented secure user authentication using JWT and built RESTful APIs for client-server communication.",
      ],
      skills: ["JavaScript", "HTML", "CSS", "Node.js", "Express", "MongoDB", "REST APIs", "JWT Auth"],
    }
  ];
  
  // Handle scroll events to update active timeline item based on visibility
  useEffect(() => {
    const handleScroll = () => {
      const viewportHeight = window.innerHeight;
      const viewportCenter = viewportHeight / 2;

      let closestItem = 0;
      let closestDistance = Number.MAX_VALUE;

      timelineRefs.current.forEach((itemRef, index) => {
        if (!itemRef) return;

        const rect = itemRef.getBoundingClientRect();
        const itemCenter = rect.top + rect.height / 2;
        const distance = Math.abs(itemCenter - viewportCenter);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestItem = index;
        }
      });

      if (closestItem !== activeTimelineItem) {
        setActiveTimelineItem(closestItem);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [activeTimelineItem]);

  const heroRef = useRef<HTMLDivElement | null>(null);
  const badgeRefs = useRef<Array<HTMLDivElement | null>>([null, null, null]);

  const [constraints, setConstraints] = useState<{
    left: number;
    right: number;
    top: number;
    bottom: number;
  }>({ left: 0, right: 0, top: 0, bottom: 0 });

  const [positions, setPositions] = useState<{ x: number; y: number }[]>([
    { x: 0, y: 0 }, // I Code
    { x: 0, y: 0 }, // I Lift
    { x: 0, y: 0 }, // I Vibin'
  ]);

  useEffect(() => {
    const updateLayout = () => {
      if (heroRef.current) {
        const heroRect = heroRef.current.getBoundingClientRect();
        const newConstraints = {
          left: 0,
          right: heroRect.width,
          top: 0,
          bottom: heroRect.height,
        };
        setConstraints(newConstraints);

        // Mobile-specific badge positioning
        const isMobile = window.innerWidth < 768;
        
        const newPositions = badgeRefs.current.map((ref, index) => {
          const badgeRect = ref?.getBoundingClientRect() || { width: 100, height: 40 };
          
          // Mobile layout - vertical stacking with smaller gaps
          if (isMobile) {
            const yOffset = 20; // Space between badges on mobile
            return {
              x: 20, // Fixed x position from left
              y: yOffset + (badgeRect.height + yOffset) * index, // Stack vertically
            };
          } 
          // Desktop layout - horizontal spacing
          else {
            const yPosition = (heroRect.height - badgeRect.height) / 2;
            const xPosition = (heroRect.width - badgeRect.width * 3 - 2 * 2) / 2 + 
              (badgeRect.width + 2) * index;
            return { x: xPosition, y: yPosition };
          }
        });

        setPositions(newPositions);
      }
    };

    updateLayout();
    window.addEventListener("resize", updateLayout);
    return () => window.removeEventListener("resize", updateLayout);
  }, []);

  const badgeData = [
    { label: "I Lift", color: "emerald" },
    { label: "I Code", color: "purple" },
    { label: "I Vibin'", color: "blue" },
  ];

  return (
    <div className="bg-black min-h-screen text-white pt-16 md:pt-32">
      {/* Hero Section - Mobile Optimized */}
      <section
        ref={heroRef}
        className="px-4 md:px-10 max-w-7xl mx-auto mb-16 md:mb-24 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-gray-400 ml-5 md:ml-0 uppercase tracking-wider font-medium text-xs md:text-sm mb-2"
        >
          MORE ABOUT ME
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start lg:items-center"
        >
          {/* Mobile First: Photo on top for small screens */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="w-full lg:w-1/3 relative mx-auto max-w-[250px] md:max-w-full lg:mx-0"
          >
            <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-purple-600 to-pink-500 p-1">
              <div className="rounded-xl overflow-hidden aspect-square">
                <Image
                  src={profileImage}
                  alt="Ashirwad Sharma"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAEtAJJUw8YhgAAAABJRU5ErkJggg=="
                  loading="eager"
                  priority

                />
              </div>
            </div>
          </motion.div>

          <div className="lg:w-2/3 mt-6 md:mt-0">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-center lg:text-left">
              Hi there! I&apos;m <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-500">Ashirwad</span>
            </h1>

            <div className="space-y-3 md:space-y-4 text-gray-300 text-sm md:text-base">
              <p>I&apos;m Ashirwad Sharma, an Applied Data Scientist & Full-Stack AI Developer with hands-on expertise in NLP, LLMs, and intelligent systems. I build AI products with features like memory, multilingual support, and real-time interaction.</p>

              <p>I thrive in competitive environments and have a proven track record as a 2x Hackathon winner. My work is backed by strong fundamentals in Data Structures & Algorithms and backend development.</p>

              <p>I am passionate about leveraging technology to solve real-world problems and continuously seek to innovate and grow in the field of AI and software development.</p>

              <div className="flex justify-center lg:justify-start gap-4 pt-2">
                <Link href="https://linkedin.com/in/ashirwad-sharma-91305329a" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin className="w-5 h-5 md:w-6 md:h-6 text-gray-400 hover:text-white transition-colors" />
                </Link>
                <Link href="https://github.com/Geeky-ash" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github className="w-5 h-5 md:w-6 md:h-6 text-gray-400 hover:text-white transition-colors" />
                </Link>
                <Link href="mailto:ashirwad.020105@gmail.com" aria-label="Email">
                  <Mail className="w-5 h-5 md:w-6 md:h-6 text-gray-400 hover:text-white transition-colors" />
                </Link>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Draggable Badges - Mobile Optimized */}
        <div className="mt-12 md:mt-0">
          {badgeData.map((badge, index) => (
            <motion.div
              key={index}
              drag
              dragConstraints={constraints}
              dragElastic={0.2}
              dragMomentum={true}
              ref={(el) => {
                badgeRefs.current[index] = el;
              }}
              style={{
                x: positions[index]?.x ?? 0,
                y: positions[index]?.y ?? 0,
              }}
              className="pointer-events-auto absolute cursor-grab active:cursor-grabbing z-50"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
            >
              <div
                className={`px-4 py-2 md:px-6 md:py-3 rounded-full border-2 border-${badge.color}-500 text-${badge.color}-500 text-sm md:text-base font-semibold hover:bg-${badge.color}-500 hover:text-white transition-all duration-300 bg-black whitespace-nowrap`}
              >
                {badge.label}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Experience Section - Mobile Optimized */}
      <section className="py-12 md:py-20 bg-black">
        <div className="px-4 md:px-10 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
            className="text-center mb-12 md:mb-16"
          >
            <div className="text-gray-300 uppercase tracking-wider font-medium text-xs md:text-sm mb-2">
              THE EXPERIENCE
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
              Crafting <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">Experiences</span>
            </h2>
          </motion.div>

          {/* Mobile Timeline Navigation Tabs */}
          <div className="lg:hidden mb-8 overflow-x-auto scrollbar-hide">
            <div className="flex space-x-2 min-w-max">
              {timelineItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTimelineItem(index);
                    timelineRefs.current[index]?.scrollIntoView({
                      behavior: 'smooth',
                      block: 'start',
                    });
                  }}
                  className={`px-4 py-2 rounded-full text-xs whitespace-nowrap transition-all duration-300 ${
                    index === activeTimelineItem
                      ? 'bg-purple-600 text-white'
                      : 'bg-gray-800 text-gray-400'
                  }`}
                >
                  {item.title}
                </button>
              ))}
            </div>
          </div>

          <div className="relative flex flex-col lg:flex-row">
            {/* Left side - sticky timeline markers (desktop only) */}
            <div className="hidden lg:block lg:w-1/3 sticky top-0 h-screen">
              <div className="h-full flex flex-col justify-center space-y-8 relative">
                {/* Vertical line */}
                <div className="absolute left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-600 via-purple-600 to-pink-600"></div>

                {timelineItems.map((item, index) => (
                  <div key={item.id} className="relative pl-10">
                    {/* Timeline dot */}
                    <div className={`absolute left-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${index === activeTimelineItem ? 'bg-purple-500 scale-110' : 'bg-gray-800'}`}>
                      <div className={`w-3 h-3 rounded-full ${index === activeTimelineItem ? 'bg-white' : 'bg-gray-500'}`}></div>
                    </div>

                    <div className="space-y-1">
                      <p className={`text-sm ${index === activeTimelineItem ? 'text-white' : 'text-gray-600'} `}>{item.date}</p>
                      <h3 className={`text-2xl font-bold transition-all duration-300 ${index === activeTimelineItem ? 'text-white' : 'text-gray-600'}`}>
                        {item.title}
                      </h3>
                      <div className="flex items-center space-x-2">
                        <div className={`rounded-md px-2 py-1 text-sm ${index === activeTimelineItem ? 'bg-purple-800 text-white' : 'bg-gray-900 text-gray-600'}`}>
                          {item.company}
                        </div>
                      </div>
                      <div className="flex items-center space-x-1 text-sm text-gray-500">
                        <span>{item.location}</span>
                        {item.remote && <span>• Remote</span>}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right side - scrollable content - Mobile Optimized */}
            <div className="lg:w-2/3 lg:pl-16">
              {timelineItems.map((item, index) => (
                <div
                  key={item.id}
                  ref={el => { timelineRefs.current[index] = el; }}
                  className="py-8 md:py-16 lg:py-24 min-h-[80vh] lg:min-h-screen flex flex-col justify-center"
                >
                  {/* Mobile timeline header with visual improvements */}
                  <div className="lg:hidden mb-6 space-y-1 relative pl-8 border-l-2 border-purple-500">
                    <div className="absolute left-0 top-0 w-4 h-4 bg-purple-500 rounded-full -translate-x-1/2"></div>
                    <p className="text-gray-400 text-xs">{item.date}</p>
                    <h3 className="text-xl font-bold text-white">{item.title}</h3>
                    <div className="flex items-center space-x-2">
                      <div className="rounded-md px-2 py-1 text-xs bg-gray-800 text-white">
                        {item.company}
                      </div>
                    </div>
                    <div className="flex items-center space-x-1 text-xs text-gray-400">
                      <span>{item.location}</span>
                      {item.remote && <span>• Remote</span>}
                    </div>
                  </div>

                  {/* Content - Mobile Optimized */}
                  <div className="space-y-6 md:space-y-8">
                    <p className="text-gray-300 text-sm md:text-base">{item.description}</p>

                    <div className="space-y-3 md:space-y-4">
                      {item.achievements.map((achievement, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4, delay: i * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-start gap-2 md:gap-3"
                        >
                          <span className="text-purple-500 mt-1 text-lg flex-shrink-0">•</span>
                          <p className="text-gray-300 text-sm md:text-base">{achievement}</p>
                        </motion.div>
                      ))}
                    </div>

                    {/* Skills - Mobile Optimized */}
                    <div className="mt-4 md:mt-6">
                      <div className="flex flex-wrap gap-1.5 md:gap-2">
                        {item.skills.map((skill, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: i * 0.05 }}
                            viewport={{ once: true }}
                            className="rounded-md py-1 px-2 md:px-3 bg-gray-800 text-xs md:text-sm font-medium"
                          >
                            {skill}
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}