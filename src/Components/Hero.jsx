import React, { useEffect, useRef, useState } from "react";
import Typed from "typed.js";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import harf from "../assets/company_harf.svg";
import { ChevronRight } from 'lucide-react';

import icon1 from '../assets/business-expense-svgrepo-com.svg'
import icon2 from '../assets/business-finance-corporate-26-svgrepo-com.svg'
import icon3 from '../assets/business-graph-data-svgrepo-com.svg'

const TypingText = () => {
    const el = useRef(null);
    const smallText = useRef(null);
    const [showLogo, setShowLogo] = useState(false);
    const [enableIcons, setEnableIcons] = useState(false);

    // 👉 следим за попаданием Hero в экран
    const { ref: heroRef, inView } = useInView({
        triggerOnce: true,
        threshold: 0.3
    });

    // 👉 отдельный триггер для кнопок
    const { ref: buttonsRef, inView: buttonsInView } = useInView({
        triggerOnce: true,
        threshold: 0.5
    });

    useEffect(() => {
        if (inView) {
            setEnableIcons(true);
        }
    }, [inView]);

    useEffect(() => {
        if (!el.current || !smallText.current) return;

        const typed = new Typed(el.current, {
            strings: ["BIRLASH"],
            typeSpeed: 100,
            startDelay: 200,
            showCursor: true,
            cursorChar: "|",
            onComplete: () => {
                setTimeout(() => {
                    setShowLogo(true);
                }, 1000);
            },
        });

        const typedSmall = new Typed(smallText.current, {
            strings: [
                `BIRLASH — o'sish, hamkorlik va sarmoyaning yangi ekotizimi.
Biz tadbirkorlar uchun to'liq rivojlanish makonini yaratamiz: bilim, amaliyot, sarmoya va xalqaro hamkorlikni birlashtiramiz. BIRLASH — bu odamlar, g'oyalar va imkoniyatlar uchrashadigan markaz.`,
                `Bizning missiyamiz — tadbirkorlar, hamkorlik, sarmoya va ekotizim atrofida birlashgan kuchli biznes hamjamиятni яратиш.
BIRLASH — sizga aniq tizim, real amaliyot va global bozорлар эшигини очадийдиган платформа.`,
                `BIRLASH — o'sish, hamkorlik ва sarmoyaning yangi формати.`
            ],
            typeSpeed: 30,
            backSpeed: 25,
            startDelay: 800,
            loop: true,
            showCursor: true,
        });

        return () => {
            typed.destroy();
            typedSmall.destroy();
        };
    }, []);

    const icons = [
        <div className="bg-gradient-to-l from-[#004D57] to-[#017686] rounded-full p-[5px]">
            <img src={icon1} className="w-[30px]" />
        </div>,
        <div className="bg-gradient-to-l from-[#004D57] to-[#017686] rounded-full p-[5px]">
            <img src={icon2} className="w-[30px]" />
        </div>,
        <div className="bg-gradient-to-l from-[#004D57] to-[#017686] rounded-full p-[5px]">
            <img src={icon3} className="w-[30px]" />
        </div>
    ];

    const positions = [
        { top: "-20px", left: "-80px" },
        { top: "-30px", right: "-70px" },
        { bottom: "-10px", left: "50%" },
    ];

    return (
        <div ref={heroRef} className="relative flex flex-col items-center my-40 transition-all">

            <div className="flex justify-center items-center h-[120px] relative">

                {enableIcons &&
                    icons.map((icon, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.7 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: i * 0.15 }}
                            className="absolute text-white text-[22px]"
                            style={positions[i]}
                        >
                            {icon}
                        </motion.div>
                    ))
                }

                <h1 className="bg-gradient-to-r from-[#004D57] to-[#00e1ff] font-bold bg-clip-text text-transparent text-[100px] flex">
                    <span ref={el}></span>
                </h1>

            </div>

            <p className="text-white text-center mt-6 text-[20px] leading-relaxed w-[60%] mx-auto font-sans font-light">
                <span ref={smallText}></span>
            </p>

            {/* 🔥 Кнопки с scroll trigger */}
            <div ref={buttonsRef} className="flex items-center gap-4 mt-8">

                <motion.button
                    className="px-8 py-4 rounded-full border border-white/20 text-white font-medium text-base flex items-center gap-3 relative overflow-hidden"
                    initial={{
                        opacity: 0,
                        y: 30,
                        backgroundColor: 'transparent',
                    }}
                    animate={buttonsInView ? {
                        opacity: 1,
                        y: 0,
                    } : {}}
                    transition={{
                        duration: 0.6,
                        delay: 0.1,
                        ease: 'easeOut'
                    }}
                    whileHover={{
                        backgroundColor: '#0d7377',
                        borderColor: '#0d7377',
                        boxShadow: '0 4px 15px rgba(13, 115, 119, 0.3)',
                    }}
                >
                    <motion.div
                        initial={{ x: 0 }}
                        whileHover={{ x: 4 }}
                        transition={{ duration: 0.3, ease: 'easeOut' }}
                    >
                        <svg
                            className="w-5 h-5"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M9 18l6-6-6-6" />
                        </svg>
                    </motion.div>
                    <span>Батафсил маълумот олиш</span>
                </motion.button>

                <motion.button
                    className="px-8 py-4 rounded-full border border-white/20 text-white font-medium text-base flex items-center gap-3 relative overflow-hidden"
                    initial={{
                        opacity: 0,
                        y: 30,
                        backgroundColor: 'transparent',
                    }}
                    animate={buttonsInView ? {
                        opacity: 1,
                        y: 0,
                    } : {}}
                    transition={{
                        duration: 0.6,
                        delay: 0.3,
                        ease: 'easeOut'
                    }}
                    whileHover={{
                        backgroundColor: '#0d7377',
                        borderColor: '#0d7377',
                        boxShadow: '0 4px 15px rgba(13, 115, 119, 0.3)',
                    }}
                >
                    <motion.div
                        initial={{ x: 0 }}
                        whileHover={{ x: 4 }}
                        transition={{ duration: 0.3, ease: 'easeOut' }}
                    >
                        <svg
                            className="w-5 h-5"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M9 18l6-6-6-6" />
                        </svg>
                    </motion.div>
                    <span>Миссия</span>
                </motion.button>

            </div>

        </div>
    );
};

export default TypingText;