"use client";

import valuesData from "@/data/values.json";
import { ScrollReveal } from "./ui/ScrollReveal";

export function VisionValues() {
    return (
        <section id="values" className="w-full bg-zinc-900 py-24 px-6 md:px-12 text-white">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
                    <ScrollReveal delay={0.1}>
                        <div>
                            <h2 className="text-4xl md:text-5xl font-extrabold font-dm-sans text-white mb-6">
                                {valuesData.vision.title}
                            </h2>
                            <h3 className="text-2xl font-bold font-dm-sans text-primary mb-4 tracking-tight">
                                {valuesData.values.subtitle}
                            </h3>
                        </div>
                    </ScrollReveal>
                    <ScrollReveal delay={0.2} direction="left">
                        <div>
                            <p className="text-xl md:text-2xl font-open-sans font-light text-slate-300 leading-relaxed italic">
                                {valuesData.vision.statement}
                            </p>
                        </div>
                    </ScrollReveal>
                </div>

                <div className="space-y-12">
                    <ScrollReveal delay={0.1}>
                        <div className="text-center mb-12">
                            <h2 className="text-4xl font-extrabold font-dm-sans text-white">
                                {valuesData.values.title}
                            </h2>
                        </div>
                    </ScrollReveal>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {valuesData.values.items.map((item, index) => (
                            <ScrollReveal key={index} delay={0.1 + (index * 0.1)}>
                                <div className="bg-zinc-800 border border-zinc-700 p-8 rounded-2xl flex flex-col items-center text-center hover:bg-zinc-800/80 transition-colors shadow-sm h-full">
                                    <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center text-3xl font-black font-dm-sans mb-6">
                                        {item.letter}
                                    </div>
                                    <h3 className="text-xl font-bold font-dm-sans text-white mb-3 tracking-tight">
                                        {item.name}
                                    </h3>
                                    <p className="text-sm font-open-sans text-slate-400 leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
