import { useState } from "react";
import Button from "../Button/Button";
import MobileMenu from "../MobileMenu/MobileMenu";
import styles from "./Navbar.module.css";
import logo from "@/assets/landing-page/logo.svg";
import Image from "next/image";
import MenuIcon from "@/assets/Components/MenuIcon";
import { useRouter } from "next/navigation";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "FAQ", href: "/" },
  { label: "About us", href: "/about-us" },
  { label: "Terms", href: "/" },
  { label: "Privacy", href: "/" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <a href="/" className={styles.logo}>
          <Image src={logo} alt="" />
        </a>

        <nav className={styles.nav} aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <div
              onClick={() => router.push(link.href)}
              key={link.label}
              className={styles.navLink}
            >
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
