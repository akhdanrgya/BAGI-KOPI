"use client";

import Image from "next/image";
import valuesData from "@/data/values.json";
import { ScrollReveal } from "./ui/ScrollReveal";

export function VisionValues() {
    return (
        <section id="values" className="w-full bg-[#CEE8F5] py-24 px-6 md:px-12">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
                    <ScrollReveal delay={0.1}>
                        <div className="flex justify-center w-full h-full items-center">
                            <Image
                                src="/images/bagi-snacks.png"
                                alt="Bagi Kopi Berbagi Lifestyle"
                                width={600}
                                height={600}
                                className="w-full max-w-xl h-auto rounded-3xl shadow-xl object-cover"
                            />
                        </div>
                    </ScrollReveal>
                    <ScrollReveal delay={0.2} direction="left">
                        <div className="flex flex-col justify-center text-left lg:pl-6">
                            <h2 className="text-4xl md:text-5xl font-extrabold font-dm-sans text-[#0076F8] mb-4">
                                {valuesData.vision.title}
                            </h2>
                            <h3 className="text-2xl font-bold font-dm-sans text-primary mb-6 tracking-tight">
                                {valuesData.values.subtitle}
                            </h3>
                            <p className="text-xl md:text-2xl font-open-sans font-light text-slate-800 leading-relaxed italic">
                                {valuesData.vision.statement}
                            </p>
                        </div>
                    </ScrollReveal>
                </div>

                <div className="space-y-12">
                    <ScrollReveal delay={0.1}>
                        <div className="text-center mb-12">
                            <h2 className="text-4xl font-extrabold font-dm-sans text-[#0076F8]">
                                {valuesData.values.title}
                            </h2>
                        </div>
                    </ScrollReveal>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {valuesData.values.items.map((item, index) => (
                            <ScrollReveal key={index} delay={0.1 + (index * 0.1)}>
                                <div className="bg-white p-8 rounded-2xl flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow h-full">
                                    <div className="w-16 h-16 rounded-full bg-[#EDB917] text-white flex items-center justify-center text-3xl font-black font-dm-sans mb-6">
                                        {item.letter}
                                    </div>
                                    <h3 className="text-xl font-bold font-dm-sans text-[#0076F8] mb-3 tracking-tight">
                                        {item.name}
                                    </h3>
                                    <p className="text-sm font-open-sans text-slate-800 leading-relaxed">
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
