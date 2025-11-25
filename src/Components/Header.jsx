import React from 'react'
import { motion } from "framer-motion";
import logo1 from '../assets/svg_logo_company.svg';

const Header = () => {
    return (
        <motion.header
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className='fixed top-5 left-1/2 -translate-x-1/2 w-[90%] bg-gradient-to-l from-[#004D57] to-[#017686] rounded-[15px] shadow-lg'
        >
            <div className="header-wrapper flex items-center justify-between px-[20px] py-[10px]">
                <motion.img
                    src={logo1}
                    className="w-[120px] cursor-pointer"
                    whileHover={{
                        scale: [1, 1.2, 1],     // эффект сердцебиения
                    }}
                    transition={{
                        duration: 0.5,
                        ease: "easeInOut",
                        repeat: 1               // два удара можно сделать repeat: 2
                    }}
                />

                <nav>
                    <ul className='flex items-center gap-[35px] text-white'>
                        <li>BIRLASH</li>
                        <li>ABOUT</li>
                        <li>CONTACT</li>
                    </ul>
                </nav>

                <button className='text-white'>Example</button>
            </div>
        </motion.header>
    );
};

export default Header;
