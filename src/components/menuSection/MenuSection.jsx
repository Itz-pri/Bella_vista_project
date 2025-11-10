import React from 'react'
import AllMenuSection from './AllMenuSection'
import { createContext } from 'react'

const MenuSection = () => {
    return (
        <section className='bg-[#e3eaf3] h-screen w-screen pt-22'>

            <div className="flex flex-col items-center">
                {/* <h3 className='text-3xl mt-5 font-semibold'>Menu</h3> */}
                <h4 className='text-4xl font-[Parisienne]'>Our Signature Dishes</h4>
            </div>

            <div className=" h-[70vh] w-full flex justify-center items-center ">

                <div className=" p-5 h-[62vh] w-[80vw] overflow-y-scroll sm:overflow-y-visible sm:grid sm:grid-cols-2 sm:gap-5">

                    <div className="h-[300px] w-full mb-5 sm:mb-0  rounded-3xl relative overflow-hidden transition duration-400 hover:-translate-y-2 cursor-pointer">
                        <img

                            className='absolute h-[300px] w-full object-cover'

                            src="https://images.unsplash.com/photo-1564936281291-294551497d81?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8TWFyZ2hlcml0YSUyMFBpenphfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500" />

                        <div className="w-full h-full top-0 left-0 absolute bg-linear-to-t from-black to-transparent flex justify-end items-center flex-col opacity-0 transition duration-[0.6s] hover:opacity-100 translate-y-6 hover:translate-y-0">

                            <h4 className='text-2xl text-white mb-4 cursor-pointer'>Margherita Pizza</h4>
                            <p className='text-[1rem] text-white text-center mb-5 w-90 cursor-pointer'>Classic Neapolitan pizza with fresh mozzarella, tomato sauce, and basil.</p>
                        </div>
                    </div>

                    <div className="h-[300px] w-full mb-5 sm:mb-0 rounded-3xl relative overflow-hidden transition duration-400 hover:-translate-y-2 cursor-pointer">
                        <img

                            className='absolute h-[300px] w-full object-cover'

                            src="https://images.unsplash.com/photo-1633285874195-b4c5dd4caace?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJydXNjaGV0dGF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500" />

                        <div className="w-full h-full top-0 left-0 absolute bg-linear-to-t from-black to-transparent flex justify-end items-center flex-col opacity-0 transition duration-[0.6s] hover:opacity-100 translate-y-6 hover:translate-y-0">

                            <h4 className='text-2xl text-white mb-4 cursor-pointer'>Bruschetta Italiana</h4>
                            <p className='text-[1rem] text-white text-center mb-5 w-90 cursor-pointer'>Fresh tomatoes, basil, and mozzerella on toasted bread.</p>
                        </div>
                    </div>

                    <div className="h-[300px] w-full mb-5 sm:mb-0 rounded-3xl relative overflow-hidden transition duration-400 hover:-translate-y-2 cursor-pointer">
                        <img

                            className='absolute h-[300px] w-full object-cover'

                            src="https://images.unsplash.com/photo-1633337474564-1d9478ca4e2e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3BhZ2hldHRpJTIwY2FyYm9uYXJhfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500" />

                        <div className="w-full h-full top-0 left-0 absolute bg-linear-to-t from-black to-transparent flex justify-end items-center flex-col opacity-0 transition duration-[0.6s] hover:opacity-100 translate-y-6 hover:translate-y-0">

                            <h4 className='text-2xl text-white mb-4 cursor-pointer'>Spaghetti Carbonara</h4>
                            <p className='text-[1rem] text-white text-center mb-5 w-90 cursor-pointer'>Creamy spaghetti tossed with eggs, Pecorino Romano cheese, crispy pancetta, and cracked black pepper.</p>
                        </div>
                    </div>

                    <div className="h-[300px] w-full mb-5 sm:mb-0 rounded-3xl relative overflow-hidden transition duration-400 hover:-translate-y-2 cursor-pointer">
                        <img

                            className='absolute h-[300px] w-full object-cover'

                            src="https://images.unsplash.com/photo-1628079251261-624e723b7326?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8RmV0dHVjY2luZSUyMEFsZnJlZG98ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500" />

                        <div className="w-full h-full top-0 left-0 absolute bg-linear-to-t from-black to-transparent flex justify-end items-center flex-col opacity-0 transition duration-[0.6s] hover:opacity-100 translate-y-6 hover:translate-y-0">

                            <h4 className='text-2xl text-white mb-4 cursor-pointer'>Fettuccine Alfredo</h4>
                            <p className='text-[1rem] text-white text-center mb-5 w-90 cursor-pointer'>Ribbon pasta coated in a velvety sauce of butter, cream, and Parmesan cheese</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className=" flex items-center flex-col h-50">

                <h4 className="text-xl mb-5 cursor-default text-center p-5">Craving more? Check out the complete menu and find your next fovorite!</h4>
                <button className="bg-(--primary-color) hover:bg-[#cf3a2a] text-white px-5 py-2 rounded-3xl cursor-pointer ">View our complete menu</button>

            </div>

        </section >
    )
}

