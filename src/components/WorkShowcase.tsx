'use client';

// components/WorkShowcaseSnapping.tsx
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import type { StaticImageData } from 'next/image';

// import GetMaterialImage from '/public/assets/getmaterial.png';
import LemonStudioImage from '/public/assets/lemonstudio.png';
// import OpenRoomImage from '/public/assets/openroom-image.png';
// import AgroVisionImage from '/public/assets/agrovision.png';
import PortfolioImage from '/public/assets/PortfolioImage.png';
import WebCrosImage from '/public/assets/web-cros.png';
// import DealsOfAgroImage from '/public/assets/DealsOfAgroImage.png';
import HeyDropImage from '/public/assets/HeyDrop.png';
import luxuryhomez from '/public/assets/luxuryhomez.png'; 
import Smartlearning from '/public/assets/Smartlearning.png'; 
import Drappi from '/public/assets/drappi.png'; 
import Aidlinker from '/public/assets/Aidlinker.png'; 

import cloudflare from '/public/assets/cloudflare.png';
import emailjs from '/public/assets/emailjs.jpeg';
import firebase from '/public/assets/firebase.webp';
import framermotion from '/public/assets/framermotion.png';
import nextjs from '/public/assets/nextjs.png';
import nodejs from '/public/assets/nodejs.png';
import python from '/public/assets/python.png';
import react from '/public/assets/react.png';
// import restapi from '/public/assets/restapi.webp';
import tailwindcss from '/public/assets/tailwindcss.png';
import expressjs from '/public/assets/expressjs.png';
// import gemini from '/public/assets/gemini.webp';
import typescript from '/public/assets/typescript.svg';
import shadcn from '/public/assets/shadcn.png';
import framer from '/public/assets/framermotion.png';
import upstash from '/public/assets/upstash.png';
import uploadthing from '/public/assets/uploadthing.png';
import php from '/public/assets/php.webp';
import bootstrap from '/public/assets/bootstrap.webp';
import laravel from '/public/assets/laravel.webp';
// import MongoDB from '/public/assets/mongodb.png';
import Vite from '/public/assets/Vite.js.png';

import { ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';

interface Project {
  id: number;
  link: string;
  title: string;
  description: string;
  tagline: string;
  techStack: {
    name: string;
    icon: string | StaticImageData;
  }[];
  features: string[];
  image: string | StaticImageData;
  accentColor: string;
  bgGradient: string;
}

export default function WorkShowcaseSnapping() {
  const [activeProject, setActiveProject] = useState(0);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [expandedMobile, setExpandedMobile] = useState<number | null>(null);
  const componentRef = useRef<HTMLDivElement>(null);
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

  const projects: Project[] = [
    {
      id: 1,
      link: "https://luxuryhomez.com/",
      title: "Luxury Homez",
      tagline: "Your dedicated partner in finding curated, high-end residential properties.",
      description: "A boutique real estate brokerage exclusively dealing in luxury residential spaces. The platform features a handpicked portfolio of the finest properties in prime locations like Delhi, Noida, and Gurugram, backed by in-depth market knowledge and discreet, personalized service for elite clientele.",
      techStack: [
        { name: "Laravel", icon: laravel },
        { name: "PHP", icon: php },
        { name: "Firebase", icon: firebase },
        { name: "Vite", icon: Vite },
        { name: "Cloudflare", icon: cloudflare },
        { name: "Bootstrap", icon: bootstrap },
        { name: "Email js", icon: emailjs },  
      ],
      features: [
        "Showcases exclusive real estate projects in desired locations",
        "Detailed property listings including building, rooms, and price",
        "Focus on prime North Indian locations like Delhi, Noida, and Gurugram",
        "Cathedral to an elite clientele of business leaders and global investors",
        "Ensures seamless and secure transactions from viewing to possession",
        "Offers discreet, personalized service with absolute confidentiality"
      ],
      image: luxuryhomez,
      accentColor: "bg-green-500",
      bgGradient: "from-green-980 to-green-400"
    },
    {
  id: 2,
  link: "https://smart-learning-taupe.vercel.app/",
  title: "Smartlearning",
  tagline: "Visualize DSA concepts and get help from a chatbot that acts like your big brother.",
  description: "Smartlearning is a web app for the tech community to learn Data Structures and Algorithms concepts with the help of visualizations. It also has a chatbot that acts like a big brother to help you with your doubts.",
  techStack: [
    { name: "React", icon: react },
    { name: "Next.js", icon: nextjs },
    { name: "TypeScript", icon: typescript },
    { name: "Tailwind CSS", icon: tailwindcss },
    { name: "Upstash Redis", icon: upstash },
    { name: "UploadThing", icon: uploadthing }
  ],
  features: [
    "Interactive visualizations for Data Structures and Algorithms",
    "AI-powered interview prep bot to practice for tech roles",
    "Quebee: Upload handwritten notes to generate quizzes and flashcards",
    "A helpful chatbot that acts like a 'big brother' for guidance",
    "Learn complex DSA concepts in an engaging, interactive way",
  ],
  image: Smartlearning, // Replace this with your imported image reference
  accentColor: "bg-orange-500",
  bgGradient: "from-zinc-950 to-orange-400"
}
,
    {
      id: 3,
      link: "https://lemonstudio.vercel.app/",
      title: "Lemon Studio",
      tagline: "Portfolio website for a photography studio with service showcase.",
      description: "Designed a visually striking and user-friendly photography portfolio website for a client, showcasing their work, services, and contact options.",
      techStack: [
        { name: "React", icon: react },
        { name: "Tailwind CSS", icon: tailwindcss },
        { name: "Framer Motion", icon: framermotion },
        { name: "EmailJS", icon: emailjs }
      ],
      features: [
        "Gallery layout with hover animations and lightbox previews",
        "Smooth page transitions using Framer Motion",
        "Responsive contact form with email notifications",
        "Mobile-optimized UI with modern design",
        "Showcased services and packages with styled components"
      ],
      image: LemonStudioImage,
      accentColor: "bg-yellow-500",
      bgGradient: "from-yellow-600 to-orange-600"
    },

    {
  id: 4,
  link: "https://heydrop.vercel.app/",
  title: "HeyDrop",
  tagline: "Share Anything Instantly – Files, Images, and Text with No Login.",
  description: "HeyDrop is a seamless real-world web app that enables instant, login-free sharing of files, images, and messages via unique room links. Built for frictionless transfer across devices without installing any app or creating an account.",
  techStack: [
    { name: "Next.js", icon: nextjs },
    { name: "TypeScript", icon: typescript },
    { name: "Tailwind CSS", icon: tailwindcss },
    { name: "Upstash Redis", icon: upstash },
    { name: "UploadThing", icon: uploadthing },
    { name: "React", icon: react },
  ],
  features: [
    "Instant file, image, and text sharing across devices",
    "No login, sign-up, or installation required",
    "Generate secure, sharable room links for temporary sessions",
    "Real-time message syncing using Upstash Redis",
    "Secure file handling and upload with UploadThing",
  ],
  image: HeyDropImage, // Replace this with your imported image reference
  accentColor: "bg-orange-500",
  bgGradient: "from-zinc-950 to-orange-400"
}
,



    {
      id: 5,
      link: "https://drappi.in/",
      title: "Drappi",
      tagline: "Shop local, shop smart. Your favourite Faridpur fashion delivered within 3 hours.",
      description:
        "A premier B2B and B2C marketplace connecting customers with verified local cloth vendors in Faridpur. Drappi empowers local businesses to get online, offering premium quality products and unbeatable deals.",
      techStack: [
    { name: "React", icon: react },
    { name: "Node.js", icon: nodejs },
    { name: "Express.js", icon: expressjs },
    { name: "Firebase", icon: firebase },
    { name: "TypeScript", icon: typescript },
    { name: "Tailwind CSS", icon: tailwindcss }
  ],
      features: [
    "Connects local cloth vendors in Faridpur to a wider online market",
    "Guaranteed 3-hour delivery for clothes, footwear, and fashion items",
    "Platform features only verified local businesses and trusted sellers",
    "Regular mega sales with discounts up to 70% OFF",
    "Empowers local businesses through a seamless B2B & B2C connection",
    "Future goal to expand the platform for vendors all over India"
  ],
      image: Drappi,
      accentColor: "bg-cyan-500",
      bgGradient: "from-cyan-950 to-cyan-300"
    },

    {
  id: 6,
  link: "https://hospital-management-delta-one.vercel.app/",
  title: "Aidlink",
  tagline: "Smart hospital management with live queue tracking and resource monitoring.",
  description: "Aidlink is an intelligent hospital management system that allows patients to view live queues and receive notifications before their turn, using an ML model to predict wait times. For hospital admins, it provides a live dashboard to monitor bed occupancy and manage medical instrument inventory with automated alerts.",
  techStack: [
    { name: "React", icon: react },
    { name: "TypeScript", icon: typescript },
    { name: "Tailwind CSS", icon: tailwindcss },
    { name: "Node.js", icon: nodejs },
    { name: "Express.js", icon: expressjs },
    { name: "Python", icon: python },
    { name: "Firebase", icon: firebase }
  ],
  features: [
    "Live queue tracking for patients to reduce physical waiting time",
    "ML-powered predictions for accurate patient turn notifications",
    "Real-time dashboard for hospital admins to view bed allocation",
    "Automated inventory management for medical instruments with alerts",
    "Patients receive a notification 10 minutes before their appointment",
    "Streamlines hospital operations and enhances patient experience"
  ],
  image: Aidlinker,
  accentColor: "bg-teal-500",
  bgGradient: "from-zinc-950 to-teal-400"
},

    {
      id: 7,
      link: "https://webcros.vercel.app/",
      title: "WebCros",
      tagline: "Professional web development services tailored for clients.",
      description: "Launched a modern agency platform that offers custom website solutions for businesses and individuals, focusing on performance, design, and client satisfaction.",
      techStack: [
        { name: "Next.js", icon: nextjs },
        { name: "React", icon: react },
        { name: "Tailwind CSS", icon: tailwindcss },
        { name: "Framer Motion", icon: framermotion },
        { name: "EmailJS", icon: emailjs }
      ],
      features: [
        "Agency-style landing page with sleek design and animations",
        "Showcases client work, pricing, and services clearly",
        "Responsive contact form with automated email handling",
        "Optimized for mobile and desktop with smooth interactions",
        "Built with reusability and scalability in mind"
      ],
      image: WebCrosImage,
      accentColor: "bg-teal-500",
      bgGradient: "from-teal-800 to-teal-600"
    },


    {
      id: 8,
      link: "https://ashirwad-sharma-portfolio.vercel.app/",
      title: "Portfolio",
      tagline: "Dynamic and interactive portfolio showcasing my work and skills.",
      description:
        "Built a high-performance portfolio website to highlight my projects, technical skills, and web development journey, combineing modern UI design with smooth animations and a responsive layout",
      techStack: [
        { name: "Next.js", icon: nextjs },
        { name: "TypeScript", icon: typescript },
        { name: "Framer Motion", icon: framer },
        { name: "Tailwind CSS", icon: tailwindcss },
        { name: "ShadCN UI", icon: shadcn }
      ],
      features: [
        "Smooth animations and transitions using Framer Motion",
        "Interactive UI components with ShadCN and Tailwind CSS",
        "Project showcase with detailed descriptions and tech stack",
        "Fully responsive design optimized for all devices",
        "Clean codebase using TypeScript for maintainability"
      ],
      image: PortfolioImage,
      accentColor: "bg-purple-500",
      bgGradient: "from-purple-960 to-purple-500"
    }
  ];

  // Toggle mobile expanded project view
  const toggleExpandedMobile = (index: number) => {
    setExpandedMobile(expandedMobile === index ? null : index);
  };

  // Handle scroll events to update active project based on visibility
  useEffect(() => {
    const handleScroll = () => {
      // Calculate which project is most visible in the viewport
      const viewportHeight = window.innerHeight;
      const viewportCenter = viewportHeight / 2;

      let closestProject = 0;
      let closestDistance = Number.MAX_VALUE;

      projectRefs.current.forEach((projectRef, index) => {
        if (!projectRef) return;

        const rect = projectRef.getBoundingClientRect();
        const projectCenter = rect.top + rect.height / 2;
        const distance = Math.abs(projectCenter - viewportCenter);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestProject = index;
        }
      });

      // Update active project for the right panel display
      if (closestProject !== activeProject) {
        setActiveProject(closestProject);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [activeProject]);

  return (
    <div
      ref={componentRef}
      className="bg-black pt-20 md:pt-32 w-full text-white"
    >
      <div className="pt-5 px-4 md:px-10 max-w-7xl mx-auto">
        <div className="text-center mb-5">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
            className="text-gray-300 uppercase tracking-wider font-medium text-xs md:text-sm mb-1 md:mb-2"
          >
            Code Meets Creativity
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: false }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold"
          >
            <span className="text-white">Crafted </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500">Projects</span>
          </motion.div>
        </div>

        <div className="relative">
          <div className="flex flex-col md:flex-row">
            {/* Left side - smoothly scrollable projects */}
            <div className="w-full md:w-1/2">
              {/* Mobile Project Cards */}
              <div className="md:hidden space-y-8 my-8">
                {projects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    className="rounded-xl overflow-hidden"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: false, margin: "-50px" }}
                  >
                    <div className={`bg-gradient-to-b ${project.bgGradient} rounded-xl`}>
                      {/* Project Image */}
                      <div className="relative h-52 w-full overflow-hidden">
                        <Image
                          src={project.image}
                          alt={project.title}
                          className="object-cover"
                        />
                      </div>
                      
                      {/* Project Info */}
                      <div className="p-4">
                        <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                        <p className="text-sm text-gray-300 mb-3">{project.tagline}</p>
                        
                        {/* Tech Stack - Mobile */}
                        <div className="flex flex-wrap gap-2 mb-3">
                          {project.techStack.slice(0, 4).map((tech, i) => (
                            <div
                              key={i}
                              className="rounded-full py-1 px-2 flex items-center gap-1 border border-gray-700 bg-black/30"
                            >
                              <span className="w-3 h-3 flex items-center justify-center">
                                <Image src={tech.icon} alt={tech.name} />
                              </span>
                              <span className="text-xs font-medium">{tech.name}</span>
                            </div>
                          ))}
                          {project.techStack.length > 4 && (
                            <div className="rounded-full py-1 px-2 flex items-center border border-gray-700 bg-black/30">
                              <span className="text-xs font-medium">+{project.techStack.length - 4}</span>
                            </div>
                          )}
                        </div>
                        
                        {/* Expandable Section */}
                        <div className="mt-2">
                          <button 
                            onClick={() => toggleExpandedMobile(index)}
                            className="flex items-center text-xs text-gray-300 font-medium"
                          >
                            {expandedMobile === index ? "Show less" : "Show more"}
                            {expandedMobile === index ? (
                              <ChevronUp className="w-4 h-4 ml-1" />
                            ) : (
                              <ChevronDown className="w-4 h-4 ml-1" />
                            )}
                          </button>
                          
                          {/* Expanded Content */}
                          {expandedMobile === index && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              className="mt-3 space-y-3"
                            >
                              <p className="text-xs text-gray-300">{project.description}</p>
                              
                              <div className="space-y-2">
                                <h4 className="text-sm font-medium text-white">Key Features:</h4>
                                {project.features.map((feature, i) => (
                                  <div key={i} className="flex items-start gap-2">
                                    <span className={`${project.accentColor.replace('bg-', 'text-')} text-xs mt-1`}>•</span>
                                    <p className="text-xs text-gray-300">{feature}</p>
                                  </div>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </div>
                        
                        {/* Link Button */}
                        <Link 
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-4 flex justify-center items-center gap-2 rounded-lg bg-white/10 hover:bg-white/20 backdrop-blur-sm w-full py-2 text-sm font-medium transition-colors"
                        >
                          View Project <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Desktop Project Cards */}
              <div className="hidden md:block">
                {projects.map((project, index) => {
                  const isHovered = hoveredProject === index;

                  return (
                    <div
                      key={project.id}
                      ref={el => {
                        projectRefs.current[index] = el;
                      }}
                      className="py-24 flex items-center relative"
                      onMouseEnter={() => setHoveredProject(index)}
                      onMouseLeave={() => setHoveredProject(null)}
                    >
                      <Link href={`${project.link}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <motion.div
                          whileHover={{
                            scale: 1.02,
                            transition: { duration: 0.3 }
                          }}
                          className="w-full cursor-pointer"
                        >
                          <div className={`bg-gradient-to-b ${project.bgGradient} overflow-hidden rounded-3xl px-8 pt-10 flex flex-col`}>
                            <div className="text-white flex flex-row text-2xl font-bold mb-6">
                              {project.tagline}

                              <div
                                className="ml-auto flex items-center justify-center">
                                <motion.div
                                  className="flex items-center justify-center rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium px-6 py-3"
                                  initial={{ opacity: 0 }}
                                  animate={{ opacity: isHovered ? 1 : 0 }}
                                  transition={{ duration: 0.3 }}
                                >
                                  <ArrowRight className="w-5 h-5" />
                                </motion.div>
                              </div>
                            </div>

                            <div className={`relative h-80 w-full overflow-hidden transition-transform duration-300 rounded-xl mt-4 group ${isHovered ? 'scale-110 -rotate-5' : 'scale-100'} `}>
                              <Image
                                src={project.image}
                                alt={project.title}
                              />
                            </div>
                          </div>
                        </motion.div>
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right side - fixed content for desktop only */}
            <div className="hidden md:block md:w-1/2 sticky top-0 h-screen items-center">
              <div className="h-full flex items-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeProject}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.5 }}
                    className="p-8 h-full flex flex-col justify-center"
                  >
                    <div className="flex items-center gap-2 mb-4">
                      <div className={`h-1 w-10 ${projects[activeProject].accentColor}`}></div>
                      <h3 className="text-2xl font-bold">{projects[activeProject].title}</h3>
                    </div>
                    <p className="text-gray-300 mb-6">{projects[activeProject].description}</p>

                    <div className="space-y-4">
                      {projects[activeProject].features.map((feature, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: i * 0.1 }}
                          className="flex items-start gap-3"
                        >
                          <span className={`${projects[activeProject].accentColor.replace('bg-', 'text-')} mt-1`}>+</span>
                          <p className="text-gray-300">{feature}</p>
                        </motion.div>
                      ))}
                    </div>

                    <div className="mt-10">
                      <div className="flex flex-wrap gap-3">
                        {projects[activeProject].techStack.slice(0, 12).map((tech, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: i * 0.05 }}
                            className={`rounded-full py-1 px-2 flex items-center gap-2 border border-gray-700`}
                          >
                            <span className="w-5 h-5 flex items-center justify-center">
                              <Image src={tech.icon} alt={tech.name} />
                            </span>
                            <span className="text-sm font-medium">{tech.name}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}