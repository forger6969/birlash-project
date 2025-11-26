import React, { useEffect, useRef } from 'react'
import Typed from 'typed.js';

const Slogan = () => {

    const smallTextRef = useRef(null);

    useEffect(() => {
        const typed = new Typed(smallTextRef.current, {
            strings: [
                "tadbirkorlar",
                "hamkorlik",
                "sarmoya",
                "ekotizim",
                `tadbirkorlar,hamkorlik,sarmoya,ekotizim`
            ],
            typeSpeed: 30,
            backSpeed: 25,
            startDelay: 800,
            loop: false,
            showCursor: true,
        });

        return () => typed.destroy(); // ВАЖНО: чистка эффекта
    }, []);

    return (
        <div>
            <p className='bg-gradient-to-r from-[#004D57] to-[#00e1ff] font-bold bg-clip-text text-transparent text-[35px] cursor-pointer transition-all hover:bg-gradient-to-l w-fit'>BIRLASH missiyasi &gt; </p>
            <div className="bg-[#E9ECEF] w-full p-[20px] rounded-[8px] h-[500px]">
                <p className="text-[#C7A964] font-semibold text-[30px] text-center">
                    <span ref={smallTextRef}></span>
                </p>
            </div>
        </div>
    );
};

export default Slogan;