export default MenuSection
































{/* <div className=" h-[50vh] overflow-x-scroll px-5 ">
    <div className=' '>
    <div className='grid-col-2 cursor-pointer sm:grid-cols-4 md:grid-cols-3 grid gap-6 justify-center '>
    
    <div className='shadow-xl py-3 rounded-xl'>
    <div className='p-5'>
    <img className='w-lg h-70 mb-5 rounded-2xl object-cover' src="https://images.unsplash.com/photo-1564936281291-294551497d81?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8TWFyZ2hlcml0YSUyMFBpenphfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500" alt="" srcset="" />
    </div>
    <div className="flex justify-between px-10 items-center">
    <div className="w-2xs">
    <h4 className='font-semibold mb-2 text-xl'>Margherita Pizza</h4>
    <p>Classic Neapolitan pizza with fresh mozzarella, tomato sauce, and basil.</p>
    </div>
    <span className='text-(--primary-color)'>$12</span>
    </div>
    </div>
    
    <div className='shadow-xl py-3 rounded-xl'>
    <div className='p-5'>
    <img className='w-lg h-70 mb-5 rounded-2xl object-cover' src="https://images.unsplash.com/photo-1633285874195-b4c5dd4caace?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJydXNjaGV0dGF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500" alt="" srcset="" />
    </div>
    <div className="flex justify-between px-10 items-center">
    <div className="w-2xs">
    <h4 className='font-semibold mb-2 text-xl'>Bruschetta Italiana</h4>
    <p>Fresh tomatoes, basil, and mozzerella on toasted bread.</p>
    </div>
    <span className='text-(--primary-color)'>$15</span>
    </div>
    </div>
    
    <div className='shadow-xl py-3 rounded-xl'>
    <div className='p-5'>
    <img className='w-lg h-70 mb-5 rounded-2xl object-cover'
    src="https://images.unsplash.com/photo-1633337474564-1d9478ca4e2e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3BhZ2hldHRpJTIwY2FyYm9uYXJhfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500" alt="" srcset="" />
    </div>
    <div className="flex justify-between px-10 items-center">
    <div className="w-2xs">
    <h4 className='font-semibold mb-2 text-xl'>Spaghetti Carbonara</h4>
    <p>Creamy spaghetti tossed with eggs, Pecorino Romano cheese, crispy pancetta, and cracked black pepper.</p>
    </div>
    <span className='text-(--primary-color)'>$18</span>
    </div>
    </div>
    </div>
    </div>
    </div> */}









{/* <div className="overflow-hidden relative rounded-3xl">
    <img className='w-[500px] h-[380px] block m-auto hover:scale-100' src="https://images.unsplash.com/photo-1564936281291-294551497d81?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8TWFyZ2hlcml0YSUyMFBpen phfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500" />
    <div className="w-full h-full top-0 left-0 absolute bg-linear-to-t from-black to-transparent flex justify-end items-center flex-col opacity-0 transition duration-[0.6s] hover:opacity-100 translate-y-6 hover:translate-y-0">
        <h4 className='text-2xl text-white mb-4'>Margherita Pizza</h4>
        <p className='text-[1rem] text-white text-center mb-5 w-90'>Classic Neapolitan pizza with fresh mozzarella, tomato sauce, and basil.</p>
    </div>
</div> */}



