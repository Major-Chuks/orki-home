import styles from "./UseCases.module.css";
import mm1 from "@/assets/landing-page/move-money1.png";
import mm2 from "@/assets/landing-page/move-money2.png";
import mm3 from "@/assets/landing-page/move-money3.png";
import Image from "next/image";
import FadeIn from "../Animations/FadeIn";

const USE_CASES = [
  {
    heading: "Businesses & Merchants",
    body: "Run global operations without relying on fragmented banking infrastructure. Accept payments, manage balance, and move money across borders from one unified platform.",
    bullets: [
      "Receive money without juggling multiple apps.",
      "Make payouts with same day settlement & transparent fees",
      "Client pay in local currency or USDC you receive funds instantly",
    ],
    tone: "blue",
    image: mm1,
  },
  {
    heading: "Freelancers & Remote Workers",
    body: "Freelance without financial borders. Get paid globally in stablecoins or local currency, manage your earnings seamlessly, and withdraw locally whenever you need.",
    bullets: [
      "Get paid by clients worldwide",
      "Free multi-currency accounts with same-day access — no banking delays.",
      "Local bank withdrawals or instant USDC transfers — your choice.",
    ],
    tone: "green",
    image: mm2,
  },
  {
    heading: "Individuals & Digital Nomads",
    body: "Use stablecoins beyond trading. Send, receive, and spend globally with a modern financial experience designed around digital assets.",
    bullets: [
      "Spend anywhere Visa is accepted",
      "Apple Pay & Google Pay support",
      "Move between crypto and local currency easily",
    ],
    tone: "purple",
    image: mm3,
  },
] as const;

function UseCases() {
  return (
    <section className={styles.section}>
      <div className={styles.intro}>
        <FadeIn delay={0.1}>
          <h2 className={styles.heading}>
            Move money globally with
            <br />
            stablecoins.
          </h2>
        </FadeIn>
        <FadeIn delay={0.3}>
          <p className={styles.subheading}>
            Accept payments, manage wallets, pay vendors, and spend globally —
            all from one platform.
          </p>
        </FadeIn>
      </div>

      <div className={styles.list}>
        {USE_CASES.map((useCase, idx) => (
          <article 
            key={useCase.heading} 
            className={styles.card}
            style={{ 
              top: `calc(120px + ${idx * 32}px)`,
              zIndex: idx + 1 
            }}
          >
            <div className={styles.art}>
              <Image src={useCase.image} alt="" />
              <div className={styles.overlay} />
            </div>
            <FadeIn>
              <div className={styles.content}>
                <h3 className={styles.cardHeading}>{useCase.heading}</h3>
                <p className={styles.cardBody}>{useCase.body}</p>
                <ul className={styles.bulletList}>
                  {useCase.bullets.map((bullet, idx) => (
                    <li key={idx} className={styles.bulletItem}>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </article>
        ))}
      </div>
    </section>
  );
}

export default UseCases;
