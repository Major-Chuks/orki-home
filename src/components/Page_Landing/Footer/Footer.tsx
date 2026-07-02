import Image from "next/image";
import ImagePlaceholder from "../ImagePlaceholder/ImagePlaceholder";
import styles from "./Footer.module.css";
import logo from "@/assets/landing-page/logo.svg";
import socialIconX from "@/assets/landing-page/social-icon-x.svg";
import socialIconInstagram from "@/assets/landing-page/social-icon-instagram.svg";
import socialIconLinkedin from "@/assets/landing-page/social-icon-linkedin.svg";

const COLUMNS = [
  {
    title: "Products",
    links: ["Payment", "Wallet", "Payout"],
  },
  {
    title: "Company",
    links: ["About Us", "Email Us"],
  },
  {
    title: "Legal",
    links: ["Terms of Service", "Privacy Policy"],
  },
];

const SOCIALS = [socialIconX, socialIconLinkedin, socialIconInstagram] as const;

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.brand}>
          <div className={styles.logo}>
            <Image src={logo} alt="" />
          </div>
          <p className={styles.address}>
            16192 Coastal Highway, Lewes, Delaware 19958, County of Sussex.
          </p>
          <div className={styles.socials}>
            {SOCIALS.map((icon, idx) => (
              <Image
                key={idx}
                className={styles.socialIcon}
                src={icon}
                alt=""
              />
            ))}
          </div>
        </div>

        <div className={styles.columns}>
          {COLUMNS.map((column) => (
            <div key={column.title} className={styles.column}>
              <span className={styles.columnTitle}>
                {column.title.toUpperCase()}
              </span>
              <ul className={styles.linkList}>
                {column.links.map((link) => (
                  <li key={link}>
                    <a href="#" className={styles.link}>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.disclaimer}>
        <p>
          ORKI LLC. is a financial technology company, not a bank. Banking
          services are provided by regulated partner institutions. Accounts held
          with partner banks may be eligible for FDIC insurance, subject to
          applicable limits and conditions. ORKI does not provide investment,
          tax, or legal advice. Digital assets are not bank deposits and are not
          insured by the FDIC or any governmental agency. Digital asset values
          may fluctuate, and the value of stablecoins is not guaranteed.
        </p>
        <p>
          ORKI provides non-custodial smart contract wallet infrastructure.
          Users retain exclusive control of private keys and digital assets.
          ORKI cannot access, freeze, or recover digital assets without user
          authorization. International transfers may be subject to additional
          requirements. See our{" "}
          <a href="#terms" className={styles.inlineLink}>
            Terms of Use
          </a>{" "}
          for details.
        </p>
      </div>

      <div className={styles.bottomBar}>
        <span>© 2026 Orki. All rights reserved</span>
        <div className={styles.bottomLinks}>
          <a href="#privacy" className={styles.link}>
            Privacy Policy
          </a>
          <a href="#terms" className={styles.link}>
            Terms of Use
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
