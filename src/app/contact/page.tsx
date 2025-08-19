import Image from 'next/image'
import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'

const Contact = () => {
  return (
    <div className='w-full h-full pt-15 bg-white text-gray-800'>
        {/* <div className='w-full h-45 bg-cover bg-no-repeat bg-center flex flex-col items-center justify-center text-white '>
        </div> */}
            <p className='text-7xl font-normal text-center text-[#ad0a0a]'>Contact Us</p>
        <div className='mx-8 pb-10 pt-10'>
        <div className='w-full h-full flex shadow-lg shadow-gray-400 rounded-xl'>
            <div className='flex-1 px-10 py-10 bg-gradient-to-tl from-[#e85004] to-[#ad0a0a] text-white space-y-6 rounded-bl-xl rounded-tl-xl relative'>
                
                <h2 className='text-3xl font-normal'>Contact Us</h2>
                <p><span className='font-medium'>Address:</span> 123 Food Street, Delhi, India</p>
                <p><span className='font-medium'>Phone:</span> +91 9876543210</p>
                <p><span className='font-medium'>Email:</span> contact@restaurant.com</p>
                <p><span className='font-medium'>Opening Hours:</span> Mon-Sat, 10 AM - 10 PM</p>
                <div className='flex gap-8 text-3xl'>
                    <a href="https://facebook.com" target="_black">
                        <FaFacebook className='hover:text-gray-400 transform hover:scale-110 duration-300 cursor-pointer'/>
                    </a>
                    <a href="https://instagram.com" target="_blank">
                        <FaInstagram className='hover:text-gray-400 transform hover:scale-110 duration-300 cursor-pointer'/>
                    </a>
                    <a href="https://twitter.com" target="_blank">
                        <FaTwitter className='hover:text-gray-400 transform hover:scale-110 duration-300 cursor-pointer'/>
                    </a>
                </div>
                <Image src={"https://images.unsplash.com/photo-1659353740197-4e43ab409ce1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} height={600} width={700} alt='Image' className='absolute w-[350px] right-0 bottom-0 rounded-full'/>
            </div>
            <div className='flex-1 px-10 py-10 space-y-4 '>
                <h2 className='text-3xl font-normal text-[#ad0a0a]'>Send Us a Message</h2>
                <form className='space-y-4'>
                    <input type="text" placeholder='Your Name' className='px-4 py-2 border border-[#e85004] focus:ring-2 ring-[#ad0a0a] rounded-md outline-none w-full' />
                    <input type="email" placeholder='Your Email' className='px-4 py-2 border border-[#e85004] focus:ring-2 ring-[#ad0a0a] rounded-md outline-none w-full' />
                    <input type="text" placeholder='Subject' className='px-4 py-2 border border-[#e85004] focus:ring-2 ring-[#ad0a0a] rounded-md outline-none w-full' />
                    <textarea name="message" id="message" placeholder='Your Message' className='px-4 py-2 h-30 border border-[#e85004] focus:ring-2 ring-[#ad0a0a] rounded-md outline-none w-full' ></textarea>
                    <button className='px-8 py-2 bg-gradient-to-tl from-[#e85004] to-[#ad0a0a] text-white rounded-md transform hover:scale-110 duration-300 cursor-pointer'>Send Message</button>
                </form>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Contact