/**
 * Footer Section Component
 * Minimal footer with about info, links, and Third Eye Creative branding
 */
"use client";

import React from "react";
import styles from "./Footer.module.css";
import { LeafIcon, HeartIcon } from "@/components/Icons/Icons";

export const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
      <footer className={styles.footer} id="footer">
        <div className={styles.container}>
          {/* Brand and About */}
          <div className={styles.brand}>
            <div className={styles.logoWrapper}>
              <LeafIcon size={28} color="var(--green-400)" />
              <span className={styles.logoText}>passiton</span>
            </div>
            <p className={styles.about}>
              Passiton is a product by{" "}
              <a
                href="https://thirdeyegfx.com/"
                className={styles.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                Third Eye Creative
              </a>
              , built with the belief that technology can enable kindness,
              sustainability, and shared value.
            </p>
          </div>

          {/* Tagline */}
          <div className={styles.tagline}>
            <span>Pass it on. Feel the joy.</span>
            <HeartIcon size={16} color="var(--green-400)" />
          </div>

          {/* Divider */}
          <div className={styles.divider} />

          {/* Bottom Row */}
          <div className={styles.bottom}>
            <p className={styles.copyright}>
              © {currentYear} Passiton. All rights reserved.
            </p>

            <nav className={styles.links} aria-label="Footer navigation">
              <a href="#" className={styles.footerLink}>
                Privacy Policy
              </a>
              <span className={styles.separator}>•</span>
              <a href="#" className={styles.footerLink}>
                Terms of Service
              </a>
              <span className={styles.separator}>•</span>
              <a href="#" className={styles.footerLink}>
                Contact
              </a>
            </nav>
          </div>
        </div>
      </footer>
    );
};

export default Footer;
