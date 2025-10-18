import Hero from './components/Hero';
import ProblemSolution from './components/ProblemSolution';
import DemoPreview from './components/DemoPreview';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import UseCases from './components/UseCases';
import Pricing from './components/Pricing';
import Benefits from './components/Benefits';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <ProblemSolution />
      <DemoPreview />
      <HowItWorks />
      <Features />
      <UseCases />
      <Pricing />
      <Benefits />
      <Footer />
    </div>
  );
}

export default App;
