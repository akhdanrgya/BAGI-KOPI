"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

interface Testimonial {
    id: number;
    name: string;
    role: string;
    content: string;
    rating: number;
    image: string;
}

const TESTIMONIALS: Testimonial[] = [
    {
        id: 1,
        name: "Andi Saputra",
        role: "Coffee Enthusiast",
        content: "Bagi Kopi always delivers! The signature iced coffee is my absolute daily go-to. I love how consistent the taste is every single time.",
        rating: 5,
        image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=200&h=200"
    },
    {
        id: 2,
        name: "Siti Rahma",
        role: "Freelancer",
        content: "The ambiance at their outlets is perfect for deep work. Fast Wi-Fi, great coffee, and the staff are always incredibly welcoming.",
        rating: 5,
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200&h=200"
    },
    {
        id: 3,
        name: "Rizky Ramadhan",
        role: "Local Guide",
        content: "Honestly, one of the best local coffee brands in town. Their seasonal menu is always something to look forward to. Highly recommended!",
        rating: 5,
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200"
    }
];

export function Testimonials() {
    return (
        <section className="py-24 bg-slate-50 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[100px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[100px]" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-block mb-4 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-open-sans font-bold uppercase tracking-widest">
                            Our Community
                        </span>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 font-dm-sans leading-tight">
                            Loved by Thousands
                        </h2>
                        <p className="mt-4 text-slate-600 font-open-sans text-lg">
                            Don't just take our word for it. Here is what our amazing customers have to say about their experience at Bagi Kopi.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {TESTIMONIALS.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl hover:shadow-primary/10 transition-shadow duration-300 relative border border-slate-100"
                        >
                            <div className="absolute top-6 right-6 text-primary/20">
                                <Quote size={48} />
                            </div>

                            <div className="flex items-center gap-1 mb-6 text-amber-400">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} size={18} fill="currentColor" />
                                ))}
                            </div>

                            <p className="text-slate-700 font-open-sans text-lg mb-8 relative z-10 leading-relaxed">
                                "{testimonial.content}"
                            </p>

                            <div className="flex items-center gap-4 mt-auto">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="w-12 h-12 rounded-full object-cover ring-2 ring-primary/20"
                                    loading="lazy"
                                />
                                <div>
                                    <h4 className="font-bold text-slate-900 font-dm-sans">{testimonial.name}</h4>
                                    <p className="text-sm text-slate-500 font-open-sans">{testimonial.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
