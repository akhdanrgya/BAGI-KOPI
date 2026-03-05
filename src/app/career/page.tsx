"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Briefcase,
  MapPin,
  ChevronRight,
  Send,
  ChevronDown,
  X,
} from "lucide-react";

interface Job {
  id: string;
  title: string;
  type: string;
  location: string;
  description: string;
  requirements: string[];
}

const CAREER_OPPORTUNITIES: Job[] = [
  {
    id: "barista",
    title: "Barista",
    type: "Full-time / Part-time",
    location: "All Outlets",
    description:
      "Join our vibrant team as a Barista. We are looking for passionate individuals who love coffee and enjoy providing excellent customer service. You will be responsible for crafting signature beverages and ensuring every customer leaves with a smile.",
    requirements: [
      "Minimum 1 year experience as a barista or in F&B.",
      "Strong knowledge of coffee extraction and latte art.",
      "Excellent communication and customer service skills.",
      "Ability to work in a fast-paced environment.",
      "Willingness to work shifts, including weekends and holidays.",
    ],
  },
  {
    id: "store-manager",
    title: "Store Manager",
    type: "Full-time",
    location: "Bandung Area",
    description:
      "We are seeking a proactive and leadership-driven Store Manager. You will oversee daily operations, manage staff, ensure high-quality product standards, and drive sales targets to make our coffee shop successful.",
    requirements: [
      "Minimum 2 years of managing an F&B outlet or retail store.",
      "Strong leadership and team management skills.",
      "Ability to analyze financial reports and optimize operations.",
      "Exceptional problem-solving abilities.",
      "Target-oriented and highly organized.",
    ],
  },
  {
    id: "social-media",
    title: "Social Media Specialist",
    type: "Full-time",
    location: "Head Office (Bandung)",
    description:
      "Are you creative and always up-to-date with social media trends? We need a Social Media Specialist to handle our community engagement, create viral content, and grow the Bagi Kopi digital presence.",
    requirements: [
      "Proven experience in social media management for a brand.",
      "Proficient in video editing and basic graphic design (CapCut, Canva, etc.).",
      "Deep understanding of Instagram, TikTok, and Twitter algorithms.",
      "Creative thinking with excellent copywriting skills.",
      "Ability to shoot high-quality visual content.",
    ],
  },
];

