"use client";

import { motion } from "framer-motion";
import { Instagram, ArrowRight } from "lucide-react";

const INSTAGRAM_POSTS = [
    { id: 1, image: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&q=80&w=600&h=600" },
    { id: 2, image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=600&h=600" },
    { id: 3, image: "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&q=80&w=600&h=600" },
    { id: 4, image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=600&h=600" },
    { id: 5, image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&q=80&w=600&h=600" },
    { id: 6, image: "https://images.unsplash.com/photo-1498804103079-a6351b080096?auto=format&fit=crop&q=80&w=600&h=600" },
    { id: 7, image: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&q=80&w=600&h=600" },
    { id: 8, image: "https://images.unsplash.com/photo-1481833761820-0509d3217039?auto=format&fit=crop&q=80&w=600&h=600" },
    { id: 9, image: "https://images.unsplash.com/photo-1559525839-b184a4d698c7?auto=format&fit=crop&q=80&w=600&h=600" },
    { id: 10, image: "https://images.unsplash.com/photo-1521017432531-fbd920768814?auto=format&fit=crop&q=80&w=600&h=600" },
    { id: 11, image: "https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?auto=format&fit=crop&q=80&w=600&h=600" },
    { id: 12, image: "https://images.unsplash.com/photo-1497515113811-8280f2c411fd?auto=format&fit=crop&q=80&w=600&h=600" }
];

export function InstagramFeed() {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">

                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="max-w-2xl"
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                <Instagram className="w-5 h-5" />
                            </div>
                            <span className="text-primary font-bold font-open-sans uppercase tracking-widest text-sm">Follow Our Journey</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 font-dm-sans leading-tight">
                            Latest from Our Instagram
                        </h2>
                        <p className="mt-4 text-slate-600 font-open-sans text-lg">
                            Stay updated with our newest promotions, freshly brewed menus, and daily moments straight from @bagikopiid.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <a
                            href="https://www.instagram.com/bagikopiid/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-full font-bold font-open-sans uppercase tracking-wider hover:bg-primary transition-all duration-300 hover:scale-[1.02] active:scale-95 group"
                        >
                            Follow @bagikopiid
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </a>
                    </motion.div>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 md:gap-2">
                    {INSTAGRAM_POSTS.map((post, index) => (
                        <motion.a
                            href="https://www.instagram.com/bagikopiid/"
                            target="_blank"
                            rel="noopener noreferrer"
                            key={post.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                            className="group relative aspect-square rounded-2xl overflow-hidden bg-slate-100 shadow-sm hover:shadow-xl hover:shadow-primary/20 transition-all duration-500 block"
                        >
                            {/* Image */}
                            <img
                                src={post.image}
                                alt={`Instagram post ${post.id}`}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                                loading="lazy"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <motion.div
                                    initial={{ y: 20, opacity: 0 }}
                                    whileHover={{ y: 0, opacity: 1 }}
                                    transition={{ duration: 0.3 }}
                                    className="text-white transform translate-y-4 group-hover:translate-y-0 transition-all duration-300"
                                >
                                    <Instagram className="w-10 h-10" />
                                </motion.div>
                            </div>
                        </motion.a>
                    ))}
                </div>

                {/* Bottom decorative blob */}
                <div className="absolute top-1/2 -right-64 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute -bottom-64 -left-64 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
            </div>
        </section>
    );
}
