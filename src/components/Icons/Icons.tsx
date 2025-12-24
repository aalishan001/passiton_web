/**
 * Icons Component
 * Custom SVG icons for the Passiton landing page
 * All icons are designed to match the green, friendly aesthetic
 */
import React from "react";

interface IconProps {
    size?: number;
    color?: string;
    className?: string;
}

// Passiton Logo - A stylized leaf/hand combination
export const PassitonLogo: React.FC<IconProps> = ({
    size = 40,
    color = "currentColor",
    className,
}) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
        <circle cx="20" cy="20" r="18" fill={color} opacity="0.1" />
        <path
            d="M20 8C14 8 10 14 10 20C10 26 14 32 20 32C26 32 30 26 30 20"
            stroke={color}
            strokeWidth="2.5"
            strokeLinecap="round"
        />
        <path
            d="M20 14C18 14 16 16 16 20C16 24 18 26 20 26"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
        />
        <path
            d="M24 12L30 8M30 8L32 14M30 8C28 10 26 14 26 18"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

// Recycle Icon - For "Give, Don't Throw" section
export const RecycleIcon: React.FC<IconProps> = ({
    size = 24,
    color = "currentColor",
    className,
}) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
        <path
            d="M7 19L4.5 14.5L7 10H10L8 14H11L7 19Z"
            fill={color}
            opacity="0.2"
        />
        <path
            d="M17 19L14 14H17L19.5 9.5L17 5H10"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M7 19L10 14H7L4.5 9.5L7 5"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M12 5L9 10H15L12 5Z"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

// Heart Icon - For "Feel Good" section
export const HeartIcon: React.FC<IconProps> = ({
    size = 24,
    color = "currentColor",
    className,
}) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
        <path
            d="M12 21C12 21 4 15 4 9.5C4 6.5 6.5 4 9.5 4C11.04 4 12.5 4.99 12 6C11.5 4.99 12.96 4 14.5 4C17.5 4 20 6.5 20 9.5C20 15 12 21 12 21Z"
            fill={color}
            opacity="0.2"
        />
        <path
            d="M12 21C12 21 4 15 4 9.5C4 6.5 6.5 4 9.5 4C11.04 4 12 5.5 12 5.5C12 5.5 12.96 4 14.5 4C17.5 4 20 6.5 20 9.5C20 15 12 21 12 21Z"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

// Location Pin Icon - For "Local & Community" section
export const LocationIcon: React.FC<IconProps> = ({
    size = 24,
    color = "currentColor",
    className,
}) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
        <path
            d="M12 22C12 22 19 16 19 10C19 6.13 15.87 3 12 3C8.13 3 5 6.13 5 10C5 16 12 22 12 22Z"
            fill={color}
            opacity="0.2"
        />
        <path
            d="M12 22C12 22 19 16 19 10C19 6.13 15.87 3 12 3C8.13 3 5 6.13 5 10C5 16 12 22 12 22Z"
            stroke={color}
            strokeWidth="2"
        />
        <circle cx="12" cy="10" r="3" stroke={color} strokeWidth="2" />
    </svg>
);

// Camera Icon - For "List an Item" step
export const CameraIcon: React.FC<IconProps> = ({
    size = 24,
    color = "currentColor",
    className,
}) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
        <path
            d="M3 7C3 5.89 3.89 5 5 5H7L9 3H15L17 5H19C20.11 5 21 5.89 21 7V18C21 19.11 20.11 20 19 20H5C3.89 20 3 19.11 3 18V7Z"
            fill={color}
            opacity="0.2"
        />
        <path
            d="M3 7C3 5.89 3.89 5 5 5H7L9 3H15L17 5H19C20.11 5 21 5.89 21 7V18C21 19.11 20.11 20 19 20H5C3.89 20 3 19.11 3 18V7Z"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <circle cx="12" cy="12" r="4" stroke={color} strokeWidth="2" />
    </svg>
);

// Search Icon - For "Discover" step
export const SearchIcon: React.FC<IconProps> = ({
    size = 24,
    color = "currentColor",
    className,
}) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
        <circle cx="11" cy="11" r="7" fill={color} opacity="0.2" />
        <circle cx="11" cy="11" r="7" stroke={color} strokeWidth="2" />
        <path
            d="M16 16L21 21"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
        />
    </svg>
);

// Chat/Message Icon - For "Connect" step
export const ChatIcon: React.FC<IconProps> = ({
    size = 24,
    color = "currentColor",
    className,
}) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
        <path
            d="M4 6C4 4.89 4.89 4 6 4H18C19.11 4 20 4.89 20 6V14C20 15.11 19.11 16 18 16H8L4 20V6Z"
            fill={color}
            opacity="0.2"
        />
        <path
            d="M4 6C4 4.89 4.89 4 6 4H18C19.11 4 20 4.89 20 6V14C20 15.11 19.11 16 18 16H8L4 20V6Z"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M8 9H16M8 12H12"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
        />
    </svg>
);

