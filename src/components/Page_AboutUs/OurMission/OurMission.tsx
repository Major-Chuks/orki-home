import CountUp from "@/components/Page_Landing/Animations/CountUp";
import styles from "./OurMission.module.css";
import useWidth from "@/hooks/useWidth";
import Eyebrow from "@/components/Page_Landing/Eyebrow/Eyebrow";
import ShimmerReveal from "@/components/Page_Landing/Animations/ShimmerReveal";
import TextReveal from "@/components/Page_Landing/Animations/TextReveal";
import FadeIn from "@/components/Page_Landing/Animations/FadeIn";

const STATS = [
  { to: 150, from: 0, prefix: "", suffix: "+", label: "COUNTRIES" },
  { to: 0, from: 0, prefix: "$", suffix: "", label: "TO START" },
  { to: 3, from: 0, prefix: "", suffix: "", label: "CURRENCIES" },
];

function OurMission() {
  const width = useWidth();
  const isMobile = width <= 768;

  return (
    <section className={styles.section}>
      <span className={styles.square1} />
      <span className={styles.square2} />

      <div className={styles.inner}>
        <Eyebrow invert>Our mission</Eyebrow>

        <div className={styles.contentWrapper}>
          <div className={styles.leftSide}>
            <h2 className={styles.heading}>
              <TextReveal
                splitBy="word"
                effect="typewriter"
                text="Banking the next"
                staggerDuration={0.05}
                xOffset={10}
                delay={0.1}
                duration={4}
              />{" "}
              <span className={styles.accent}>
                <ShimmerReveal
                  delay={0.05}
                  baseColor="#9365E9"
                  revealColor="#9365E9"
                >
                  10 million
                </ShimmerReveal>
              </span>{" "}
              <TextReveal
                splitBy="word"
                effect="typewriter"
                text="people"
                staggerDuration={0.05}
                xOffset={10}
                delay={0.1}
                duration={4}
              />{" "}
              <TextReveal
                splitBy="word"
                effect="typewriter"
                text="the system left behind."
                staggerDuration={0.05}
                xOffset={10}
                delay={0.1}
                duration={4}
              />
            </h2>
          </div>

          <div className={styles.rightSide}>
            <FadeIn>
              <div className={styles.text}>
                Stablecoins have unlocked a new financial layer — one that moves
                at internet speed, works across every border, and does not
                require a legacy bank to operate. Orki is how that layer becomes
                accessible to everyone, not just those who already have access
                to it.
              </div>
            </FadeIn>

            <div className={styles.statsRow}>
              {STATS.map((stat) => (
                <div key={stat.label} className={styles.stat}>
                  <CountUp
                    className={styles.statValue}
                    to={stat.to}
                    from={stat.from}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                    duration={2.5}
                  />
                  <span className={styles.statLabel}>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurMission;
