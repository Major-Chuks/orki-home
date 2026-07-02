import Image from "next/image";
import Button from "../Button/Button";
import ImagePlaceholder from "../ImagePlaceholder/ImagePlaceholder";
import styles from "./FinalCTA.module.css";
import buildImage from "@/assets/landing-page/build-next.svg";
import FadeIn from "../Animations/FadeIn";

const LEFT_NODES = ["USD Accounts", "Virtual Cards", "Wallets"];
const RIGHT_NODES = [
  { label: "USD", icon: "iconUsd" },
  { label: "EUR", icon: "iconEur" },
  { label: "AED", icon: "iconAed" },
  { label: "USDC", icon: "iconUsdc" },
  { label: "USDT", icon: "iconUsdt" },
  { label: "EURO", icon: "iconEuro" },
];

function FinalCTA() {
  return (
    <section className={styles.section}>
      <FadeIn initialOpacity={1}>
        <div className={styles.banner}>
          <span className={styles.square1} />
          <span className={styles.square2} />

          <div className={styles.copy}>
            <h2 className={styles.heading}>
              Build your financial stack on stablecoins
            </h2>
            <p className={styles.subheading}>
              Sign up, verify in minutes &amp; start collecting payments — fast.
            </p>
            <Button size="lg" className={styles.cta}>
              Get Started
            </Button>
          </div>

          <div className={styles.imageContainer}>
            <Image src={buildImage} alt="" />
          </div>

          <div className={styles.diagram}>
            <div className={styles.column}>
              {LEFT_NODES.map((node) => (
                <span key={node} className={styles.nodePill}>
                  {node}
                </span>
              ))}
            </div>

            <span className={styles.arrowRight} />

            <div className={styles.hub}>
              <ImagePlaceholder
                className={styles.hubMark}
                label="Orki logo mark"
              />
            </div>

            <span className={styles.arrowLeft} />

            <div className={styles.columnRight}>
              {RIGHT_NODES.map((node) => (
                <span key={node.label} className={styles.nodeBadge}>
                  <ImagePlaceholder
                    className={`${styles.nodeIcon} ${styles[node.icon]}`}
                    label={`${node.label} icon`}
                  />
                  {node.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}

export default FinalCTA;
