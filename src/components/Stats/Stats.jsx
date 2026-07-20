import Counter from '../shared/Counter';
import Reveal, { StaggerGroup, StaggerItem } from '../shared/Reveal';
import { stats } from '../../data/siteData';

export default function Stats() {
  return (
    <section className="relative -mt-1 py-6">
      <div className="container-px">
        <div className="relative mx-auto max-w-6xl">
          {/* decorative blurred color blobs — gives the frosted-glass bar something to blur */}
          <span className="absolute -top-14 -left-10 w-56 h-56 rounded-full bg-primary/35 blur-3xl pointer-events-none" />
          <span className="absolute -bottom-16 -right-10 w-64 h-64 rounded-full bg-secondary/35 blur-3xl pointer-events-none" />
          <span className="absolute top-1/2 right-1/4 w-40 h-40 rounded-full bg-accent/30 blur-3xl pointer-events-none" />

          <Reveal direction="zoom">
            <div className="relative overflow-hidden rounded-3xl frosted-gradient-bar shadow-2xl shadow-primary/25 px-6 sm:px-10 py-10 grid md:grid-cols-2 gap-10 items-center">
              {/* Left: tagline + stat counters */}
              <div>
                <h3 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-[2.15rem] text-white leading-snug tracking-tight">
                  Your Goals, Our Courses, <span className="text-white">Their Results.</span>
                </h3>
                <p className="mt-3 text-sm sm:text-base text-white/75 max-w-sm">
                  A career-focused curriculum built to turn ambition into an offer letter.
                </p>

                <StaggerGroup className="mt-8 grid grid-cols-2 gap-x-6 gap-y-6" stagger={0.12}>
                  {stats.map((s) => (
                    <StaggerItem key={s.label} className="text-white">
                      <div className="font-display font-extrabold text-2xl sm:text-3xl">
                        <Counter end={s.value} duration={2.4} suffix={s.suffix} />
                      </div>
                      <div className="mt-1 text-xs sm:text-sm text-white/75">{s.label}</div>
                    </StaggerItem>
                  ))}
                </StaggerGroup>
              </div>

              {/* Right: animated 3D growth illustration */}
              <div className="relative rounded-2xl overflow-hidden aspect-video md:aspect-[4/3] border border-white/25 shadow-xl">
                <video
                  className="w-full h-full object-cover"
                  src="/video/growth-graph.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
