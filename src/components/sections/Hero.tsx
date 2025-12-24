/**
 * Hero Section Component
 * The main hero section with gradient background, headline, and app store buttons
 * Features fade-in animations and a warm, inviting design
 */
"use client";

import React from "react";
import styles from "./Hero.module.css";
import { Button } from "@/components/Button/Button";
import { AppleIcon, PlayStoreIcon, LeafIcon } from "@/components/Icons/Icons";

export const Hero: React.FC = () => {
    return (
        <section className={styles.hero} id="hero">
            {/* Decorative background elements */}
            <div className={styles.bgDecoration}>
                <div className={styles.circle1} />
                <div className={styles.circle2} />
                <div className={styles.circle3} />
            </div>

            <div className={styles.container}>
                {/* Logo and Brand */}
                <div className={styles.brand}>
                    <div className={styles.logoWrapper}>
                        <LeafIcon size={36} color="#22c55e" />
                    </div>
                    <span className={styles.logoText}>passiton</span>
                </div>

                {/* Main Content */}
                <div className={styles.content}>
                    <h1 className={styles.headline}>
                        Experience the Joy of Giving{" "}
                        <span className={styles.emoji}>🌱</span>
                    </h1>

                    <p className={styles.subtext}>
                        Passiton is a freecycling app that helps you give away things you no
                        longer need — and discover useful items shared by people around you.
                        No selling, no buying. Just sharing, reusing, and reducing waste
                        together.
                    </p>

                    {/* App Store Buttons */}
                    <div className={styles.buttons}>
                        <Button
                            variant="app-store"
                            href="#"
                            icon={<AppleIcon size={28} color="white" />}
                            ariaLabel="Download on App Store"
                        >
                            <span className={styles.buttonSubtext}>Download on the</span>
                            <span className={styles.buttonMainText}>App Store</span>
                        </Button>

                        <Button
                            variant="play-store"
                            href="#"
                            icon={<PlayStoreIcon size={28} color="white" />}
                            ariaLabel="Get it on Google Play"
                        >
                            <span className={styles.buttonSubtext}>GET IT ON</span>
                            <span className={styles.buttonMainText}>Google Play</span>
                        </Button>
                    </div>
                </div>

                {/* Scroll indicator */}
                <div className={styles.scrollIndicator}>
                    <div className={styles.scrollMouse}>
                        <div className={styles.scrollWheel} />
                    </div>
                    <span>Scroll to explore</span>
                </div>
            </div>
        </section>
    );
};

export default Hero;
