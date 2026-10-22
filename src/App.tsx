import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'motion/react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { ScrollProgress } from './components/layout/ScrollProgress';
import { HomePage } from './pages/HomePage';
import { ProjectDetail } from './pages/ProjectDetail';

function AppContent() {
  const location = useLocation();

  return (
    <>
      <ScrollProgress />
      <Navbar />

      <main>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<HomePage />} />
            <Route path="/work/:slug" element={<ProjectDetail />} />
          </Routes>
        </AnimatePresence>
      </main>

      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
