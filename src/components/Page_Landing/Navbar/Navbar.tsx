import { useState } from "react";
import Button from "../Button/Button";
import MobileMenu from "../MobileMenu/MobileMenu";
import styles from "./Navbar.module.css";
import logo from "@/assets/landing-page/logo.svg";
import Image from "next/image";
import MenuIcon from "@/assets/Components/MenuIcon";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "FAQ", href: "#faq" },
  { label: "About us", href: "#about" },
  { label: "Terms", href: "#terms" },
  { label: "Privacy", href: "#privacy" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <a href="#home" className={styles.logo}>
          <Image src={logo} alt="" />
        </a>

        <nav className={styles.nav} aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <div key={link.label} className={styles.navLink}>
              {link.label}
            </div>
          ))}
        </nav>

        <div className={styles.actions}>
          <a href="#login" className={styles.loginLink}>
            Login
          </a>
          <Button className={styles.cta} size="md">
            Get started
          </Button>
        </div>

        <button
          type="button"
          className={styles.menuTrigger}
          aria-label="Open menu"
          onClick={() => setMenuOpen(true)}
        >
          <MenuIcon />
        </button>
      </div>

      <MobileMenu
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        links={NAV_LINKS}
      />
    </header>
  );
}

export default Navbar;
