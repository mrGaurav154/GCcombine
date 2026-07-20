import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { MapPin, Phone, Mail, MessageCircle, CheckCircle2 } from 'lucide-react';
import SectionHeading from '../shared/SectionHeading';
import Reveal from '../shared/Reveal';
import { brand } from '../../data/siteData';

export default function Contact() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = () => {
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section className="section-pad bg-white" id="contact">
      <div className="container-px">
        <div className="mx-auto max-w-6xl">
          <SectionHeading eyebrow="Contact" title="Let's talk about your career" sub="Reach out and our counsellors will help you pick the right course." />

          <div className="mt-14 grid lg:grid-cols-5 gap-8">
            <Reveal direction="left" className="lg:col-span-2 flex flex-col gap-4">
              {[
                { icon: MapPin, label: 'Address', value: brand.address },
                { icon: Phone, label: 'Call Us', value: `${brand.phone}, ${brand.phone2}` },
                { icon: Mail, label: 'Email Us', value: brand.email },
              ].map((item) => (
                <div key={item.label} className="flex gap-4 p-5 rounded-2xl border border-slate-100">
                  <div className="w-11 h-11 shrink-0 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                    <item.icon size={19} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-text-secondary">{item.label}</p>
                    <p className="text-sm text-text-primary mt-1">{item.value}</p>
                  </div>
                </div>
              ))}
              <a
                href="https://wa.me/919356889109"
                target="_blank" rel="noreferrer"
                className="flex items-center gap-3 p-5 rounded-2xl bg-success/10 text-success font-semibold text-sm"
              >
                <MessageCircle size={19} /> Chat with us on WhatsApp
              </a>
              <div className="rounded-2xl overflow-hidden border border-slate-100 h-56">
                <iframe
                  title="Globe Creater Location"
                  className="w-full h-full"
                  loading="lazy"
                  src="https://www.google.com/maps?q=Mayur+Colony+Karve+Road+Kothrud+Pune+411038&output=embed"
                />
              </div>
            </Reveal>

            <Reveal direction="right" className="lg:col-span-3">
              <form onSubmit={handleSubmit(onSubmit)} className="rounded-3xl border border-slate-100 p-6 sm:p-8 grid sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-text-primary">First Name</label>
                  <input {...register('firstName', { required: true })} className="rounded-xl border border-slate-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40" placeholder="Your first name" />
                  {errors.firstName && <span className="text-xs text-red-500">Required</span>}
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-text-primary">Last Name</label>
                  <input {...register('lastName', { required: true })} className="rounded-xl border border-slate-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40" placeholder="Your last name" />
                  {errors.lastName && <span className="text-xs text-red-500">Required</span>}
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-text-primary">Email</label>
                  <input type="email" {...register('email', { required: true })} className="rounded-xl border border-slate-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40" placeholder="you@example.com" />
                  {errors.email && <span className="text-xs text-red-500">Required</span>}
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-text-primary">Phone</label>
                  <input {...register('phone', { required: true })} className="rounded-xl border border-slate-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40" placeholder="+91 00000 00000" />
                  {errors.phone && <span className="text-xs text-red-500">Required</span>}
                </div>
                <div className="sm:col-span-2 flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-text-primary">Interested Course</label>
                  <select {...register('course')} className="rounded-xl border border-slate-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40">
                    <option>Java Full Stack Development</option>
                    <option>Data Science</option>
                    <option>Python Full Stack Development</option>
                    <option>DevOps Training</option>
                    <option>Digital Marketing</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="sm:col-span-2 flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-text-primary">Message</label>
                  <textarea {...register('message')} rows={4} className="rounded-xl border border-slate-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40" placeholder="Tell us about your goals" />
                </div>
                <button type="submit" className="btn-glow sm:col-span-2 py-3.5 rounded-xl text-white font-semibold bg-gradient-primary">
                  Submit
                </button>
                {submitted && (
                  <p className="sm:col-span-2 flex items-center gap-2 text-success text-sm font-medium">
                    <CheckCircle2 size={16} /> Thanks! Our team will reach out within 24 hours.
                  </p>
                )}
              </form>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
