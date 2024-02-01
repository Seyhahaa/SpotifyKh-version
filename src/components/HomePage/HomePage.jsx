import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

function getWindowSize(){
    const innerWidth = window.innerWidth;
    return innerWidth;
}

function HomePage() {

    const [width,setWidth]= useState(getWindowSize());
    const [openSidebar,setOpenSidebar] = useState(false);

    useEffect(()=>{
        function handlewindowSize(){
            setWidth(getWindowSize());
        }
        window.addEventListener("resize",handlewindowSize);
        
        return () => {
            window.removeEventListener("resize",handlewindowSize);
        }
    },[]);
    console.log(width);
    useEffect(()=>{
        if(width<1024){
            setOpenSidebar(false)
        }else{
            setOpenSidebar(true)
        }
    },[width]);



    return (
        <div className='h-screen p-2 bg-black text-white flex flex-col overflow-y-hidden justify-between'>
            <div className='max-w-full h-full flex gap-2 overflow-hidden mb-[5rem]'>
                <Sidebar openSidebar={openSidebar} setOpenSidebar={setOpenSidebar}/>
                <div className='w-full'>
                <Navbar setOpenSidebar={setOpenSidebar} openSidebar={openSidebar}/> 
                    main content
                </div>
            </div>
        </div>
    )
}

export default HomePage