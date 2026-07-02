import Image from "next/image";
import styles from "./Reviews.module.css";
import quoteIcon from "@/assets/landing-page/icon-quote.svg";
import FadeIn from "@/components/Page_Landing/Animations/FadeIn";

const Reviews = () => {
  return (
    <div className={styles.section}>
      <FadeIn delay={0.1} motionType="bouncy">
        <div className={styles.card}>
          <div className={styles.quote}>
            <Image src={quoteIcon} alt="" />
          </div>
          <div className={styles.text}>
            Stablecoins are the most important financial innovation of our
            generation. For the first time, money can move the way information
            moves — <span>instantly, globally, without gatekeepers.</span> We
            built Orki to make sure that future belongs to everyone.
          </div>

          <div className={styles.profile}>
            <div className={styles.avatar}>D</div>
            <div className={styles.details}>
              <div className={styles.name}>Darshan Thakker</div>
              <div className={styles.role}>Founder & CEO, Orki</div>
            </div>
          </div>
        </div>
      </FadeIn>
    </div>
  );
};

export default Reviews;
