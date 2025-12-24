/**
 * Trust Section Component
 * Displays key trust indicators with clean bullet points
 * Simple, Safe, Free messaging
 */
"use client";

import React from "react";
import styles from "./Trust.module.css";
import { CheckIcon, IndiaFlagIcon } from "@/components/Icons/Icons";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

// Trust points data
const trustPoints = [
    {
        id: 1,
        text: "No buying or selling",
        description: "Pure giving — no transactions, no expectations",
    },
    {
        id: 2,
        text: "No hidden charges",
        description: "Completely free to use, always",
    },
    {
        id: 3,
        text: "Community guidelines for safety",
        description: "Safe meetups and respectful interactions",
    },
    {
        id: 4,
        text: "Built in India",
        hasFlag: true,
        description: "Made with love for Indian communities",
    },
];

export const Trust: React.FC = () => {
    const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

    return (
        <section className={styles.section} id="trust" ref={ref}>
            <div className={styles.container}>
                <div className={`${styles.content} ${isVisible ? styles.visible : ""}`}>
                    {/* Header */}
                    <h2 className={styles.title}>Simple. Safe. Free.</h2>
                    <p className={styles.subtitle}>
                        Built on trust and designed for everyone
                    </p>

                    {/* Trust Points */}
                    <ul className={styles.list}>
                        {trustPoints.map((point, index) => (
                            <li
                                key={point.id}
                                className={`${styles.item} ${isVisible ? styles.visible : ""}`}
                                style={{ animationDelay: `${(index + 1) * 100}ms` }}
                            >
                                <div className={styles.checkWrapper}>
                                    <CheckIcon size={24} color="var(--green-500)" />
                                </div>
                                <div className={styles.itemContent}>
                                    <div className={styles.itemHeader}>
                                        <span className={styles.itemText}>{point.text}</span>
                                        {point.hasFlag && (
                                            <span className={styles.flag}>🇮🇳</span>
                                        )}
                                    </div>
                                    <span className={styles.itemDescription}>
                                        {point.description}
                                    </span>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Trust;
