"use client";
import ContactSection from "@/components/Page_Landing/ContactSection/ContactSection";
import CurrencyTicker from "@/components/Page_Landing/CurrencyTicker/CurrencyTicker";
import FAQ from "@/components/Page_Landing/FAQ/FAQ";
import FeatureShowcase from "@/components/Page_Landing/FeatureShowcase/FeatureShowcase";
import FinalCTA from "@/components/Page_Landing/FinalCTA/FinalCTA";
import Footer from "@/components/Page_Landing/Footer/Footer";
import GlobalPaymentMap from "@/components/Page_Landing/GlobalPaymentMap/GlobalPaymentMap";
import Hero from "@/components/Page_Landing/Hero/Hero";
import ModernExperience from "@/components/Page_Landing/ModernExperience/ModernExperience";
import Navbar from "@/components/Page_Landing/Navbar/Navbar";
import PayAnyone from "@/components/Page_Landing/PayAnyone/PayAnyone";
import ProblemSection from "@/components/Page_Landing/ProblemSection/ProblemSection";
import SecurityFeatures from "@/components/Page_Landing/SecurityFeatures/SecurityFeatures";
import SignupSteps from "@/components/Page_Landing/SignupSteps/SignupSteps";
import StatsBanner from "@/components/Page_Landing/StatsBanner/StatsBanner";
import Testimonials from "@/components/Page_Landing/Testimonials/Testimonials";
import UseCases from "@/components/Page_Landing/UseCases/UseCases";
import styles from "./page.module.css";

function LandingPage() {
  return (
    <div className={styles.container}>
      <Navbar />
      <main className={styles.main}>
        <Hero />
        <CurrencyTicker />
        <ProblemSection />
        <FeatureShowcase />
        <SignupSteps />
        <UseCases />
        <StatsBanner />
        <SecurityFeatures />
        <GlobalPaymentMap />
        <PayAnyone />
        <ModernExperience />
        <Testimonials />
        <FAQ />
        <ContactSection />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

export default LandingPage;
