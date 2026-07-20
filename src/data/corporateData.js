// Content for the corporate/parent site (Home, Services, Industries, About Us,
// Contact) — the layer that sits in front of the Industrial Training sub-site.
// Industry categories are modeled on enterprise IT-consulting sites (e.g.
// jadeglobal.com) and adapted to Globe Creater's own service lines.
import { Cpu, HeartPulse, Factory, Landmark, Building2 } from 'lucide-react';

export const industries = [
  {
    icon: Cpu,
    title: 'High Tech',
    desc: 'Product engineering, cloud platforms and AI-enabled features for software & hardware companies.',
  },
  {
    icon: HeartPulse,
    title: 'Life Sciences and Healthcare',
    desc: 'Secure, compliant systems for healthcare providers, diagnostics and life-sciences platforms.',
  },
  {
    icon: Factory,
    title: 'Manufacturing',
    desc: 'ERP integrations, IoT dashboards and process automation for manufacturing operations.',
  },
  {
    icon: Landmark,
    title: 'Financial Services & Insurance',
    desc: 'Secure, scalable applications for banking, insurance and fintech workflows.',
  },
  {
    icon: Building2,
    title: 'Government Public Sector',
    desc: 'Citizen-facing portals and internal systems built for reliability and accessibility.',
  },
];

export const careerHighlights = [
  { title: 'Trainer & Mentor Roles', desc: 'Teach live cohorts across Full Stack, Data Science, DevOps & more.' },
  { title: 'Software Engineering', desc: 'Build real client software alongside our delivery team.' },
  { title: 'Placement & Operations', desc: 'Help run admissions, placements and student success.' },
];