// Leaf Icon - For Sustainability section
export const LeafIcon: React.FC<IconProps> = ({
    size = 24,
    color = "currentColor",
    className,
}) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
        <path
            d="M6 21C6 21 8 17 12 13C16 9 20 6 20 6C20 6 18 12 14 16C10 20 6 21 6 21Z"
            fill={color}
            opacity="0.2"
        />
        <path
            d="M6 21C6 21 8 17 12 13C16 9 20 6 20 6C20 6 18 12 14 16C10 20 6 21 6 21Z"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M4 4C4 4 8 8 12 12"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
        />
    </svg>
);

// Check Icon - For Trust section
export const CheckIcon: React.FC<IconProps> = ({
    size = 24,
    color = "currentColor",
    className,
}) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
        <circle cx="12" cy="12" r="10" fill={color} opacity="0.2" />
        <circle cx="12" cy="12" r="10" stroke={color} strokeWidth="2" />
        <path
            d="M8 12L11 15L16 9"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

// Apple Logo for App Store
export const AppleIcon: React.FC<IconProps> = ({
    size = 24,
    color = "currentColor",
    className,
}) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill={color}
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
        <path d="M18.71 19.5C18.12 20.88 17.45 22.18 16.35 23.5C14.92 25.26 13.87 26 12.84 26C12.11 26 11.1 25.56 9.77 25.56C8.35 25.56 7.37 26 6.59 26C5.56 26 4.47 25.18 3.05 23.42C1.5 21.5 0.25 19.04 0.25 16.72C0.25 13.59 2.24 11.94 4.67 11.94C5.95 11.94 7.04 12.5 7.84 12.5C8.56 12.5 9.8 11.87 11.33 11.87C12.02 11.87 14.05 11.94 15.48 13.71C13.13 15.08 13.5 18.77 16.31 19.5C17.14 19.02 17.97 18.15 18.71 16.88V19.5ZM12.03 11.65C11.44 11.78 10.78 11.87 10.09 11.87C9.23 11.87 8.27 11.68 7.27 10.9C8.27 8.79 10.03 7.35 12.33 7.35C12.58 7.35 12.82 7.38 13.05 7.43C13.12 8.94 12.45 10.64 12.03 11.65Z" transform="scale(0.85) translate(1.5, -2)" />
    </svg>
);

// Google Play Logo
export const PlayStoreIcon: React.FC<IconProps> = ({
    size = 24,
    color = "currentColor",
    className,
}) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill={color}
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
        <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 9.99l-2.302 2.302-8.634-8.634z" />
    </svg>
);

// Sparkle Icon - For decorative purposes
export const SparkleIcon: React.FC<IconProps> = ({
    size = 24,
    color = "currentColor",
    className,
}) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
        <path
            d="M12 2L14 8L20 10L14 12L12 18L10 12L4 10L10 8L12 2Z"
            fill={color}
            opacity="0.3"
        />
        <path
            d="M12 2L14 8L20 10L14 12L12 18L10 12L4 10L10 8L12 2Z"
            stroke={color}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

// India Flag Icon
export const IndiaFlagIcon: React.FC<IconProps> = ({
    size = 24,
    className,
}) => (
    <svg
        width={size}
        height={(size * 2) / 3}
        viewBox="0 0 24 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
        <rect width="24" height="5.33" fill="#FF9933" />
        <rect y="5.33" width="24" height="5.34" fill="#FFFFFF" />
        <rect y="10.67" width="24" height="5.33" fill="#138808" />
        <circle cx="12" cy="8" r="2" fill="#000080" />
        <circle cx="12" cy="8" r="1.5" fill="#FFFFFF" />
        <circle cx="12" cy="8" r="0.5" fill="#000080" />
    </svg>
);

// Arrow Right Icon
export const ArrowRightIcon: React.FC<IconProps> = ({
    size = 24,
    color = "currentColor",
    className,
}) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
        <path
            d="M5 12H19M19 12L12 5M19 12L12 19"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

// Globe Icon
export const GlobeIcon: React.FC<IconProps> = ({
    size = 24,
    color = "currentColor",
    className,
}) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
        <circle cx="12" cy="12" r="10" fill={color} opacity="0.2" />
        <circle cx="12" cy="12" r="10" stroke={color} strokeWidth="2" />
        <ellipse cx="12" cy="12" rx="4" ry="10" stroke={color} strokeWidth="2" />
        <path d="M2 12H22" stroke={color} strokeWidth="2" />
    </svg>
);
