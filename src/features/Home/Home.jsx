import HeroSection from "./HeroSection";
import Projects from "./Projects";

export default function Home() {
  return (
    <div className="home">
      <div className="section">
        <HeroSection />
        <Projects />
      </div>
    </div>
  );
}
