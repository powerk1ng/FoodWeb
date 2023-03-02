import { AiOutlineClose, AiFillTag } from 'react-icons/ai';
import { BsFillQuestionCircleFill, BsFillSaveFill } from 'react-icons/bs';
import { TbTruckDelivery } from 'react-icons/tb';
import { MdFavorite } from 'react-icons/md'
import { FaUserFriends, FaWallet } from 'react-icons/fa';

import {useEffect} from 'react';

const Navbar = ({ nav, setMenu }) => {
    
    useEffect(() => {
        const handleClickOutside = (e) => {
          if (!nav) {
            return;
          }

          if (!e.target.closest('#burgerMenu') && !e.target.closest('#navigation-menu') || e.target.closest('.nav li')) {
            setMenu();
          }
        };
    
        window.addEventListener('click', handleClickOutside);
    
        return () => {
          window.removeEventListener('click', handleClickOutside);
        };
      }, [nav]);


    const navClass = `fixed top-0 w-[300px] h-screen bg-white z-10 transition-all duration-500 ${nav ? 'left-0' : 'left-[-100%]'}`
    
    return (
        <div className={navClass} id="navigation-menu">

            {/* closing menu */ }
            < AiOutlineClose onClick={setMenu} size={30} className="absolute xl:right-4 max-xl:left-4 top-4 cursor-pointer" />

            {/* title */ }
            <h2 className='text-2xl p-4 max-xl:text-center'>
                Best <span className='font-bold'> Eats</span>
            </h2>

             {/* nav-menu */ }
            <nav className='nav'>
                <ul className='flex flex-col p-4 text-gray-800'>
                <li className='text-xl py-4 flex'>
                    <TbTruckDelivery size={25} className="mr-4" />
                    Orders
                </li>
                <li className='text-xl py-4 flex'>
                    <MdFavorite size={25} className="mr-4" />
                    Favourites
                </li>
                <li className='text-xl py-4 flex'>
                    <FaWallet size={25} className="mr-4" />
                    Wallet
                </li>
                <li className='text-xl py-4 flex'>
                    <BsFillQuestionCircleFill size={25} className="mr-4" />
                    Help
                </li>
                <li className='text-xl py-4 flex'>
                    <AiFillTag size={25} className="mr-4" />
                    Promotions
                </li>
                <li className='text-xl py-4 flex'>
                    <BsFillSaveFill size={25} className="mr-4" />
                    Best Orders
                </li>
                <li className='text-xl py-4 flex'>
                    <FaUserFriends size={25} className="mr-4" />
                    Invite Friends
                </li>
            </ul>
         </nav>
        </div>
    )
}

export default Navbar








   
   
       