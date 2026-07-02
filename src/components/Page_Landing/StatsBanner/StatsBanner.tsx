import styles from "./StatsBanner.module.css";

import CountUp from "../Animations/CountUp";
import FadeIn from "../Animations/FadeIn";

const STATS = [
  { to: 0, from: 5, suffix: "%", label: "Transactional Fee" },
  { to: 0, from: 24, suffix: "hr", label: "Same-day Transfer" },
  { to: 150, from: 0, suffix: "+", label: "Countries Supported" },
];

function StatsBanner() {
  return (
    <section className={styles.section}>
      <FadeIn initialOpacity={1} delay={0.1}>
        <div className={styles.banner}>
          <span className={styles.square1} />
          <span className={styles.square2} />
          <span className={styles.square3} />
          <span className={styles.square4} />

          <div className={styles.content}>
            <h2 className={styles.heading}>
              <FadeIn delay={0.1}>
                Global Payment Infrastructure, Simplified
              </FadeIn>
            </h2>
            <p className={styles.subheading}>
              <FadeIn delay={0.3}>
                Optimized for speed, cost-efficiency, and worldwide coverage
              </FadeIn>
            </p>

            <div className={styles.statsRow}>
              {STATS.map((stat) => (
                <div key={stat.label} className={styles.stat}>
                  <CountUp
                    className={styles.statValue}
                    to={stat.to}
                    from={stat.from}
                    suffix={stat.suffix}
                    duration={2.5}
                  />
                  <span className={styles.statLabel}>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}

export default StatsBanner;
