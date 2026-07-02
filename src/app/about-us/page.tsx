"use client";

import Hero from "@/components/Page_AboutUs/Hero/Hero";
import styles from "./page.module.css";
import Navbar from "@/components/Page_Landing/Navbar/Navbar";
import FAQ from "@/components/Page_Landing/FAQ/FAQ";
import ContactSection from "@/components/Page_Landing/ContactSection/ContactSection";
import FinalCTA from "@/components/Page_Landing/FinalCTA/FinalCTA";
import Footer from "@/components/Page_Landing/Footer/Footer";
import CurrencyTicker from "@/components/Page_Landing/CurrencyTicker/CurrencyTicker";
import OurStory from "@/components/Page_AboutUs/OurStory/OurStory";
import OurMission from "@/components/Page_AboutUs/OurMission/OurMission";
import Reviews from "@/components/Page_AboutUs/Reviews/Reviews";
import Principles from "@/components/Page_AboutUs/Principles/Principles";
import WhatWeDo from "@/components/Page_AboutUs/WhatWeDo/WhatWeDo";

export default function AboutPage() {
  return (
    <div className={styles.container}>
      <Navbar />
      <main className={styles.main}>
        <Hero />
        <CurrencyTicker />
        <OurStory />
        <OurMission />
        <Reviews />
        <Principles />
        <WhatWeDo />
        <FAQ />
        <ContactSection />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
