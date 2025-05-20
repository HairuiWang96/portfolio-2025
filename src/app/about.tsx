'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaCode, FaServer, FaDatabase, FaTools } from 'react-icons/fa';

const stats = [
    { icon: <FaCode className='w-6 h-6' />, label: 'Frontend', value: 'React, Next.js' },
    { icon: <FaServer className='w-6 h-6' />, label: 'Backend', value: 'Node.js, Express' },
    { icon: <FaDatabase className='w-6 h-6' />, label: 'Database', value: 'PostgreSQL, MongoDB' },
    { icon: <FaTools className='w-6 h-6' />, label: 'Tools', value: 'Git, Docker, AWS' },
];

export default function About() {
    return (
        <section id='about' className='py-20 bg-white dark:bg-gray-800'>
            <div className='container mx-auto px-4'>
                <div className='grid md:grid-cols-2 gap-12 items-center'>
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

                        <div className='grid grid-cols-2 gap-6'>
                            {stats.map((stat, index) => (
                                <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} className='bg-gray-50 dark:bg-gray-700 p-4 rounded-xl'>
                                    <div className='text-teal-600 mb-2'>{stat.icon}</div>
                                    <h3 className='font-semibold mb-1'>{stat.label}</h3>
                                    <p className='text-sm text-gray-600 dark:text-gray-300'>{stat.value}</p>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }} className='mt-8'>
                            <a href='#contact' className='inline-block px-6 py-3 bg-teal-600 text-white rounded-full font-semibold shadow-lg hover:bg-teal-700 transition-all hover:scale-105'>
                                Let's Connect
                            </a>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
