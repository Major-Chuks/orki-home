import styles from "./CurrencyTicker.module.css";
import usdIcon from "@/assets/landing-page/icon-usd.svg";
import eurIcon from "@/assets/landing-page/icon-eur.svg";
import aedIcon from "@/assets/landing-page/icon-aed.svg";
import usdcIcon from "@/assets/landing-page/icon-usdc.svg";
import usdtIcon from "@/assets/landing-page/icon-usdt.svg";
import euroIcon from "@/assets/landing-page/icon-euro.svg";
import ethIcon from "@/assets/landing-page/icon-eth.svg";
import Image from "next/image";
import FadeIn from "../Animations/FadeIn";

const CURRENCIES = [
  { code: "USD", icon: usdIcon },
  { code: "EUR", icon: eurIcon },
  { code: "AED", icon: aedIcon },
  { code: "USDC", icon: usdcIcon },
  { code: "USDT", icon: usdtIcon },
  { code: "EURO", icon: euroIcon },
  { code: "ETH", icon: ethIcon },
] as const;

function CurrencyTicker() {
  return (
    <section className={styles.section}>
      <FadeIn>
        <p className={styles.label}>Currencies &amp; networks supported</p>
      </FadeIn>
      <div className={styles.wrapper}>
        <div className={styles.leftShade}></div>
        {[1, 2, 3, 4].map((el, idx) => (
          <div key={idx} className={styles.list}>
            {CURRENCIES.map((currency) => (
              <div key={currency.code} className={styles.item}>
                <Image className={styles.icon} src={currency.icon} alt="" />
                <span className={styles.code}>{currency.code}</span>
              </div>
            ))}
          </div>
        ))}
        <div className={styles.rightShade}></div>
      </div>
    </section>
  );
}

export default CurrencyTicker;
