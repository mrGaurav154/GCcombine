import { Outlet } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';
import CorporateNavbar from '../components/CorporateNavbar/CorporateNavbar';
import CorporateFooter from '../components/CorporateFooter/CorporateFooter';

export default function CorporateLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-bg">
      <CorporateNavbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <CorporateFooter />

      <a
        href="https://wa.me/919356889109"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-40 relative w-14 h-14 rounded-full bg-success flex items-center justify-center shadow-2xl shadow-success/40 pulse-ring"
      >
        <MessageCircle className="text-white relative z-10" size={26} />
      </a>
    </div>
  );
}
