import { Routes, Route } from 'react-router-dom';
import ScrollToTop from './hooks/ScrollToTop';
import SplashScreen from './components/Splash/SplashScreen';

// Corporate / parent site — Home, Services, Industries, About Us, Contact
import CorporateLayout from './layouts/CorporateLayout';
import LandingHome from './pages/corporate/LandingHome';
import ServicesPage from './pages/corporate/ServicesPage';
import IndustriesPage from './pages/corporate/IndustriesPage';
import About from './pages/About';
import CareerPage from './pages/CareerPage';
import ContactPage from './pages/ContactPage';

// Industrial Training sub-site — Home, Courses, Placements, Student Project
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import AllCourses from './pages/AllCourses';
import CourseDetail from './pages/CourseDetail';
import PlacementsPage from './pages/PlacementsPage';
import StudentProjectsPage from './pages/StudentProjectsPage';

import NotFound from './pages/NotFound';

export default function App() {
  return (
    <>
      <SplashScreen />
      <ScrollToTop />
      <Routes>
        {/* Corporate / parent site */}
        <Route element={<CorporateLayout />}>
          <Route path="/" element={<LandingHome />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/industries" element={<IndustriesPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/about/career" element={<CareerPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Route>

        {/* Industrial Training sub-site */}
        <Route element={<MainLayout />}>
          <Route path="/industrial-training" element={<Home />} />
          <Route path="/industrial-training/courses" element={<AllCourses />} />
          <Route path="/industrial-training/courses/:slug" element={<CourseDetail />} />
          <Route path="/industrial-training/placements" element={<PlacementsPage />} />
          <Route path="/industrial-training/student-projects" element={<StudentProjectsPage />} />
          <Route path="/industrial-training/contact" element={<ContactPage />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
