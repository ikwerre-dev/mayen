"use client"

import Image from 'next/image';
import Button from './Button';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Hero() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.8]);

    return (
        <section ref={ref} className="relative py-[12rem] md:py-[15rem] flex items-center overflow-hidden">
            <motion.div
                className="absolute inset-0 z-0"
                style={{ scale }}
            >
                <Image
                    src="/hero.png"
                    alt="Hero Background"
                    fill
                    priority
                    className="object-cover"
                />
            </motion.div>
            <div className="absolute inset-0 bg-[#020F33]/71"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center text-white"
                >
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-4xl md:text-6xl font-bold mb-6"
                    >
                        Empowering Communities<br />Through Sustainable Change
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-lg md:text-xl mb-8 max-w-3xl mx-auto"
                    >
                        Join us in our mission to create lasting impact and transform lives across Africa
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="flex justify-center gap-4"
                    >
                        <Button variant="primary">GET INVOLVED</Button>
                        <Button variant="whiteoutline">LEARN MORE</Button>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}