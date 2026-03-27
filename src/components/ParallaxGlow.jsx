// import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';


// function ParallaxGlow({ scrollTargetRef, side = 'right', className = '' }) {
//     const reduce = useReducedMotion();
//     const { scrollYProgress } = useScroll({
//         target: scrollTargetRef,
//         offset: ['start end', 'end start'],
//     });
//     const y = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [36, -36]);

//     const pos =
//         side === 'left'
//             ? 'left-[-18%] top-[8%]'
//             : side === 'center'
//                 ? 'left-1/2 top-1/3 -translate-x-1/2'
//                 : 'right-[-14%] top-[12%]';

//     return (
//         <div className={`hidden not-last:pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden>
//             <motion.div
//                 className={`absolute ${pos} h-[min(22rem,55vw)] w-[min(22rem,55vw)] rounded-full opacity-[0.38] blur-[100px] md:opacity-[0.42]`}
//                 style={{
//                     y,
//                     background:
//                         'radial-gradient(circle at 30% 30%, var(--mesh-1), transparent 62%), radial-gradient(circle at 70% 70%, var(--mesh-2), transparent 55%)',
//                 }}
//             />
//         </div>
//     );
// }

// export default ParallaxGlow;
