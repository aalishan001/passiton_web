/**
 * Card Component
 * A flexible card component for feature sections
 * Features subtle hover animations and clean design
 */
import React from "react";
import styles from "./Card.module.css";

interface CardProps {
    children: React.ReactNode;
    icon?: React.ReactNode;
    title?: string;
    description?: string;
    className?: string;
    variant?: "default" | "feature" | "step";
    stepNumber?: number;
}

export const Card: React.FC<CardProps> = ({
    children,
    icon,
    title,
    description,
    className = "",
    variant = "default",
    stepNumber,
}) => {
    const cardClass = `${styles.card} ${styles[variant]} ${className}`;

    // For step variant, show step number
    if (variant === "step") {
        return (
            <div className={cardClass}>
                {stepNumber && (
                    <div className={styles.stepNumber}>
                        <span>{stepNumber}</span>
                    </div>
                )}
                {icon && <div className={styles.stepIcon}>{icon}</div>}
                <div className={styles.content}>
                    {title && <h3 className={styles.title}>{title}</h3>}
                    {description && <p className={styles.description}>{description}</p>}
                    {children}
                </div>
            </div>
        );
    }

    // Default and feature variants
    return (
        <div className={cardClass}>
            {icon && <div className={styles.icon}>{icon}</div>}
            <div className={styles.content}>
                {title && <h3 className={styles.title}>{title}</h3>}
                {description && <p className={styles.description}>{description}</p>}
                {children}
            </div>
        </div>
    );
};

export default Card;
