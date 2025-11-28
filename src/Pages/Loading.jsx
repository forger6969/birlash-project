import React from 'react'
import { motion } from "framer-motion"
import logo from '../assets/svg_logo_company.svg'

const Loading = () => {
    return (
        <div className='bg-gradient-to-l from-[#004D57] to-[#017686] flex justify-center items-center w-[100vw] h-[100vh]'>

            <motion.img
                src={logo}
                alt="logo"
                className="w-[300px]"
                animate={{
                    scale: [1, 1.15, 1, 1.15, 1],   // ритм сердца
                }}
                transition={{
                    duration: 1.6,                 // скорость сердцебиения
                    repeat: Infinity,              // бесконечно
                    ease: "easeInOut",
                }}
            />

        </div>
    )
}

export default Loading
