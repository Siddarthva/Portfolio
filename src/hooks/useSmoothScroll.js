import { useEffect } from 'react';
import Lenis from 'lenis';

/**
 * Initialises Lenis smooth scroll.
 * Uses exponential easing for Apple-like momentum.
 * Exposes the instance on window.__lenis for programmatic scroll-to.
 */
export function useSmoothScroll() {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            touchMultiplier: 2,
            infinite: false,
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);

        // Allow programmatic scrollTo from other components
        window.__lenis = lenis;

        return () => {
            lenis.destroy();
            delete window.__lenis;
        };
    }, []);
}
