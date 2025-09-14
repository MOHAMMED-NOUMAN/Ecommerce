import React from "react";
import {IoMdSearch} from "react-icons/io";
import {FaCaretDown, FaCartShopping} from "react-icons/fa6";
import DarkMode from "./DarkMode";

const MenuLinks = [
    {
        id:1,
        name:"Home",
        link:"/#",
    },
    {
        id:2,
        name:"Shop",
        link:"/#shop",
    },
    {
        id:3,
        name:"About",
        link:"/#about",
    },
    {
        id:4,
        name:"Blogs",
        link:"/blogs#",
    }

]
const DropdownLinks = [
    {
        id:1,
        name: "Trending Products",
        link:"/#"
    },
    {
        id:2,
        name: "Best Selling",
        link:"/#"
    },
    {
        id:3,
        name: "Top Rated",
        link:"/#"
    },
]
const Navbar = ({handleOrderPopup})=>{
    return(
        <div className="bg-white dark:bg-gray-900 duration-100 relative z-40 ">

            <div className="py-4">
                <div className="container  flex justify-between items-center">
                    {/* Logo and link section */}
                        <div className="flex items-center gap-4">
                            <a href="#" className="text-primary font-semibold tracking-widest flex items-center text-2xl uppercase sm:text-3xl">
                                ESHOP
                            </a>
                            {/*Menu section*/ }
                            <div className="hidden lg:block">
                             <ul className="flex items-center  gap-4">
                                {MenuLinks.map((data,index)=>
                                <li key={index} className="inline-block px-4  font-semibold text-gray-600 hover:text-black duration-200 dark:hover:text-white    ">
                                    <a href={data.link}>
                                        {data.name}
                                    </a>
                                </li>)} 
                                {/*Dropdown section*/}
                                <li className="relative cursor-pointer group">
                                    <a
                                     href="#" className="flex hover:text-black items-center gap-[2px] font-semibold text-gray-600 dark:hover:text-white py-2">
                                        Quick Links
                                        <span>
                                            <FaCaretDown className="group-hover:rotate-180 duration-300"/>
                                        </span>
                                     </a>
                                     {/*Dropdown Links*/}
                                     <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white shadow-md dark:bg-gray-900 p-2 dark:text-white">
                                        {DropdownLinks.map((data,index) => (
                                            <li key={index}>
                                                <a href={data.link}
                                                className="text-gray-500 hover:text-black dark:hover:text-white duration-200 inline-block w-full p-2 hover:bg-primary/20" 
                                                >
                                                    {data.name}
                                                </a>
                                            </li>
                                        ))
                                        }
                                     </div>
                                </li>
                             </ul>
                             </div>
                        </div>
                        
                    {/* Navbar right  section */}
                    <div className="flex justify-between items-center gap-4">
                        {/*Searchbar section*/ }
                        <div className="relative group  hidden border-3   border-black sm:block ">
                            <input type="text"placeholder="Search" className="    w-0 transition-all duration-300 rounded-full px-3 py-1 focus:outline-none opacity-0 group-hover:opacity-100 group-hover:w-[300px] group-hover:border text-black dark:text-white group-hover:border-gray-500
                           dark:border-gray-800 dark:bg-gray-900 
                           group-hover:dark:bg-gray-800"/>
                            <IoMdSearch className="text-xl text-gray-600 
                            group-hover:text-primary dark:text-gray-400 absolute top-1/2 -translate-y-1/2 right-3 duration-300" />
                        </div>
                        
                        {/*Order Button Section*/}
                        <button className="relative p-3" onClick={handleOrderPopup}>
                            <FaCartShopping className="text-xl text-gray-600 dark:text-gray-400 "/>
                            <div
                            className="w-4 h-4 text-white rounded-full absolute top-0 right-0 bg-red-500 flex justify-center items-center text-xs">4</div>
                        </button>
                        {/*DarkMode Section*/}
                        <div>
                            <DarkMode/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Navbar