import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import { Route, Routes } from 'react-router-dom';
import Home from './Home/Home';

function getWindowSize() {
    const innerWidth = window.innerWidth;
    return innerWidth;
}

function HomePage() {

    const [width, setWidth] = useState(getWindowSize());
    const [openSidebar, setOpenSidebar] = useState(false);

    useEffect(() => {
        function handlewindowSize() {
            setWidth(getWindowSize());
        }
        window.addEventListener("resize", handlewindowSize);

        return () => {
            window.removeEventListener("resize", handlewindowSize);
        }
    }, []);
    console.log(width);
    useEffect(() => {
        if (width < 1024) {
            setOpenSidebar(false)
        } else {
            setOpenSidebar(true)
        }
    }, [width]);



    return (
        <div className='h-screen p-2 bg-black text-white flex overflow-y-hidden justify-between'>
            <div className='max-w-full h-full flex gap-2 overflow-hidden mb-[5rem]'>
                <Sidebar openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />
                <div className='w-full'>
                    <Navbar setOpenSidebar={setOpenSidebar} openSidebar={openSidebar} />
                    <div className='overflow-auto h-full'>
                        <Routes>
                            <Route path='/home' element={<Home />} />
                        </Routes>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage