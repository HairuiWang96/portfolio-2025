'use client';
import dynamic from 'next/dynamic';
import { motion, useScroll, useTransform } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import { useRef } from 'react';
import { FaReact, FaNodeJs, FaDatabase, FaAws } from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiTailwindcss } from 'react-icons/si';

const About = dynamic(() => import('./about'));
const Resume = dynamic(() => import('./resume'));
const Portfolio = dynamic(() => import('./portfolio'));
const Contact = dynamic(() => import('./contact'));

export default function Home() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end start'],
    });
    const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    const skills = [
        { icon: <FaReact className='w-8 h-8' />, name: 'React', color: 'text-blue-500' },
        { icon: <SiNextdotjs className='w-8 h-8' />, name: 'Next.js', color: 'text-black dark:text-white' },
        { icon: <SiTypescript className='w-8 h-8' />, name: 'TypeScript', color: 'text-blue-600' },
        { icon: <FaNodeJs className='w-8 h-8' />, name: 'Node.js', color: 'text-green-600' },
        { icon: <FaDatabase className='w-8 h-8' />, name: 'Databases', color: 'text-yellow-600' },
        { icon: <SiTailwindcss className='w-8 h-8' />, name: 'Tailwind', color: 'text-cyan-500' },
        { icon: <FaAws className='w-8 h-8' />, name: 'AWS', color: 'text-orange-500' },
    ];

    return (
        <div ref={containerRef} className='relative'>
            {/* Hero Section with 3D Effect */}
            <section className='relative h-screen flex items-center justify-center overflow-hidden'>
                <motion.div style={{ y, opacity }} className='absolute inset-0 -z-10'>
                    <div className='absolute inset-0 bg-gradient-to-tr from-teal-400 via-blue-400 to-purple-400 opacity-30 blur-3xl' />
                    <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
                </motion.div>

                <div className='container mx-auto px-4 z-10'>
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className='text-center'>
                        <h1 className='text-5xl sm:text-7xl font-bold tracking-tight mb-6'>
                            Hi, I&apos;m <span className='text-teal-600'>Hairui Wang</span>
                        </h1>
                        <div className='text-2xl sm:text-3xl font-medium text-gray-600 dark:text-gray-300 min-h-[3rem] mb-6'>
                            <Typewriter
                                options={{
                                    strings: ['Full Stack Developer', 'React & Next.js Enthusiast', 'Building Modern Web Experiences', 'Lifelong Learner'],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </div>
                        <p className='max-w-2xl mx-auto text-lg sm:text-xl text-gray-500 dark:text-gray-400 mb-8'>I build modern web and mobile applications with a focus on clean code, great user experience, and scalable architecture.</p>
                        <motion.a
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.9 }}
                            href='#portfolio'
                            className='inline-block px-8 py-4 bg-teal-600 text-white rounded-full font-semibold shadow-lg hover:bg-teal-700 transition-all hover:scale-105'
                        >
                            View My Work
                        </motion.a>
                    </motion.div>
                </div>
            </section>

            {/* Skills Section */}
            <section className='py-20 bg-gray-50 dark:bg-gray-900'>
                <div className='container mx-auto px-4'>
                    <h2 className='text-3xl font-bold text-center mb-12'>Tech Stack</h2>
                    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                        {skills.map((skill, index) => (
                            <motion.div
                                key={skill.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ scale: 1.05 }}
                                className='bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all'
                            >
                                <div className={`${skill.color} mb-4`}>{skill.icon}</div>
                                <h3 className='text-lg font-semibold'>{skill.name}</h3>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <About />
            <Resume />
            <Portfolio />
            <Contact />
        </div>
    );
}

// Add the following to your globals.css for the gradient animation:
// @keyframes gradient {
//   0%, 100% { background-position: 0% 50%; }
//   50% { background-position: 100% 50%; }
// }
// .animate-gradient {
//   background-size: 200% 200%;
//   animation: gradient 8s ease-in-out infinite;
// }
