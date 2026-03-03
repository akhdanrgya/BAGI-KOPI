# Project: Bagi Kopi Website Rebuild (MVP)

## Overview
Rebuild the Bagi Kopi Indonesia website into a modern, fast, and interactive web application. The primary brand color is Blue (`#0076F8`). The hero section already includes a custom parallax animation (spilled coffee and ice). The generated components must seamlessly integrate with this existing hero section.

## Tech Stack
* Framework: Next.js (App Router)
* Library: React
* Styling: Tailwind CSS
* Animations: Framer Motion
* Data: Local JSON (for MVP)

## Design System & Styling Guidelines (CRITICAL FOR UI AGENT)
Do not guess the design. The PDF menu reference cannot be seen visually, so you MUST strictly adhere to these UI translations:

* **Colors (CRITICAL)**:
    * **Primary**: `#0076F8` (Blue) - Use heavily for large background blocks, heavy section headers, and primary buttons.
    * **Base/Contrast**: `#FFFFFF` (White) - Use as the main clean background, card containers, and for text placed on top of Primary Blue backgrounds.
    * **Accent**: `#EDB917` (Yellow) - Use sparingly ONLY for small accents, highlight badges, icons, or decorative shapes. Do not use for large backgrounds.
    * **Soft Accent**: `#CEE8F5` (Light Blue) - Use very minimally for subtle borders or soft background section dividers.
    * **Text**: `text-slate-900` for light backgrounds, `text-white` strictly for dark/blue backgrounds.
* **Typography**:
    * **Headings/Titles (`font-dm-sans`)**: Use DM Sans for section headers ("Big Vision", "Our Journey") and Menu Item names. Use `font-bold` or `font-extrabold`.
    * **Subheadings/Buttons/Descriptions (`font-open-sans`)**: Use Open Sans for paragraphs, secondary text, and CTA buttons (`font-medium` or `font-semibold`).
    * **Global Body (`font-manrope`)**: Use Manrope as the default base font for the document body.
* **Menu Card Layout (Grid)**:
    * Layout: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6`.
    * Card Container: `flex flex-col p-5 rounded-2xl bg-white shadow-sm border border-slate-100 hover:shadow-md transition-shadow`. (Use `bg-zinc-800 border-zinc-700` for dark sections).
    * Item Title: `text-lg font-semibold tracking-tight`.
    * Description: `text-sm text-slate-500 mt-1 line-clamp-2`.
    * Pricing Array: Since items have multiple sizes (R, L, 1L), display them in a flex row at the bottom of the card: `flex gap-4 mt-4 pt-4 border-t border-slate-100`. Example: `<span className="font-medium text-orange-600">R: 18K</span>`.

## Agent Roles & Responsibilities

### 1. @ArchitectAgent
* **Role**: Define the global layout, routing, and Tailwind configuration.
* **Tasks**:
    * Initialize the Next.js project structure.
    * Set up `next/font/google` for DM Sans, Open Sans, and Manrope.
    * Configure `tailwind.config.js` with the custom colors (`primary: '#0076F8'`) and and map the custom fonts into the Tailwind theme (`fontFamily: { 'dm-sans': [...], 'open-sans': [...], 'manrope': [...] }`).
    * Create the base `layout.tsx` including a responsive Navbar (Home, Outlets, Partnership) and Footer.
    * Set up the integration point for the custom Hero Parallax component.

### 2. @DataAgent
* **Role**: Structure the raw content into consumable data formats.
* **Tasks**:
    * Create `data/menu.json`. Structure must map the PDF: `category` (e.g., Signature Coffee, Meals), `name` (e.g., "Bagi Akal Sehat"), `description`, and `prices` (object mapping R, L, 1L to numerical values like 18.18, 22.72).
    * Create `data/timeline.json` extracting the "Our Journey" milestones from the HTML reference.
    * Create `data/values.json` for the "Bagi Values" and "Big Vision".

### 3. @UIAgent
* **Role**: Build the visual components applying the Design System guidelines.
* **Tasks**:
    * **MenuSection**: Implement a filterable menu grid with category tabs. Apply the Menu Card Layout rules strictly. Ensure the sizes (R, L, 1L) are rendered neatly.
    * **JourneyTimeline**: Build a vertical timeline using Framer Motion (`whileInView={{ opacity: 1, y: 0 }}`) for scroll reveals.
    * **VisionValues**: Replace old WPBakery grids with modern, clean Tailwind cards.
    * **ContactPartnership**: A bold section using the primary `#0076F8` background with clear CTAs for "Info Partnership" and "Info Reservasi".