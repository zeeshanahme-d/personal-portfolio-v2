import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ScrollReveal = ({ children, variants, className }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <motion.div
            ref={ref}
            variants={variants}
            initial="hidden"
            animate={"show"}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export default ScrollReveal;