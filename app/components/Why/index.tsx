"use client";

import Image from "next/image";
import { useState } from "react";

interface whydata {
    id: number;
    heading: string;
    subheading: string;
    points: string[];
}

const whydata: whydata[] = [
    {
        id: 1,
        heading: "Quality",
        subheading: "We deliver clean, scalable, and production-ready solutions using industry-standard practices.",
        points: [
            "Well-structured code",
            "Error-free deployments",
            "High-performance systems"
        ]
    },
    {
        id: 2,
        heading: "Communication",
        subheading: "We work with full transparency — from planning to delivery.",
        points: [
            "Regular updates",
            "Clear documentation",
            "Instant support"
        ]
    },
    {
        id: 3,
        heading: "Reliability",
        subheading: "Our systems are built to run smoothly even at scale.",
        points: [
            "Secure authentication",
            "Optimized databases & servers",
            "24/7 uptime with trusted hosting"
        ]
    },
    {
        id: 4,
        heading: "Innovation",
        subheading: "We use the latest technologies like AI, RAG systems, automation, and cloud deployment to build future-ready solutions.",
        points: [
            "Smart chatbots",
            "Data automation",
            "Modern UI/UX"
        ]
    },
    {
        id: 5,
        heading: "Result-Focused",
        subheading: "We care about business outcomes, not just code.",
        points: [
            "Faster processes",
            "Reduced manual work",
            "Better customer experience"
        ]
    }
]

const Why = () => {
    const [activeTab, setActiveTab] = useState(1);

    return (
        <div id="about" className="bg-mithila-cream dark:bg-bg-deep py-20">
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className="text-center mb-16">
                    <div className="inline-flex items-center justify-center px-4 py-1.5 text-sm font-medium text-mithila-red bg-mithila-red/10 rounded-full mb-4">
                        <span>WHY CHOOSE US</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-mithila-brown dark:text-mithila-cream mb-4">
                        Why We&apos;re <span className="text-mithila-red dark:text-mithila-yellow">Best</span>
                    </h2>
                    <p className="text-lg max-w-2xl mx-auto text-mithila-brown/80 dark:text-mithila-cream/80">
                        Don&apos;t waste time on manual, repetitive work. We build intelligent automation and powerful software that simplifies workflows, reduces errors, and saves time.
                    </p>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Tab Navigation */}
                    <div className="lg:col-span-1">
                        <div className="space-y-4">
                            {whydata.map((item) => (
                                <div 
                                    key={item.id}
                                    onClick={() => setActiveTab(item.id)}
                                    className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 ${
                                        activeTab === item.id 
                                            ? 'bg-white dark:bg-dark-card shadow-xl border-2 border-mithila-red transform scale-[1.02]' 
                                            : 'bg-white/90 dark:bg-dark-card/90 hover:bg-white dark:hover:bg-dark-card border border-mithila-yellow/30 hover:border-mithila-red/50 hover:shadow-lg'
                                    }`}
                                >
                                    <div className="flex items-center">
                                        <div className={`flex-shrink-0 h-14 w-14 rounded-xl flex items-center justify-center mr-5 ${
                                            activeTab === item.id 
                                                ? 'bg-mithila-red text-white shadow-lg' 
                                                : 'bg-mithila-cream dark:bg-bg-deep text-mithila-red dark:text-mithila-yellow border border-mithila-yellow/30'
                                        }`}>
                                            <span className="font-bold text-xl">{item.id}</span>
                                        </div>
                                        <div>
                                            <h3 className={`text-xl font-bold mb-1 ${
                                                activeTab === item.id 
                                                    ? 'text-mithila-red dark:text-mithila-yellow' 
                                                    : 'text-mithila-brown dark:text-mithila-cream'
                                            }`}>
                                                {item.heading}
                                            </h3>
                                            <p className={`text-sm line-clamp-2 ${
                                                activeTab === item.id 
                                                    ? 'text-mithila-brown/80 dark:text-mithila-cream/80' 
                                                    : 'text-mithila-brown/70 dark:text-mithila-cream/70'
                                            }`}>
                                                {item.subheading}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    
                    {/* Tab Content */}
                    <div className="lg:col-span-2">
                        <div className="bg-white dark:bg-dark-card rounded-2xl shadow-xl p-8 border border-mithila-yellow/30 h-full">
                            {whydata.map((item) => (
                                <div key={item.id} className={`${activeTab === item.id ? 'block' : 'hidden'}`}>
                                    <div className="flex items-start mb-6">
                                        <div className="flex-shrink-0 h-16 w-16 rounded-xl bg-mithila-red/10 flex items-center justify-center mr-5">
                                            <span className="text-mithila-red font-bold text-2xl">{item.id}</span>
                                        </div>
                                        <div>
                                            <h3 className="text-3xl font-bold text-mithila-brown dark:text-mithila-cream mb-2">
                                                {item.heading}
                                            </h3>
                                            <p className="text-mithila-brown/80 dark:text-mithila-cream/80 text-lg">
                                                {item.subheading}
                                            </p>
                                        </div>
                                    </div>
                                    
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                                        {item.points.map((point, pointIndex) => (
                                            <div key={pointIndex} className="flex items-start p-4 bg-mithila-cream/50 dark:bg-bg-deep/50 rounded-xl border border-mithila-yellow/20">
                                                <svg className="h-6 w-6 text-mithila-green flex-shrink-0 mt-0.5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                <span className="text-mithila-brown dark:text-mithila-cream">{point}</span>
                                            </div>
                                        ))}
                                    </div>
                                    
                                    <div className="mt-8 pt-8 border-t border-mithila-yellow/20">
                                        <div className="text-center">
                                            <div className="inline-block bg-mithila-cream dark:bg-bg-deep rounded-2xl p-3 border border-mithila-yellow/20">
                                                <Image 
                                                    src="/assets/why/iPad.png" 
                                                    alt="iPad-image" 
                                                    width={4000} 
                                                    height={900} 
                                                    className="rounded-xl w-full max-w-lg"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Why;