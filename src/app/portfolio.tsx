'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const projects = [
    {
        title: 'Gophr Dashboard',
        description: 'Used by Gophr merchants and dispatchers for placing orders, managing users and inventories, tracking drivers and so on.',
        tech: ['React.js', 'Node.js', 'PostgreSQL', 'AWS'],
        image: '/projects/dashboard.png',
        link: '#',
        github: '#',
        category: 'React Project',
    },
    {
        title: 'School Lunch System',
        description: 'Let parents order lunches for students from local restaurants and Gophr deliveries them to schools.',
        tech: ['Next.js', 'Node.js', 'PostgreSQL', 'AWS'],
        image: '/projects/school-lunch.png',
        link: '#',
        github: '#',
        category: 'Next.js Project',
    },
    {
        title: 'API-Shipments',
        description: 'This API supports order placement, shipping fee calculation, route optimization, driver dispatch and histories management.',
        tech: ['Node.js', 'PostgreSQL', 'AWS'],
        image: '/projects/shipments.png',
        link: '#',
        github: '#',
        category: 'Node.js Project',
    },
    {
        title: 'Gophr App',
        description: 'Gophr App builds a bridge between convenience and community by providing local businesses a marketplace to sell their goods.',
        tech: ['React Native', 'Node.js', 'PostgreSQL'],
        image: '/projects/consumer.png',
        link: '#',
        github: '#',
        category: 'React Native',
    },
    {
        title: 'Population Heat Map',
        description: 'This is a SaaS service that displays 3D real time population heat map and statistics of selected area based on signaling data.',
        tech: ['JavaScript', 'ArcGIS', 'Hadoop'],
        image: '/projects/heat-map.png',
        link: '#',
        github: '#',
        category: 'JavaScript',
    },
];

export default function Portfolio() {
    return (
        <section id='portfolio' className='py-20 bg-gray-50 dark:bg-gray-900 w-full'>
            <div className='w-full px-4 sm:px-6 lg:px-8'>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className='text-center mb-16 max-w-3xl mx-auto'>
                    <h2 className='text-4xl font-bold mb-4'>Featured Projects</h2>
                    <p className='text-gray-600 dark:text-gray-400'>Here are some of my recent projects that showcase my skills in full-stack development.</p>
                </motion.div>

                <div className='grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 max-w-[2000px] mx-auto'>
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className='group relative bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden h-full'
                        >
                            <div className='relative h-56 w-full overflow-hidden'>
                                <Image src={project.image} alt={project.title} fill className='object-cover transition-transform duration-300 group-hover:scale-110' />
                                <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
                            </div>

                            <div className='p-6 flex flex-col h-[calc(100%-14rem)]'>
                                <div className='flex justify-between items-start mb-2'>
                                    <h3 className='text-xl font-semibold'>{project.title}</h3>
                                    <span className='text-sm text-teal-600 dark:text-teal-400'>{project.category}</span>
                                </div>
                                <p className='text-gray-600 dark:text-gray-300 mb-4 flex-grow'>{project.description}</p>
                                <div className='flex flex-wrap gap-2 mb-4'>
                                    {project.tech.map(tech => (
                                        <span key={tech} className='px-3 py-1 bg-teal-100 dark:bg-teal-900 text-teal-700 dark:text-teal-300 rounded-full text-xs font-medium'>
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                <div className='flex gap-4 mt-auto'>
                                    <a href={project.link} target='_blank' rel='noopener noreferrer' className='text-teal-600 hover:text-teal-700 font-medium flex items-center gap-2'>
                                        Live Demo
                                        <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14' />
                                        </svg>
                                    </a>
                                    <a href={project.github} target='_blank' rel='noopener noreferrer' className='text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 font-medium flex items-center gap-2'>
                                        GitHub
                                        <svg className='w-4 h-4' fill='currentColor' viewBox='0 0 24 24'>
                                            <path
                                                fillRule='evenodd'
                                                d='M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z'
                                                clipRule='evenodd'
                                            />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
