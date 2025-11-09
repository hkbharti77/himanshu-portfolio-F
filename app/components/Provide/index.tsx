import Image from "next/image";
import Link from "next/link";

interface datatype {
    imgSrc: string;
    country: string;
    paragraph: string;
}

const Aboutdata: datatype[] = [
    {
        imgSrc: "/assets/provide/fullstack.svg",
        country: "Full-Stack Web Development",
        paragraph: 'Java, Spring Boot, MySQL, React, Next.js & APIs.',
    },
    {
        imgSrc: "/assets/provide/ai.svg",
        country: "AI-Powered Chatbot & Automation",
        paragraph: 'Python, FastAPI, LangChain, OCR, FAISS & Transformers.',
    },
    {
        imgSrc: "/assets/provide/api.svg",
        country: "Backend API Development",
        paragraph: 'Secure, high-performance REST APIs with JWT authentication.',
    },
    {
        imgSrc: "/assets/provide/database.svg",
        country: "Database Engineering & ETL",
        paragraph: 'MySQL, SQLAlchemy, Pandas, Data Pipelines.',
    },
    {
        imgSrc: "/assets/provide/frontend.svg",
        country: "Frontend Development & UI Engineering",
        paragraph: 'React, Next.js, TypeScript, Tailwind.',
    },
    {
        imgSrc: "/assets/provide/salesforce.svg",
        country: "Salesforce Automation (Entry-Level)",
        paragraph: 'Apex triggers, flows & validations, CRM customization.',
    },
    {
        imgSrc: "/assets/provide/projects.svg",
        country: "Small IT Projects & College Systems",
        paragraph: 'Student apps, banking apps, mini projects & final year projects.',
    },
]

const Provide = () => {
    return (
        <div id="services" className="relative py-20 overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-mithila-cream/30 to-white dark:from-bg-deep dark:to-bg-deep/90 -z-10"></div>
            <div className="absolute top-20 right-0 w-64 h-64 bg-mithila-red/5 rounded-full blur-3xl -z-10"></div>
            <div className="absolute bottom-20 left-0 w-64 h-64 bg-mithila-blue/5 rounded-full blur-3xl -z-10"></div>
            
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                {/* Section header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center justify-center px-4 py-1.5 text-sm font-medium text-mithila-red bg-mithila-red/10 rounded-full mb-6">
                        <span>OUR SERVICES</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-mithila-brown dark:text-mithila-cream mb-6">
                        We Provide These <span className="text-mithila-red dark:text-mithila-yellow">Services</span>
                    </h2>
                    <p className="text-lg text-mithila-brown/80 dark:text-mithila-cream/80 leading-relaxed">
                        Experience cutting-edge technology, scalable development, and AI-driven automation built by industry-ready full-stack engineers. 
                        Our solutions combine the vibrant artistry of Mithila culture with modern technical excellence.
                    </p>
                </div>
                
                {/* Services grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {Aboutdata.map((item, i) => (
                        <div 
                            key={i} 
                            className="group relative bg-white dark:bg-bg-deep/80 backdrop-blur-sm rounded-2xl border border-mithila-yellow/20 p-6 transition-all duration-300 hover:border-mithila-red/30 hover:shadow-xl"
                        >
                            {/* Decorative element */}
                            <div className="absolute top-0 right-0 w-24 h-24 bg-mithila-red/5 rounded-bl-full -z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            
                            <div className="relative z-10">
                                <div className="flex items-start mb-5">
                                    <div className="flex-shrink-0 mr-4 p-3 bg-mithila-red/10 rounded-lg group-hover:bg-mithila-red/20 transition-colors duration-300">
                                        <Image 
                                            src={item.imgSrc} 
                                            alt={item.country} 
                                            width={32} 
                                            height={32} 
                                            className="group-hover:scale-110 transition-transform duration-300"
                                        />
                                    </div>
                                    <h3 className="text-xl font-bold text-mithila-brown dark:text-mithila-cream mt-2 group-hover:text-mithila-red transition-colors duration-300">
                                        {item.country}
                                    </h3>
                                </div>
                                <p className="text-mithila-brown/80 dark:text-mithila-cream/80 leading-relaxed">
                                    {item.paragraph}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
                
                {/* CTA section */}
                <div className="text-center mt-16">
                    <div className="inline-flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link 
                            href={'/contact'} 
                            className="px-8 py-3.5 bg-mithila-red text-white font-medium rounded-lg hover:bg-mithila-red/90 transition-colors duration-300 shadow-lg hover:shadow-mithila-red/20"
                        >
                            Get Started
                        </Link>
                        <Link 
                            href={'/'} 
                            className="px-8 py-3.5 text-mithila-blue dark:text-mithila-yellow font-medium rounded-lg border border-mithila-blue/30 dark:border-mithila-yellow/30 hover:bg-mithila-blue/5 dark:hover:bg-mithila-yellow/5 transition-colors duration-300"
                        >
                            Learn More
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Provide;