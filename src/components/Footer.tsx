import Link from "next/link";

export const Footer = () => {
    return (
        <footer className="w-full bg-zinc-900 py-16 px-6 border-t border-zinc-800 transition-colors duration-500 relative z-10 text-white font-manrope">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight text-white mb-2 font-dm-sans">Bagi Kopi</h2>
                    <p className="text-white/60 text-sm font-open-sans">A cup of comfort, assembled before your eyes.</p>
                </div>
                <div className="flex gap-8 text-sm text-white/60 uppercase tracking-widest font-open-sans font-semibold">
                    <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                    <Link href="#outlets" className="hover:text-primary transition-colors">Outlets</Link>
                    <Link href="#partnership" className="hover:text-primary transition-colors">Partnership</Link>
                </div>
                <p className="text-white/40 text-sm font-open-sans">© {new Date().getFullYear()} Bagi Kopi Indonesia.</p>
            </div>
        </footer>
    );
};
