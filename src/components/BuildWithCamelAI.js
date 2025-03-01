"use client";

export default function BuildWithCamelAI() {
  return (
    <section className="build-with-camelai">
      <div className="build-container">
        {/* Left Side: Heading & CTA */}
        <div className="build-left">
          <h2>Want to build with camelAI?</h2>
          <p>
            Embed AI-powered analytics directly in your application with our API.
          </p>
          <button className="btn white-btn">Join API Waitlist &gt;</button>
        </div>

        {/* Right Side: Feature Highlights */}
        <div className="build-right">
          <div className="feature-box">
            <h3>Natural Language &rarr; SQL</h3>
            <p>Same powerful query engine that powers camelAI.</p>
          </div>
          <div className="feature-box">
            <h3>Secure Integration</h3>
            <p>Enterprise-grade security and permissions.</p>
          </div>
          <div className="feature-box">
            <h3>Flexible Integration</h3>
            <p>Full control over the user experience.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
