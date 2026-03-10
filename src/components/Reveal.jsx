import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

/* ── Direction offsets for initial state ── */
const offsets = {
    up: { y: 60 },
    down: { y: -60 },
    left: { x: -60 },
    right: { x: 60 },
    scale: { scale: 0.88 },
    blur: { filter: 'blur(10px)', scale: 0.97 },
    none: {},
};

/**
 * Reveal — viewport-triggered entrance animation.
 * GPU-accelerated: only transform + opacity + filter.
 */
export default function Reveal({
    children,
    direction = 'up',
    delay = 0,
    duration = 0.7,
    className = '',
    once = true,
    threshold = 0.15,
    style,
}) {
    const [ref, inView] = useInView({ threshold, triggerOnce: once });

    return (
        <motion.div
            ref={ref}
            className={className}
            style={style}
            initial={{ opacity: 0, ...offsets[direction] }}
            animate={
                inView
                    ? { opacity: 1, y: 0, x: 0, scale: 1, filter: 'blur(0px)' }
                    : undefined
            }
            transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
        >
            {children}
        </motion.div>
    );
}

/**
 * StaggerContainer — triggers stagger on viewport entry.
 * Wrap StaggerItem children for cascading reveals.
 */
export function StaggerContainer({
    children,
    className = '',
    stagger = 0.08,
    threshold = 0.1,
    style,
}) {
    const [ref, inView] = useInView({ threshold, triggerOnce: true });

    return (
        <motion.div
            ref={ref}
            className={className}
            style={style}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={{
                hidden: {},
                visible: { transition: { staggerChildren: stagger } },
            }}
        >
            {children}
        </motion.div>
    );
}

/**
 * StaggerItem — must be a direct child of StaggerContainer.
 */
export function StaggerItem({ children, className = '', style }) {
    return (
        <motion.div
            className={className}
            style={style}
            variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
                },
            }}
        >
            {children}
        </motion.div>
    );
}
