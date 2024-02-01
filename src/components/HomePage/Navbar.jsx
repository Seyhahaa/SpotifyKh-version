import React from 'react'
import { MdOutlineArrowBackIosNew, } from "react-icons/md";
import { GrNext } from "react-icons/gr";
import { FaCircleUser } from "react-icons/fa6";
import { MdArrowDropDownCircle } from "react-icons/md";
import { HiOutlineMenuAlt1 } from "react-icons/hi";


function Navbar({setOpenSidebar,openSidebar}) {
  return (
    <div className='bg-slate-800 w-full h-[5rem] flex items-center px-4 justify-between rounded-lg'>
      <div className='flex items-center text-white'>
      <HiOutlineMenuAlt1 className='text-2xl lg:hidden' onClick={()=>setOpenSidebar(!openSidebar)}/>
        <MdOutlineArrowBackIosNew className='bg-gray-800 rounded-full h-10 w-10 p-2 mx-4' />
        <GrNext className='bg-gray-800 rounded-full h-10 w-10 p-2' />
      </div>
      <div className='flex items-center bg-black p-1 rounded-full'>
        <FaCircleUser className='bg-gray-400 p-1 rounded-full h-7 w-7'/>
        <h2 className='ml-4 font-bold'>RBD SOUND</h2>
        <MdArrowDropDownCircle className='ml-2'/>
      </div>
    </div>
  )
}

export default Navbar