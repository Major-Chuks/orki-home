import { useEffect, useState, useRef } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import FadeIn from "../Animations/FadeIn";
import ImagePlaceholder from "../ImagePlaceholder/ImagePlaceholder";
import styles from "./PayAnyone.module.css";
import rec1 from "@/assets/landing-page/recipients/rec1.png";
import rec2 from "@/assets/landing-page/recipients/rec2.png";
import rec3 from "@/assets/landing-page/recipients/rec3.png";
import rec4 from "@/assets/landing-page/recipients/rec4.png";
import rec5 from "@/assets/landing-page/recipients/rec5.png";
import rec1Flag from "@/assets/landing-page/recipients/rec1-flag.png";
import rec2Flag from "@/assets/landing-page/recipients/rec2-flag.png";
import rec3Flag from "@/assets/landing-page/recipients/rec3-flag.png";
import rec4Flag from "@/assets/landing-page/recipients/rec4-flag.png";
import rec5Flag from "@/assets/landing-page/recipients/rec5-flag.png";
import logo from "@/assets/landing-page/recipients/logo.png";
import box from "@/assets/landing-page/recipients/box.png";
import Image from "next/image";

const RECIPIENTS = [
  {
    amount: "14,200",
    currency: "SAR",
    balance: "$140,590 USDC",
    name: "Vendor",
    meta: "Riyadh, SA",
    img: rec1,
    flag: rec1Flag,
  },
  {
    amount: "59,754",
    currency: "NGN",
    balance: "$124,300 USDC",
    name: "Contractor",
    meta: "Lagos, NG",
    img: rec2,
    flag: rec2Flag,
  },
  {
    amount: "25,560",
    currency: "AED",
    balance: "$98,450 USDC",
    name: "Freelancer",
    meta: "Dubai, AE",
    img: rec3,
    flag: rec3Flag,
  },
  {
    amount: "11,500",
    currency: "EUR",
    balance: "$45,200 USDC",
    name: "Employee",
    meta: "Berlin, DE",
    img: rec4,
    flag: rec4Flag,
  },
  {
    amount: "92,200",
    currency: "GBP",
    balance: "$324,800 USDC",
    name: "Business Payment",
    meta: "London, UK",
    img: rec5,
    flag: rec5Flag,
  },
];

const EXTENDED_RECIPIENTS = [...RECIPIENTS, ...RECIPIENTS, ...RECIPIENTS];
const ITEM_HEIGHT = 62; // 50px height + 12px gap
const ITEM_WIDTH = 292; // 280px width + 12px gap

