import Image from "next/image";

const Newsletter = () => {
    return (
        <div className='-mt-32 relative z-3'>
            <div className="mx-auto max-w-2xl lg:max-w-7xl bg-mithila-red rounded-3xl border-4 border-mithila-yellow dark:bg-mithila-saffron dark:border-mithila-red">
                <div className="grid grid-cols-1 gap-y-10 gap-x-6 lg:grid-cols-2 xl:gap-x-8">

                    {/* COLUMN-1 */}
                    <div className='hidden lg:block'>
                        <div className='float-right pt-20 relative'>
                            <Image src={'/assets/newsletter/bgImage.png'} alt="bgimg" width={588} height={334} />
                            <div className="absolute top-10 right-0">
                                <Image src={'/assets/newsletter/leaf.svg'} alt="leafimg" width={81} height={81}/>
                            </div>
                            <div className="absolute bottom-8 left-2">
                                <Image src={'/assets/newsletter/circel.svg'} alt="circleimg" width={30} height={30}/>
                            </div>
                        </div>
                    </div>

                    {/* COLUMN-2 */}
                    <div className="p-10 flex flex-col justify-center">
                        <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white">Stay Updated</h3>
                        <h4 className="text-lg font-normal mb-6 text-mithila-cream dark:text-mithila-charcoal">
                            Get the latest updates on new projects, technical articles, and industry insights delivered to your inbox.
                        </h4>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <input 
                                type="email" 
                                name="email" 
                                className="py-4 text-sm w-full text-mithila-brown bg-mithila-cream rounded-lg pl-4 border-2 border-mithila-yellow dark:text-mithila-charcoal dark:bg-dark-card dark:border-mithila-red focus:outline-none focus:ring-2 focus:ring-mithila-blue" 
                                placeholder="Enter your email address" 
                                autoComplete="off" 
                            />
                            <button className="bg-mithila-blue text-white font-bold py-4 px-6 rounded-lg mithila-button-secondary dark:bg-mithila-peacock hover:opacity-90 transition-opacity whitespace-nowrap">
                                Subscribe
                            </button>
                        </div>
                        <p className="text-sm mt-4 text-mithila-cream dark:text-mithila-charcoal">
                            No spam, unsubscribe at any time.
                        </p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Newsletter;