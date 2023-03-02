import {AiOutlineMenu, AiOutlineSearch} from 'react-icons/ai';
import { BsFillCartFill} from 'react-icons/bs';

import { useState } from 'react';

import Navbar from './Navbar';


    const Header = () => {

        const [nav, setNav] = useState(false)
   

        const setMenu = (e) => {
            setNav(!nav)
        }

        return (
            <header className='max-w-[1240px] mx-auto flex justify-between items-center p-4'>

                {/* left side header */}
                <div className='flex items-center'>

                    {/* burger menu */}
                    <div className='cursor-pointer' onClick={setMenu} id="burgerMenu">
                        <AiOutlineMenu size={30} />
                    </div>

                    {/* title */}
                    <h1 className='text-2xl sm:text-3xl lg:text-4xl px-2'>
                        Best
                        <span className='font-bold'> Eats</span>
                    </h1>
                    
                    {/* deliver buttons */}
                    <div className='hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]'>
                        <p className='bg-black text-white rounded-full p-2'>Delivery</p>
                        <p className='p-2'>Pickup</p>
                    </div>
                </div>

                {/* Search input */}
                <div className='bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]'>
                    <AiOutlineSearch size={20} />
                    <input className='bg-transparent p-2 focus:outline-none w-full' type="text" placeholder='Search food' />
                </div>

                {/* cart btn */}
                <div className='text-white hidden md:block '>
                    <button className='bg-black flex items-center py-2 gap-2 rounded-full'>
                        <BsFillCartFill size={20} />
                        Cart
                    </button>
                </div>

                {/* Overlay on full screen when menu is opened */}
                {!nav ? '' : <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0 duration-500'></div>}

                {/* navigatio nemu */}
                <Navbar nav={nav} setMenu={setMenu}/>
            </header>
        )
    }

export default Header