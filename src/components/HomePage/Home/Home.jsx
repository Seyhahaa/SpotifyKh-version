import React from 'react'
import { FaPlay } from "react-icons/fa";

function Home() {

    const playList = [1, 2, 3, 4];
    const topMix = [1, 2, 3, 4, 5,6];
    const img = "https://thumbs.amplience.net/r/edcfbf89-1ae9-463e-be6e-3dc9ce035911"
    return (
        <div className='overflow-auto'>
            <h1 className='mt-4 text-lg lg:text-xl font-bold'>Good bye</h1>
            <div className='mt-4 gap-4 grid grid-cols-2 md:grid-cols-3'>
                {
                    playList.map(() => (
                        <div className='h-20 bg-gray-400 overflow-hidden rounded-lg flex items-center justify-between group'>

                            <div className='flex items-center'>
                                <img className='w-20 lg:w-32 object-cover' src={img} alt="" />
                                <h1 className='ml-4 text-lg lg:text-xl font-semibold'>Pop Mix</h1>
                            </div>
                            <div className='bg-green-500 h-14 w-14 rounded-full justify-center items-center mr-4 
                    shadow-md opacity-0 group-hover:opacity-100 duration-300 transition ease-in-out hidden lg:flex'>
                                <FaPlay className='text-2xl' />
                            </div>
                        </div>
                    ))
                }

            </div>
            <h1 className='mt-4 text-lg lg:text-xl font-bold'>Your Top Mix</h1>
            <div className='mt-4 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
                {
                    topMix.map(() => (
                        <div className='h-80 p-4 cursor-pointer rounded-lg hover:bg-gray-800 transition ease-in-out duration-700 relative group'>
                            <img className='h-[60%] object-cover w-full rounded-lg' src={img} alt="" />
                            <div className='bg-green-500 h-12 w-12 rounded-full justify-center items-center mr-4 
                    shadow-md group-hover:opacity-100 duration-300 transition ease-in-out  lg:flex absolute right-3 bottom-24 flex opacity-0 translate-y-4 group-hover:translate-y-0'>
                                <FaPlay className='text-2xl' />
                            </div>
                            <div className='mt-4'>
                                <h1 className='font-bold'>Major Lazer</h1>
                                <p className='text-slate-500 mt-2'>MO, Diplo, And More</p>
                            </div>
                        </div>
                    ))
                }



            </div>
        </div>
    )
}

export default Home