"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "sent" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

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
      {/* Hero Banner */}
      <div className="relative h-[280px] md:h-[340px] overflow-hidden">
        <Image src="/images/banners/page-banner.jpg" alt="Contact Us" fill quality={90} className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(10,22,50,0.65)] to-[rgba(10,22,50,0.85)]" />
        <div className="container relative z-10 h-full flex flex-col items-center justify-center text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-extrabold text-white mb-3">Contact Us</motion.h1>
          <div className="flex items-center gap-2 text-sm text-white/70">
            <Link href="/" className="text-[var(--c-coral-light)] hover:text-white transition-colors">Home</Link>
            <span className="text-white/40">›</span>
            <span>Contact Us</span>
          </div>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12">
            {/* INFO */}
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <h2 className="section-heading">Get In <span>Touch</span></h2>
              <p className="mt-4 mb-8 leading-relaxed text-[var(--c-text-mid)]">
                We&apos;re here to help with your engineering challenges. Reach out to us through any of the channels below.
              </p>
              <div className="space-y-4">
                {[
                  { icon: "📍", label: "Office Address", value: "Rama Equator, Office No 612, Near Finolex Chowk, Morwadi, Pimpri, Pune, India – 411 018" },
                  { icon: "🏭", label: "Factory Address", value: "Gate No. 776, Nighoje-Kuruli Road, Pune, Maharashtra, India – 410501" },
                  { icon: "📞", label: "Phone", value: "+91-7972-84-0160", href: "tel:+917972840160" },
                  { icon: "✉️", label: "Email", value: "info@chemsept.in", href: "mailto:info@chemsept.in" },
                  { icon: "🌐", label: "Website", value: "www.chemsept.in  |  www.chemsept.com" },
                ].map(({ icon, label, value, href }) => (
                  <div key={label} className="flex items-start gap-4 p-5 rounded-xl bg-[var(--c-slate)] border border-[var(--c-border)]">
                    <div className="w-10 h-10 flex items-center justify-center rounded-lg shrink-0 bg-[rgba(30,58,110,0.1)]">{icon}</div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest mb-1 text-[var(--c-navy)]">{label}</p>
                      {href
                        ? <a href={href} className="text-sm font-medium text-[var(--c-text-mid)] hover:text-[var(--c-coral)] transition-colors">{value}</a>
                        : <p className="text-sm text-[var(--c-text-mid)]">{value}</p>
                      }
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* FORM */}
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
              className="rounded-2xl p-8 lg:p-10 bg-white border border-[var(--c-border)] shadow-[var(--shadow-md)]">
              <h3 className="font-bold text-xl mb-2 text-[var(--c-navy)]">Send Us a Message</h3>
              <p className="text-sm mb-7 text-[var(--c-text-muted)]">Fill in the form and our team will get back to you within 24 hours.</p>

              {status === "sent" && (
                <div className="mb-6 p-4 rounded-lg text-sm font-semibold bg-green-50 border border-green-200 text-green-700 animate-fadeIn">
                  ✅ Thank you! Your message has been sent. We&apos;ll be in touch shortly.
                </div>
              )}

              {status === "error" && (
                <div className="mb-6 p-4 rounded-lg text-sm font-semibold bg-red-50 border border-red-200 text-red-700 animate-fadeIn">
                  ❌ Oops! Something went wrong. Please try again or email us directly at info@chemsept.in.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="form-label">Your Name *</label>
                    <input className="form-input" type="text" name="name" placeholder="e.g. Rajesh Kumar"
                      value={form.name} onChange={handleChange} required />
                  </div>
                  <div>
                    <label className="form-label">Email Address *</label>
                    <input className="form-input" type="email" name="email" placeholder="you@company.com"
                      value={form.email} onChange={handleChange} required />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="form-label">Phone Number</label>
                    <input className="form-input" type="tel" name="phone" placeholder="+91 9876543210"
                      value={form.phone} onChange={handleChange} />
                  </div>
                  <div>
                    <label className="form-label">Subject *</label>
                    <select className="form-input cursor-pointer" name="subject" value={form.subject} onChange={handleChange} required>
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
                  </div>
                </div>
                <div>
                  <label className="form-label">Message *</label>
                  <textarea className="form-input resize-y min-h-[120px]" name="message" rows={5}
                    placeholder="Describe your project requirements, volumes, standards, timelines..."
                    value={form.message} onChange={handleChange} required />
                </div>
                <button 
                  type="submit" 
                  disabled={status === "loading"}
                  className={`btn btn-primary w-full py-3.5 flex items-center justify-center gap-2 transition-all ${status === "loading" ? "opacity-70 cursor-not-allowed" : ""}`}
                >
                  {status === "loading" ? (
                    <>
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : "Submit Inquiry"}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* MAP */}
      <div className="py-12 bg-[var(--c-slate)] border-t border-[var(--c-border)]">
        <div className="container text-center">
          <h3 className="font-bold text-lg mb-2 text-[var(--c-navy)]">Our Location</h3>
          <p className="text-sm mb-6 text-[var(--c-text-muted)]">Pimpri-Chinchwad, Pune, Maharashtra, India</p>
          <div className="rounded-2xl overflow-hidden mx-auto max-w-3xl h-[280px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30247.71998574974!2d73.78071867297518!3d18.620644028157415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2ea651726fb87%3A0xa7dfe52858ad018!2sChemSepT%20Engineering%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1612088588311!5m2!1sen!2sin"
              width="100%" height="280" allowFullScreen loading="lazy"
              className="border-0 w-full h-full"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </>
  );
}
