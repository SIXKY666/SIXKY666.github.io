import "./style/HeroSection.less"
import objectImage from "../assets/Squiggle 10.png";
function HeroSection() {
  return (
    <section className="hero-section-wrapper">
      <div className="image-container">
        <img src={objectImage} className="image" alt="3d"></img>
      </div>
      <div>
        <h1 className="name-text">NATDANAI</h1>
        <h1 className="name-text">KHEMTHONG</h1>
        <h2 className="position-name">FRONTEND DEVELOPER</h2>
      </div>
    </section>
  );
}

export default HeroSection