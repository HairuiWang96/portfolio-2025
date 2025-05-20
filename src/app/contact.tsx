'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaPhone } from 'react-icons/fa';

const socialLinks = [
    { icon: <FaGithub className='w-6 h-6' />, href: 'https://github.com/yourusername', label: 'GitHub' },
    { icon: <FaLinkedin className='w-6 h-6' />, href: 'https://linkedin.com/in/yourusername', label: 'LinkedIn' },
    { icon: <FaTwitter className='w-6 h-6' />, href: 'https://twitter.com/yourusername', label: 'Twitter' },
];

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission
        console.log(formData);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    return (
        <section id='contact' className='py-20 bg-gray-50 dark:bg-gray-900'>
            <div className='container mx-auto px-4'>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className='text-center mb-16'>
                    <h2 className='text-4xl font-bold mb-4'>Get In Touch</h2>
                    <p className='text-gray-600 dark:text-gray-300 max-w-2xl mx-auto'>I&apos;m always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>
                </motion.div>

                <div className='grid md:grid-cols-2 gap-12 max-w-6xl mx-auto'>
                    <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} className='space-y-8'>
                        <div className='bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg'>
                            <h3 className='text-xl font-semibold mb-4'>Contact Information</h3>
                            <div className='space-y-4'>
                                <a href='mailto:wanghairuinmg@gmail.com' className='flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors'>
                                    <FaEnvelope className='w-5 h-5' />
                                    <span>wanghairuinmg@gmail.com</span>
                                </a>
                                <a href='tel:+13378533836' className='flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors'>
                                    <FaPhone className='w-5 h-5' />
                                    <span>+1 (337)-853-3836</span>
                                </a>
                            </div>
                        </div>

                        <div className='bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg'>
                            <h3 className='text-xl font-semibold mb-4'>Follow Me</h3>
                            <div className='flex gap-4'>
                                {socialLinks.map((link, index) => (
                                    <motion.a
                                        key={link.label}
                                        href={link.href}
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        whileHover={{ y: -5 }}
                                        className='text-gray-600 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors'
                                    >
                                        {link.icon}
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
                        <form onSubmit={handleSubmit} className='bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg space-y-4'>
                            <div>
                                <label htmlFor='name' className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1'>
                                    Your Name
                                </label>
                                <input
                                    type='text'
                                    id='name'
                                    name='name'
                                    value={formData.name}
                                    onChange={handleChange}
                                    className='w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 dark:focus:ring-teal-800 outline-none bg-white dark:bg-gray-700 text-gray-900 dark:text-white'
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor='email' className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1'>
                                    Your Email
                                </label>
                                <input
                                    type='email'
                                    id='email'
                                    name='email'
                                    value={formData.email}
                                    onChange={handleChange}
                                    className='w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 dark:focus:ring-teal-800 outline-none bg-white dark:bg-gray-700 text-gray-900 dark:text-white'
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor='message' className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1'>
                                    Your Message
                                </label>
                                <textarea
                                    id='message'
                                    name='message'
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={4}
                                    className='w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 dark:focus:ring-teal-800 outline-none bg-white dark:bg-gray-700 text-gray-900 dark:text-white'
                                    required
                                />
                            </div>
                            <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} type='submit' className='w-full bg-teal-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors'>
                                Send Message
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
