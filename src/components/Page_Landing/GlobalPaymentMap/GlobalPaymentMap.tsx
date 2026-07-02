import Image from "next/image";
import ImagePlaceholder from "../ImagePlaceholder/ImagePlaceholder";
import styles from "./GlobalPaymentMap.module.css";
import map from "@/assets/landing-page/map-con.png";
import worldMap from "@/assets/landing-page/world-map.png";
import FadeIn from "../Animations/FadeIn";

const PAYMENTS = [
  {
    name: "Agency Inc.",
    meta: "from USA sent",
    amount: "10,000 USD",
    area: "agency",
    flag: "flagUs",
  },
  {
    name: "Investor Inc.",
    meta: "from UK sent",
    amount: "3,000 USD",
    area: "investor",
    flag: "flagUk",
  },
  {
    name: "Service Provider",
    meta: "from Europe sent",
    amount: "12,221 EUR",
    area: "service",
    flag: "flagEu",
  },
  {
    name: "Client LLC.",
    meta: "from UAE sent",
    amount: "32,000 AED",
    area: "client",
    flag: "flagAe",
  },
  {
    name: "Company Wallet",
    meta: "sent",
    amount: "14,000 USDC",
    area: "wallet",
    flag: "flagUsdc",
  },
];

function GlobalPaymentMap() {
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

        <span className={styles.notice}>
          Your business has successfully received <strong>$75,000 USD</strong>
        </span>
        <div
          style={{ backgroundImage: `url(${worldMap.src})` }}
          className={styles.mapArea}
        >
          <div className={styles.grid}>
            {PAYMENTS.map((payment) => (
              <div
                key={payment.name}
                className={`${styles.card} ${styles[payment.area]}`}
              >
                <ImagePlaceholder
                  className={`${styles.flag} ${styles[payment.flag]}`}
                  label={`${payment.name} flag`}
                />
                <div className={styles.cardText}>
                  <span className={styles.cardName}>{payment.name}</span>
                  <span className={styles.cardMeta}>{payment.meta}</span>
                  <span className={styles.cardAmount}>{payment.amount}</span>
                </div>
              </div>
            ))}

            <div className={styles.hub}>
              <ImagePlaceholder
                className={styles.hubMark}
                label="Orki logo mark"
              />
              <span className={styles.hubLabel}>rki</span>
            </div>
          </div>

          <Image src={map} alt="" />
        </div>
      </div>
    </section>
  );
}

export default GlobalPaymentMap;
