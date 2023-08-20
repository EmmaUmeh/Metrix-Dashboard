"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { BiCategoryAlt } from "react-icons/bi";
import { BsHandbag, BsChatDots, BsChevronRight } from "react-icons/bs";
import { HiOutlineUsers } from "react-icons/hi";
import { AiOutlineSetting, AiOutlineGift } from "react-icons/ai";
import { FiFolderMinus, FiHeadphones } from "react-icons/fi";
import { TbLogout } from "react-icons/tb";
import Link from "next/link";

const Sidenav = () => {
    const [sidetoggle, setSideToggle] = useState(true);
    const [scroll, setScroll] = useState(false);

    
    const handleClick = () => {
        setSideToggle(!sidetoggle)
    }

   const handleScroll = () => {
    if(window.scrollY >= 20) {
        setScroll(true)
    }else{
        setScroll(false)
    }
    
   } 

useEffect(() => {
window.addEventListener("scroll", handleScroll)
return( () => {
 window.removeEventListener("scroll", handleScroll)   
})
},[])


    return (
        <>
        {/* className={`fixed z-2 bg-white w-[296px] pl-7 h-[100vh] sm:hidden md:hidden xl:block ${sidetoggle ? "" : "hidden"
    }`} */}
            {/* ? "fixed z-2 bg-white w-[296px] pl-7 h-[100vh] sm:hidden md:hidden" : "none" */}
            <div className={`sidebar ${
                scroll ? "fixed" : ""
            } ${sidetoggle ? "" : "hidden"} overflow:[hidden] top-0 z-2 bg-white w-[296px] pl-7 pb-20 h-[100%] sm:hidden md:hidden xl:block`}>

                <div className="pl-10 pt-5">
                    <Image
                        src="/Logo.svg"
                        width={150}
                        height={150}
                        alt="logoImage"
                    />
                </div>
                {/* <ToggleButton onClick={handleClick}><BiMenu size={30} color="white" /></ToggleButton> */}
                {/* Sidenav items */}

                <div>
                    {/* dashboard */}
                    <div className="pl-10 pt-5">
                        <Link href="/">
                            <button className="bg-[#5570F1] pr-20 pt-4 pb-4 pl-4 rounded-md">
                                <span className="flex items-center text-white">
                                    <BiCategoryAlt size={25} color="white" />
                                    <span>Dashboard</span>
                                </span>
                            </button>
                        </Link>
                    </div>

                    {/* Orders */}

                    <div className="pl-10 pt-5">
                        <button className="pr-20 pt-4 pb-4 pl-4">
                            <span className="flex items-center text-[#53545C]">
                                <BsHandbag size={25} />
                                <span className="ml-2">Orders</span>
                            </span>
                        </button>
                    </div>


                    {/* Customers */}
                    <div className="pl-10 pt-5">
                        <button className="pr-20 pt-4 pb-4 pl-4">
                            <span className="flex items-center text-[#53545C]">
                                <HiOutlineUsers size={25} />
                                <span className="ml-2">Customers</span>
                            </span>
                        </button>
                    </div>

                    {/* Inventory */}
                    <div className="pl-10 pt-5">
                        <button className="pr-20 pt-4 pb-4 pl-4">
                            <span className="flex items-center text-[#53545C]">
                                <FiFolderMinus size={25} />
                                <span className="ml-2">Customers</span>
                            </span>
                        </button>
                    </div>

                    {/* Conversation */}
                    <div className="pl-10 pt-5">
                        <button className="pr-20 pt-4 pb-4 pl-4">
                            <span className="flex items-center text-[#53545C]">
                                <BsChatDots size={25} />
                                <span className="ml-2">Conversation</span>
                            </span>
                        </button>
                    </div>

                    {/* Settings */}

                    <div className="pl-10 pt-5">
                        <button className="pr-20 pt-4 pb-4 pl-4">
                            <span className="flex items-center text-[#53545C]">
                                <AiOutlineSetting size={25} />
                                <span className="ml-2">Settings</span>
                            </span>
                        </button>
                    </div>

                </div>
                <div className="pl-10 pt-5 mt-20">
                    <button className="pr-5 pt-4 pb-4 pl-4 bg-[#5E63661A] rounded-md">
                        <span className="flex items-center text-[#53545C] rounded-[16px]">
                            <FiHeadphones size={25} color="#1C1D22" />
                            <span className="text-[#1C1D22] text-sm">Contact Support</span>
                        </span>
                    </button>
                </div>


                <div className="pl-7 pt-5  mb-20">
                    <button className="pt-[11px] pr-[20px] pb-[13px] pl-[20px] bg-[#FFCC9133] rounded-[16px]">
                        <span className="flex flex-col items-center text-[#53545C]">
                            <div className="flex items-center mb-4">
                                <AiOutlineGift size={25} color="#1C1D22" />
                                <span className="text-[#1C1D22] text-sm">Free Gifts Awaits You!</span>
                            </div>
                            <span className="text-[#1C1D22] flex items-center text-sm">Upgrade your account <BsChevronRight size={16} color="#1C1D22"/></span>
                        </span>
                    </button>
                </div>

                <div className="pl-7 pt-5">
                    <button className="">
                        <span className="flex flex-col items-center text-[#53545C]">
                            <div className="flex mb-4">
                                <TbLogout size={25} color="#CC5F5F" />
                                <span className="text-[#CC5F5F] ml-3">Logout</span>
                            </div>
                            
                        </span>
                    </button>
                </div>


            </div>
        </>
    )
}

export default Sidenav;


export const ToggleButton = ({ children, onClick }) => {
    return (
        <>
            <button className="bg-[#5570F1] rounded-md py-2 px-2" onClick={onClick}>{children}</button>
        </>
    )
}