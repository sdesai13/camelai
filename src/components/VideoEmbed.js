import Link from "next/link";

export default function VideoEmbed() {
  return (
    <section className="video-embed-section">
      <div className="video-container">
        <Link href="https://camelai.com/demo" className="play-button">
          <img src="whiteplay.png" alt="Play Video" className="play-icon" />
        </Link>
        <video
          autoPlay
          loop
          muted
          playsInline
          disableRemotePlayback
          poster="/assets/images/camelai-gif-poster.jpg"
          className="demo-video"
        >
          <source src="land.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
  );
}
