"use client"
import Image from "next/image";
import React, { Component } from "react";
import Slider from "react-slick";

// IMAGES DATA FOR CAROUSEL
interface Data {
    imgSrc: string;
    altText: string;
}

const data: Data[] = [
    {
        imgSrc: "/assets/tech-logos/nextjs.svg",
        altText: "Next.js"
    },
    {
        imgSrc: "/assets/tech-logos/react.svg",
        altText: "React"
    },
    {
        imgSrc: "/assets/tech-logos/tailwindcss.svg",
        altText: "Tailwind CSS"
    },
    {
        imgSrc: "/assets/tech-logos/typescript.svg",
        altText: "TypeScript"
    },
    {
        imgSrc: "/assets/tech-logos/nodejs.svg",
        altText: "Node.js"
    },
    {
        imgSrc: "/assets/tech-logos/python.svg",
        altText: "Python"
    },
    {
        imgSrc: "/assets/tech-logos/fastapi.svg",
        altText: "FastAPI"
    },
    {
        imgSrc: "/assets/tech-logos/docker.svg",
        altText: "Docker"
    },
    {
        imgSrc: "/assets/tech-logos/java.svg",
        altText: "Java"
    },
    {
        imgSrc: "/assets/tech-logos/sql.svg",
        altText: "SQL"
    },
    {
        imgSrc: "/assets/tech-logos/mongodb.svg",
        altText: "MongoDB"
    },
    {
        imgSrc: "/assets/tech-logos/mysql.svg",
        altText: "MySQL"
    },
    {
        imgSrc: "/assets/tech-logos/postgresql.svg",
        altText: "PostgreSQL"
    }
]


// CAROUSEL SETTINGS
export default class MultipleItems extends Component {
    render() {
        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 6,
            slidesToScroll: 1,
            arrows: false,
            autoplay: true,
            speed: 2000,
            autoplaySpeed: 2000,
            cssEase: "linear",
            responsive: [
                {
                    breakpoint: 1280,
                    settings: {
                        slidesToShow: 5,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 640,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                }
            ]
        };

        return (
            <div className='text-center mithila-bg-secondary py-16'>
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="py-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-mithila-red mb-4 dark:text-mithila-yellow">Technologies I Work With</h2>
                        <p className="text-lg text-mithila-brown max-w-3xl mx-auto mb-12 dark:text-mithila-cream">
                            Here are the tools and technologies I use to build modern, scalable applications
                        </p>
                        <div className="overflow-hidden">
                            <Slider {...settings}>
                                {data.map((item, i) => (
                                    <div key={i} className="px-2">
                                        <div className="mithila-card p-6 flex flex-col items-center justify-center h-40 rounded-xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1 bg-white dark:bg-dark-card border border-mithila-yellow/20">
                                            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-mithila-cream dark:bg-bg-deep">
                                                <Image 
                                                    src={item.imgSrc} 
                                                    alt={item.altText} 
                                                    width={40} 
                                                    height={40} 
                                                    className="object-contain"
                                                />
                                            </div>
                                            <h3 className="text-sm font-medium text-mithila-brown dark:text-mithila-cream">
                                                {item.altText}
                                            </h3>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                    <div className="mithila-divider mx-auto max-w-4xl"></div>
                </div>
            </div>
        )
    }
}