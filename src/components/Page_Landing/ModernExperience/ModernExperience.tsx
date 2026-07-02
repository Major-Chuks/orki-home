import Image from "next/image";
import Button from "../Button/Button";
import styles from "./ModernExperience.module.css";
import mpImage from "@/assets/landing-page/modern-payment.png";
import icon1 from "@/assets/landing-page/mp-icon1.svg";
import icon2 from "@/assets/landing-page/mp-icon2.svg";
import icon3 from "@/assets/landing-page/mp-icon3.svg";
import icon4 from "@/assets/landing-page/mp-icon4.svg";
import icon5 from "@/assets/landing-page/mp-icon5.svg";
import icon6 from "@/assets/landing-page/mp-icon6.svg";
import TextReveal from "../Animations/TextReveal";
import FadeIn from "../Animations/FadeIn";
import useWidth from "@/hooks/useWidth";

const FEATURES = [
  {
    title: "Faster Cashflow",
    body: "Receive funds the same day and keep your business moving.",
    icon: icon1,
  },
  {
    title: "Multi-Currency Accounts",
    body: "Operate globally without juggling multiple banks.",
    icon: icon2,
  },
  {
    title: "Turn Fees Into Fuel",
    body: "Stop losing margin to hidden fees. Save on every transaction.",
    icon: icon3,
  },
  {
    title: "Built for MENA",
    body: "Pay locally. Get paid globally. One seamless platform.",
    icon: icon4,
  },
  {
    title: "Payment Flexibility",
    body: "Let clients pay their way. No sign-ups required.",
    icon: icon5,
  },
  {
    title: "You Own Your Funds",
    body: "Orki never has access to your funds, only you do.",
    icon: icon6,
  },
];

function ModernExperience() {
  const width = useWidth();
  const isMobile = width <= 768;

  return (
    <section className={styles.section}>
      <span className={styles.square1} />
      <span className={styles.square2} />

      <div className={styles.inner}>
        <div className={styles.top}>
          <div className={styles.topText}>
            <h2 className={styles.heading}>
              <TextReveal text="Modern Payment Experience" />
            </h2>
            <p className={styles.subheading}>
              Run &amp; grow your business with the most innovative financial
              platform
            </p>
            <Button size="lg" className={styles.cta}>
              Get Started
            </Button>
          </div>
          <FadeIn key={String(isMobile)} direction={isMobile ? "up" : "left"}>
            <div className={styles.art}>
              <Image src={mpImage} alt="" />
            </div>
          </FadeIn>
        </div>

        <div className={styles.divider} />

        <div className={styles.grid}>
          {FEATURES.map((feature, index) => (
            <FadeIn
              motionType="bouncy"
              key={feature.title}
              delay={0.1 + index * 0.1}
            >
              <div className={styles.feature}>
                <div className={styles.icon}>
                  <Image src={feature.icon} alt="" />{" "}
                </div>
                <h3 className={styles.featureTitle}>{feature.title}</h3>
                <p className={styles.featureBody}>{feature.body}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ModernExperience;
