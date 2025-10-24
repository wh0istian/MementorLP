import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Download from './components/Download';
import ProblemSolution from './components/ProblemSolution';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <Download variant="primary" />
      <ProblemSolution />
      <Features />
      <Testimonials />
      <Pricing />
      <Download variant="secondary" />
      <Footer />
    </div>
  );
}

export default App;
