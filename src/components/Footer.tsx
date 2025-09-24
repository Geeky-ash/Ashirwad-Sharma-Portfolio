import React from 'react';
import Link from 'next/link';
import { FaLinkedin, FaGithub, FaWhatsapp, FaPhone } from 'react-icons/fa';

const Footer: React.FC = () => {
    return (
        <footer className="w-full bg-black text-white py-10 sm:py-16">
            <div className="mx-auto px-4 max-w-7xl">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 md:gap-20 mb-8 sm:mb-12">
                    {/* Column 1 - Personal Info */}
                    <div className="col-span-1">
                        <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Ashirwad Sharma</h2>
                        <p className="text-gray-400 text-sm sm:text-base mb-4 sm:mb-6">
                            Building web solutions where clean design and powerful functionality work in harmony.
                        </p>
                        <div className="flex space-x-3 sm:space-x-4">
                            <Link href="https://www.linkedin.com/in/ig.ashh__" className="text-gray-400 hover:text-white transition-colors">
                                <FaLinkedin className="text-base sm:text-xl" />
                                <span className="sr-only">LinkedIn</span>
                            </Link>
                            <Link href="https://github.com/Geeky-ash" className="text-gray-400 hover:text-white transition-colors">
                                <FaGithub className="text-base sm:text-xl" />
                                <span className="sr-only">GitHub</span>
                            </Link>
                            <Link href="https://wa.me/+918779677738" className="text-gray-400 hover:text-white transition-colors">
                                <FaWhatsapp className="text-base sm:text-xl" />
                                <span className="sr-only">WhatsApp</span>
                            </Link>
                        </div>
                    </div>

                    {/* Column 2 & 3 - Website Links and Projects */}
                    <div className="col-span-1 my-5 md:my-0 flex flex-row justify-between items-start gap-6 sm:gap-8">
                        {/* Website Links */}
                        <div>
                            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">The Website</h3>
                            <nav className="flex flex-col space-y-1 sm:space-y-2">
                                <Link href="/" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-base">
                                    Home
                                </Link>
                                <Link href="/projects" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-base">
                                    Projects
                                </Link>
                                <Link href="/about" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-base">
                                    About
                                </Link>
                                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-base">
                                    Contact
                                </Link>
                            </nav>
                        </div>

                        {/* Projects */}
                        <div>
                            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Projects</h3>
                            <nav className="flex flex-col space-y-1 sm:space-y-2">
                                <a
                                    href="https://getmaterial.vercel.app"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-white transition-colors text-xs sm:text-base"
                                >
                                    GetMaterial
                                </a>
                                <a
                                    href="https://oroom.vercel.app"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-white transition-colors text-xs sm:text-base"
                                >
                                    OpenRoom
                                </a>
                                <a
                                    href="https://sih-agrovision.vercel.app"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-white transition-colors text-xs sm:text-base"
                                >
                                    AgroVision
                                </a>
                                <a
                                    href="https://lemonstudio.vercel.app"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-white transition-colors text-xs sm:text-base"
                                >
                                    Lemon Studio
                                </a>
                            </nav>
                        </div>
                    </div>

                    {/* Column 4 - Contact Info */}
                    <div className="col-span-1">
                        <p className="text-sm sm:text-base text-gray-400 mb-3 sm:mb-4">
                            I&apos;m open to freelance projects, full-time roles, or collaborative ideas. Connect and build something meaningful together.
                        </p>

                        <Link
                            href="mailto:ashirwad.020105@gmail.com"
                            className="text-blue-400 hover:text-blue-300 transition-colors flex items-center text-sm sm:text-base"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4 sm:h-5 sm:w-5 mr-1.5 sm:mr-2"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                            </svg>
                            ashirwad.020105@gmail.com
                        </Link>
                        <Link href="https://wa.me/+918779677738">
                            <p className="mt-2 cursor-pointer text-blue-400 hover:text-blue-500 flex flex-row items-center text-sm sm:text-base">
                                <FaPhone className="inline-block mr-1.5 sm:mr-3 text-sm sm:text-base" />
                                +91 8779677738
                            </p>
                        </Link>
                    </div>
                </div>

                {/* Copyright */}
                <div className="pt-6 sm:pt-8 border-t border-gray-800 text-center text-gray-500 text-xs sm:text-sm">
                    <p>Copyright © {new Date().getFullYear()} Ashirwad Sharma. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;