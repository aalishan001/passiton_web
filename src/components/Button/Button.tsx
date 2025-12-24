/**
 * Button Component
 * A versatile, animated button component with multiple variants
 * 
 * Variants:
 * - primary: Solid green background, white text
 * - secondary: Outlined green border
 * - app-store: App Store download button style
 * - play-store: Google Play download button style
 */
import React from "react";
import styles from "./Button.module.css";

interface ButtonProps {
    children: React.ReactNode;
    variant?: "primary" | "secondary" | "app-store" | "play-store";
    href?: string;
    onClick?: () => void;
    className?: string;
    icon?: React.ReactNode;
    ariaLabel?: string;
}

export const Button: React.FC<ButtonProps> = ({
    children,
    variant = "primary",
    href,
    onClick,
    className = "",
    icon,
    ariaLabel,
}) => {
    const buttonClass = `${styles.button} ${styles[variant]} ${className}`;

    // Render as anchor if href is provided, otherwise as button
    if (href) {
        return (
            <a
                href={href}
                className={buttonClass}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={ariaLabel}
            >
                {icon && <span className={styles.icon}>{icon}</span>}
                <span className={styles.content}>{children}</span>
            </a>
        );
    }

    return (
        <button className={buttonClass} onClick={onClick} aria-label={ariaLabel}>
            {icon && <span className={styles.icon}>{icon}</span>}
            <span className={styles.content}>{children}</span>
        </button>
    );
};

export default Button;
