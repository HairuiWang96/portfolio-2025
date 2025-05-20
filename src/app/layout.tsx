'use client';
import './globals.css';
import { useEffect, useState } from 'react';

const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#resume', label: 'Resume' },
    { href: '#portfolio', label: 'Portfolio' },
    { href: '#contact', label: 'Contact' },
];

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    // Scrollspy logic
    const [active, setActive] = useState('#home');
    useEffect(() => {
        const handleScroll = () => {
            const offsets = navLinks.map(link => {
                const el = document.querySelector(link.href);
                return el ? (el as HTMLElement).offsetTop : 0;
            });
            const scroll = window.scrollY + 100;
            for (let i = offsets.length - 1; i >= 0; i--) {
                if (scroll >= offsets[i]) {
                    setActive(navLinks[i].href);
                    break;
                }
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <html lang='en'>
            <body className='bg-background text-foreground font-sans antialiased'>
                <nav className='w-full px-4 py-3 flex items-center justify-between bg-white/80 dark:bg-black/80 backdrop-blur sticky top-0 z-50 border-b border-gray-100 dark:border-gray-800'>
                    <div className='text-2xl font-bold text-teal-600 tracking-tight'>Hairui Wang</div>
                    {/* Desktop Menu */}
                    <div className='hidden md:flex gap-8 text-base font-medium'>
                        {navLinks.map(link => (
                            <a key={link.href} href={link.href} className={`relative transition-colors duration-200 ${active === link.href ? 'text-teal-600' : 'hover:text-teal-600'} group`}>
                                {link.label}
                                <span
                                    className={`absolute left-0 -bottom-1 w-full h-0.5 bg-teal-600 rounded transition-all duration-300 ${
                                        active === link.href ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
                                    } group-hover:opacity-100 group-hover:scale-x-100`}
                                />
                            </a>
                        ))}
                    </div>
                    {/* Mobile Hamburger */}
                    <div className='md:hidden'>
                        {/* Hamburger menu will be implemented in the next step */}
                        <button className='p-2 rounded focus:outline-none focus:ring-2 focus:ring-teal-500'>
                            <svg className='w-6 h-6 text-teal-600' fill='none' stroke='currentColor' strokeWidth='2' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                                <path strokeLinecap='round' strokeLinejoin='round' d='M4 6h16M4 12h16M4 18h16'></path>
                            </svg>
                        </button>
                    </div>
                </nav>
                <main className='w-full'>{children}</main>
            </body>
        </html>
    );
}
