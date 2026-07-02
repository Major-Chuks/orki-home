import Eyebrow from "@/components/Page_Landing/Eyebrow/Eyebrow";
import styles from "./OurStory.module.css";
import FadeIn from "@/components/Page_Landing/Animations/FadeIn";

const OurStory = () => {
  return (
    <div className={styles.section}>
      <div className={styles.inner}>
        <Eyebrow>Our Story</Eyebrow>
        <FadeIn delay={0.1}>
          <div className={styles.textContainer}>
            <p className={styles.text}>
              The global financial system was built for a world that no longer
              exists.
            </p>
            <p className={styles.textBold}>
              Freelancers get paid <span>late</span> and lose money to fees.
              Businesses wait <span>days</span> for transfers that should take
              seconds. Workers send money home and watch a percentage{" "}
              <span>disappear</span> before it arrives.
            </p>
            <p className={styles.text}>
              Stablecoins changed what was possible. We built Orki to put that
              possibility in everyone's hands.
            </p>
          </div>
        </FadeIn>
      </div>
    </div>
  );
};

export default OurStory;
