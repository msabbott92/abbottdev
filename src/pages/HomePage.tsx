import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Hero } from '../components/sections/Hero';
import { About } from '../components/sections/About';
import { Services } from '../components/sections/Services';
import { Portfolio } from '../components/sections/Portfolio';
import { Process } from '../components/sections/Process';
import { Clients } from '../components/sections/Clients';
import { Contact } from '../components/sections/Contact';

export function HomePage() {
  const { hash } = useLocation();

  // Scroll to the section in the URL hash (e.g. arriving from a project page via /#work)
  useLayoutEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: 'instant' });
      return;
    }
    document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: 'instant' });
  }, [hash]);

  return (
    <>
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Process />
      <Clients />
      <Contact />
    </>
  );
}
