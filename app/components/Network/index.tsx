import Image from "next/image";

interface datatype {
    imgSrc: string;
    country: string;
    paragraph: string;
    skills?: string[];
}

const Aboutdata: datatype[] = [
    {
        imgSrc: "/assets/expertise/web-development.svg",
        country: "Web Development",
        paragraph: 'Creating responsive, modern websites and web applications using React, Next.js, and Tailwind CSS.',
        skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'HTML5', 'CSS3', 'JavaScript']
    },
    {
        imgSrc: "/assets/expertise/backend-services.svg",
        country: "Backend Services",
        paragraph: 'Building robust APIs and server-side applications with Node.js, Python, and FastAPI.',
        skills: ['Node.js', 'Python', 'FastAPI', 'Express', 'RESTful APIs', 'GraphQL', 'Microservices']
    },
    {
        imgSrc: "/assets/expertise/database-design.svg",
        country: "Database Design",
        paragraph: 'Designing efficient database schemas and queries for both SQL and NoSQL solutions.',
        skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis', 'Database Design', 'ORM', 'Query Optimization']
    },
    {
        imgSrc: "/assets/expertise/devops-deployment.svg",
        country: "DevOps & Deployment",
        paragraph: 'Containerizing applications with Docker and deploying to cloud platforms for scalability.',
        skills: ['Docker', 'AWS', 'CI/CD', 'Git', 'Linux', 'Nginx', 'Cloud Deployment']
    },
]

const Network = () => {
    return (
        <div className="mithila-bg-secondary py-16" id="network">
            <div className="mx-auto max-w-7xl py-10 px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h3 className="text-3xl md:text-4xl font-bold lh-81 text-mithila-red mb-4 dark:text-mithila-yellow">My Areas of Expertise</h3>
                    <p className="text-lg text-mithila-brown max-w-3xl mx-auto dark:text-mithila-cream">
                        Here are the key domains where I specialize and deliver exceptional results
                    </p>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
                    {Aboutdata.map((item, i) => (
                        <div key={i} className='bg-white rounded-2xl p-6 shadow-xl mithila-card border-2 border-mithila-red dark:bg-dark-card dark:border-mithila-yellow transition-all duration-300 hover:shadow-2xl hover:-translate-y-1'>
                            <div className="flex justify-start items-center gap-3 mb-4">
                                <Image src={item.imgSrc} alt={item.country} width={48} height={48} className="rounded-lg" />
                                <h4 className="text-xl font-bold text-mithila-red dark:text-mithila-yellow">{item.country}</h4>
                            </div>
                            <div className="mithila-divider my-3"></div>
                            <p className='text-base font-normal text-mithila-brown dark:text-mithila-cream mb-4'>{item.paragraph}</p>
                            {item.skills && (
                                <div className="flex flex-wrap gap-2 mt-4">
                                    {item.skills.map((skill, index) => (
                                        <span key={index} className="bg-mithila-cream text-mithila-red text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-bg-deep dark:text-mithila-yellow">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Network;