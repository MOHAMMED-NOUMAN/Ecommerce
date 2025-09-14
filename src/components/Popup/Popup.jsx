import React from 'react'
import { IoCloseOutline } from "react-icons/io5";

const Popup = ({orderPopup,handleOrderPopup}) => {
  return (
    <>
    {
      orderPopup && (
        <div>
         <div className="h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm">
         <div className='w-[300px] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200'>
            {/*Header Section */}
            <div className='flex items-center justify-between'>
                <h1 className='ml-20 font-bold dark:text-white'>Order Now</h1>
                <IoCloseOutline onClick={handleOrderPopup} className='text-2xl cursor-pointer' />
            </div>
             {/*Form Section*/}
           <div className='mt-4'>
            <input type="text" placeholder='Name' className='form-input w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4' />
           </div>
           <div>
            <input type="email" placeholder='Email' className='form-input w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4' />
           </div>
           <div>
            <input type="text" placeholder='Address' className='form-input w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4' />
           </div>
           <div className='flex justify-center'>
            <button className='bg-primary rounded-full w-[100px] h-[30px] text-white hover:scale-95 font-semibold duration-150'>Order Now</button>
           </div>
          </div>
         </div>
    </div>
      )
}
</>
    
  )
}

export default Popup
