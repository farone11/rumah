import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Highlights } from './components/Highlights';
import { Gallery } from './components/Gallery';
import { Facilities } from './components/Facilities';
import { Investment } from './components/Investment';
import { Location } from './components/Location';
import { Legality } from './components/Legality';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

function App() {
  return (
    <div className="min-h-screen bg-background text-white font-body overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Highlights />
        <Gallery />
        <Facilities />
        <Investment />
        <Location />
        <Legality />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
