'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaReact, FaNodeJs, FaAws } from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiPostgresql, SiGraphql, SiFlutter, SiGooglecloud, SiPython, SiJavascript } from 'react-icons/si';

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

export default function About() {
    return (
        <section id='about' className='py-20 bg-white dark:bg-gray-800'>
            <div className='container mx-auto px-4'>
                <div className='grid md:grid-cols-2 gap-12 items-center mb-20'>
                    <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} className='relative'>
                        <div className='relative w-64 h-64 mx-auto'>
                            <div className='absolute inset-0 bg-gradient-to-tr from-teal-400 to-blue-500 rounded-full blur-2xl opacity-30' />
                            <Image src='/profile.jpg' alt='Profile' fill className='rounded-full object-cover' />
                        </div>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
                        <h2 className='text-4xl font-bold mb-6'>About Me</h2>
                        <p className='text-gray-600 dark:text-gray-300 mb-8 text-lg'>
                            I am a passionate Full Stack Developer with experience building scalable web and mobile applications. I love working with modern technologies and creating solutions that delight users and empower businesses.
                        </p>

                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }} className='mt-8'>
                            <a href='#contact' className='inline-block px-6 py-3 bg-teal-600 text-white rounded-full font-semibold shadow-lg hover:bg-teal-700 transition-all hover:scale-105'>
                                Let&apos;s Connect
                            </a>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Tech Stack Section */}
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className='text-center mb-16'>
                    <h2 className='text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-blue-600 dark:from-teal-400 dark:to-blue-400'>Tech Stack</h2>
                    <p className='text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12'>Technologies I use to build modern applications</p>
                    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto'>
                        {skills.map((skill, index) => (
                            <motion.div key={skill.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} whileHover={{ y: -5 }} className='group relative'>
                                <div className='absolute inset-0 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl shadow-lg transform transition-transform duration-300 group-hover:scale-105' />
                                <div className='absolute inset-0 bg-gradient-to-br from-teal-500/10 to-blue-500/10 dark:from-teal-400/10 dark:to-blue-400/10 rounded-2xl' />
                                <div className='relative p-6 rounded-2xl border border-gray-200/50 dark:border-gray-700/50'>
                                    <div className='flex flex-col items-center'>
                                        <div className={`${skill.color} mb-4 transform transition-transform duration-300 group-hover:scale-110`}>{skill.icon}</div>
                                        <h3 className='text-lg font-semibold text-gray-800 dark:text-white'>{skill.name}</h3>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
