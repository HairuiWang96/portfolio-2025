'use client';
import dynamic from 'next/dynamic';
import { motion, useScroll, useTransform } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import { useRef } from 'react';
import { FaReact, FaNodeJs, FaAws } from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiPostgresql, SiGraphql, SiFlutter, SiGooglecloud, SiPython, SiJavascript } from 'react-icons/si';

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
        { icon: <SiJavascript className='w-8 h-8' />, name: 'JavaScript', color: 'text-yellow-500', gradient: 'from-yellow-500 to-yellow-600' },
        { icon: <SiPython className='w-8 h-8' />, name: 'Python', color: 'text-blue-600', gradient: 'from-blue-600 to-blue-800' },
        { icon: <FaReact className='w-8 h-8' />, name: 'React', color: 'text-blue-500', gradient: 'from-blue-500 to-cyan-400' },
        { icon: <SiNextdotjs className='w-8 h-8' />, name: 'Next.js', color: 'text-black dark:text-white', gradient: 'from-gray-900 to-gray-700 dark:from-white dark:to-gray-300' },
        { icon: <SiTypescript className='w-8 h-8' />, name: 'TypeScript', color: 'text-blue-600', gradient: 'from-blue-600 to-blue-400' },
        { icon: <FaNodeJs className='w-8 h-8' />, name: 'Node.js', color: 'text-green-600', gradient: 'from-green-600 to-emerald-400' },
        { icon: <SiPostgresql className='w-8 h-8' />, name: 'PostgreSQL', color: 'text-blue-400', gradient: 'from-blue-400 to-blue-600' },
        { icon: <SiGraphql className='w-8 h-8' />, name: 'GraphQL', color: 'text-pink-600', gradient: 'from-pink-600 to-purple-500' },
        { icon: <SiFlutter className='w-8 h-8' />, name: 'Flutter', color: 'text-blue-500', gradient: 'from-blue-500 to-cyan-400' },
        { icon: <FaAws className='w-8 h-8' />, name: 'AWS', color: 'text-orange-500', gradient: 'from-orange-500 to-amber-400' },
        { icon: <SiGooglecloud className='w-8 h-8' />, name: 'GCP', color: 'text-blue-500', gradient: 'from-blue-500 to-blue-700' },
    ];

    return (
        <div ref={containerRef} className='relative'>
            {/* Hero Section with 3D Effect */}
            <section id='home' className='relative h-screen flex items-center justify-center overflow-hidden'>
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
                                whileHover={{ scale: 1.05, rotateY: 5 }}
                                className='group relative bg-gradient-to-br p-[1px] rounded-xl overflow-hidden'
                            >
                                <div className={`absolute inset-0 bg-gradient-to-br ${skill.gradient} opacity-90 group-hover:opacity-100 transition-opacity duration-300`} />
                                <div className='relative bg-white dark:bg-gray-800 p-6 rounded-xl h-full flex flex-col items-center justify-center'>
                                    <div className={`${skill.color} mb-4 transform group-hover:scale-110 transition-transform duration-300`}>{skill.icon}</div>
                                    <h3 className='text-lg font-semibold text-gray-800 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors duration-300'>{skill.name}</h3>
                                </div>
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
