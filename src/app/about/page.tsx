import React from 'react'
import { FaEye, FaFeatherAlt, FaFlagCheckered } from 'react-icons/fa'
import { MdPerson } from 'react-icons/md'

const About = () => {
  return (
    <div className='w-full h-full font-serif pt-13 bg-white text-gray-800'>
        <div className='w-full h-75 bg-cover bg-no-repeat bg-center flex flex-col items-center justify-center text-white bg-[url("https://media.istockphoto.com/id/1292567163/photo/assorted-indian-foods-pav-bhaji-veg-ball-manchurian-mutter-paneer-malai-kofta-and-palak.webp?a=1&b=1&s=612x612&w=0&k=20&c=9O7Rh-ysuAoKQsu1rFKiMueVFtLdSxrnO83vUaj_5sQ=")]'>
            <h1 className='text-5xl font-bold text-[#ad0a0a]'>About Our Restaurent Management System</h1>
            <p className='text-xl font-medium'>Streamlining restaurant operations with innovative technology</p>
        </div>
        <div className='px-30 py-20 flex flex-col'>
            <div className='flex justify-between gap-10'>
                <div className='w-2xl space-y-3'>
                    <h2 className='text-3xl text-[#ad0a0a] font-bold flex items-center gap-4'><FaFlagCheckered/>Our Mission</h2>
                    <p className='text-justify'>We aim to revolutionize restaurant operations by providing an all-in-one management solution that enhances efficiency, improves customer experience, and boosts profitability</p>
                </div>
                <div className='w-2xl space-y-3'>
                    <h2 className='text-3xl text-[#ad0a0a] font-bold flex items-center gap-4'><FaEye/>Our Vision</h2>
                    <p className='text-justify'>To empower restaurants worldwide with cutting-edge technology, enabling seamless operations and exceptional dining experiences.</p>
                </div>
            </div>
            <div className='py-20 space-y-3'>
                <h2 className='text-3xl text-[#ad0a0a] font-bold flex items-center justify-center gap-4'><FaFeatherAlt/>Our Story</h2>
                <p className='text-justify'>Founded in 2023, our Restaurant Management System was created by a team of tech enthusiasts and hospitality experts. We noticed the challenges faced by restaurant owners in managing operations, from inventory to customer service. Our solution integrates all aspects of restaurant management into a user-friendly platform, helping businesses thrive in a competitive industry.</p>
            </div>
            <div className=''>
                <h2 className='text-3xl font-bold text-center text-[#ad0a0a]'>Meet Our Team</h2>
                <div className='flex justify-between items-center mt-10'>
                <div className='border-2 border-[#ad0a0a] rounded-md flex flex-col gap-2 items-center justify-center box-border w-2xs h-30 hover:-translate-y-8 transition-all duration-300'>
                    <MdPerson className='w-8 h-8' />
                    <h3 className='text-xl'>John Doe</h3>
                    <p>Founder and CEO</p>
                </div>
                <div className='border-2 border-[#ad0a0a] rounded-md flex flex-col gap-2 items-center justify-center box-border w-2xs h-30 hover:-translate-y-8 transition-all duration-300'>
                    <MdPerson className='w-8 h-8'/>
                    <h3 className='text-xl'>Jane Smith</h3>
                    <p>Lead Developer</p>
                </div>
                <div className='border-2 border-[#ad0a0a] rounded-md flex flex-col gap-2 items-center justify-center box-border w-2xs h-30 hover:-translate-y-8 transition-all duration-300'>
                    <MdPerson className='w-8 h-8' />
                    <h3 className='text-xl'>Mike Johnson</h3>
                    <p>Hospitality Consultant</p>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About