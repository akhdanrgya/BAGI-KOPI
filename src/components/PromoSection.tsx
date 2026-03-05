import Image from "next/image";

const dummyPromos = [
  {
    id: 1,
    title: "Work From Bagi Kopi",
    description: "Nikmati suasana nyaman buat kerja dengan paket spesial setiap hari kerja.",
    image: "/data/promo/wfh-bagikopi.jpg",
  },
  {
    id: 2,
    title: "Bundling Ramadan",
    description: "Buka puasa bersama lebih hemat dengan paket bundling khusus bulan puasa.",
    image: "/data/promo/bukber-bagikopi.jpg",
  },
  {
    id: 3,
    title: "Bagi-bagi Keliling by Bagi Kopi",
    description: "Kopi Gratis Bagi Siapa Saja!",
    image: "/data/promo/bagikeliling-bagikopi.jpg",
  }
];

export function PromoSection() {
  return (
    <section className="w-full py-16 px-4 md:px-8 bg-white" id="promo-section">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-10 text-center md:text-left">
          <h2 className="font-dm-sans text-3xl md:text-4xl font-bold text-primary mb-3">
            Promo & Deals
          </h2>
          <p className="text-gray-600 text-lg">
            Temukan berbagai promo menarik dari Bagi Kopi
          </p>
        </div>

        {/* Layout Cards */}
        <div className="flex overflow-x-auto md:grid md:grid-cols-3 gap-6 pb-6 snap-x snap-mandatory hide-scrollbar">
          {dummyPromos.map((promo) => (
            <div
              key={promo.id}
              className="flex-none w-[85vw] sm:w-[350px] md:w-auto bg-[#CEE8F5] rounded-2xl overflow-hidden snap-center flex flex-col hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative w-full aspect-[4/5] bg-[#CEE8F5]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={promo.image}
                  alt={promo.title}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow bg-white border-x border-b border-[#CEE8F5] rounded-b-2xl">
                <h3 className="font-dm-sans text-xl font-bold text-primary mb-2">
                  {promo.title}
                </h3>
                <p className="text-gray-700 text-sm">
                  {promo.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
    </section>
  );
}