export default function CareerPage() {
  const [expandedJobId, setExpandedJobId] = useState<string | null>(null);
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    whyBagiKopi: "",
  });
  const [cvFile, setCvFile] = useState<File | null>(null);

  const toggleJob = (id: string) => {
    setExpandedJobId((prev) => (prev === id ? null : id));
  };

  const handleApplyClick = (e: React.MouseEvent, job: Job) => {
    e.stopPropagation(); // Prevent card from expanding
    setSelectedJob(job);
    setIsModalOpen(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (file.type !== "application/pdf") {
        alert("Please upload a PDF file.");
        return;
      }
      setCvFile(file);
    }
  };

  const submitApplication = (e: React.FormEvent) => {
    e.preventDefault();

    if (!selectedJob) return;

    const subject = encodeURIComponent(
      `Application for ${selectedJob.title} - ${formData.name}`,
    );
    const bodyText = `
Hi Bagi Kopi HR Team,

I am writing to apply for the ${selectedJob.title} position.

Applicant Details:
- Name: ${formData.name}
- Email: ${formData.email}
- Phone: ${formData.phone}

Why I want to work at Bagi Kopi:
${formData.whyBagiKopi}

** Please find my CV attached to this email. **

Looking forward to hearing from you.

Best regards,
${formData.name}
        `.trim();

    const body = encodeURIComponent(bodyText);

    // When mailto is used, we cannot automatically attach files due to browser security restrictions.
    // We instruct the user to attach it.
    window.location.href = `mailto:info@gokiltech.com?subject=${subject}&body=${body}`;

    setIsModalOpen(false);
    setFormData({ name: "", email: "", phone: "", whyBagiKopi: "" }); // Reset form
    setCvFile(null);
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative w-full bg-primary pt-36 pb-28 px-6 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-white/20 blur-[120px] rounded-full -translate-y-1/3" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-white/10 blur-[100px] rounded-full translate-y-1/2" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl"
          >
            <span className="inline-block mb-4 px-4 py-1.5 rounded-full bg-white/20 text-white text-xs font-open-sans font-semibold uppercase tracking-widest border border-white/20">
              Join Our Team
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold font-dm-sans text-white mb-6 leading-tight">
              Build Your Career <br className="hidden md:block" />
              With Us
            </h1>
            <p className="text-lg md:text-xl text-white/90 font-open-sans max-w-2xl leading-relaxed">
              We are always looking for passionate, creative and driven
              individuals to join our growing family. Bring your unique skills
              to the table and let's craft something amazing together.
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent pointer-events-none" />
      </section>

      {/* Job Listings Section */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 font-dm-sans mb-4">
                Open Positions
              </h2>
              <p className="text-slate-600 font-open-sans text-lg">
                Find a role that fits your passion and expertise.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {CAREER_OPPORTUNITIES.map((job, index) => {
              const isExpanded = expandedJobId === job.id;

              return (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onClick={() => toggleJob(job.id)}
                  className={`group bg-white rounded-2xl border ${
                    isExpanded
                      ? "border-primary shadow-lg shadow-primary/10"
                      : "border-slate-200 hover:shadow-lg hover:shadow-slate-200/50 hover:border-primary/30"
                  } p-6 md:p-8 transition-all duration-300 cursor-pointer overflow-hidden`}
                >
                  {/* Card Header (Always Visible) */}
                  <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start md:items-center justify-between">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-semibold tracking-wide uppercase font-open-sans">
                          <Briefcase className="w-3.5 h-3.5" />
                          {job.type}
                        </span>
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-semibold tracking-wide uppercase font-open-sans">
                          <MapPin className="w-3.5 h-3.5" />
                          {job.location}
                        </span>
                      </div>

                      <h3 className="text-2xl md:text-3xl font-bold text-slate-900 font-dm-sans group-hover:text-primary transition-colors pr-8">
                        {job.title}
                      </h3>
                    </div>

                    <div className="flex items-center justify-between w-full md:w-auto pt-4 md:pt-0 border-t md:border-t-0 border-slate-100">
                      <button
                        onClick={(e) => handleApplyClick(e, job)}
                        className="inline-flex md:mr-6 items-center justify-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-full font-bold font-open-sans text-sm uppercase tracking-wider hover:bg-primary transition-all duration-300 hover:scale-[1.02] active:scale-95 z-10"
                      >
                        Apply Now
                        <Send className="w-4 h-4" />
                      </button>

                      <motion.div
                        animate={{ rotate: isExpanded ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-50 text-slate-400 group-hover:bg-primary/10 group-hover:text-primary transition-colors"
                      >
                        <ChevronDown className="w-5 h-5" />
                      </motion.div>
                    </div>
                  </div>

                  {/* Expandable Content (Details) */}
                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="pt-8 mt-6 border-t border-slate-100">
                          <div className="mb-6">
                            <h4 className="font-semibold text-slate-900 font-open-sans text-sm tracking-wide uppercase mb-3 text-primary">
                              Job Description
                            </h4>
                            <p className="text-slate-600 font-open-sans leading-relaxed max-w-4xl text-sm md:text-base">
                              {job.description}
                            </p>
                          </div>

                          <div>
                            <h4 className="font-semibold text-slate-900 font-open-sans text-sm tracking-wide uppercase mb-3 text-primary">
                              Requirements
                            </h4>
                            <ul className="list-none text-slate-600 font-open-sans text-sm md:text-base space-y-2 max-w-4xl">
                              {job.requirements.map((req, idx) => (
                                <li
                                  key={idx}
                                  className="flex items-start gap-3"
                                >
                                  <div className="w-1.5 h-1.5 rounded-full bg-primary/50 mt-2 shrink-0" />
                                  <span>{req}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/10 blur-3xl rounded-full translate-y-1/2" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-dm-sans">
            Don't see a role that fits?
          </h2>
          <p className="text-white/70 font-open-sans text-lg mb-10 max-w-2xl mx-auto">
            We are continuously growing. Send us your open application and let
            us know how you can contribute to our journey.
          </p>
          <a
            href="mailto:hrd@bagikopi.id?subject=Open Application"
            className="inline-flex items-center gap-2 bg-white text-slate-900 px-8 py-4 rounded-full font-bold font-open-sans uppercase tracking-wider hover:bg-primary hover:text-white transition-all duration-300 hover:scale-105"
          >
            Drop Your CV
            <ChevronRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      {/* Application Form Modal */}
      <AnimatePresence>
        {isModalOpen && selectedJob && (
          <div className="fixed inset-0 z-[110] flex items-center justify-center px-4 pt-20 md:pt-0">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-lg bg-white rounded-3xl p-8 shadow-2xl overflow-y-auto max-h-[90vh]"
            >
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-6 right-6 p-2 text-slate-400 hover:text-slate-900 hover:bg-slate-100 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="mb-8 pr-8">
                <h3 className="text-2xl font-bold text-slate-900 font-dm-sans mb-1">
                  Apply for {selectedJob.title}
                </h3>
                <p className="text-slate-500 text-sm font-open-sans">
                  Fill out the details below to generate your email application.
                </p>
              </div>

              <form onSubmit={submitApplication} className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-slate-900 font-open-sans mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all font-open-sans"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-slate-900 font-open-sans mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all font-open-sans"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-semibold text-slate-900 font-open-sans mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all font-open-sans"
                    placeholder="+62 812 3456 7890"
                  />
                </div>

                <div>
                  <label
                    htmlFor="whyBagiKopi"
                    className="block text-sm font-semibold text-slate-900 font-open-sans mb-2"
                  >
                    Mengapa Anda tertarik bekerja di Bagi Kopi?
                  </label>
                  <textarea
                    id="whyBagiKopi"
                    name="whyBagiKopi"
                    required
                    rows={4}
                    value={formData.whyBagiKopi}
                    onChange={(e: any) => handleInputChange(e)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all font-open-sans resize-none"
                    placeholder="Ceritakan motivasi Anda..."
                  />
                </div>

                <div>
                  <label
                    htmlFor="cvFile"
                    className="block text-sm font-semibold text-slate-900 font-open-sans mb-2"
                  >
                    Upload CV (PDF Only)
                  </label>
                  <div className="relative">
                    <input
                      type="file"
                      id="cvFile"
                      name="cvFile"
                      accept="application/pdf"
                      required
                      onChange={handleFileChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all font-open-sans file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary/10 file:text-primary hover:file:bg-primary/20 cursor-pointer"
                    />
                  </div>
                  <p className="mt-2 text-xs text-slate-500 font-open-sans text-amber-600">
                    Note: Browser your CV here. You may still need to manually
                    attach this file in your email app before sending.
                  </p>
                </div>

                <button
                  type="submit"
                  className="w-full mt-4 flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 rounded-xl font-bold font-open-sans uppercase tracking-wider hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/30"
                >
                  Proceed to Email
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </main>
  );
}
