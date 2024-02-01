import React from 'react'
import { GrHomeRounded } from "react-icons/gr"
import { Link } from 'react-router-dom'
import { GoSearch } from "react-icons/go";
import { VscLibrary } from "react-icons/vsc";
import { IoClose } from "react-icons/io5";

function Sidebar({openSidebar,setOpenSidebar}) {
  return (
    <div className={`h-full bg-slate-800 w-[15rem] max-w-[15rem] p-5 rounded-lg text-gray-400 group ${!openSidebar && "-translate-x-[15rem]"} transition ease-in-out duration-700 fixed left-0 top-2 lg:static`}>
      <div className='flex items-center justify-between'>
        <img className='w-20' src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_Green.png" alt="" />
        <IoClose className='text-2xl lg:hidden' onClick={()=> setOpenSidebar(!openSidebar)} /> 
      </div>
      <div className='mt-8'>

        <Link>
          <div className='flex items-center mt-4 hover:text-white'>
            <GrHomeRounded className='text-gray-400 text-2xl' />
            <h2 className='font-semibold ml-4'>Home</h2>
          </div>
          <div className='flex items-center mt-4 hover:text-white'>
            <GoSearch className='text-gray-400 text-2xl' />
            <h2 className='font-semibold ml-4'>Search</h2>
          </div>
          <div className='flex items-center mt-4 hover:text-white'>
            <VscLibrary className='text-gray-400 text-2xl' />
            <h2 className='font-semibold ml-4'>Library</h2>
          </div>
          <div className='flex items-center mt-4 hover:text-white'>
            <GrHomeRounded className='text-gray-400 text-2xl' />
            <h2 className='font-semibold ml-4'>Home</h2>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Sidebar