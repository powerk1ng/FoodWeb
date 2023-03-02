import { AiOutlineMenu, AiOutlineSearch } from 'react-icons/ai';
import { BsFillCartFill } from 'react-icons/bs';

import { useState, useEffect } from 'react';

import Navbar from './Navbar';
import { data } from '../assets/data';

const Header = () => {

    const [nav, setNav] = useState(false)
    const [value, setValue] = useState('')
    const [food, setFood] = useState(data)

    const setMenu = (e) => {
        setNav(!nav)
    }

    const inpSearch = (e) => {
        const searchValue = e.target.value.trim();
        setValue(searchValue);
        const filteredData = data.filter(
          (item) => item.name.toLowerCase().includes(searchValue.toLowerCase())
        );
        setFood(filteredData);
      };




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
            <div className='bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px] relative'>
                <AiOutlineSearch size={20} />
                <input
                    onChange={inpSearch}
                    value={value}
                    className='bg-transparent p-2 focus:outline-none w-full'
                    type="text"
                    placeholder='Search food' />

                {food.length === 0 ? (
                    <div className="absolute top-14 w-full z-20 bg-white rounded-md p-4 border-2 border-gray-200 text-center font-semibold">
                        Nothing Found :/
                    </div>
                ) : (
                    <div className={`absolute top-14 w-full z-20 bg-white rounded-md ${food.length > 0 ? 'block' : 'hidden'}`}>
                        {food.length === 0 ? (
                            <div className="absolute top-14 w-full z-20 bg-white rounded-md p-4">
                                Nothing Found :/
                            </div>
                        ) : (
                            <div className={`absolute top-14 w-full z-20 bg-white rounded-md pb-4 px-4 max-md:right-[20px] max-sm:right-0 max-sm:left-[-65%] max-sm:w-[300px] ${value === '' ? 'hidden' : 'block'}`}>
                                {food.slice(0,5).map((item) => (
                                    <div
                                        key={item.id}
                                        className="flex items-center gap-2 py-4 text-black border-b border-gray-100 cursor-pointer hover:text-blue-600 duration-200"
                                    >
                                        <img
                                            className="h-16 w-16 object-cover rounded-md"
                                            src={item.image}
                                            alt={item.name}
                                        />
                                        <div>
                                            <p className="font-bold">{item.name}</p>
                                            <p>{item.price}</p>
                                        </div>
                                    </div>
                                ))}
                                 <p className={`p-3 border-2 text-center  border-blue-400 hover:bg-blue-500 hover:text-white font-bold duration-300 cursor-pointer ${food.length < 5 ? 'hidden' : 'block'} `}>See All results ({food.length})</p>
                            </div>
                        )}
                    </div>
                )}
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
            <Navbar nav={nav} setMenu={setMenu} />
        </header>
    )
}

export default Header