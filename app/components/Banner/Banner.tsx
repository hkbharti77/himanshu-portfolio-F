import Image from "next/image";


const Banner = () => {
    return (
        <main className="pt-20"> {/* Added padding top to account for sticky navbar */}
            <div className="px-6 lg:px-8 mithila-bg-primary">
                <div className="mx-auto max-w-7xl pt-16 sm:pt-20 pb-20 banner-image">
                    <div className="text-center">
                        <h3 className="text-4xl font-bold text-mithila-red sm:text-5xl lg:text-7xl mb-6">
                        Modern Websites, Smart Technology, Smooth Experience
                        </h3>
                        <p className="mt-6 text-lg leading-8 text-mithila-brown max-w-3xl mx-auto dark:text-mithila-cream">
                            I create responsive websites, APIs, dashboards, and AI-powered features that are fast, secure, and easy to use. Whether it’s a full product or a small feature, I turn ideas into working software.
                        </p>
                    </div>


                    <div className="text-center mt-10">
                        <button type="button" className='text-15px text-white font-bold bg-mithila-red py-5 px-9 mt-2 mithila-button'>
                            See My Work
                        </button>
                        <button type="button" className='text-15px ml-4 mt-2 text-mithila-blue font-bold py-5 px-16 border-2 border-mithila-blue mithila-button-secondary dark:text-mithila-yellow dark:border-mithila-yellow'>
                            Contact Me
                        </button>
                        
                    </div>

                    <div className="mt-16 flex justify-center">
                        <Image src={'/assets/banner/dashboard.svg'} alt="banner-image" width={1200} height={598} className="rounded-lg shadow-xl" />
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Banner;