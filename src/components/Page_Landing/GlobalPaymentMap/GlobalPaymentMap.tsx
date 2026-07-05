"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import styles from "./GlobalPaymentMap.module.css";
import worldMap from "@/assets/landing-page/world-map.png";
import FadeIn from "../Animations/FadeIn";
import logo from "@/assets/landing-page/logo.svg";
import flagUs from "@/assets/landing-page/global-clients/flagUs.png";
import flagUk from "@/assets/landing-page/global-clients/flagUk.png";
import flagEu from "@/assets/landing-page/global-clients/flagEu.png";
import flagAe from "@/assets/landing-page/global-clients/flagAe.png";
import flagUsdc from "@/assets/landing-page/global-clients/flagUsdc.png";

const PAYMENTS = [
  {
    name: "Agency Inc.",
    meta: "from USA sent",
    amount: "10,000 USD",
    area: "agency",
    flag: flagUs,
  },
  {
    name: "Investor Inc.",
    meta: "from UK sent",
    amount: "3,000 USD",
    area: "investor",
    flag: flagUk,
  },
  {
    name: "Service Provider",
    meta: "from Europe sent",
    amount: "12,221 EUR",
    area: "service",
    flag: flagEu,
  },
  {
    name: "Client LLC.",
    meta: "from UAE sent",
    amount: "32,000 AED",
    area: "client",
    flag: flagAe,
  },
  {
    name: "Company Wallet",
    meta: "sent",
    amount: "14,000 USDC",
    area: "wallet",
    flag: flagUsdc,
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.9 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
};

function GlobalPaymentMap() {
  const containerRef = useRef<HTMLDivElement>(null);
  const hubRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const [lines, setLines] = useState<{ id: string; path: string }[]>([]);
  const [svgSize, setSvgSize] = useState({ width: 100, height: 100 });

  useEffect(() => {
    const updateLines = () => {
      if (!containerRef.current || !hubRef.current) return;

      const containerRect = containerRef.current.getBoundingClientRect();
      const hubRect = hubRef.current.getBoundingClientRect();

      setSvgSize({ width: containerRect.width, height: containerRect.height });

      const hubX = hubRect.left + hubRect.width / 2 - containerRect.left;
      const hubY = hubRect.top + hubRect.height / 2 - containerRect.top;

      const newLines = PAYMENTS.map((payment, index) => {
        const cardNode = cardRefs.current[index];
        if (!cardNode) return { id: payment.name, path: "" };

        const cardRect = cardNode.getBoundingClientRect();
        const cardX = cardRect.left + cardRect.width / 2 - containerRect.left;
        const cardY = cardRect.top + cardRect.height / 2 - containerRect.top;

        // Calculate control point for a slight curve
        const dx = hubX - cardX;
        const dy = hubY - cardY;

        const midX = cardX + dx / 2;
        const midY = cardY + dy / 2;

        // Offset for curve
        const offset = payment.area === "agency" ? -0.15 : 0.15;
        const cpX = midX - dy * offset;
        const cpY = midY + dx * offset;

        return {
          id: payment.name,
          path: `M ${cardX} ${cardY} Q ${cpX} ${cpY} ${hubX} ${hubY}`,
        };
      });

      setLines(newLines);
    };

    updateLines();
    window.addEventListener("resize", updateLines);

    const timeoutId = setTimeout(updateLines, 500);

    return () => {
      window.removeEventListener("resize", updateLines);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <FadeIn delay={0.1}>
          <h2 className={styles.heading}>
            Get paid from anywhere in the world
          </h2>
        </FadeIn>
        <FadeIn delay={0.3}>
          <p className={styles.subheading}>
            Collect payments in local currencies or stablecoins from clients,
            customers and partners worldwide - all settled in one unified
            balance.
          </p>
        </FadeIn>

        {/* Notice banner */}
        <FadeIn motionType="bouncy" className={styles.notice}>
          Your business has successfully received <strong>$75,000 USD</strong>
        </FadeIn>

        <div className={styles.mapArea}>
          <motion.div
            className={styles.grid}
            style={{ backgroundImage: `url(${worldMap.src})` }}
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, margin: "-100px" }}
            ref={containerRef}
          >
            {/* SVG Lines Overlay */}
            <svg
              className={styles.linesOverlay}
              width="100%"
              height="100%"
              viewBox={`0 0 ${svgSize.width} ${svgSize.height}`}
            >
              <defs>
                <linearGradient
                  id="lineGrad"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="-1.27%" stopColor="#B2C2E5" />
                  <stop offset="18.49%" stopColor="#9392E2" />
                  <stop offset="39.71%" stopColor="#D7BFA3" />
                  <stop offset="60.92%" stopColor="#ECBD55" />
                  <stop offset="79.24%" stopColor="#B2C2E5" />
                  <stop offset="98.99%" stopColor="#6BE1C6" />
                </linearGradient>
                <filter
                  id="badgeShadow"
                  x="-20%"
                  y="-20%"
                  width="140%"
                  height="140%"
                >
                  <feDropShadow
                    dx="0"
                    dy="2"
                    stdDeviation="2"
                    floodOpacity="0.15"
                  />
                </filter>
              </defs>
              {lines.map((line, i) => (
                <g key={`path-group-${line.id}`}>
                  <motion.path
                    id={`path-${line.id}`}
                    d={line.path}
                    stroke="url(#lineGrad)"
                    strokeWidth="2"
                    fill="none"
                    strokeDasharray="4 8"
                    vectorEffect="non-scaling-stroke"
                    initial={{ strokeDashoffset: 24, opacity: 0 }}
                    whileInView={{ strokeDashoffset: 0, opacity: 0.6 }}
                    viewport={{ once: false }}
                    transition={{
                      strokeDashoffset: {
                        repeat: Infinity,
                        duration: 1.5,
                        ease: "linear",
                      },
                      opacity: { duration: 1, delay: i * 0.2 + 0.5 },
                    }}
                  />
                  {/* Travelling Badge */}
                  <g opacity="0">
                    <animateMotion
                      dur="3.5s"
                      repeatCount="indefinite"
                      path={line.path}
                      begin={`${i * 0.4}s`}
                    />
                    <animate
                      attributeName="opacity"
                      values="0;1;1;0"
                      keyTimes="0;0.15;0.85;1"
                      dur="3.5s"
                      repeatCount="indefinite"
                      begin={`${i * 0.4}s`}
                    />
                    <g className={styles.animatedBadge}>
                      <circle
                        cx="0"
                        cy="0"
                        r="14"
                        fill="#fff"
                        filter="url(#badgeShadow)"
                      />
                      <circle
                        cx="0"
                        cy="0"
                        r="14"
                        fill="none"
                        stroke="#ede9fe"
                        strokeWidth="1"
                      />
                      <image
                        href={PAYMENTS[i].flag.src}
                        x="-8"
                        y="-8"
                        width="16"
                        height="16"
                      />
                    </g>
                  </g>
                </g>
              ))}
            </svg>

            {/* Hub */}
            <div className={styles.hubWrapper}>
              <motion.div
                className={styles.hub}
                variants={itemVariants}
                ref={hubRef}
              >
                <Image
                  src={logo}
                  alt="Orki logo mark"
                  className={styles.hubMark}
                />
              </motion.div>
            </div>

            {/* Cards */}
            {PAYMENTS.map((payment, i) => (
              <div
                key={payment.name}
                className={`${styles.cardWrapper} ${styles[payment.area]}`}
              >
                <motion.div
                  ref={(el) => {
                    cardRefs.current[i] = el;
                  }}
                  className={styles.card}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, zIndex: 10 }}
                >
                  <div className={styles.flag}>
                    <Image src={payment.flag} alt={`${payment.name} flag`} />
                  </div>
                  <div className={styles.cardText}>
                    <span className={styles.cardName}>{payment.name}</span>
                    <span className={styles.cardMeta}>{payment.meta}</span>
                    <span className={styles.cardAmount}>{payment.amount}</span>
                  </div>
                </motion.div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default GlobalPaymentMap;
