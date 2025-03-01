"use client";

import { useState, useRef } from "react";
import { IoPlayCircleOutline } from "react-icons/io5";
import Link from "next/link";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import IconMarquee from "@/components/IconMarquee";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import BuildWithCamelAI from "@/components/BuildWithCamelAI";
import PowerfulDashboards from "@/components/PowerfulDashboards";
import AskAnyQuestion from "@/components/AskAnyQuestion";


export default function Home() {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleFaq = (index) => {
    setOpenFaqIndex(index === openFaqIndex ? null : index);
  };

  // Function to play the video on overlay click
  const handlePlayClick = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <div className="page-container">
      {/* HEADER / NAVBAR */}
      <Navbar />

      {/* HERO SECTION */}
      <HeroSection/>

      {/* SCROLLING ICON MARQUEE SECTION */}
     <IconMarquee/>
     <IconMarquee/>

      {/* ASK ANY QUESTION SECTION */}
      <AskAnyQuestion/>

      {/* POWERFUL DASHBOARDS SECTION */}
      <PowerfulDashboards/>

      {/* BUILD WITH CAMELAI SECTION */}
      
      <BuildWithCamelAI/>

     

      {/* FAQ ACCORDIONS */}
      <FAQ/>

      {/* FINAL CTA */}
     <FinalCTA/>

      {/* FOOTER */}
      <footer className="page-footer">
        <p>© {new Date().getFullYear()} camelAI. All rights reserved.</p>
      </footer>

      <Footer/>
    </div>
  );
}
