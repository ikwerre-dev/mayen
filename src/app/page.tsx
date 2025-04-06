import Header from './components/Header';
import Hero from './components/Hero';
import ServiceCards from './components/ServiceCards';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import ImpactSection from './components/ImpactSection';
import RecentEvents from './components/RecentEvents';
import BlogSection from './components/BlogSection';
import GallerySection from './components/GallerySection';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <ServiceCards />
      <AboutSection />
      <ProjectsSection />
      <ImpactSection />
      <RecentEvents />
      <BlogSection />
      <GallerySection />
      <Footer />
    </main>
  );
}
