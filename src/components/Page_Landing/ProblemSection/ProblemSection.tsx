"use client";

import { useDragScroll } from "@/hooks/useDragScroll";
import ImagePlaceholder from "../ImagePlaceholder/ImagePlaceholder";
import styles from "./ProblemSection.module.css";
import gp1 from "@/assets/landing-page/global-payment1.png";
import gp2 from "@/assets/landing-page/global-payment2.png";
import gp3 from "@/assets/landing-page/global-payment3.png";
import gp4 from "@/assets/landing-page/global-payment4.png";
import gp2Bg from "@/assets/landing-page/global-payment2-bg.png";
import gp4Bg from "@/assets/landing-page/global-payment4-bg.png";

import Image from "next/image";
import FadeIn from "../Animations/FadeIn";
import ScaleIn from "../Animations/ScaleIn";
import useWidth from "@/hooks/useWidth";

const PROBLEMS = [
  {
    title: "Getting paid globally is complicated",
    body: "Receiving international payments often means juggling crypto wallets, banks, exchanges, and payout providers.",
    art: gp1,
    bgImage: "",
  },
  {
    title: "Moving between fiat and stablecoins is inefficient",
    body: "Converting funds across banking rails and stablecoin networks is still slow, fragmented, and expensive.",
    art: gp2,
    bgImage: gp2Bg,
  },
  {
    title: "Spending global balances isn't seamless",
    body: "Businesses juggle multiple wallets, exchanges, and bank accounts to manage stablecoin funds.",
    art: gp3,
    bgImage: "",
  },
  {
    title: "Can't spend crypto directly",
    body: "To use your earnings, you have to exit crypto entirely — losing time, fees, and flexibility.",
    art: gp4,
    bgImage: gp4Bg,
  },
] as const;

function ProblemSection() {
  const { ref, events } = useDragScroll<HTMLDivElement>();
  const width = useWidth();

  const scrollable = (
    <div className={styles.grid} ref={ref} {...events}>
      {PROBLEMS.map((item, idx) => (
        <div key={item.title} className={styles.cardWrapper}>
          <article
            style={{
              backgroundImage: item.bgImage ? `url(${item.bgImage.src})` : "",
            }}
            className={styles.card}
          >
            <div className={styles.cardText}>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardBody}>{item.body}</p>
            </div>
            <div className={styles.cardArt}>
              <Image src={item.art} alt="" />
            </div>
          </article>
        </div>
      ))}
    </div>
  );

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <FadeIn delay={0.1}>
          <h2 className={styles.heading}>
            It’s not just a payment, <br />
            it’s an operation
          </h2>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className={styles.subheading}>
            From payroll to vendor payouts, managing global finances means
            juggling multiple platforms, high fees, and compliance hurdles. Orki
            gives you one unified dashboard to handle it all effortlessly.
          </p>
        </FadeIn>

        {width > 1024 ? (
          <FadeIn delay={0.1} motionType="bouncy">
            {scrollable}
          </FadeIn>
        ) : (
          scrollable
        )}
      </div>
    </section>
  );
}

export default ProblemSection;
