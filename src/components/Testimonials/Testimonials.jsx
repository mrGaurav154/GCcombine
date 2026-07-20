import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Quote, Star } from 'lucide-react';
import SectionHeading from '../shared/SectionHeading';
import { testimonials } from '../../data/siteData';
import 'swiper/css';
import 'swiper/css/pagination';

export default function Testimonials() {
  return (
    <section className="section-pad bg-bg" id="testimonials">
      <div className="container-px">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Testimonials"
            title="Trusted by thousands of students and tutors"
            sub="Real stories from learners who turned training into a career."
          />

          <div className="mt-14">
            <Swiper
              modules={[Autoplay, Pagination]}
              spaceBetween={24}
              slidesPerView={1}
              pagination={{ clickable: true }}
              autoplay={{ delay: 4500, disableOnInteraction: false }}
              breakpoints={{ 768: { slidesPerView: 2 }, 1100: { slidesPerView: 3 } }}
              className="!pb-14"
            >
              {testimonials.map((t) => (
                <SwiperSlide key={t.name}>
                  <div className="h-full rounded-3xl bg-white border border-slate-100 shadow-sm p-8 flex flex-col">
                    <Quote className="text-primary/20" size={36} />
                    <p className="mt-4 text-text-secondary leading-relaxed flex-1">{t.quote}</p>
                    <div className="flex gap-1 mt-5">
                      {Array.from({ length: t.rating }).map((_, i) => (
                        <Star key={i} size={14} className="fill-accent text-accent" />
                      ))}
                    </div>
                    <div className="flex items-center gap-3 mt-5">
                      <img src={t.image} alt={t.name} className="w-11 h-11 rounded-full object-cover" />
                      <div>
                        <p className="font-semibold text-sm text-text-primary">{t.name}</p>
                        <p className="text-xs text-text-secondary">{t.role}</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
