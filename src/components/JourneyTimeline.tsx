"use client";

import { motion } from "framer-motion";
import timelineData from "@/data/timeline.json";

export function JourneyTimeline() {
    return (
        <section id="journey" className="w-full bg-white py-24 px-6 md:px-12 overflow-hidden">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-extrabold font-dm-sans text-slate-900 mb-4 tracking-tight">
                        Our Journey
                    </h2>
                    <p className="font-open-sans text-slate-500 max-w-2xl mx-auto">
                        The milestones that shaped Bagi Kopi into what it is today.
                    </p>
                </div>

                <div className="relative border-l-2 border-slate-100 ml-4 md:ml-0 md:border-l-0">
                    <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-slate-100 -translate-x-1/2"></div>
                    
                    {timelineData.map((item, index) => {
                        const isEven = index % 2 === 0;
                        return (
                            <motion.div 
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                                className={`relative flex flex-col md:flex-row items-start md:items-center mb-16 last:mb-0 ${isEven ? 'md:flex-row-reverse' : ''}`}
                            >
                                <div className="absolute left-[-21px] md:left-1/2 w-10 h-10 rounded-full bg-white border-4 border-primary shadow-sm md:-translate-x-1/2 mt-1 md:mt-0 flex items-center justify-center z-10">
                                    <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                                </div>

                                <div className={`ml-8 md:ml-0 md:w-1/2 ${isEven ? 'md:pl-16' : 'md:pr-16 text-left md:text-right'}`}>
                                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                                        <div className={`flex flex-wrap items-baseline gap-2 mb-2 ${isEven ? 'justify-start' : 'justify-start md:justify-end'}`}>
                                            <span className="text-2xl font-black font-dm-sans text-primary">{item.year}</span>
                                            {item.month && (
                                                <span className="text-sm font-open-sans font-semibold text-orange-500 uppercase tracking-wider">{item.month}</span>
                                            )}
                                        </div>
                                        <h3 className="text-xl font-bold font-dm-sans text-slate-900 mb-3 tracking-tight">{item.title}</h3>
                                        <ul className={`space-y-2 font-open-sans text-sm text-slate-600`}>
                                            {item.description.map((desc, i) => (
                                                <li key={i}>{desc}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
