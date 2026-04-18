"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "sent" | "error">(
    "idle",
  );

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("sent");
        setForm({ name: "", email: "", phone: "", subject: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <>
      <div className="relative h-[300px] md:h-[400px] overflow-hidden">
        <Image
          src="/images/banners/page-banner.jpg"
          alt="Contact Us"
          fill
          priority
          quality={100}
          className="object-cover scale-105"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(10,22,50,0.85)] via-[rgba(10,22,50,0.4)] to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(10,22,50,0.9)] via-transparent to-transparent" />
        
        <div className="container relative z-10 h-full flex flex-col items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 uppercase tracking-tight">
              Contact <span className="text-[var(--c-coral)]">Us</span>
            </h1>
            
            {/* <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm md:text-base text-white/90">
              <Link href="/" className="hover:text-[var(--c-coral)] transition-colors">Home</Link>
              <span className="text-white/30 px-1">/</span>
              <span className="font-semibold">Contact Us</span>
            </div> */}
          </motion.div>
        </div>

        {/* Decorative element */}
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent z-10" />
      </div>

      <section className="section overflow-hidden -mt-12 relative z-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-8 xl:gap-16 items-start">
            
            {/* LEFT: INFO & BRANDING */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="space-y-8"
            >
              <div>
                <span className="inline-block px-4 py-1.5 rounded-full bg-[rgba(248,109,112,0.1)] text-[var(--c-coral)] text-xs font-bold uppercase tracking-widest mb-4">
                  Connect With Us
                </span>
               
                {/* <p className="mt-6 text-lg text-[var(--c-text-mid)] leading-relaxed max-w-md">
                  We're eager to hear about your engineering challenges. Our team typically responds within <span className="text-[var(--c-navy)] font-bold italic">24 business hours.</span>
                </p> */}
              </div>

              <div className="grid gap-4">
                {[
                  {
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                    ),
                    label: "Direct Call",
                    value: "+91-7972-84-0160",
                    href: "tel:+917972840160",
                    color: "bg-green-50 text-green-600"
                  },
                  {
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                    ),
                    label: "Email Support",
                    value: "info@chemsept.in",
                    href: "mailto:info@chemsept.in",
                    color: "bg-purple-50 text-purple-600"
                  },
                  {
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                    ),
                    label: "Head Office",
                    value: "Rama Equator, Office No 612, Near Finolex Chowk, Morwadi, Pimpri, Pune – 411 018",
                    color: "bg-blue-50 text-blue-600",
                    mapUrl: "https://www.google.com/maps/search/?api=1&query=Rama+Equator+Office+612+Morwadi+Pimpri+Pune+411018"
                  },
                  {
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 20V9a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2Z"/><path d="M17 18h1"/><path d="M12 18h1"/><path d="M7 18h1"/><path d="M17 14h1"/><path d="M12 14h1"/><path d="M7 14h1"/><path d="M17 10h1"/><path d="M12 10h1"/><path d="M7 10h1"/><path d="M12 2v5"/></svg>
                    ),
                    label: "Manufacturing Facility",
                    value: "Gate No. 776, Nighoje-Kuruli Road, Pune, Maharashtra – 410501",
                    color: "bg-orange-50 text-orange-600",
                    mapUrl: "https://www.google.com/maps/search/?api=1&query=Gate+No.+776+Nighoje-Kuruli+Road+Pune+Maharashtra+410501"
                  },
                ].map(({ icon, label, value, href, color, mapUrl }) => (
                  <div
                    key={label}
                    className="group flex items-center gap-5 p-4 rounded-2xl bg-white border border-[var(--c-border)] hover:border-[var(--c-coral-light)] hover:shadow-xl hover:shadow-[rgba(30,58,110,0.05)] transition-all duration-300"
                  >
                    <div className={`w-12 h-12 flex items-center justify-center rounded-xl shrink-0 ${color} group-hover:scale-110 transition-transform`}>
                      {icon}
                    </div>
                    <div className="flex-1">
                      <p className="text-[10px] font-bold uppercase tracking-[0.15em] mb-1 text-[var(--c-text-muted)]">
                        {label}
                      </p>
                      <div className="flex flex-col gap-2">
                        {href ? (
                          <a
                            href={href}
                            className="text-base font-bold text-[var(--c-navy)] hover:text-[var(--c-coral)] transition-colors"
                          >
                            {value}
                          </a>
                        ) : (
                          <p className="text-base font-bold text-[var(--c-navy)]">
                            {value}
                          </p>
                        )}
                        {mapUrl && (
                          <a 
                            href={mapUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs font-bold text-[var(--c-coral)] hover:translate-x-1 transition-transform uppercase tracking-wider mt-1"
                          >
                            View on Map
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* FORM */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative"
            >
              {/* Decorative Blur */}
              <div className="absolute -top-20 -right-20 w-80 h-80 bg-[var(--c-coral)] opacity-[0.03] blur-[100px] rounded-full" />
              <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-[var(--c-navy)] opacity-[0.03] blur-[100px] rounded-full" />

              <div className="relative rounded-[32px] p-8 lg:p-12 bg-white border border-[var(--c-border)] shadow-[0_30px_60px_-15px_rgba(30,58,110,0.12)]">
                <div className="mb-10">
                  <h3 className="font-extrabold text-2xl mb-2 text-[var(--c-navy)]">
                    Send Us a Message
                  </h3>
                  <div className="w-12 h-1 bg-[var(--c-coral)] rounded-full mb-4" />
                  <p className="text-[var(--c-text-mid)]">
                    Need technical details or a quote? Fill in the form and our engineers will get back to you.
                  </p>
                </div>

                {status === "sent" && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="mb-8 p-5 rounded-2xl bg-green-50 border border-green-100 flex items-center gap-4 text-green-800"
                  >
                    <div className="w-10 h-10 rounded-full bg-green-500 text-white flex items-center justify-center shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    </div>
                    <div>
                      <p className="font-bold">Message Sent!</p>
                      <p className="text-sm opacity-90 text-green-700">Check your email for confirmation.</p>
                    </div>
                  </motion.div>
                )}

                {status === "error" && (
                  <div className="mb-8 p-5 rounded-2xl bg-red-50 border border-red-100 flex items-center gap-4 text-red-800 animate-shake">
                    <div className="w-10 h-10 rounded-full bg-red-500 text-white flex items-center justify-center shrink-0 text-xl font-bold">!</div>
                    <div>
                      <p className="font-bold">System Error</p>
                      <p className="text-sm opacity-90 text-red-700">Please try again or email us directly at info@chemsept.in</p>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-[var(--c-text-muted)] ml-1"> Name</label>
                      <input
                        className="w-full px-5 py-4 rounded-xl bg-[var(--c-slate)] border border-transparent focus:border-[var(--c-coral-light)] focus:bg-white focus:shadow-[0_0_0_4px_rgba(248,109,112,0.1)] outline-none transition-all duration-300 font-medium text-[var(--c-navy)]"
                        type="text"
                        name="name"
                        placeholder="e.g. Name abc "
                        value={form.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                       <label className="text-[10px] font-bold uppercase tracking-widest text-[var(--c-text-muted)] ml-1">Email Address</label>
                      <input
                        className="w-full px-5 py-4 rounded-xl bg-[var(--c-slate)] border border-transparent focus:border-[var(--c-coral-light)] focus:bg-white focus:shadow-[0_0_0_4px_rgba(248,109,112,0.1)] outline-none transition-all duration-300 font-medium text-[var(--c-navy)]"
                        type="email"
                        name="email"
                        placeholder="abc@company.com"
                        value={form.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                       <label className="text-[10px] font-bold uppercase tracking-widest text-[var(--c-text-muted)] ml-1">Phone Number</label>
                      <input
                        className="w-full px-5 py-4 rounded-xl bg-[var(--c-slate)] border border-transparent focus:border-[var(--c-coral-light)] focus:bg-white focus:shadow-[0_0_0_4px_rgba(248,109,112,0.1)] outline-none transition-all duration-300 font-medium text-[var(--c-navy)]"
                        type="tel"
                        name="phone"
                        placeholder="+91 9876543210"
                        value={form.phone}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-[var(--c-text-muted)] ml-1">Inquiry Type</label>
                      <div className="relative">
                        <select
                          className="w-full px-5 py-4 rounded-xl bg-[var(--c-slate)] border border-transparent focus:border-[var(--c-coral-light)] focus:bg-white focus:shadow-[0_0_0_4px_rgba(248,109,112,0.1)] outline-none transition-all duration-300 font-medium text-[var(--c-navy)] appearance-none cursor-pointer"
                          name="subject"
                          value={form.subject}
                          onChange={handleChange}
                          required
                        >
                          <option value="" disabled>Select a topic…</option>
                          <option>Basic Engineering Packages</option>
                          <option>Process Detailed Engineering</option>
                          <option>Procurement &amp; Vendor Sourcing</option>
                          <option>3D Plant Modeling</option>
                          <option>Construction &amp; Commissioning</option>
                          <option>Site Work &amp; Labour</option>
                          <option>Product Inquiry</option>
                          <option>General Inquiry</option>
                        </select>
                        <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-[var(--c-text-muted)]">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-[var(--c-text-muted)] ml-1">Message</label>
                    <textarea
                      className="w-full px-5 py-4 rounded-xl bg-[var(--c-slate)] border border-transparent focus:border-[var(--c-coral-light)] focus:bg-white focus:shadow-[0_0_0_4px_rgba(248,109,112,0.1)] outline-none transition-all duration-300 font-medium text-[var(--c-navy)] resize-none min-h-[140px]"
                      name="message"
                      rows={5}
                      placeholder="Describe your project requirements, standards, timelines..."
                      value={form.message}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="group relative w-full overflow-hidden rounded-xl bg-[var(--c-navy)] py-5 text-center transition-all duration-500 hover:shadow-2xl hover:shadow-[rgba(30,58,110,0.3)] disabled:opacity-70"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-[var(--c-coral)] to-[var(--c-coral-dark)] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                    <div className="relative flex items-center justify-center gap-3 font-bold text-white tracking-wider uppercase text-sm">
                      {status === "loading" ? (
                        <>
                          <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          <span>Processing...</span>
                        </>
                      ) : (
                        <>
                          <span>Submit Inquiry</span>
                          <svg className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                        </>
                      )}
                    </div>
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>



    </>
  );
}
