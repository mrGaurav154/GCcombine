import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SectionHeading from '../shared/SectionHeading';
import { StaggerGroup } from '../shared/Reveal';
import CourseCard from './CourseCard';
import { courses } from '../../data/siteData';

export default function Courses({ limit = 6 }) {
  return (
    <section className="section-pad bg-white" id="courses">
      <div className="container-px">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <SectionHeading
              align="left"
              eyebrow="Our Courses"
              title="Cutting-edge programs for today's digital careers"
              sub="Every course is built around live projects, mentor feedback and placement support — not just recorded lectures."
            />
            <Link to="/industrial-training/courses" className="hidden md:inline-flex items-center gap-2 font-semibold text-primary shrink-0">
              View All Courses <ArrowRight size={16} />
            </Link>
          </div>

          <StaggerGroup className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6" stagger={0.1}>
            {courses.slice(0, limit).map((c) => (
              <CourseCard key={c.slug} course={c} />
            ))}
          </StaggerGroup>

          <div className="mt-10 text-center md:hidden">
            <Link to="/industrial-training/courses" className="inline-flex items-center gap-2 font-semibold text-primary">
              View All Courses <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
