"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="logo-container">
        <img src="camel.png" alt="camelAI Logo" className="logo-img" />
        <div className="logo-text">camelAI</div>
      </div>
      <nav className="nav-links">
        <Link href="#blog">Blog</Link>
        <Link href="#pricing">Pricing</Link>
        <Link href="#login">Log in</Link>
      </nav>
    </header>
  );
}
