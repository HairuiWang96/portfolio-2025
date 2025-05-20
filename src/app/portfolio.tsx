const projects = [
    {
        title: 'Gophr Dashboard',
        description: 'Merchant and dispatcher dashboard for order management, user tracking, and inventory.',
        tech: ['React.js', 'Node.js', 'PostgreSQL'],
    },
    {
        title: 'School Lunch System',
        description: 'Next.js app for parents to order lunches for students from local restaurants.',
        tech: ['Next.js', 'Node.js', 'PostgreSQL'],
    },
    {
        title: 'API-Shipments',
        description: 'API for order placement, shipping fee calculation, and driver dispatch.',
        tech: ['Node.js', 'PostgreSQL'],
    },
];

export default function Portfolio() {
    return (
        <section id='portfolio' className='py-16'>
            <h2 className='text-3xl font-bold text-center mb-10 text-teal-600'>Portfolio</h2>
            <div className='grid gap-8 md:grid-cols-2'>
                {projects.map(project => (
                    <div key={project.title} className='bg-white dark:bg-gray-800 rounded-lg shadow p-6 border-t-4 border-teal-500 flex flex-col'>
                        <h3 className='text-xl font-semibold mb-2'>{project.title}</h3>
                        <p className='text-gray-600 dark:text-gray-300 mb-4'>{project.description}</p>
                        <div className='flex flex-wrap gap-2 mt-auto'>
                            {project.tech.map(tech => (
                                <span key={tech} className='px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-xs font-medium'>
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
