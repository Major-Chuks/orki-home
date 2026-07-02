import Button from "../Button/Button";
import styles from "./ContactSection.module.css";
import emailIcon from "@/assets/landing-page/icon-email.svg";
import chatIcon from "@/assets/landing-page/icon-chat.svg";
import locationIcon from "@/assets/landing-page/icon-location.svg";
import arrowIcon from "@/assets/landing-page/icon-arrow.svg";
import Image from "next/image";
import ShimmerReveal from "../Animations/ShimmerReveal";

const CONTACT_METHODS = [
  { label: "Email us", value: "darshan@orki.io", icon: emailIcon },
  { label: "Live chat", value: "Mon to friday 9-5 GMT + 4", icon: chatIcon },
  { label: "Visit", value: "Daleware, USA", icon: locationIcon },
];

function ContactSection() {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.copy}>
          <h2 className={styles.heading}>
            <ShimmerReveal baseColor="#fff" revealColor="#242628">
              Let&apos;s build something
            </ShimmerReveal>
            <br />
            <span className={styles.headingAccent}>
              <ShimmerReveal delay={0.1} baseColor="#fff" revealColor="#783fe4">
                together.
              </ShimmerReveal>
            </span>
          </h2>
          <p className={styles.subheading}>
            Questions about pricing, integrations, or just want to say hi? We
            read every message and reply within one business day.
          </p>

          <div className={styles.methodList}>
            {CONTACT_METHODS.map((method) => (
              <div key={method.label} className={styles.methodRow}>
                <div className={styles.methodInner}>
                  <div className={styles.methodIcon}>
                    <Image src={method.icon} alt="" />
                  </div>
                  <div className={styles.methodText}>
                    <span className={styles.methodLabel}>{method.label}</span>
                    <span className={styles.methodValue}>{method.value}</span>
                  </div>
                </div>
                <div className={styles.methodArrow}>
                  <Image src={arrowIcon} alt="" />
                </div>
              </div>
            ))}
          </div>
        </div>

        <form className={styles.form}>
          <div className={styles.formRow}>
            <label className={styles.field}>
              <span className={styles.fieldLabel}>First name</span>
              <input
                className={styles.input}
                type="text"
                placeholder="Hameed"
              />
            </label>
            <label className={styles.field}>
              <span className={styles.fieldLabel}>Last name</span>
              <input
                className={styles.input}
                type="text"
                placeholder="Khalif"
              />
            </label>
          </div>

          <label className={styles.field}>
            <span className={styles.fieldLabel}>Email</span>
            <input
              className={styles.input}
              type="email"
              placeholder="ada@orki.com"
            />
          </label>

          <label className={styles.field}>
            <span className={styles.fieldLabel}>Message</span>
            <textarea
              className={styles.textarea}
              placeholder="Tell us what you're working on..."
              rows={4}
            />
          </label>

          <Button type="submit" size="lg" className={styles.submit}>
            Get Started
          </Button>
        </form>
      </div>
    </section>
  );
}

export default ContactSection;
