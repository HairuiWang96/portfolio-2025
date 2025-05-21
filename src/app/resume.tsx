'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

export default function Resume() {
    const [expandedId, setExpandedId] = useState<string | null>(null);

    const workExperiences = [
        {
            id: 'gophr',
            title: 'Full Stack Developer',
            period: '2020 - Present',
            company: 'Gophr App, Inc',
            summary: 'Leading the development of robust microservices-based backend APIs and intuitive frontend interfaces for delivery technology platforms.',
            details: [
                'Leading the development of robust microservices-based backend APIs for inventory management, user authentication, and shipment tracking, enabling seamless interactions across the Consumer App, Driver App, and Dispatch/Merchant Dashboard.',
                'Leveraging Node.js, Express, and PostgreSQL on AWS infrastructure to ensure scalability, reliability, and maintainability of the microservices architecture.',
                'Crafting intuitive and visually stunning frontend interfaces for the Dispatch/Merchant Dashboard using React.js, optimizing user experience and enhancing operational efficiency.',
                'Pioneering the creation of a comprehensive School Lunch System utilizing Next.js, facilitating efficient management and distribution of meals within educational institutions.',
                'Contributing to the development of the Consumer App using React Native, collaborating with a team to deliver a user-friendly mobile experience and enhance accessibility for customers.',
            ],
        },
        {
            id: 'china-united',
            title: 'Data Scientist / Product Manager',
            period: '2016 - 2017',
            company: 'China United Network Communications',
            summary: 'Designed and developed big data platforms for real-time analysis and market insights.',
            details: [
                'Led the design and development of the Intelligent Transportation Analysis System (ITAS), a cutting-edge platform for real-time analysis and processing of mobile signaling big data, handling a staggering 3 GB/min throughput.',
                'Engineered the Thermal and Industrial Economic Platform (RTIEP), a comprehensive web service solution delivering population statistics and user tag portraits to esteemed clients including P&G, JD, Baidu, and Starbucks.',
                'Led the development of a tourism big data SaaS application, harnessing mobile signaling and web browsing data for the Ministry of Culture and Tourism of China.',
            ],
        },
        {
            id: 'expert-micro',
            title: 'Data Scientist / Product Manager',
            period: '2012 - 2016',
            company: 'Expert Microsystems, Inc. (China)',
            summary:
                'Directed maintenance and support for Prognostic and Health Management (PHM) application, led the design of Real-time Diagnosis Platform (RDP), and contributed to a 30% increase in annual revenue through technical support and presentations.',
            details: [
                'Directed the maintenance and support efforts for the Prognostic and Health Management (PHM) application, overseeing real-time monitoring, fault detection, fault diagnosis, and preventive maintenance analysis of complex industrial equipment.',
                'Led the design and implementation of a cutting-edge Real-time Diagnosis Platform (RDP) for an electromechanical system, integrating sensor data collection, signal processing, algorithm analysis, and dynamic results display.',
                'Played a pivotal role in driving sales and revenue generation by providing technical support and delivering compelling presentations for four software suites and six consulting projects, contributing to a 30% increase in annual revenue.',
            ],
        },
    ];

    return (
        <section id='resume' className='py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800'>
            <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className='text-center mb-16'>
                    <h2 className='text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-blue-600 dark:from-teal-400 dark:to-blue-400'>Resume</h2>
                    <p className='text-gray-600 dark:text-gray-300 max-w-2xl mx-auto'>My professional journey and educational background</p>
                </motion.div>

                <div className='flex flex-col md:flex-row gap-12 justify-center'>
                    {/* Work Experience */}
                    <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} className='flex-1'>
                        <h3 className='text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200 flex items-center gap-2'>
                            <span className='w-8 h-8 rounded-full bg-teal-100 dark:bg-teal-900 flex items-center justify-center text-teal-600 dark:text-teal-400'>
                                <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                    <path
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        strokeWidth={2}
                                        d='M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                                    />
                                </svg>
                            </span>
                            Work Experience
                        </h3>
                        <div className='space-y-6'>
                            {workExperiences.map(exp => (
                                <motion.div key={exp.id} whileHover={{ y: -5 }} className='bg-white dark:bg-gray-800 rounded-xl shadow-lg border-l-4 border-teal-500 hover:shadow-xl transition-all duration-300 overflow-hidden'>
                                    <div className='p-6 cursor-pointer' onClick={() => setExpandedId(expandedId === exp.id ? null : exp.id)}>
                                        <div className='flex justify-between items-start'>
                                            <div>
                                                <h4 className='text-xl font-bold text-gray-800 dark:text-white'>{exp.title}</h4>
                                                <span className='text-sm text-teal-600 dark:text-teal-400 font-medium'>
                                                    {exp.period} | {exp.company}
                                                </span>
                                                <p className='mt-3 text-gray-600 dark:text-gray-300'>{exp.summary}</p>
                                            </div>
                                            <motion.div animate={{ rotate: expandedId === exp.id ? 180 : 0 }} transition={{ duration: 0.3 }} className='text-teal-600 dark:text-teal-400'>
                                                <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 9l-7 7-7-7' />
                                                </svg>
                                            </motion.div>
                                        </div>
                                    </div>
                                    <AnimatePresence>
                                        {expandedId === exp.id && (
                                            <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className='overflow-hidden'>
                                                <div className='px-6 pb-6 pt-2 border-t border-gray-100 dark:border-gray-700'>
                                                    <ul className='space-y-3'>
                                                        {exp.details.map((detail, index) => (
                                                            <motion.li
                                                                key={index}
                                                                initial={{ opacity: 0, x: -20 }}
                                                                animate={{ opacity: 1, x: 0 }}
                                                                transition={{ duration: 0.3, delay: index * 0.1 }}
                                                                className='text-gray-600 dark:text-gray-300 flex items-start gap-2'
                                                            >
                                                                <span className='text-teal-500 mt-1'>•</span>
                                                                {detail}
                                                            </motion.li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Education */}
                    <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} className='flex-1'>
                        <h3 className='text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200 flex items-center gap-2'>
                            <span className='w-8 h-8 rounded-full bg-teal-100 dark:bg-teal-900 flex items-center justify-center text-teal-600 dark:text-teal-400'>
                                <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 14l9-5-9-5-9 5 9 5z' />
                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 14l9-5-9-5-9 5 9 5z' />
                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 14l9-5-9-5-9 5 9 5z' />
                                </svg>
                            </span>
                            Education
                        </h3>
                        <div className='space-y-6'>
                            <motion.div whileHover={{ y: -5 }} className='bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border-l-4 border-teal-500 hover:shadow-xl transition-all duration-300'>
                                <h4 className='text-xl font-bold text-gray-800 dark:text-white'>M.S. Mathematics (Computer Science)</h4>
                                <span className='text-sm text-teal-600 dark:text-teal-400 font-medium'>2018 - 2019 | McNeese State University</span>
                            </motion.div>
                            <motion.div whileHover={{ y: -5 }} className='bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border-l-4 border-teal-500 hover:shadow-xl transition-all duration-300'>
                                <h4 className='text-xl font-bold text-gray-800 dark:text-white'>M.Eng. Thermal Energy & Power</h4>
                                <span className='text-sm text-teal-600 dark:text-teal-400 font-medium'>2009 - 2012 | Beihang University</span>
                            </motion.div>
                            <motion.div whileHover={{ y: -5 }} className='bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border-l-4 border-teal-500 hover:shadow-xl transition-all duration-300'>
                                <h4 className='text-xl font-bold text-gray-800 dark:text-white'>B.Eng. Thermal Energy & Power</h4>
                                <span className='text-sm text-teal-600 dark:text-teal-400 font-medium'>2005 - 2009 | Tianjin University</span>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
