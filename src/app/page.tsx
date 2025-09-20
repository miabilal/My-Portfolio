import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Experience from '@/components/sections/Experience';
import Projects from '@/components/sections/Projects';
import Contact from '@/components/sections/Contact';
import Newsletter from '@/components/Newsletter';
import ScrollToTop from '@/components/ui/ScrollToTop';
import AnalyticsProvider from '@/components/AnalyticsProvider';

export default function Home() {
  return (
    <AnalyticsProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900">
        <Header />
        <main>
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Newsletter />
          <Contact />
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </AnalyticsProvider>
  );
}
