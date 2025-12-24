/**
 * useScrollAnimation Hook
 * A custom hook that uses Intersection Observer to trigger animations
 * when elements scroll into view
 * 
 * Usage:
 * const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });
 * return <div ref={ref} className={isVisible ? 'visible' : ''}>...</div>
 */
"use client";

import { useEffect, useRef, useState, useCallback } from "react";

interface UseScrollAnimationOptions {
    /** Threshold at which the callback fires (0-1) */
    threshold?: number;
    /** Root margin for the intersection observer */
    rootMargin?: string;
    /** Whether the animation should only trigger once */
    triggerOnce?: boolean;
}

interface UseScrollAnimationReturn {
    /** Ref to attach to the element to observe */
    ref: React.RefObject<HTMLDivElement | null>;
    /** Whether the element is currently visible/intersecting */
    isVisible: boolean;
}

export function useScrollAnimation(
    options: UseScrollAnimationOptions = {}
): UseScrollAnimationReturn {
    const { threshold = 0.1, rootMargin = "0px", triggerOnce = true } = options;

    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);
    const hasTriggered = useRef(false);

    const handleIntersection = useCallback(
        (entries: IntersectionObserverEntry[]) => {
            const [entry] = entries;

            if (entry.isIntersecting) {
                setIsVisible(true);
                if (triggerOnce) {
                    hasTriggered.current = true;
                }
            } else if (!triggerOnce) {
                setIsVisible(false);
            }
        },
        [triggerOnce]
    );

    useEffect(() => {
        const element = ref.current;
        if (!element || (triggerOnce && hasTriggered.current)) return;

        const observer = new IntersectionObserver(handleIntersection, {
            threshold,
            rootMargin,
        });

        observer.observe(element);

        return () => {
            observer.disconnect();
        };
    }, [threshold, rootMargin, triggerOnce, handleIntersection]);

    return { ref, isVisible };
}

/**
 * useStaggeredAnimation Hook
 * Creates staggered animation delays for a list of items
 * 
 * Usage:
 * const delays = useStaggeredAnimation(3, 100);
 * // Returns [0, 100, 200] - delays in ms for 3 items, 100ms apart
 */
export function useStaggeredAnimation(
    itemCount: number,
    delayBetween: number = 100,
    initialDelay: number = 0
): number[] {
    return Array.from(
        { length: itemCount },
        (_, i) => initialDelay + i * delayBetween
    );
}

export default useScrollAnimation;
