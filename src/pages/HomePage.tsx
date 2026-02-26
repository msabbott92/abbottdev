import { Hero } from '../components/sections/Hero';
import { About } from '../components/sections/About';
import { Services } from '../components/sections/Services';
import { Portfolio } from '../components/sections/Portfolio';
import { Process } from '../components/sections/Process';
import { Clients } from '../components/sections/Clients';
import { Contact } from '../components/sections/Contact';

export function HomePage() {
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
