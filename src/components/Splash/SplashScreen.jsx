import { useEffect, useRef, useState } from 'react';
import { animate, stagger } from 'animejs';
import './splash.css';
import Globe3D from '../shared/Globe3D';

const SESSION_KEY = 'gc_splash_shown';
const WORDS = [
  { text: 'Globe', gradient: false },
  { text: 'Creater', gradient: true },
];

export default function SplashScreen({ onFinish }) {
  const alreadyShownRef = useRef(
    typeof window !== 'undefined' && sessionStorage.getItem(SESSION_KEY) === '1'
  );
  const [visible, setVisible] = useState(!alreadyShownRef.current);
  const rootRef = useRef(null);
  const videoRef = useRef(null);
  const stageRef = useRef(null);
  const taglineRef = useRef(null);
  const progressRef = useRef(null);
  const wordmarkRef = useRef(null);

  useEffect(() => {
    if (alreadyShownRef.current) {
      onFinish?.();
      return;
    }
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, [onFinish]);

  useEffect(() => {
    if (!visible) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const letters = wordmarkRef.current?.querySelectorAll('.letter') ?? [];

    videoRef.current?.play?.().catch(() => {});

    const finishAndClose = () => {
      sessionStorage.setItem(SESSION_KEY, '1');
      window.dispatchEvent(new Event('gc_splash_finished'));
      animate(rootRef.current, {
        opacity: [1, 0],
        scale: [1, 1.04],
        duration: prefersReduced ? 150 : 600,
        ease: 'inExpo',
        onComplete: () => {
          document.body.style.overflow = '';
          setVisible(false);
          onFinish?.();
        },
      });
    };

    if (prefersReduced) {
      animate(videoRef.current, { opacity: [0, 1], duration: 200 });
      animate(stageRef.current, { opacity: [0, 1], scale: [0.6, 1], duration: 200 });
      animate(letters, { opacity: [0, 1], duration: 200 });
      const t = setTimeout(finishAndClose, 600);
      return () => clearTimeout(t);
    }

    animate(videoRef.current, {
      opacity: [0, 1],
      scale: [1.06, 1.0],
      duration: 1800,
      ease: 'outCubic',
    });

    animate(stageRef.current, {
      opacity: [0, 1],
      scale: [0.4, 1],
      duration: 900,
      delay: 200,
      ease: 'outExpo',
    });

    animate(letters, {
      opacity: [0, 1],
      translateY: [24, 0],
      duration: 650,
      delay: stagger(45, { start: 700 }),
      ease: 'outCubic',
    });

    animate(taglineRef.current, {
      opacity: [0, 1],
      translateY: [12, 0],
      duration: 550,
      delay: 1250,
      ease: 'outCubic',
    });

    animate(progressRef.current, {
      width: ['0%', '100%'],
      duration: 1600,
      delay: 1350,
      ease: 'inOutQuad',
    });

    const closeTimer = setTimeout(finishAndClose, 3300);
    return () => clearTimeout(closeTimer);
  }, [visible]);

  if (!visible) return null;

  return (
    <div className="splash-root" ref={rootRef} role="status" aria-label="Loading Globe Creater">
      <video
        ref={videoRef}
        className="splash-video"
        src="/video/splash-coding.mp4"
        muted
        loop
        playsInline
        autoPlay
        preload="auto"
      />
      <div className="splash-video-overlay" />
      <div className="splash-stars" />

      <div className="splash-stage" ref={stageRef}>
        <Globe3D />
      </div>

      <div className="splash-wordmark" ref={wordmarkRef}>
        {WORDS.map((word) => (
          <span key={word.text} className={word.gradient ? 'gradient-word' : ''}>
            {word.text.split('').map((ch, i) => (
              <span className="letter" key={`${word.text}-${i}`}>{ch}</span>
            ))}
          </span>
        ))}
      </div>

      <p className="splash-tagline" ref={taglineRef}>Career-Focused Tech Education</p>

      <div className="splash-progress-track">
        <div className="splash-progress-bar" ref={progressRef} />
      </div>
    </div>
  );
}
