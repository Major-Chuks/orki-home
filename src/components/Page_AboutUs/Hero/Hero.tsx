import FadeIn from "@/components/Page_Landing/Animations/FadeIn";
import styles from "./Hero.module.css";
import Button from "@/components/Page_Landing/Button/Button";
import Eyebrow from "@/components/Page_Landing/Eyebrow/Eyebrow";

function Hero() {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.inner}>
        <Eyebrow>About Orki</Eyebrow>

        <FadeIn delay={0.3}>
          <h1 className={styles.heading}>
            Money that moves at
            <br />
            <span className={styles.headingAccent}>internet speed.</span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.6}>
          <p className={styles.subheading}>
            We're building the stablecoin neobank for a world where your money
            should move as freely as your ideas.
          </p>
        </FadeIn>

        <FadeIn delay={0.4}>
          <div className={styles.ctaRow}>
            <Button size="lg">Get Started</Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

export default Hero;
