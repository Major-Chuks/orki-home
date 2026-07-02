import Eyebrow from "@/components/Page_Landing/Eyebrow/Eyebrow";
import styles from "./WhatWeDo.module.css";
import icon1 from "@/assets/landing-page/we-icon1.svg";
import icon2 from "@/assets/landing-page/we-icon2.svg";
import icon3 from "@/assets/landing-page/we-icon3.svg";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import FadeIn from "@/components/Page_Landing/Animations/FadeIn";

const FEATURES = [
  {
    id: "01",
    icon: icon1,
    title: "Accept",
    body: "Get paid in USDC or USDT from anywhere in the world. Payment links, invoices, and checkout — ready in minutes.",
    isLive: true,
  },
  {
    id: "02",
    icon: icon2,
    title: "Manage",
    body: "USD, EUR, and AED virtual accounts. Self-custodial smart wallet on Base and Solana. Your money, your control.",
    isLive: true,
  },
  {
    id: "03",
    icon: icon3,
    title: "Spend",
    body: "Orki Visa card that spends directly from your wallet. Apple Pay and Google Pay. No pre-loading needed.",
    isLive: false,
  },
];

const WhatWeDo = () => {
  return (
    <div className={styles.section}>
      <div className={styles.inner}>
        <Eyebrow>What Orki does</Eyebrow>

        <div className={styles.headingText}>
          <div className={styles.heading}>
            Three things. <span>Done well.</span>
          </div>
          <button className={styles.link}>
            See the product <ArrowUpRight size={14} />{" "}
          </button>
        </div>

        <div className={styles.grid}>
          {FEATURES.map((feature, idx) => (
            <FadeIn
              delay={0.2 + idx * 0.15}
              motionType="bouncy"
              key={feature.id}
            >
              <div className={styles.card}>
                <div className={styles.overlay}></div>
                <div className={styles.top}>
                  <div className={styles.cardId}>{feature.id}</div>
                  <div className={styles.cardIcon}>
                    <Image src={feature.icon} alt="" />
                  </div>
                </div>
                <div className={styles.cardTitle}>{feature.title}</div>
                <div className={styles.cardBody}>{feature.body}</div>
                <div className={styles.offset}></div>
                <div className={styles.status}>
                  <span
                    className={`${styles.dot} ${feature.isLive && styles.liveDot}`}
                  ></span>
                  {feature.isLive ? (
                    <span className={styles.live}>Live now</span>
                  ) : (
                    <span>Coming soon</span>
                  )}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
