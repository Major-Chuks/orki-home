import Eyebrow from "@/components/Page_Landing/Eyebrow/Eyebrow";
import styles from "./Principles.module.css";
import icon1 from "@/assets/landing-page/p-icon1.svg";
import icon2 from "@/assets/landing-page/p-icon2.svg";
import icon3 from "@/assets/landing-page/p-icon3.svg";
import icon4 from "@/assets/landing-page/p-icon4.svg";
import FadeIn from "@/components/Page_Landing/Animations/FadeIn";
import Image from "next/image";
import TextReveal from "@/components/Page_Landing/Animations/TextReveal";

const PRINCIPLES = [
  {
    icon: icon1,
    title: "Self-custodial",
    body: "Orki never holds your money. Every transaction is signed by you — no bank, no middleman, no exceptions.",
  },
  {
    icon: icon2,
    title: "Borderless",
    body: "Built for people who earn in one country and live in another. Your money moves with you — across borders, across currencies, without asking permission.",
  },
  {
    icon: icon3,
    title: "Transparent",
    body: "You can independently verify every payment, every balance, every movement of funds — something no traditional bank has ever offered.",
  },
  {
    icon: icon4,
    title: "For everyone",
    body: "If you can use a payments app, you can use Orki. No technical knowledge, no complicated setup — just sign up, get verified, and start getting paid globally in minutes.",
  },
];

const Principles = () => {
  return (
    <div className={styles.section}>
      <div className={styles.inner}>
        <Eyebrow>What we stand for</Eyebrow>
        <div className={styles.heading}>
          <TextReveal staggerDuration={0.1} text="Principles, not features." />
        </div>

        <div className={styles.grid}>
          {PRINCIPLES.map((card, index) => (
            <FadeIn
              motionType="bouncy"
              key={card.title}
              delay={0.1 + index * 0.1}
            >
              <div className={styles.card}>
                <div className={styles.icon}>
                  <Image src={card.icon} alt="" />{" "}
                </div>
                <h3 className={styles.cardTitle}>{card.title}</h3>
                <p className={styles.cardBody}>{card.body}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Principles;
