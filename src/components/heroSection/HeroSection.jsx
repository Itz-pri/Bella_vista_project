import React from 'react'

const HeroSection = () => {
    return (
        <>
            <section className='h-screen w-full bg-cover bg-center flex items-center justify-center text-center text-white '

                style={{
                    backgroundImage:
                        "linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,1)), url('https://images.unsplash.com/photo-1590691105234-1501411df02e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870d')",
                }}>

                <div className=''> 
                    <h2 className='text-[7rem] sm:text-[15rem] tracking-[2px] font-[Black_And_White_Picture] sm:translate-y-22 -translate-x-2 cursor-default'>Bella</h2>
                    <h2 className='text-[7rem] sm:text-[16rem] tracking-[2px] font-[Black_And_White_Picture] -translate-y-22 cursor-default'>Vista</h2>

                    <p className='text-[0.8rem] sm:text-[1.7rem] font-extralight mx-auto -translate-y-33 sm:-translate-y-47 onest-font tracking-wider cursor-default'>Italian Comfort, Served Fresh.</p>

                </div>
                
                <div className="absolute left-10 bottom-10 h-30 sm:h-40 w-30 sm:w-40 opacity-50">
                    <img src="\src\assets\stamp.svg" alt="" />
                </div>

                <div className=" absolute sm:right-20 right-5 bottom-18 bg-(--primary-color) tracking-wide text-sm sm:text-lg font-semibold px-5 sm:px-10 py-4 rounded-4xl flex gap-2 hover:bg-[#cf3a2a] cursor-pointer">
                    <button className="cursor-pointer onest-font"> Book a Table </button>
                    <img src="\src\assets\beenhere_icon.svg" alt="" srcset="" />
                </div>
            </section>
        </>
    )
}

export default HeroSection










