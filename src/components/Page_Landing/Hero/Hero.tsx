import Image from "next/image";
import Button from "../Button/Button";
import styles from "./Hero.module.css";
import appPreview from "@/assets/landing-page/app-preview.png";
import FadeIn from "../Animations/FadeIn";
import ScrollScale from "../Animations/ScrollScale";
import worldVector from "@/assets/landing-page/world-vector.svg";

function Hero() {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.inner}>
        <span className={styles.eyebrow}>
          Now live — Accept stablecoin payments
        </span>

        <Image src={worldVector} alt="" className={styles.heroVector} />

        <FadeIn delay={0.3}>
          <h1 className={styles.heading}>
            The Stablecoin Neobank
            <br />
            for <span className={styles.headingAccent}>Global Payments</span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.6}>
          <p className={styles.subheading}>
            Accept payments, manage your wallet, and spend globally — all in
            stablecoins. One platform replacing your payment gateway, bank, and
            cards.
          </p>
        </FadeIn>

        <div className={styles.ctaRow}>
          <Button size="lg">Get Started</Button>
          <Button variant="secondary" size="lg">
            Book Demo
          </Button>
        </div>

        <FadeIn delay={0.9}>
          <div className={styles.dashboardPreview}>
            <Image src={appPreview} alt="" />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

export default Hero;
