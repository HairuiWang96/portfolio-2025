'use client';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';

const About = dynamic(() => import('./about'));
const Resume = dynamic(() => import('./resume'));
const Portfolio = dynamic(() => import('./portfolio'));
const Contact = dynamic(() => import('./contact'));

export default function Home() {
    return (
        <>
            <section id='home' className='relative flex flex-col items-center justify-center min-h-[60vh] text-center gap-6 overflow-hidden'>
                {/* Animated Gradient Background */}
                <div className='absolute inset-0 -z-10 animate-gradient bg-gradient-to-tr from-teal-400 via-blue-400 to-purple-400 opacity-30 blur-2xl' />
                <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className='text-4xl sm:text-5xl font-bold tracking-tight mt-8'>
                    Hi, I&apos;m <span className='text-teal-600'>Hairui Wang</span>
                </motion.h1>
                <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.3 }} className='text-xl sm:text-2xl font-medium text-gray-600 dark:text-gray-300 min-h-[2.5rem]'>
                    <Typewriter
                        options={{
                            strings: ['Full Stack Developer', 'React & Next.js Enthusiast', 'Building Modern Web Experiences', 'Lifelong Learner'],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </motion.div>
                <motion.p initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.6 }} className='max-w-xl text-base sm:text-lg text-gray-500 dark:text-gray-400'>
                    I build modern web and mobile applications with a focus on clean code, great user experience, and scalable architecture.
                </motion.p>
                <motion.a
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.9 }}
                    href='#portfolio'
                    className='inline-block mt-4 px-6 py-3 bg-teal-600 text-white rounded-full font-semibold shadow hover:bg-teal-700 transition'
                >
                    View My Work
                </motion.a>
            </section>
            <About />
            <Resume />
            <Portfolio />
            <Contact />
        </>
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
