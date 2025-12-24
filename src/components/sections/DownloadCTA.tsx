/**
 * Download CTA Section Component
 * Strong call-to-action with app store buttons and coming soon features
 * Features animated gradient background
 */
"use client";

import React from "react";
import styles from "./DownloadCTA.module.css";
import { Button } from "@/components/Button/Button";
import { AppleIcon, PlayStoreIcon, SparkleIcon } from "@/components/Icons/Icons";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

// Coming soon features
const comingSoonFeatures = [
    "Smart recommendations",
    "Impact tracking",
    "Community badges",
];

export const DownloadCTA: React.FC = () => {
    const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

    return (
        <section className={styles.section} id="download" ref={ref}>
            {/* Animated gradient background */}
            <div className={styles.bgGradient} />

            {/* Decorative sparkles */}
            <div className={styles.decorations}>
                <div className={styles.sparkle1}>
                    <SparkleIcon size={24} color="rgba(255,255,255,0.3)" />
                </div>
                <div className={styles.sparkle2}>
                    <SparkleIcon size={32} color="rgba(255,255,255,0.2)" />
                </div>
                <div className={styles.sparkle3}>
                    <SparkleIcon size={20} color="rgba(255,255,255,0.4)" />
                </div>
            </div>

            <div className={styles.container}>
                <div className={`${styles.content} ${isVisible ? styles.visible : ""}`}>
                    {/* Main CTA */}
                    <h2 className={styles.title}>Download Passiton</h2>
                    <p className={styles.subtitle}>
                        Be part of a growing community that believes sharing is better than
                        wasting.
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

                    {/* Coming Soon */}
                    <div className={styles.comingSoon}>
                        <h3 className={styles.comingSoonTitle}>Coming Soon</h3>
                        <div className={styles.features}>
                            {comingSoonFeatures.map((feature, index) => (
                                <span
                                    key={feature}
                                    className={styles.feature}
                                    style={{ animationDelay: `${(index + 1) * 100}ms` }}
                                >
                                    ✨ {feature}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DownloadCTA;
