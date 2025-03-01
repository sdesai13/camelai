export default function Footer() {
  return (
    <footer className="footer">
      
      <div className="footer-left">
        {/* Logo & Subscription Form */}
        <div className="footer-logo-area">
          <img
            src="camelai_footer.png"
            alt="camelAI Logo"
            className="footer-logo"
          />
          <p className="subscribe-text">
            Subscribe to our newsletter for product updates
          </p>
          <div className="subscribe-form">
            <input type="email" placeholder="Enter your email" />
            <button className="btn white-btn">Subscribe</button>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="social-icons">
          <img src="/xlogo_neon.png" alt="X (Twitter)" />
          <img src="/discord.png" alt="Discord" />
          <img src="/linkedin.png" alt="LinkedIn" />
          <img src="/youtube.png" alt="YouTube" />
          <img src="/githubneon.png" alt="GitHub" />
        </div>
      </div>

      <div className="footer-right">
        {/* Company Links */}
        <div className="footer-column">
          <h4>Company</h4>
          <ul>
            <li>
              <a href="#about">About Us</a>
            </li>
            <li>
              <a href="#call">Schedule a call</a>
            </li>
            <li>
              <a href="#email">Email Us</a>
            </li>
          </ul>
        </div>

        {/* Useful Links */}
        <div className="footer-column">
          <h4>Links</h4>
          <ul>
            <li>
              <a href="#datasources">Data Sources</a>
            </li>
            <li>
              <a href="#demovideos">Demo Videos</a>
            </li>
            <li>
              <a href="#blog">Blog</a>
            </li>
            <li>
              <a href="#producthunt">Product Hunt</a>
            </li>
          </ul>
        </div>

        {/* Legal Links */}
        <div className="footer-column">
          <h4>Legal</h4>
          <ul>
            <li>
              <a href="#terms">Terms</a>
            </li>
            <li>
              <a href="#privacy">Privacy Policy</a>
            </li>
            <li>
              <a href="#security">Security</a>
            </li>
            <li>
              <a href="#acceptableuse">Acceptable Use</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
