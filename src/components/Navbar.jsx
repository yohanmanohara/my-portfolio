import React from 'react'
import { Link } from 'react-router-dom'
import {styles} from '../styles'
import { useState,useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import {logo,menu,close} from '../assets'

const Navbar = () => {
  return (
    <nav className={`${
        styles.paddingX
      } w-full flex items-center py-1 fixed top-0 z-20  bg-primary`}>

 <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
         <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
          >

             <img src={logo} alt='logo' className=' pb-3 pt-2' height={3} width={50}   />
             <p className='text-white text-[18px] font-bold cursor-pointer flex  '>
            YOHAN MANOHARA&nbsp;
            <span className='sm:block hidden'> | Fullstack Developer</span>
          </p>

          </Link>

          
 </div>
    </nav>
  )

}

export default Navbar