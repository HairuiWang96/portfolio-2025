export default function Contact() {
    return (
        <section id='contact' className='py-16 flex flex-col items-center text-center gap-8'>
            <h2 className='text-3xl font-bold mb-2 text-teal-600'>Contact</h2>
            <p className='text-gray-600 dark:text-gray-300'>I&apos;d love to hear from you! Feel free to reach out via email or phone.</p>
            <div className='flex flex-col gap-2 text-gray-700 dark:text-gray-200'>
                <span>
                    Email:{' '}
                    <a href='mailto:wanghairuinmg@gmail.com' className='text-teal-600 hover:underline'>
                        wanghairuinmg@gmail.com
                    </a>
                </span>
                <span>
                    Phone:{' '}
                    <a href='tel:+13378533836' className='text-teal-600 hover:underline'>
                        +1 (337)-853-3836
                    </a>
                </span>
            </div>
            <form className='w-full max-w-md mx-auto mt-6 flex flex-col gap-4'>
                <input type='text' placeholder='Your Name' className='px-4 py-2 rounded border border-gray-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none' />
                <input type='email' placeholder='Your Email' className='px-4 py-2 rounded border border-gray-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none' />
                <textarea placeholder='Your Message' rows={4} className='px-4 py-2 rounded border border-gray-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none' />
                <button type='submit' className='bg-teal-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-teal-700 transition'>
                    Send Message
                </button>
            </form>
        </section>
    );
}
