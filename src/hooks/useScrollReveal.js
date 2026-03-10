import { useRef, useState, useEffect } from 'react';

/**
 * Reveal animation triggered via IntersectionObserver.
 * Returns [ref, isActive].
 */
export function useScrollReveal(options = {}) {
    const ref = useRef(null);
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsActive(true);
                    if (options.once !== false) observer.unobserve(el);
                } else if (options.once === false) {
                    setIsActive(false);
                }
            },
            {
                threshold: options.threshold ?? 0.15,
                rootMargin: options.rootMargin ?? '0px 0px -60px 0px',
            }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return [ref, isActive];
}

/**
 * Tracks overall page scroll progress (0–100).
 */
export function useScrollProgress() {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const handle = () => {
            const top = window.scrollY;
            const total = document.documentElement.scrollHeight - window.innerHeight;
            setProgress(total > 0 ? (top / total) * 100 : 0);
        };
        window.addEventListener('scroll', handle, { passive: true });
        handle();
        return () => window.removeEventListener('scroll', handle);
    }, []);

    return progress;
}
