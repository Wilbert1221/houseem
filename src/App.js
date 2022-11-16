import './styles/app.css';
import Hero from './sections/Hero';
import Footer from './sections/Footer';
import Company from './sections/Company';
import Security from './sections/Security';
import CTA from './sections/CTA';
function App() {
  return (
    <div className="app">
        <Hero/>
        <Company/>
        <Security/>
        <CTA/>
        <Footer/>
    </div>
  );
}

export default App;
