import React from 'react'

const NavBar = () => {
    return (
        <div className='flex justify-center items-center z-50'>
            <header className='bg-[#000000d3] sm:rounded-3xl text-white fixed top-0 sm:top-4 h-15 w-screen sm:w-[80%] z-20'>
                <div className="mx-auto py-2 sm:py-0 px-5">
                    <nav className='flex justify-between items-center '>

                        <h1 className='text-[1.8rem] sm:text-[2.5rem] font-[Black_And_White_Picture] tracking-widest sm:ml-5 cursor-default'>BV</h1>

                        <ul className='flex list-none gap-2 sm:gap-8 items-center'>
                            <li><a className='py-1 sm:px-4  rounded hover:bg-[rgba(255,255,255,0.1)] transition duration-300 ease' href="#home">Home</a></li>
                            <li><a className='py-1 sm:px-4  rounded hover:bg-[rgba(255,255,255,0.1)] transition duration-300 ease' href="#menu">Menu</a></li>
                            <li><a className='py-1 sm:px-4  rounded hover:bg-[rgba(255,255,255,0.1)] transition duration-300 ease' href="#about">About</a></li>
                            <li><a className='py-1 sm:px-4  rounded hover:bg-[rgba(255,255,255,0.1)] transition duration-300 ease' href="#contact">Contact</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
        </div>
    )
}

export default NavBar
















