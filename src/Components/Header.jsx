import React, { useState } from 'react'
import { motion } from "framer-motion";
import logo1 from '../assets/svg_logo_company.svg';

const Header = () => {

    const navItems = ["Example", "Example", "Example"];
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [underlineProps, setUnderlineProps] = useState({ width: 0, left: 0 });

    const handleMouseEnter = (e, index) => {
        const { offsetWidth, offsetLeft } = e.target;
        setHoveredIndex(index);
        setUnderlineProps({ width: offsetWidth, left: offsetLeft });
    };

    const handleMouseLeave = () => {
        setHoveredIndex(null);
    };

    return (
        <motion.header
            initial={{ y: -140, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className='fixed top-0 left-1/2 -translate-x-1/2 w-[90%] bg-gradient-to-l from-[#004D57] to-[#017686] rounded-b-[15px] shadow-lg'
        >
            <div className="header-wrapper flex items-center justify-between px-[20px] py-[10px]">
                <motion.img
                    src={logo1}
                    className="w-[120px] cursor-pointer"
                    whileHover={{
                        scale: [1, 1.4, 1],
                    }}
                    transition={{
                        duration: 1.2,
                        ease: "easeOut",
                        repeat: Infinity
                    }}
                />

                <nav className="relative w-full flex justify-center mt-10">
                    <ul className="flex gap-10 relative">
                        {navItems.map((item, index) => (
                            <li
                                key={index}
                                className="text-white text-xl cursor-pointer relative"
                                onMouseEnter={(e) => handleMouseEnter(e, index)}
                                onMouseLeave={handleMouseLeave}
                            >
                                {item}
                            </li>
                        ))}

                        {/* Линия-подчеркивание */}
                        <motion.div
                            layout
                            className="absolute bottom-[-3px] h-[3px] bg-white rounded-[8px]"
                            initial={false}
                            animate={{
                                width: underlineProps.width,
                                x: underlineProps.left,
                            }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                    </ul>
                </nav>


                <motion.button
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="px-6 py-2 rounded-[10px] font-bold text-white
             bg-gradient-to-r from-[#004D57] to-[#00e1ff]
             hover:from-[#006a7a] hover:to-[#00ffff]
             shadow-lg focus:outline-none"
                >
                    Example
                </motion.button>

            </div>
        </motion.header>
    );
};

export default Header;
