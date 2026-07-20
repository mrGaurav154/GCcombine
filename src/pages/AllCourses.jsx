import { useState, useMemo } from 'react';
import { Search } from 'lucide-react';
import SectionHeading from '../components/shared/SectionHeading';
import { StaggerGroup } from '../components/shared/Reveal';
import CourseCard from '../components/Courses/CourseCard';
import CTA from '../components/CTA/CTA';
import { courses } from '../data/siteData';

export default function AllCourses() {
  const [query, setQuery] = useState('');

  const filtered = useMemo(
    () => courses.filter((c) => c.title.toLowerCase().includes(query.toLowerCase())),
    [query]
  );

  return (
    <>
      <section className="section-pad !pb-10 pt-32">
        <div className="container-px">
          <div className="mx-auto max-w-6xl">
            <SectionHeading eyebrow="All Courses" title="Find the course that fits your career goal" sub="Job-oriented, mentor-led programs across development, data and marketing." />

            <div className="mt-10 max-w-md relative">
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search courses..."
                className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
              />
            </div>

            <StaggerGroup className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6" stagger={0.08}>
              {filtered.map((c) => <CourseCard key={c.slug} course={c} />)}
            </StaggerGroup>

            {filtered.length === 0 && (
              <p className="text-center text-text-secondary mt-16">No courses match "{query}". Try another search.</p>
            )}
          </div>
        </div>
      </section>
      <div className="section-pad !pt-6">
        <CTA />
      </div>
    </>
  );
}
