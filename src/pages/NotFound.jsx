import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6 pt-24">
      <h1 className="font-display font-extrabold text-7xl text-gradient">404</h1>
      <p className="mt-4 text-text-secondary text-lg">This page wandered off the roadmap.</p>
      <Link to="/" className="mt-8 px-6 py-3 rounded-xl text-white font-semibold bg-gradient-primary">Back to Home</Link>
    </div>
  );
}
