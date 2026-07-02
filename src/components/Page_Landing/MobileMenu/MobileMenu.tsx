import { useEffect } from "react";
import { createPortal } from "react-dom";
import Button from "../Button/Button";
import styles from "./MobileMenu.module.css";
import Image from "next/image";
import logo from "@/assets/landing-page/logo.svg";
import { ChevronRight, XIcon } from "lucide-react";

type NavLink = {
  label: string;
  href: string;
};

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
  links: NavLink[];
};

function MobileMenu({ open, onClose, links }: MobileMenuProps) {
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return createPortal(
    <div className={`${styles.overlay} ${open ? styles.overlayOpen : ""}`}>
      <div className={styles.panel}>
        <div className={styles.panelHeader}>
          <a href="#home" className={styles.logo}>
            <Image src={logo} alt="" />
          </a>
          <button
            type="button"
            className={styles.closeButton}
            aria-label="Close menu"
            onClick={onClose}
          >
            <XIcon />
          </button>
        </div>

        <div className={styles.linkList}>
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={styles.linkItem}
              onClick={onClose}
            >
              <span>{link.label}</span>
              <ChevronRight size={16} color="#242628" />
            </a>
          ))}
        </div>

        <div className={styles.ctaArea}>
          <Button size="lg" className={styles.ctaFull}>
            Get Started
          </Button>
          <Button variant="secondary" size="lg" className={styles.ctaFull}>
            Login
          </Button>
        </div>
      </div>
    </div>,
    document.body,
  );
}

export default MobileMenu;
