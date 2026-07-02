import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "../Button/Button";
import styles from "./SignupSteps.module.css";
import welcomeImage from "@/assets/landing-page/welcome.png";
import welcomeImage2 from "@/assets/landing-page/welcome-2.png";
import welcomeImage3 from "@/assets/landing-page/welcome-3.png";
import welcomeImage4 from "@/assets/landing-page/welcome-4.png";
import welcomeImage5 from "@/assets/landing-page/welcome-5.png";

import Image from "next/image";
import TextReveal from "../Animations/TextReveal";

const STEPS = [
  {
    image: welcomeImage,
    title: "Create Account",
    body: "Get started in minutes by creating your account and completing a quick verification process. This ensures your profile is secure and fully compliant.",
  },
  {
    image: welcomeImage2,
    title: "Accept Payment",
    body: "Easily start accepting payments by sharing a secure payment link or embedding a checkout directly into your platform.",
  },
  {
    image: welcomeImage3,
    title: "Funds in Wallet",
    body: "Once a payment is completed, funds are instantly settled into your wallet. This real-time settlement ensures immediate access to your earnings, eliminating traditional delays and giving you full control over your finances.",
  },
  {
    image: welcomeImage4,
    title: "Convert or Withdraw",
    body: "Manage your funds effortlessly by converting your balance or withdrawing it into supported fiat currencies such as USD, EUR, or AED. The process is designed to be simple, fast, and transparent, ensuring you can access your money whenever you need it.",
  },
  {
    image: welcomeImage5,
    title: "Spend Globally",
    body: "Use your Visa card to spend your funds anywhere in the world with ease. Whether online or in-store, you can make payments seamlessly, turning your digital balance into real-world spending power without limitations.",
  },
];

function SignupSteps() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [resetKey, setResetKey] = useState(0); // Used to reset the filling animation if the user manually clicks
  const isMobile = true;

  const activeStep = STEPS[activeIndex];

  const handleStepClick = (index: number) => {
    setActiveIndex(index);
    setResetKey((prev) => prev + 1);
  };

  const handleNextStep = () => {
    setActiveIndex((prev) => (prev + 1) % STEPS.length);
  };

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.copy}>
          <h2 className={styles.heading}>
            <TextReveal
              splitBy="word"
              effect="typewriter"
              text="From sign-up to spending in 5 simple steps"
              staggerDuration={0.05}
              xOffset={10}
              delay={0.1}
              duration={3}
              once={false}
            />
          </h2>

          <div className={styles.stepList}>
            {STEPS.map((step, index) => {
              const isActive = index === activeIndex;
              return (
                <div key={step.title} className={styles.stepItem}>
                  <button
                    type="button"
                    className={`${styles.stepButton} ${isActive ? styles.stepButtonActive : ""}`}
                    onClick={() => handleStepClick(index)}
                  >
                    {step.title}
                  </button>
                  {isActive && (
                    <motion.div
                      key={resetKey}
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 5, ease: "linear" }}
                      onAnimationComplete={handleNextStep}
                      className={styles.line}
                    />
                  )}
                </div>
              );
            })}
          </div>

          <Button size="lg" className={styles.cta}>
            Get Started
          </Button>
        </div>

        <div className={styles.scrollContainer}>
          <AnimatePresence mode="popLayout">
            <motion.div
              key={activeIndex}
              initial={{
                opacity: 0,
                x: isMobile ? 0 : -60,
                y: isMobile ? 60 : 0,
              }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              exit={{ opacity: 0, x: isMobile ? 0 : 60, y: isMobile ? -60 : 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className={styles.previewColumn}
            >
              <div className={styles.preview}>
                <Image src={activeStep.image} alt="" />
              </div>
              <div className={styles.previewText}>
                <h3 className={styles.previewTitle}>{activeStep.title}</h3>
                <p className={styles.previewBody}>{activeStep.body}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

export default SignupSteps;
