/**
 * Sustainability Section Component
 * A calm, reassuring section about environmental impact
 * Features soft messaging without activist tone
 */
"use client";

import React from "react";
import styles from "./Sustainability.module.css";
import { LeafIcon, GlobeIcon, SparkleIcon } from "@/components/Icons/Icons";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const Sustainability: React.FC = () => {
    const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

    return (
        <section className={styles.section} id="sustainability" ref={ref}>
            {/* Decorative background */}
            <div className={styles.bgPattern}>
                <div className={styles.leaf1}>
                    <LeafIcon size={60} color="var(--green-200)" />
                </div>
                <div className={styles.leaf2}>
                    <LeafIcon size={40} color="var(--green-100)" />
                </div>
                <div className={styles.sparkle1}>
                    <SparkleIcon size={30} color="var(--green-300)" />
                </div>
            </div>

            <div className={styles.container}>
                <div className={`${styles.content} ${isVisible ? styles.visible : ""}`}>
                    {/* Icon */}
                    <div className={styles.iconWrapper}>
                        <GlobeIcon size={48} color="var(--green-500)" />
                    </div>

                    {/* Headline */}
                    <h2 className={styles.title}>Built for a Greener Future</h2>

                    {/* Main message */}
                    <p className={styles.message}>
                        Every item reused is one less item wasted. Passiton helps reduce
                        landfill waste and encourages mindful consumption — one small act at
                        a time.
                    </p>

                    {/* Stats or highlights */}
                    <div className={styles.highlights}>
                        <div className={styles.highlight}>
                            <span className={styles.highlightIcon}>♻️</span>
                            <span className={styles.highlightText}>Reduce Waste</span>
                        </div>
                        <div className={styles.highlight}>
                            <span className={styles.highlightIcon}>🌿</span>
                            <span className={styles.highlightText}>Mindful Consumption</span>
                        </div>
                        <div className={styles.highlight}>
                            <span className={styles.highlightIcon}>💚</span>
                            <span className={styles.highlightText}>Community Impact</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Sustainability;
