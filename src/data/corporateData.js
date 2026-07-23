// Content for the corporate/parent site (Home, Services, Industries, About Us,
// Contact) — the layer that sits in front of the Industrial Training sub-site.
// Industry categories are modeled on enterprise IT-consulting sites (e.g.
// jadeglobal.com) and adapted to Globe Creater's own service lines.
import { Cpu, HeartPulse, GraduationCap, Factory, Landmark, Rocket, Code2, Users } from 'lucide-react';

export const industries = [
  {
    icon: Cpu,
    title: 'Information Technology',
    desc: 'Custom software development, cloud solutions, AI integration, web and mobile application development.',
  },
  {
    icon: HeartPulse,
    title: 'Healthcare & Life Sciences',
    desc: 'HIPAA-compliant healthcare applications, hospital management systems, telemedicine, and healthcare analytics.',
  },
  {
    icon: GraduationCap,
    title: 'Education & E-Learning',
    desc: 'Learning Management Systems (LMS), e-learning platforms, virtual classrooms, and educational portals.',
  },
  {
    icon: Factory,
    title: 'Manufacturing',
    desc: 'ERP solutions, production monitoring, IoT integration, inventory management, and process automation.',
  },
  {
    icon: Landmark,
    title: 'Banking & Finance',
    desc: 'Secure banking software, fintech solutions, digital payments, financial analytics, and compliance systems.',
  },
  {
    icon: Rocket,
    title: 'Startups & Enterprises',
    desc: 'Scalable digital products, MVP development, enterprise applications, cloud migration, and business automation.',
  },
];

export const careerHighlights = [
  { icon: GraduationCap, title: 'Trainer & Mentor Roles', desc: 'Teach live cohorts across Full Stack, Data Science, DevOps & more.' },
  { icon: Code2, title: 'Software Engineering', desc: 'Build real client software alongside our delivery team.' },
  { icon: Users, title: 'Placement & Operations', desc: 'Help run admissions, placements and student success.' },
];
