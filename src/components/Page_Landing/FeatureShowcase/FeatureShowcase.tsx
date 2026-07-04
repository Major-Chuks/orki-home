import ImagePlaceholder from "../ImagePlaceholder/ImagePlaceholder";
import styles from "./FeatureShowcase.module.css";
import ams1 from "@/assets/landing-page/ams-1.png";
import ams2 from "@/assets/landing-page/ams-2.png";
import ams3 from "@/assets/landing-page/ams-3.png";
import amsIcon1 from "@/assets/landing-page/ams-icon1.svg";
import amsIcon2 from "@/assets/landing-page/ams-icon2.svg";
import amsIcon3 from "@/assets/landing-page/ams-icon3.svg";
import Image from "next/image";
import TextReveal from "../Animations/TextReveal";
import FadeIn from "../Animations/FadeIn";

const FEATURES = [
  {
    tag: "Accept",
    title: "Get paid globally without borders",
    body: "Accept global payment through stablecoins or local bank transfers using invoices, payment links and checkout flows all settled into your Orki Balance",
    icon: amsIcon1,
    image: ams1,
  },
  {
    tag: "Manage",
    title: "Manage stablecoin wallet and local currency seamlessly",
    body: "Receive funds through virtual accounts, convert between local currencies and stablecoins and manage wallet and payouts from one unified dashboard.",
    icon: amsIcon2,
    image: ams2,
  },
  {
    tag: "Spend",
    title: "Spend you balance anywhere VISA is accepted.",
    body: "Use your virtual and physical card powered directly by your Orki balance and spend at 70M+ merchants worldwide. Spend like a pro with Apple and Google pay support built in",
    icon: amsIcon3,
    image: ams3,
  },
] as const;

function FeatureShowcase() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.heading}>
          <TextReveal text="Accept. Manage. Spend." staggerDuration={0.1} />
        </h2>
        <FadeIn delay={0.2}>
          <p className={styles.subheading}>
            Get paid through stablecoins or local bank transfers, manage
            balance, and spend worldwide all from a stablecoin-powered account.
          </p>
        </FadeIn>

        <div className={styles.grid}>
          {FEATURES.map((feature) => (
            <div key={feature.title} className={styles.outerCard}>
              <div className={styles.overlay} />
              <article key={feature.tag} className={styles.card}>
                <div className={styles.art}>
                  <Image src={feature.image} alt="" />
                </div>
                <div className={styles.cardText}>
                  <div className={styles.tag}>
                    <div className={styles.tagIcon}>
                      <Image src={feature.icon} alt="" />
                    </div>
                    <TextReveal
                      splitBy="word"
                      delay={0.1}
                      text={feature.tag}
                      staggerDuration={0.1}
                    />
                  </div>
                  <FadeIn delay={0.2}>
                    <h3 className={styles.cardTitle}>{feature.title}</h3>
                  </FadeIn>
                  <FadeIn delay={0.2}>
                    <p className={styles.cardBody}>{feature.body}</p>
                  </FadeIn>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeatureShowcase;
