import React from 'react'
import Heading from './../Shared/Heading'
import Img1 from '../../assets/blogs/blog-1.jpg'
import Img2 from '../../assets/blogs/blog-2.jpg'
import Img3 from '../../assets/blogs/blog-3.jpg'
const BlogData = [
  {
    title:"How to chose perfect smartwatch",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    published:"Jan 20,2024 by Dilshad",
    image: Img1,
  },
  {
    title: "How to chose perfect gadget",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    published:"Jan 20,2024 by Dilshad",
    image: Img2,
  },
  {
    title: "How to chose perfect VR Headset",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    published:"Jan 20,2024 by Dilshad",
    image: Img3,
  },
]

const Blogs = ({data}) => {
  return (
  <div className='my-12'>  
    <div className='container'>
      {/*Header Section*/}
        <Heading title="Recent News"
        subtitle={"Explore Our Blogs"}/>
        {/*Blogs section*/}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 gap-y-8 sm:gap-4 md:gap-7'>
        {/*Blog card*/}
        {
          BlogData.map((data)=>(
            <div data-aos="fade-up" data-aos-delay={data.aosDelay}  key={data.title} className='bg-white dark:bg-gray-900'>
              {/*Image section*/}
              <div  className='overflow-hidden rounded-2xl mb-2'> 
                <img src={data.image} alt=""  className='w-full h-[220px] obejct-cover rounded-2xl hover:scale-105 duration-500'/>
              </div>
              {/*Content section*/}
              <div className='space-y-2'>
                <p className='text-xs text-gray-500'>{data.published}</p>
                <p className='font-bold line-clamp-1'>{data.title}</p>
                <p className='line-clamp-2 text-sm text-gray-600'>{data.subtitle}</p>
              </div>
            </div>   
          ))
        }
        </div>
    </div>     
   </div> 
  )
}

export default Blogs
