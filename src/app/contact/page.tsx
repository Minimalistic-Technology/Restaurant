import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'

const Contact = () => {
  return (
    <div className='w-full h-full pt-13 bg-white text-gray-800'>
        <div className='w-full h-75 bg-cover bg-no-repeat bg-center flex flex-col items-center justify-center text-white bg-[url("https://media.istockphoto.com/id/1015358064/photo/website-contact-us-concept-with-wooden-blocks.webp?a=1&b=1&s=612x612&w=0&k=20&c=pv-OOhG_eKZWPjVLTJntj96rjnlYWBUBEMIwhwu6RFg=")]'>
            <p className='text-7xl font-bold text-[#ad0a0a]'>Contact Us</p>
        </div>
        <div className='mx-8 pb-10 pt-10'>
        <div className='w-full h-full flex shadow-lg shadow-gray-400 rounded-xl'>
            <div className='flex-1 px-10 py-10 bg-gradient-to-tl from-[#e85004] to-[#ad0a0a] text-white space-y-6 rounded-bl-xl rounded-tl-xl'>
                <h2 className='text-3xl font-bold'>Contact Us</h2>
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
            </div>
            <div className='flex-1 px-10 py-10 space-y-4 '>
                <h2 className='text-3xl font-bold text-[#ad0a0a]'>Send Us a Message</h2>
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