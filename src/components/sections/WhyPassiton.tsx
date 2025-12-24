/**
 * Why Passiton Section Component
 * Displays three feature cards highlighting the app's key benefits
 * Features scroll-triggered animations with staggered delays
 */
"use client";

import React from "react";
import styles from "./WhyPassiton.module.css";
import { Card } from "@/components/Card/Card";
import { RecycleIcon, HeartIcon, LocationIcon } from "@/components/Icons/Icons";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

// Feature data for the three cards
const features = [
    {
        id: 1,
        icon: RecycleIcon,
        title: "Give, Don't Throw",
        description:
            "Most things don't belong in a landfill. Passiton makes it easy to pass them on to someone who can use them.",
    },
    {
        id: 2,
        icon: HeartIcon,
        title: "Feel-Good by Design",
        description:
            "Giving feels good. Passiton is built around trust, simplicity, and the quiet joy of helping someone.",
    },
    {
        id: 3,
        icon: LocationIcon,
        title: "Local & Community-Driven",
        description:
            "Discover items shared by people nearby and build a more sustainable local community.",
    },
];

export const WhyPassiton: React.FC = () => {
    const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

    return (
        <section className={styles.section} id="why-passiton" ref={ref}>
            <div className={styles.container}>
                {/* Section Header */}
                <div
                    className={`${styles.header} ${isVisible ? styles.visible : ""}`}
                >
                    <h2 className={styles.title}>Why Passiton?</h2>
                    <p className={styles.subtitle}>
                        A simple way to share, connect, and make a difference
                    </p>
                </div>

                {/* Feature Cards Grid */}
                <div className={styles.grid}>
                    {features.map((feature, index) => (
                        <div
                            key={feature.id}
                            className={`${styles.cardWrapper} ${isVisible ? styles.visible : ""}`}
                            style={{ animationDelay: `${(index + 1) * 150}ms` }}
                        >
                            <Card variant="feature">
                                <div className={styles.iconWrapper}>
                                    <feature.icon size={32} color="white" />
                                </div>
                                <h3 className={styles.cardTitle}>{feature.title}</h3>
                                <p className={styles.cardDescription}>{feature.description}</p>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyPassiton;
