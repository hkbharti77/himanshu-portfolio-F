import Image from 'next/image';

interface cardDataType {
    imgSrc: string;
    heading: string;
    percent: string;
    subheading: string;
}

const cardData: cardDataType[] = [
    {
        imgSrc: '/assets/buyers/ourbuyers.svg',
        percent: '50+',
        heading: "Technologies Mastered",
        subheading: "Programming languages, frameworks, and tools I work with.",
    },
    {
        imgSrc: '/assets/buyers/projectcompleted.svg',
        percent: '10+',
        heading: "Projects Completed",
        subheading: "Full-stack applications, websites, and software solutions.",
    },
    {
        imgSrc: '/assets/buyers/happybuyers.svg',
        percent: '95%',
        heading: "Client Satisfaction",
        subheading: "Based on feedback from freelance projects and collaborations.",
    },
    {
        imgSrc: '/assets/buyers/teammembers.svg',
        percent: '24/7',
        heading: "Support Availability",
        subheading: "Always ready to help with your development needs.",
    }
]

const Buyers = () => {
    return (
        <div className='mx-auto max-w-7xl py-16 px-6 mithila-bg-secondary rounded-3xl my-10 dark:mithila-bg-secondary'>
            <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-y-20 gap-x-5'>
                {cardData.map((items, i) => (
                    <div className='flex flex-col justify-center items-center mithila-card p-8' key={i}>
                        <div className='flex justify-center border-2 border-mithila-red p-4 w-16 rounded-full bg-mithila-cream dark:bg-dark-card dark:border-mithila-yellow'>
                            <Image src={items.imgSrc} alt={items.imgSrc} width={36} height={36} />
                        </div>
                        <h2 className='text-4xl lg:text-6xl text-mithila-red font-bold text-center mt-5 dark:text-mithila-yellow'>{items.percent}</h2>
                        <h3 className='text-2xl text-mithila-brown font-semibold text-center lg:mt-6 dark:text-mithila-cream'>{items.heading}</h3>
                        <p className='text-lg font-normal text-mithila-text-primary text-center mt-2 dark:text-mithila-cream'>{items.subheading}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Buyers;