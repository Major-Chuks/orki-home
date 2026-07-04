"use client";

import { useDragScroll } from "@/hooks/useDragScroll";
import styles from "./SecurityFeatures.module.css";
import FadeIn from "../Animations/FadeIn";
import TextReveal from "../Animations/TextReveal";
import PasskeysArt from "./PasskeysArt/PasskeysArt";
import TwoFactorArt from "./TwoFactorArt/TwoFactorArt";
import RoleBasedArt from "./RoleBasedArt/RoleBasedArt";

const FEATURES = [
  {
    art: <PasskeysArt />,
    title: "Passkeys",
    body: "Passwordless sign-in and transaction signing with WebAuthn. Face ID or fingerprint — no passwords to steal.",
  },
  {
    art: <TwoFactorArt />,
    title: "Two-factor authentication",
    body: "Additional verification for sensitive actions — withdrawals, limit changes, and new device logins.",
  },
  {
    art: <RoleBasedArt />,
    title: "Role-based access",
    body: "Set who can view, request, approve, and execute. Full team controls without slowing down daily operations.",
  },
];

function SecurityFeatures() {
  const { ref, events } = useDragScroll<HTMLDivElement>();

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <FadeIn delay={0.1}>
          <h2 className={styles.heading}>
            Enterprise-grade controls for modern finance
          </h2>
        </FadeIn>
        <FadeIn delay={0.3}>
          <p className={styles.subheading}>
            Maintain security, compliance, and operational efficiency with
            built-in governance tools designed for teams managing global
            payments and treasury.
          </p>
        </FadeIn>

        <div className={styles.grid} ref={ref} {...events}>
          {FEATURES.map((feature) => (
            <article key={feature.title} className={styles.card}>
              <div className={styles.art}>{feature.art}</div>
              <div className={styles.cardText}>
                <h3 className={styles.cardTitle}>
                  <TextReveal text={feature.title} staggerDuration={0.1} />
                </h3>

                <FadeIn direction="up">
                  <p className={styles.cardBody}>{feature.body}</p>
                </FadeIn>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SecurityFeatures;
