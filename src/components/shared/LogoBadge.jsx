export default function LogoBadge({ className = '' }) {
    return (
      <span
        className={`inline-flex items-center gap-2.5 pl-2.5 pr-4 py-1.5 rounded-full shadow-lg shadow-[#0B1B4A]/30 ${className}`}
        style={{ background: 'linear-gradient(135deg, #0B1B4A 0%, #1B2F73 100%)' }}
      >
        <svg viewBox="0 0 40 40" className="w-7 h-7 shrink-0" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="20" cy="20" r="13" stroke="white" strokeWidth="2" />
          <ellipse
            cx="20" cy="20" rx="17" ry="6.2"
            stroke="white" strokeWidth="1.4"
            transform="rotate(-24 20 20)"
          />
          <circle cx="34.5" cy="14" r="1.6" fill="white" transform="rotate(-24 20 20)" />
        </svg>
        <span className="flex flex-col leading-[0.95] font-display font-extrabold text-white tracking-wide">
          <span className="text-[0.72rem]">GLOBE</span>
          <span className="text-[0.72rem]">CREATER</span>
        </span>
      </span>
    );
  }