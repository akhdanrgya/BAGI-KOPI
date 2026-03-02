# ☕ Bagi Kopi Signature Experience

![Bagi Kopi Experience Preview](https://github.com/akhdanrgya/BAGI-KOPI/assets/preview) 
*(Note: Please replace the image above with an actual screenshot or GIF of the web application)*

A premium, interactive scrollytelling web application built to showcase the **Bagi Kopi** signature coffee experience. This project uses an immersive frame-by-frame HTML5 Canvas animation tightly coupled with the user's scroll position to visually deconstruct and rebuild the perfect cup of coffee.

## ✨ Features

- **🎬 Scrollytelling Canvas Animation:** A stunning 174-frame image sequence rendered cleanly on an HTML5 `<canvas>` element. The animation is seamlessly driven by the user's scroll (powered by Framer Motion).
- **💡 Dynamic Transparent Navbar:** A sleek navigation bar that stays hidden or transparent during the immersive animation phase, and dynamically blurs/turns solid as the user scrolls into the content sections.
- **📱 "App & Loyalty" Section:** A premium UI mockup section highlighting the Bagi Kopi digital app ecosystem, featuring clean gradients, modern blur effects, and high contrast against the brand's primary color (`#0077f9`).
- **📱 Fully Responsive:** Carefully crafted layouts that look brilliant on both desktop monitors and mobile devices.
- **⚡ Next.js App Router:** Built heavily utilizing the latest Next.js 14 paradigms for fast rendering and optimized web vitals.

## 🛠️ Tech Stack

- **Framework:** [Next.js (App Router)](https://nextjs.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Animation Library:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Deployment:** Vercel (Recommended)

## 🚀 Getting Started

Follow these steps to set up the project locally on your machine.

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/akhdanrgya/BAGI-KOPI.git
   cd BAGI-KOPI
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open the application:**
   Navigate to [http://localhost:3000](http://localhost:3000) in your web browser to see the animation in action.

## 📁 Project Structure

Key files to explore to understand the core mechanics of the application:
- `src/components/BagiKopiCanvas.tsx` - Contains the core logic for the scroll-linked HTML5 Canvas image sequence.
- `src/app/page.tsx` - The main landing page assembling the Canvas, animated text hooks, and the informative component sections (e.g., App & Loyalty section).
- `src/components/Navbar.tsx` - The dynamic transparent navigation bar.
- `public/sequence/` - Directory containing the generated frame sequence (e.g. `ezgif-frame-001.jpg` to `174.jpg`).

## ✍️ Author

**Akhdan Rgya**
- GitHub: [@akhdanrgya](https://github.com/akhdanrgya)

---

*Built with ❤️ for Bagi Kopi.*
