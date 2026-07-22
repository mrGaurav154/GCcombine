import { createContext, useContext, useState, useEffect } from 'react';

const SplashContext = createContext({ splashFinished: true });

export function SplashProvider({ children }) {
  const [splashFinished, setSplashFinished] = useState(
    () => typeof window !== 'undefined' && sessionStorage.getItem('gc_splash_shown') === '1'
  );

  useEffect(() => {
    if (splashFinished) return;

    const handleSplashFinish = () => {
      setSplashFinished(true);
    };

    window.addEventListener('gc_splash_finished', handleSplashFinish);
    return () => {
      window.removeEventListener('gc_splash_finished', handleSplashFinish);
    };
  }, [splashFinished]);

  return (
    <SplashContext.Provider value={{ splashFinished }}>
      {children}
    </SplashContext.Provider>
  );
}

export function useSplash() {
  return useContext(SplashContext);
}
