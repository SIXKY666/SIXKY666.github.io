import HeroSection from './Components/HeroSection'
import AboutMe from './Components/AboutMe';
import './App.less'

function App() {
  return (
    <>
      <section className="content-container">
        <HeroSection />
      </section>
      <section className="content-container">
        <AboutMe />
      </section>
    </>
  );
}

export default App
