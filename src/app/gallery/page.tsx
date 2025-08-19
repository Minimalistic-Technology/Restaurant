"use client"
import React, { useState } from 'react'
import { FaFacebook, FaTwitter } from 'react-icons/fa'

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  
  // Gallery data with categories
  const galleryItems = [
    {
      id: 1,
      title: "Elegant Dining Area",
      imageUrl: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
      category: "Ambiance"
    },
    {
      id: 2,
      title: "Gourmet Pasta Dish",
      imageUrl: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
      category: "Food"
    },
    {
      id: 3,
      title: "Rooftop Ambiance",
      imageUrl: "https://images.unsplash.com/photo-1552566626-52f8b828add9",
      category: "Ambiance"
    },
    {
      id: 4,
      title: "Chef's Masterpiece",
      imageUrl: "https://images.unsplash.com/photo-1552566626-52f8b828add9",
      category: "Food"
    },
    {
      id: 5,
      title: "Dessert Delight",
      imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      category: "Food"
    },
    {
      id: 6,
      title: "Luxury Bar",
      imageUrl: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
      category: "Ambiance"
    },
    {
      id: 7,
      title: "Wedding Reception",
      imageUrl: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf",
      category: "Events"
    },
    {
      id: 8,
      title: "Birthday Celebration",
      imageUrl: "https://images.unsplash.com/photo-1513151233558-d860c5398176",
      category: "Events"
    },
    {
      id: 9,
      title: "Wine and Dine",
      imageUrl: "https://plus.unsplash.com/premium_photo-1678897750441-b7fe348b14a5",
      category: "Events"
    }
  ];

  // Filter gallery items based on active filter
  const filteredItems = activeFilter === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <div className='w-full h-full pt-13 pb-10 bg-white text-gray-800'>
      <div className='w-full h-75 bg-cover bg-no-repeat bg-center flex flex-col items-center justify-center text-white bg-[url("https://images.unsplash.com/photo-1606819717115-9159c900370b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")]'>
        <h2 className='text-7xl font-normal '>Our Gallery</h2>
      </div>
      <div className='flex flex-col items-center justify-center gap-4 mt-5'>
        <div className='space-x-4'>
            <button 
              onClick={() => setActiveFilter('All')}
              className={`px-4 py-1 text-xl border-2 border-[#ad0a0a] rounded-full hover:bg-gradient-to-tl from-[#e85004] to-[#ad0a0a] cursor-pointer ${
                activeFilter === 'All' 
                  ? 'bg-gradient-to-tl from-[#e85004] to-[#ad0a0a] text-white' 
                  : 'text-[#ad0a0a] hover:text-white'
              }`}
            >
              All
            </button>
            <button 
              onClick={() => setActiveFilter('Food')}
              className={`px-4 py-1 text-xl border-2 border-[#ad0a0a] rounded-full hover:bg-gradient-to-tl from-[#e85004] to-[#ad0a0a] cursor-pointer ${
                activeFilter === 'Food' 
                  ? 'bg-gradient-to-tl from-[#e85004] to-[#ad0a0a] text-white' 
                  : 'text-[#ad0a0a] hover:text-white'
              }`}
            >
              Food
            </button>
            <button 
              onClick={() => setActiveFilter('Ambiance')}
              className={`px-4 py-1 text-xl border-2 border-[#ad0a0a] rounded-full hover:bg-gradient-to-tl from-[#e85004] to-[#ad0a0a] cursor-pointer ${
                activeFilter === 'Ambiance' 
                  ? 'bg-gradient-to-tl from-[#e85004] to-[#ad0a0a] text-white' 
                  : 'text-[#ad0a0a] hover:text-white'
              }`}
            >
              Ambiance
            </button>
            <button 
              onClick={() => setActiveFilter('Events')}
              className={`px-4 py-1 text-xl border-2 border-[#ad0a0a] rounded-full hover:bg-gradient-to-tl from-[#e85004] to-[#ad0a0a] cursor-pointer ${
                activeFilter === 'Events' 
                  ? 'bg-gradient-to-tl from-[#e85004] to-[#ad0a0a] text-white' 
                  : 'text-[#ad0a0a] hover:text-white'
              }`}
            >
              Events
            </button>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {filteredItems.map((item) => (
              <div 
                key={item.id}
                className='h-60 w-80 rounded-lg transform hover:scale-105 transition-all duration-300 relative'
                style={{ 
                  backgroundImage: `url(${item.imageUrl})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                  <div className='absolute w-full h-full flex flex-col items-center justify-center gap-4 opacity-0 hover:opacity-100 transition-all duration-300'>
                      <p className='text-white text-xl font-medium'>
                          <a href="#">{item.title}</a>
                      </p>
                      <div className='flex gap-4 text-white text-2xl'>
                          <a href="#">
                              <FaFacebook/>
                          </a>
                          <a href="#">
                              <FaTwitter/>
                          </a>
                      </div>
                  </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default Gallery