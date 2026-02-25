'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function ContactPage() {
    const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
    const [sent, setSent] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
        setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSent(true);
        setForm({ name: '', email: '', phone: '', subject: '', message: '' });
        setTimeout(() => setSent(false), 5000);
    };

    const inputCls = 'form-input';

    return (
        <>
            <div className="page-hero">
                <div className="container page-hero-content">
                    <h1>Contact Us</h1>
                    <div className="breadcrumb">
                        <Link href="/">Home</Link>
                        <span className="breadcrumb-sep">›</span>
                        <span>Contact Us</span>
                    </div>
                </div>
            </div>

            <section className="section">
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12">

                        {/* INFO */}
                        <div>
                            <h2 className="section-heading">Get In <span>Touch</span></h2>
                            <p className="mt-4 mb-8 leading-relaxed" style={{ color: 'var(--c-text-mid)' }}>
                                We&apos;re here to help with your engineering challenges. Reach out to us through any of the channels below.
                            </p>

                            <div className="space-y-4">
                                {[
                                    { icon: '📍', label: 'Office Address', value: 'Rama Equator, Office No 612, Near Finolex Chowk, Morwadi, Pimpri Pune, India – 411 018' },
                                    { icon: '🏭', label: 'Factory Address', value: 'Gat no. 70, Jyotiba Nagar, Talawade, Pune – 411062' },
                                    { icon: '📞', label: 'Phone', value: '+91-7972-84-0160', href: 'tel:+917972840160' },
                                    { icon: '✉️', label: 'Email', value: 'info@chemsept.in', href: 'mailto:info@chemsept.in' },
                                    { icon: '🌐', label: 'Website', value: 'www.chemsept.in  |  www.chemsept.com' },
                                ].map(({ icon, label, value, href }) => (
                                    <div key={label} className="flex items-start gap-4 p-5 rounded-xl"
                                        style={{ background: 'var(--c-slate)', border: '1px solid var(--c-border)' }}>
                                        <div className="w-10 h-10 flex items-center justify-center rounded-lg shrink-0"
                                            style={{ background: 'rgba(30,58,110,0.1)' }}>{icon}</div>
                                        <div>
                                            <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: 'var(--c-navy)' }}>{label}</p>
                                            {href
                                                ? <a href={href} className="text-sm font-medium hover:text-[var(--c-coral)] transition-colors" style={{ color: 'var(--c-text-mid)' }}>{value}</a>
                                                : <p className="text-sm" style={{ color: 'var(--c-text-mid)' }}>{value}</p>
                                            }
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* FORM */}
                        <div className="rounded-2xl p-8 lg:p-10" style={{ background: '#fff', border: '1px solid var(--c-border)', boxShadow: 'var(--shadow-md)' }}>
                            <h3 className="font-bold text-xl mb-2" style={{ color: 'var(--c-navy)' }}>Send Us a Message</h3>
                            <p className="text-sm mb-7" style={{ color: 'var(--c-text-muted)' }}>Fill in the form and our team will get back to you within 24 hours.</p>

                            {sent && (
                                <div className="mb-6 p-4 rounded-lg text-sm font-semibold" style={{ background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.3)', color: '#16a34a' }}>
                                    ✅ Thank you! Your message has been sent. We&apos;ll be in touch shortly.
                                </div>
                            )}

                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                    <div>
                                        <label className="form-label">Your Name *</label>
                                        <input className={inputCls} type="text" name="name" placeholder="e.g. Rajesh Kumar"
                                            value={form.name} onChange={handleChange} required />
                                    </div>
                                    <div>
                                        <label className="form-label">Email Address *</label>
                                        <input className={inputCls} type="email" name="email" placeholder="you@company.com"
                                            value={form.email} onChange={handleChange} required />
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                    <div>
                                        <label className="form-label">Phone Number</label>
                                        <input className={inputCls} type="tel" name="phone" placeholder="+91 9876543210"
                                            value={form.phone} onChange={handleChange} />
                                    </div>
                                    <div>
                                        <label className="form-label">Subject *</label>
                                        <select className={inputCls} name="subject" value={form.subject} onChange={handleChange} required style={{ cursor: 'pointer' }}>
                                            <option value="" disabled>Select a topic…</option>
                                            <option>Basic Engineering Packages</option>
                                            <option>Process Detailed Engineering</option>
                                            <option>Procurement & Vendor Sourcing</option>
                                            <option>3D Plant Modeling</option>
                                            <option>Construction & Commissioning</option>
                                            <option>Site Work & Labour</option>
                                            <option>Product Inquiry</option>
                                            <option>General Inquiry</option>
                                        </select>
                                    </div>
                                </div>
                                <div>
                                    <label className="form-label">Message *</label>
                                    <textarea className={`${inputCls} resize-y`} name="message" rows={5}
                                        placeholder="Describe your project requirements, volumes, standards, timelines..."
                                        value={form.message} onChange={handleChange} required style={{ minHeight: 120 }} />
                                </div>
                                <button type="submit" className="btn btn-primary w-full" style={{ padding: '14px' }}>
                                    Submit Inquiry
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* MAP STRIP */}
            <div style={{ background: 'var(--c-slate)', borderTop: '1px solid var(--c-border)' }} className="py-12">
                <div className="container text-center">
                    <h3 className="font-bold text-lg mb-2" style={{ color: 'var(--c-navy)' }}>Our Location</h3>
                    <p className="text-sm mb-6" style={{ color: 'var(--c-text-muted)' }}>Pimpri-Chinchwad, Pune, Maharashtra, India</p>
                    <div className="rounded-2xl overflow-hidden mx-auto max-w-3xl" style={{ height: 280, background: 'var(--c-navy-dark)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <div className="text-center text-white/60">
                            <div className="text-5xl mb-3">📍</div>
                            <p className="font-semibold text-white">Pimpri Pune, India – 411 018</p>
                            <a href="https://maps.google.com/?q=Pimpri+Pune" target="_blank" rel="noreferrer"
                                className="mt-3 inline-block text-sm underline text-[var(--c-coral-light)]">Open in Google Maps →</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
