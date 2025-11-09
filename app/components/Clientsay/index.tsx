import Image from "next/image";

const Clientsay = () => {
    return (
        <div className="mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8 mithila-bg-secondary">
            <div className="text-center mb-16">
                <h3 className='text-mithila-red text-3xl md:text-4xl font-bold mb-4 dark:text-mithila-yellow'>Professional Background</h3>
                <h4 className="text-lg font-normal text-mithila-brown max-w-3xl mx-auto dark:text-mithila-cream">
                    Here&apos;s my journey and experience in the world of software development
                </h4>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1">
                    <div className="bg-white rounded-2xl p-8 shadow-xl mithila-card border-2 border-mithila-red dark:bg-dark-card dark:border-mithila-yellow">
                        <div className="flex items-start mb-6">
                            <div className="flex-shrink-0 mr-4">
                                <div className="bg-mithila-red text-white rounded-full w-12 h-12 flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-mithila-red mb-2 dark:text-mithila-yellow">Professional Experience</h3>
                                <p className="text-base font-normal text-mithila-brown dark:text-mithila-cream">
                                    With experience in full-stack development, I&apos;ve worked on diverse projects ranging from web applications to AI-powered solutions. My expertise spans multiple technologies including React, Next.js, Node.js, Python, and cloud platforms.
                                </p>
                            </div>
                        </div>
                        
                        <div className="flex items-start mb-6">
                            <div className="flex-shrink-0 mr-4">
                                <div className="bg-mithila-green text-white rounded-full w-12 h-12 flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-mithila-red mb-2 dark:text-mithila-yellow">Quality Focus</h3>
                                <p className="text-base font-normal text-mithila-brown dark:text-mithila-cream">
                                    I prioritize clean, maintainable code and robust architecture. My development process includes thorough testing, documentation, and optimization to ensure high-quality deliverables that meet business requirements.
                                </p>
                            </div>
                        </div>
                        
                        <div className="flex items-start">
                            <div className="flex-shrink-0 mr-4">
                                <div className="bg-mithila-blue text-white rounded-full w-12 h-12 flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-mithila-red mb-2 dark:text-mithila-yellow">Continuous Learning</h3>
                                <p className="text-base font-normal text-mithila-brown dark:text-mithila-cream">
                                    I stay updated with the latest industry trends and technologies. My commitment to continuous learning ensures that I can deliver cutting-edge solutions using modern best practices and frameworks.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="order-1 lg:order-2 flex justify-center">
                    <div className="relative">
                        <Image src={'/assets/clientsay/user.png'} alt="developer-image" width={300} height={300} className="rounded-2xl shadow-xl" />
                        <div className="absolute -bottom-4 -right-4 bg-mithila-red text-white rounded-full w-16 h-16 flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.933 12.8a1 1 0 000-1.6L6.6 7.2A1 1 0 005 8v8a1 1 0 001.6.8l5.333-4zM19.933 12.8a1 1 0 000-1.6l-5.333-4A1 1 0 0013 8v8a1 1 0 001.6.8l5.333-4z" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Clientsay;