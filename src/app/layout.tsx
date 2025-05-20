import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
    title: 'Hairui Wang | Portfolio',
    description: 'Full Stack Developer Portfolio',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <body className='bg-background text-foreground font-sans antialiased'>
                <nav className='w-full px-4 py-3 flex items-center justify-between bg-white/80 dark:bg-black/80 backdrop-blur sticky top-0 z-50 border-b border-gray-100 dark:border-gray-800'>
                    <div className='text-2xl font-bold text-teal-600 tracking-tight'>Hairui Wang</div>
                    {/* Desktop Menu */}
                    <div className='hidden md:flex gap-8 text-base font-medium'>
                        <a href='#home' className='hover:text-teal-600 transition'>
                            Home
                        </a>
                        <a href='#about' className='hover:text-teal-600 transition'>
                            About
                        </a>
                        <a href='#resume' className='hover:text-teal-600 transition'>
                            Resume
                        </a>
                        <a href='#portfolio' className='hover:text-teal-600 transition'>
                            Portfolio
                        </a>
                        <a href='#contact' className='hover:text-teal-600 transition'>
                            Contact
                        </a>
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
                <main className='max-w-4xl mx-auto px-4 py-8'>{children}</main>
            </body>
        </html>
    );
}
