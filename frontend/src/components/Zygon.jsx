
import React from 'react'

// import "index.css"

// import AllEvent from './AllEvents/AllEvent'

// import { React } from 'react'

const Zygon = () => {
    return (

        <div className=" bg-[url('./invert2.png')] cookie-regular w-screen h-screen bg-cover bg-center text-black md:px-[400px] md:py[50px]"  >
            <div className="!flex ps-3 pt-6">
                <div className="text-6xl md:text-7xl !text-center" style={{ writingMode: "vertical-rl", fontFamily: "Carnival" }}>
                    #2k25
                </div>
                <div className='animate__animated animate__fadeInLeft wow'>
                    <div className='text-7xl md:text-8xl' style={{ fontFamily: "Carnival" }}>
                        ZYGON
                    </div>
                    <div className='text-2xl md:text-4xl text-gray-700' style={{ fontFamily: "Carnival" }}>
                        Spin The Wheel Of Wonders
                    </div>

                </div>
            </div>
            <div className='text-2xl md:text-4xl text-black mt-4 px-5 text-justify animate__animated animate__fadeInUp wow '>
                Silicon University, Bhubaneswar, is set to paint the campus with vibrant hues of creativity and artistic brilliance as Zygon, the annual cultural fest, unfolds on 28th Feb - 1st Mar 2025. A celebration of music, dance, and drama, Zygon is more than just an event—it's an extravaganza that provides students with a dynamic platform to unleash their creative potential and exhibit their artistic talents. With a spirit of enthusiasm and camaraderie, Zygon promises two days of captivating performances, fostering an environment where the campus comes alive with the energy of expression and the joy of cultural diversity.
            </div>
            {/* <AllEvent/> */}

        </div >
    )
}

export default Zygon