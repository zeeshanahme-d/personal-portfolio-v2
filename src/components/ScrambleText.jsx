import { useEffect, useRef, useState } from 'react';

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&';

/**
 * Renders `text` with a letter-scramble animation before landing on the final value.
 * @param {{ text: string, delay?: number, className?: string, tag?: string }} props
 */
function ScrambleText({ text, delay = 0, className = '', tag: Tag = 'span' }) {
    const [displayed, setDisplayed] = useState(text);
    const frameRef = useRef(null);
    const startedRef = useRef(false);

    // useEffect(() => {
    //     let timeout;
    //     const ITERATIONS = 10; // scramble cycles before resolving each char
    //     const INTERVAL = 40;   // ms between frames

    //     const scramble = () => {
    //         if (startedRef.current) return;
    //         startedRef.current = true;

    //         let frame = 0;
    //         const chars = text.split('');

    //         const run = () => {
    //             const resolved = Math.floor(frame / ITERATIONS);
    //             const current = chars.map((char, i) => {
    //                 if (char === ' ') return ' ';
    //                 if (i < resolved) return char;
    //                 return CHARS[Math.floor(Math.random() * CHARS.length)];
    //             });

    //             setDisplayed(current.join(''));
    //             frame++;

    //             if (resolved < chars.length) {
    //                 frameRef.current = setTimeout(run, INTERVAL);
    //             } else {
    //                 setDisplayed(text);
    //             }
    //         };

    //         run();
    //     };

    //     timeout = setTimeout(scramble, delay);

    //     return () => {
    //         clearTimeout(timeout);
    //         if (frameRef.current) clearTimeout(frameRef.current);
    //     };
    // }, [text, delay]);

    return <Tag className={className}> {displayed}</Tag>;
}

export default ScrambleText;
