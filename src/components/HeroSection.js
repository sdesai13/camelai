
import VideoEmbed from "./VideoEmbed";
import Badges from "./Badges";

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-inner">
        <h1 className="hero-title">The AI Data Analyst</h1>
        <p className="hero-subtitle">
          Ask questions, get instant charts and insights from your data.
        </p>
        <div className="cta-buttons">
          <button className="btn hero-btn">Try free &gt;</button>
          <button className="btn outlined-btn">Book demo &gt;</button>
        </div>
        <Badges />
        <VideoEmbed />
      </div>
    </section>
  );
}
