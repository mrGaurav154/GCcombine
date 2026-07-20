import { Link } from 'react-router-dom';
import { Clock, Laptop, Award, ArrowRight } from 'lucide-react';
import { StaggerItem } from '../shared/Reveal';

export default function CourseCard({ course }) {
  return (
    <StaggerItem>
      <div className="card-hover group h-full flex flex-col rounded-3xl overflow-hidden border border-slate-100 bg-white shadow-sm">
        <div className="relative h-44 overflow-hidden">
          <img
            src={course.image}
            alt={course.title}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          <span className="absolute top-3 left-3 text-[11px] font-semibold px-3 py-1 rounded-full bg-white/90 text-primary">
            {course.certification}
          </span>
        </div>

        <div className="p-6 flex flex-col flex-1">
          <h3 className="font-display font-bold text-lg text-text-primary mb-2">{course.title}</h3>
          <p className="text-text-secondary text-sm leading-relaxed mb-4 flex-1">{course.short}</p>

          <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-text-secondary mb-5">
            <span className="inline-flex items-center gap-1"><Clock size={13} /> {course.duration}</span>
            <span className="inline-flex items-center gap-1"><Laptop size={13} /> {course.mode.split(' / ')[0]}</span>
            <span className="inline-flex items-center gap-1"><Award size={13} /> {course.fees}</span>
          </div>

          <Link
            to={`/industrial-training/courses/${course.slug}`}
            className="inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-xl font-semibold text-sm text-primary border border-primary/30 group-hover:bg-gradient-primary group-hover:text-white group-hover:border-transparent transition-all"
          >
            View Details <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </StaggerItem>
  );
}
