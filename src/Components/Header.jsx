import React from 'react'
import logo from '../assets/company_logo.png'
import logo1 from '../assets/svg_logo_company.svg'
import { motion } from 'framer-motion'

const Header = () => {
    return (
        <div>
            <header className='fixed top-5 left-1/2 -translate-x-1/2 w-[90%] bg-gradient-to-l from-[#004D57] to-[#017686] rounded-[15px]'>
                <div className="header-wrapper flex items-center justify-between px-[20px]">
                    <img className='w-[150px]' src={logo1} alt="" />

                    <nav>
                        <ul className='flex items-center gap-[35px]'>
                            <motion.li
                                className="relative w-[100px] h-[30px] overflow-hidden cursor-pointer"
                                initial="initial"
                                whileHover="hover"
                            >
                                {/* Исчезающий текст */}
                                <motion.div
                                    className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-white"
                                    variants={{
                                        initial: { y: 0 },
                                        hover: { y: "-100%" }
                                    }}
                                    transition={{ duration: 0.35, ease: "easeInOut" }}
                                >
                                    BIRLASH
                                </motion.div>

                                {/* Появляющийся текст снизу */}
                                <motion.div
                                    className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-white"
                                    variants={{
                                        initial: { y: "100%" },
                                        hover: { y: 0 }
                                    }}
                                    transition={{ duration: 0.35, ease: "easeInOut" }}
                                >
                                    BIRLASH
                                </motion.div>
                            </motion.li>
                        </ul>
                    </nav>

                    <button>Example</button>
                </div>
            </header>
        </div>
    )
}

export default Header