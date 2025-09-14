import React from 'react'
import { FaInstagram, FaLinkedin, FaLocationArrow, FaFacebook,FaMobileAlt } from "react-icons/fa";
import { FaMobile } from "react-icons/fa";

const FooterLinks =[
  {
    title: "Home",
    link: "/#"
  },
  {
    title: "About",
    link: "/#about"
  },
  {
    title: "Contact",
    link: "/#contact"
  },
  {
    title: "Blog",
    link: "/#blog"
  },
]

const Footer = () => {
  return (
    <div className='dark:bg-gray-950'>
      <div className='container'>
        <div className="grid md:grid-cols-3 pb-20 pt-5">
            {/* Company details*/}
            <div className='py-8 px-4'>
                <a href="" className='font-semibold text-primary uppercase text-2xl sm:text-3xl'>Eshop</a>
                <p className='text-gray-600 dark:text-white/70 lg:pr-25 pt-3'> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p className='text-gray-500 mt-44 '>
                  Made with 💖by Mohammed Nouman
                </p>
                <a href="https://mohammed-nouman.github.io/personal-portfolio/" className='rounded-full inline-block bg-primary/90 dark:text-white text-sm py-2 px-4 mt-3 hover:scale-110 duration-300' target='_blank'>Visit my profile</a>
            </div>
            {/*Footer Links*/}
            <div className="col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10">
              <div className="py-8 px-4">
                <h1 className='text-xl font-bold sm:text-left  mb-3
                '>Important Links</h1>
                <ul className='space-y-2'>
                  {FooterLinks.map((data,index)=>(
                    <li key={index}>
                      <a href={data.link} className='text-gray-600 hover:text-black dark:hover:text-white duration-300'>
                        {data.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              {/*Second Column*/}
              <div className="py-8 px-4">
                <h1 className='text-xl font-bold sm:text-left  mb-3
                '>Quick Links</h1>
                <ul className='space-y-2'>
                  {FooterLinks.map((data,index)=>(
                    <li key={index}>
                      <a href={data.link} className='text-gray-600 hover:text-black dark:hover:text-white duration-300'>
                        {data.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div> 
              {/*Location*/}
              <div className=" py-8 px-4">
                <h1 className='text-xl font-bold sm:text-left  mb-3
                '>Address Links</h1>
                <div className="flex items-center gap-3">
                  <FaLocationArrow/>
                  <p>Noida, Uttar Pradesh</p>
                </div>
                <div className='flex flex-row items-center mt-6'>
                  <FaMobileAlt/>
                  <p>+91 123456789</p>
                </div>
                {/*Social Media Links*/}
              <div className='flex items-centre gap-3 mt-6'>
                <a href="#">
                  <FaInstagram className='text-3xl hover:text-primary duration-300'/>
                </a>
                <a href="#">
                  <FaFacebook className='text-3xl hover:text-primary duration-300'/>
                </a>
                <a href="#">
                  <FaLinkedin className='text-3xl hover:text-primary duration-300'/>
                </a>
              </div>
              </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
