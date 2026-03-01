export const Footer = () => {
    return (
        <footer className="w-full bg-background py-16 px-6 border-t border-foreground/5 transition-colors duration-500 relative z-10">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
                <div>
                    <h2 className="text-2xl font-bold tracking-tighter text-foreground/80 mb-2">BAGI KOPI.</h2>
                    <p className="text-foreground/40 text-sm">Crafting the perfect extraction since day one.</p>
                </div>
                <div className="flex gap-8 text-sm text-foreground/40 uppercase tracking-widest">
                    <a href="#" className="hover:text-foreground/80 transition-colors">Instagram</a>
                    <a href="#" className="hover:text-foreground/80 transition-colors">Twitter</a>
                    <a href="#" className="hover:text-foreground/80 transition-colors">Locations</a>
                </div>
                <p className="text-foreground/30 text-sm">© {new Date().getFullYear()} Bagi Kopi Signature.</p>
            </div>
        </footer>
    );
};
