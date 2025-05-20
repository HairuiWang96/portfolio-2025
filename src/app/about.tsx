export default function About() {
    return (
        <section id='about' className='py-16 flex flex-col items-center text-center gap-8'>
            <h2 className='text-3xl font-bold mb-2 text-teal-600'>About Me</h2>
            <div className='w-24 h-24 rounded-full bg-gray-200 dark:bg-gray-700 mx-auto mb-4' />
            <p className='max-w-2xl text-gray-600 dark:text-gray-300 mx-auto'>
                I am a passionate Full Stack Developer with experience building scalable web and mobile applications. I love working with modern technologies and creating solutions that delight users and empower businesses.
            </p>
            <div className='flex flex-wrap justify-center gap-4 mt-6'>
                <span className='px-4 py-2 bg-teal-100 text-teal-700 rounded-full font-medium'>JavaScript</span>
                <span className='px-4 py-2 bg-teal-100 text-teal-700 rounded-full font-medium'>React.js</span>
                <span className='px-4 py-2 bg-teal-100 text-teal-700 rounded-full font-medium'>Next.js</span>
                <span className='px-4 py-2 bg-teal-100 text-teal-700 rounded-full font-medium'>Node.js</span>
                <span className='px-4 py-2 bg-teal-100 text-teal-700 rounded-full font-medium'>PostgreSQL</span>
                <span className='px-4 py-2 bg-teal-100 text-teal-700 rounded-full font-medium'>TypeScript</span>
            </div>
        </section>
    );
}
