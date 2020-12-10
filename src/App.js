
import './App.css';
import Nav from './components/Nav';
import Hero from './components/Hero';
import NavSeperator from './components/NavSeperator';
import TechStacks from './components/TechStacks';
import TechStacksB from './components/TechStacksB';
import RecentProjects from './components/RecentProjects';
import AboutSection from './About/AboutSection';
import Footer from './components/Footer'


function App() {
  return (
    <div >
      <Nav/>
      <NavSeperator />
      <Hero />
      <TechStacks />
      <TechStacksB />
      <RecentProjects />
      <AboutSection />
      <Footer />
    </div>
  );
}

export default App;
