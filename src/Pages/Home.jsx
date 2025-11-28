import React from 'react'
import Header from '../Components/Header'
import Hero from '../Components/Hero'
import { Foters } from '../Components/Foters'

const Home = () => {
    return (
        <div>


            <div className="fixed top-0 left-5 h-screen w-[1.3px] bg-[#008187] z-50"></div>

            {/* Правая линия */}
            <div className="fixed top-0 right-5 h-screen w-[1.3px] bg-[#008187] z-50"></div>
            <div className='pt-[190px] max-w-full w-[90%] mx-auto'>
                <Header />
                <Hero />
                <Foters/>
            </div>

        </div>
    )
}

export default Home