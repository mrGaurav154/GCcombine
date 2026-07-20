import Hero from '../components/Hero/Hero';
import Stats from '../components/Stats/Stats';
import WhyChooseUs from '../components/WhyChooseUs/WhyChooseUs';
import Courses from '../components/Courses/Courses';
import Roadmap from '../components/Roadmap/Roadmap';
import Certification from '../components/Certification/Certification';
import Companies from '../components/Companies/Companies';
import Placements from '../components/Placements/Placements';
import Batches from '../components/Batches/Batches';
import Projects from '../components/Projects/Projects';
import Faculty from '../components/Faculty/Faculty';
import Services from '../components/Services/Services';
import Testimonials from '../components/Testimonials/Testimonials';
import Resources from '../components/Resources/Resources';
import FAQ from '../components/FAQ/FAQ';
import CTA from '../components/CTA/CTA';
import Contact from '../components/Contact/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <WhyChooseUs />
      <Courses limit={6} />
      <Roadmap />
      <Certification />
      <Companies />
      <Placements />
      <Batches />
      <Projects />
      <Faculty />
      <Services />
      <Testimonials />
      <Resources />
      <FAQ />
      <CTA />
      <Contact />
    </>
  );
}
