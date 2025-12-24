/**
 * How It Works Section Component
 * Displays a 3-step process with clean icons and connecting visual elements
 * Features scroll-triggered animations
 */
"use client";

import React from "react";
import styles from "./HowItWorks.module.css";
import { CameraIcon, SearchIcon, ChatIcon } from "@/components/Icons/Icons";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

// Step data
const steps = [
    {
        id: 1,
        icon: CameraIcon,
        title: "List an Item",
        description:
            "Snap a photo, add a short description, and post it — completely free.",
    },
    {
        id: 2,
        icon: SearchIcon,
        title: "Discover Nearby Items",
        description: "Browse items shared by people around you.",
    },
    {
        id: 3,
        icon: ChatIcon,
        title: "Connect & Pass It On",
        description: "Chat, coordinate pickup, and give it a second life.",
    },
];

export const HowItWorks: React.FC = () => {
    const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

    return (
        <section className={styles.section} id="how-it-works" ref={ref}>
            <div className={styles.container}>
                {/* Section Header */}
                <div
                    className={`${styles.header} ${isVisible ? styles.visible : ""}`}
                >
                    <h2 className={styles.title}>How It Works</h2>
                    <p className={styles.subtitle}>
                        Three simple steps to start sharing
                    </p>
                </div>

                {/* Steps */}
                <div className={styles.steps}>
                    {steps.map((step, index) => (
                        <div
                            key={step.id}
                            className={`${styles.step} ${isVisible ? styles.visible : ""}`}
                            style={{ animationDelay: `${(index + 1) * 200}ms` }}
                        >
                            {/* Step Number Badge */}
                            <div className={styles.stepNumber}>
                                <span>{step.id}</span>
                            </div>

                            {/* Step Icon */}
                            <div className={styles.iconWrapper}>
                                <step.icon size={36} color="var(--green-600)" />
                            </div>

                            {/* Step Content */}
                            <div className={styles.content}>
                                <h3 className={styles.stepTitle}>{step.title}</h3>
                                <p className={styles.stepDescription}>{step.description}</p>
                            </div>

                            {/* Connecting Line (not on last item) */}
                            {index < steps.length - 1 && (
                                <div className={styles.connector}>
                                    <div className={styles.connectorLine} />
                                    <div className={styles.connectorArrow} />
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
