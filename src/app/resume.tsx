export default function Resume() {
    return (
        <section id='resume' className='py-16'>
            <h2 className='text-3xl font-bold text-center mb-10 text-teal-600'>Resume</h2>
            <div className='flex flex-col md:flex-row gap-8 justify-center'>
                {/* Work Experience */}
                <div className='flex-1'>
                    <h3 className='text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200'>Work Experience</h3>
                    <div className='space-y-6'>
                        <div className='bg-white dark:bg-gray-800 rounded-lg shadow p-4 border-l-4 border-teal-500'>
                            <h4 className='font-bold'>Full Stack Developer</h4>
                            <span className='text-sm text-gray-500'>2020 - Present | Gophr App, Inc</span>
                            <p className='mt-2 text-gray-600 dark:text-gray-300'>Leading the development of robust microservices-based backend APIs and intuitive frontend interfaces for delivery technology platforms.</p>
                        </div>
                        <div className='bg-white dark:bg-gray-800 rounded-lg shadow p-4 border-l-4 border-teal-500'>
                            <h4 className='font-bold'>Data Scientist / Product Manager</h4>
                            <span className='text-sm text-gray-500'>2016 - 2017 | China United Network Communications</span>
                            <p className='mt-2 text-gray-600 dark:text-gray-300'>Designed and developed big data platforms for real-time analysis and market insights.</p>
                        </div>
                    </div>
                </div>
                {/* Education */}
                <div className='flex-1'>
                    <h3 className='text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200'>Education</h3>
                    <div className='space-y-6'>
                        <div className='bg-white dark:bg-gray-800 rounded-lg shadow p-4 border-l-4 border-teal-500'>
                            <h4 className='font-bold'>M.S. Mathematics (Computer Science)</h4>
                            <span className='text-sm text-gray-500'>2018 - 2019 | McNeese State University</span>
                        </div>
                        <div className='bg-white dark:bg-gray-800 rounded-lg shadow p-4 border-l-4 border-teal-500'>
                            <h4 className='font-bold'>M.Eng. Thermal Energy & Power</h4>
                            <span className='text-sm text-gray-500'>2009 - 2012 | Beihang University</span>
                        </div>
                        <div className='bg-white dark:bg-gray-800 rounded-lg shadow p-4 border-l-4 border-teal-500'>
                            <h4 className='font-bold'>B.Eng. Thermal Energy & Power</h4>
                            <span className='text-sm text-gray-500'>2005 - 2009 | Tianjin University</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