function PayAnyone() {
  const [activeIndex, setActiveIndex] = useState(5);
  const [displayedRecipientIdx, setDisplayedRecipientIdx] = useState(5);
  const [displayedBalanceIdx, setDisplayedBalanceIdx] = useState(5);
  const [isMobile, setIsMobile] = useState(false);
  const isMobileRef = useRef(false);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 1024;
      setIsMobile(mobile);
      isMobileRef.current = mobile;
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const listControls = useAnimation();

  const line3Controls = useAnimation();
  const pillControls = useAnimation();
  const line2Controls = useAnimation();
  const hubControls = useAnimation();
  const line1Controls = useAnimation();

  const iconControls = useAnimation();
  const dotsControls = useAnimation();

  useEffect(() => {
    let currentIdx = 5;
    let isActive = true;

    const getOffset = (idx: number) => {
      return isMobileRef.current
        ? (7 - idx) * ITEM_WIDTH
        : (7 - idx) * ITEM_HEIGHT;
    };

    const getClipStart = () => {
      return isMobileRef.current ? "inset(100% 0 0 0)" : "inset(0 0 0 100%)";
    };

    const getClipEnd = () => {
      return "inset(0 0 0 0%)";
    };

    const getWaveStart = () => {
      return isMobileRef.current
        ? "circle(0% at 50% 100%)"
        : "circle(0% at 100% 50%)";
    };

    const getWaveEnd = () => {
      return isMobileRef.current
        ? "circle(150% at 50% 100%)"
        : "circle(150% at 100% 50%)";
    };

    // Initial position
    listControls.set({
      x: isMobileRef.current ? getOffset(currentIdx) : 0,
      y: isMobileRef.current ? 0 : getOffset(currentIdx),
    });

    const runSequence = async () => {
      while (isActive) {
        // 1. Move list up or left
        currentIdx++;
        setActiveIndex(currentIdx);
        const mobile = isMobileRef.current;
        await listControls.start({
          x: mobile ? getOffset(currentIdx) : 0,
          y: mobile ? 0 : getOffset(currentIdx),
          transition: { type: "spring", bounce: 0, duration: 0.8 },
        });

        // 2. First connector line fills towards the pill
        await line3Controls.start({
          clipPath: getClipEnd(),
          transition: { duration: 0.5, ease: "easeInOut" },
        });

        if (!isActive) break;
        setDisplayedRecipientIdx(currentIdx);

        // 3. Pill glows
        pillControls.start({
          borderColor: "#875ade",
          boxShadow:
            "0px 4px 20px 0px rgba(135, 90, 222, 0.4), 0px 2px 4px -2px rgba(135, 90, 222, 0.0)",
          transition: { duration: 0.3 },
        });

        // 4. Line 2 fills
        await line2Controls.start({
          clipPath: getClipEnd(),
          transition: { duration: 0.3, ease: "linear" },
        });

        // 5. Hub glows
        hubControls.start({
          borderColor: "#875ade",
          boxShadow: "0px 4px 20px 0px rgba(135, 90, 222, 0.4)",
          transition: { duration: 0.3 },
        });

        // 6. Third line fills towards business card
        await line1Controls.start({
          clipPath: getClipEnd(),
          transition: { duration: 0.5, ease: "easeInOut" },
        });

        if (!isActive) break;
        setDisplayedBalanceIdx(currentIdx);

        // 7. Business Card reacts (Wave effect from connection point)
        dotsControls.start({
          clipPath: getWaveEnd(),
          transition: { duration: 0.8, ease: "easeOut" },
        });
        iconControls.start({
          scale: [1, 1.05, 1],
          boxShadow: [
            "0px 0px 0px 1px rgba(237, 233, 254, 1), 0px 1px 3px 0px rgba(0, 0, 0, 0.1), 0px 1px 2px -1px rgba(0, 0, 0, 0.1)",
            "0px 0px 0px 1px rgba(135, 90, 222, 1), 0px 4px 20px 0px rgba(135, 90, 222, 0.4), 0px 1px 2px -1px rgba(0, 0, 0, 0.1)",
            "0px 0px 0px 1px rgba(237, 233, 254, 1), 0px 1px 3px 0px rgba(0, 0, 0, 0.1), 0px 1px 2px -1px rgba(0, 0, 0, 0.1)",
          ],
          transition: { duration: 1.2, ease: "easeInOut", times: [0, 0.5, 1] },
        });

        // Pause at the end of the sequence
        await new Promise((resolve) => setTimeout(resolve, 1100));

        if (!isActive) break;

        // Smoothly fade out the lines, dots, and glows
        await Promise.all([
          dotsControls.start({ opacity: 0, transition: { duration: 0.4 } }),
          line1Controls.start({ opacity: 0, transition: { duration: 0.4 } }),
          line2Controls.start({ opacity: 0, transition: { duration: 0.4 } }),
          line3Controls.start({ opacity: 0, transition: { duration: 0.4 } }),
          pillControls.start({
            borderColor: "#e4e7ec",
            boxShadow:
              "0px 4px 6px -1px rgba(0, 0, 0, 0.05), 0px 2px 4px -2px rgba(0, 0, 0, 0.07)",
            transition: { duration: 0.4 },
          }),
          hubControls.start({
            borderColor: "#e4e7ec",
            boxShadow: "0px 1px 3px 0px rgba(0, 0, 0, 0.05)",
            transition: { duration: 0.4 },
          }),
        ]);

        if (!isActive) break;

        // Reset flows invisibly before next move
        const clipStart = getClipStart();
        line1Controls.set({ clipPath: clipStart, opacity: 1 });
        line2Controls.set({ clipPath: clipStart, opacity: 1 });
        line3Controls.set({ clipPath: clipStart, opacity: 1 });
        dotsControls.set({ clipPath: getWaveStart(), opacity: 1 });

        // If we reached the end of the middle set, snap back
        if (currentIdx === 10) {
          currentIdx = 5;
          setActiveIndex(currentIdx);
          setDisplayedRecipientIdx(currentIdx);
          setDisplayedBalanceIdx(currentIdx);
          listControls.set({
            x: isMobileRef.current ? getOffset(currentIdx) : 0,
            y: isMobileRef.current ? 0 : getOffset(currentIdx),
          });
        }
      }
    };

    runSequence();

    return () => {
      isActive = false;
    };
  }, [
    listControls,
    line3Controls,
    pillControls,
    line2Controls,
    hubControls,
    line1Controls,
    iconControls,
    dotsControls,
  ]);

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <FadeIn delay={0.1}>
          <h2 className={styles.heading}>Pay anyone, Anywhere</h2>
        </FadeIn>
        <FadeIn delay={0.3}>
          <p className={styles.subheading}>
            Send payouts to contractors, suppliers, freelancers, employees and
            partners globally using stablecoins or local bank transfers
          </p>
        </FadeIn>

        <div className={styles.panel}>
          <div className={styles.leftPane}>
            <motion.div
              className={styles.leftPaneActiveDots}
              initial={{ clipPath: "circle(0% at 100% 50%)" }}
              animate={dotsControls}
            />
            <div className={styles.businessCard}>
              <div className={styles.businessTop}>
                <motion.div
                  className={styles.businessIconBox}
                  animate={iconControls}
                >
                  <Image className={styles.businessIcon} src={box} alt="💼" />
                </motion.div>
                <span className={styles.businessLabel}>Your Business</span>
              </div>
              <div className={styles.balanceBox}>
                <span className={styles.balanceLabel}>Account Balance</span>
                <span className={styles.balanceValue} style={{ overflow: "hidden", display: "inline-flex" }}>
                  <AnimatePresence mode="popLayout">
                    <motion.span
                      key={EXTENDED_RECIPIENTS[displayedBalanceIdx]?.balance}
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -20, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "anticipate" }}
                      style={{ display: "inline-block" }}
                    >
                      {EXTENDED_RECIPIENTS[displayedBalanceIdx]?.balance}
                    </motion.span>
                  </AnimatePresence>
                </span>
              </div>
            </div>
          </div>

          <div className={styles.connector}>
            <div className={styles.connectorLine}>
              <motion.div
                className={styles.connectorLineFill}
                initial={{ clipPath: "inset(0 0 0 100%)" }}
                animate={line1Controls}
              />
            </div>
            <motion.span className={styles.hub} animate={hubControls}>
              <Image
                style={{ height: "auto" }}
                className={styles.hubMark}
                src={logo}
                alt="orki"
              />
            </motion.span>
            <div className={styles.connectorLine}>
              <motion.div
                className={styles.connectorLineFill}
                initial={{ clipPath: "inset(0 0 0 100%)" }}
                animate={line2Controls}
              />
            </div>
            <motion.div className={styles.amountPill} animate={pillControls}>
              <AnimatePresence mode="popLayout">
                <motion.div
                  key={EXTENDED_RECIPIENTS[displayedRecipientIdx]?.amount}
                  initial={{ y: 15, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -15, opacity: 0 }}
                  transition={{ duration: 0.4, ease: "anticipate" }}
                  style={{ display: "flex", alignItems: "center", gap: "6px" }}
                >
                  <Image
                    style={{ height: "auto" }}
                    className={styles.amountFlag}
                    src={EXTENDED_RECIPIENTS[displayedRecipientIdx]?.flag || rec3Flag}
                    alt="flag"
                  />
                  {EXTENDED_RECIPIENTS[displayedRecipientIdx]?.amount} {EXTENDED_RECIPIENTS[displayedRecipientIdx]?.currency}
                </motion.div>
              </AnimatePresence>
            </motion.div>
            <div className={styles.connectorLine}>
              <motion.div
                className={styles.connectorLineFill}
                initial={{ clipPath: "inset(0 0 0 100%)" }}
                animate={line3Controls}
              />
            </div>
          </div>

          <div className={styles.rightPane}>
            <motion.ul className={styles.recipientList} animate={listControls}>
              {EXTENDED_RECIPIENTS.map((recipient, i) => {
                const isActiveRow = i === activeIndex;
                return (
                  <motion.li
                    key={`${recipient.name}-${i}`}
                    animate={{
                      borderColor: isActiveRow ? "#7c3aed" : "#f2ecfc",
                      boxShadow: isActiveRow
                        ? "0 4px 20px rgba(124, 58, 237, 0.08)"
                        : "none",
                    }}
                    transition={{ duration: 0.3 }}
                    className={styles.recipientRow}
                  >
                    <div className={styles.avatarBox}>
                      <Image
                        className={styles.avatar}
                        src={recipient.img}
                        alt="👤"
                      />
                      <Image
                        className={styles.avatarFlag}
                        src={recipient.flag}
                        alt="🏳️"
                      />
                    </div>
                    <div className={styles.recipientText}>
                      <span className={styles.recipientName}>
                        {recipient.name}
                      </span>
                      <span className={styles.recipientMeta}>
                        {recipient.meta}
                      </span>
                    </div>
                    {isActiveRow && (
                      <motion.span
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className={styles.payingBadge}
                      >
                        Paying
                      </motion.span>
                    )}
                  </motion.li>
                );
              })}
            </motion.ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PayAnyone;
