import React, { useEffect, useState } from 'react'
import { RxDashboard } from 'react-icons/rx'
import { IoSettingsSharp } from 'react-icons/io5'
import { RiHomeOfficeFill } from 'react-icons/ri'
import { MdViewModule } from 'react-icons/md'
import { BsFillFileBarGraphFill } from 'react-icons/bs'
import { VscGraph } from 'react-icons/vsc'
import { FaUserShield } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import SideMenu from '../components/SideMenu'

const Home = () => {

  return (
    <div className='w-full h-auto'>
      <h1 className='text-white text-4xl font-bold p-4'>Dashboard</h1>

      <ul className='px-4 mt-16 flex flex-row flex-wrap justify-between gap-8 text-white'>
        
        <li className='flex-1 min-w-[240px] sm:min-w-[370px] max-w-full bg-farmacy-blue hover:bg-red-500 rounded-lg '>
          <Link to='/settings'>
            <div className='flex flex-row items-center gap-3 p-5'>
              <p className='bg-farmacy-deep-gray p-2 rounded-md'><IoSettingsSharp className='w-6 h-6' /></p>
              <p className='text-xl font-semibold'>Settings</p>
            </div>
          </Link>
        </li>

        <li className='flex-1 min-w-[240px] sm:min-w-[370px] max-w-full bg-farmacy-blue hover:bg-red-500 rounded-lg '>
          <Link to='/back-office'>
            <div className='flex flex-row items-center gap-3 p-5'>
              <p className='bg-farmacy-deep-gray p-2 rounded-md'><RiHomeOfficeFill className='w-6 h-6' /></p>
              <p className='text-xl font-semibold'>Back Office</p>
            </div>
          </Link>
        </li>

        <li className='flex-1 min-w-[240px] sm:min-w-[370px] max-w-full bg-farmacy-blue hover:bg-red-500 rounded-lg ' >
          <Link to='/medicine-module'>
            <div className='flex flex-row items-center gap-3 p-5'>
              <p className='bg-farmacy-deep-gray p-2 rounded-md'><MdViewModule className='w-6 h-6' /></p>
              <p className='text-xl font-semibold'>Medicine Module</p>
            </div>
          </Link>
        </li>

        <li className='flex-1 min-w-[240px] sm:min-w-[370px] max-w-full bg-farmacy-blue hover:bg-red-500 rounded-lg ' >
          <Link to='/sales-and-returns'>
            <div className='flex flex-row items-center gap-3 p-5'>
              <p className='bg-farmacy-deep-gray p-2 rounded-md'><BsFillFileBarGraphFill className='w-6 h-6' /></p>
              <p className='text-xl font-semibold'>Sales and Returns</p>
            </div>
          </Link>
        </li>

        <li className='flex-1 min-w-[240px] sm:min-w-[370px] max-w-full bg-farmacy-blue hover:bg-red-500 rounded-lg ' >
          <Link to='/finance-module'>
            <div className='flex flex-row items-center gap-3 p-5'>
              <p className='bg-farmacy-deep-gray p-2 rounded-md'><VscGraph className='w-6 h-6' /></p>
              <p className='text-xl font-semibold'>Finance Module</p>
            </div>
          </Link>
        </li>

        <li className='flex-1 min-w-[240px] sm:min-w-[370px] max-w-full bg-farmacy-blue hover:bg-red-500 rounded-lg '>
          <Link to='/users-and-security'>
            <div className='flex flex-row items-center gap-3 p-5'>
              <p className='bg-farmacy-deep-gray p-2 rounded-md'><FaUserShield className='w-6 h-6' /></p>
              <p className='text-xl font-semibold'>Users and Security</p>
            </div>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Home