import Link from "next/link";
import Image from "next/image";
import Logo from "../Logo/Logo";

// MIDDLE LINKS DATA
interface ProductType {
    id: number;
    link: Array<{ name: string; href: string }>;
}

const products: ProductType[] = [
    {
        id: 1,
        link: [
            { name: 'Home', href: '/' },
            { name: 'Popular', href: '/#services' },
            { name: 'About', href: '/#about' },
            { name: 'Contact', href: '/contact' }
        ],
    },
    {
        id: 2,
        link: [
            { name: 'Help', href: '/#services' },
            { name: 'Resources', href: '/#services' },
            { name: 'Application', href: '/#project' },
            { name: 'Team', href: '/#about' }
        ]
    }
]

const footer = () => {
    return (
        <div className="bg-mithila-peacock -mt-40 dark:bg-dark-mithila">
            <div className="mx-auto max-w-2xl pt-48 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                <div className="my-24 grid grid-cols-1 gap-y-10 gap-x-16 sm:grid-cols-2 lg:grid-cols-12 xl:gap-x-8">

                    {/* COLUMN-1 */}

                    <div className='col-span-4 md:col-span-12 lg:col-span-4'>
                        <div className='pb-8'>
                            <Logo variant="footer" showIcon={true} />
                        </div>
                        <div className='flex gap-4'>
                            <a 
                                href="https://facebook.com" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className='footer-fb-icons dark:bg-dark-card dark:border-mithila-yellow'
                                aria-label="Follow us on Facebook"
                            >
                                <Image src={'/assets/footer/facebook.svg'} alt="facebook" width={15} height={20} style={{ width: 'auto', height: 'auto' }} />
                            </a>
                            <a 
                                href="https://twitter.com" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className='footer-icons dark:bg-dark-card dark:border-mithila-yellow'
                                aria-label="Follow us on Twitter"
                            >
                                <Image src={'/assets/footer/twitter.svg'} alt="twitter" width={20} height={20} style={{ width: 'auto', height: 'auto' }} />
                            </a>
                            <a 
                                href="https://instagram.com" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className='footer-icons dark:bg-dark-card dark:border-mithila-yellow'
                                aria-label="Follow us on Instagram"
                            >
                                <Image src={'/assets/footer/instagram.svg'} alt="instagram" width={20} height={20} style={{ width: 'auto', height: 'auto' }} />
                            </a> 
                        </div>
                    </div>

                    {/* CLOUMN-2/3 */}

                    {products.map((product) => (
                        <div key={product.id} className="group relative col-span-2 md:col-span-4 lg:col-span-2">
                            <ul>
                                {product.link.map((linkItem, index: number) => (
                                    <li key={index} className='mb-5'>
                                        <Link 
                                            href={linkItem.href} 
                                            className="text-mithila-cream text-sm font-medium mb-6 space-links hover:text-mithila-yellow dark:text-dark-mithila-text dark:hover:text-mithila-yellow"
                                        >
                                            {linkItem.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    {/* CLOUMN-4 */}
                    <div className='col-span-4 md:col-span-4 lg:col-span-4'>
                        <div className="flex gap-2">
                            <Image src={'/assets/footer/mask.svg'} alt="mask-icon" width={24} height={24} />
                            <h5 className="text-base font-normal text-mithila-cream dark:text-dark-mithila-text">Patna, Bihar</h5>
                        </div>
                        <div className="flex gap-2 mt-10">
                            <Image src={'/assets/footer/telephone.svg'} alt="telephone-icon" width={24} height={24} />
                            <h5 className="text-base font-normal text-mithila-cream dark:text-dark-mithila-text">+917050047159</h5>
                        </div>
                        <div className="flex gap-2 mt-10">
                            <Image src={'/assets/footer/email.svg'} alt="email-icon" width={24} height={24} />
                            <h5 className="text-base font-normal text-mithila-cream dark:text-dark-mithila-text">hkbharti77@gmail.com</h5>
                        </div>
                    </div>

                </div>

                {/* All Rights Reserved */}
                <div className='py-10 lg:flex items-center justify-between border-t border-t-mithila-brown dark:border-dark-border'>
                    <h4 className='text-mithila-cream text-sm text-center lg:text-start font-normal dark:text-dark-mithila-text'>© 2024 StackSphere. All Rights Reserved. | Developed by Himanshu Bharti</h4>
                    <div className="flex gap-5 mt-5 lg:mt-0 justify-center lg:justify-start">
                        <h4 className='text-mithila-cream text-sm font-normal dark:text-dark-mithila-text'><Link href="/privacy-policy" className="hover:text-mithila-yellow dark:hover:text-mithila-yellow">Privacy policy</Link></h4>
                        <div className="h-5 bg-mithila-brown w-0.5 dark:bg-dark-border"></div>
                        <h4 className='text-mithila-cream text-sm font-normal dark:text-dark-mithila-text'><Link href="/terms-conditions" className="hover:text-mithila-yellow dark:hover:text-mithila-yellow">Terms & conditions</Link></h4>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default footer;