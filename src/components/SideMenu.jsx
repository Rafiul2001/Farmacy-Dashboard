import React, { useRef, useState } from 'react'
import { RxDashboard } from 'react-icons/rx'
import { IoSettingsSharp } from 'react-icons/io5'
import { RiHomeOfficeFill } from 'react-icons/ri'
import { MdViewModule } from 'react-icons/md'
import { BsFillFileBarGraphFill } from 'react-icons/bs'
import { VscGraph } from 'react-icons/vsc'
import { FaUserShield } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import { GiHamburgerMenu } from 'react-icons/gi'

const SideMenu = ({ text }) => {


    return (
        <div className="overflow-auto w-full p-4 font-['Roboto'] flex flex-col md:items-start gap-20">

            <nav className='flex flex-col gap-8 overflow-auto'>
                <NavLink to='/' className={({ isActive }) =>
                    isActive ? "text-white child" : "text-farmacy-gray"
                }>
                    <div className='flex flex-row items-center gap-3'>
                        <p className='bg-farmacy-deep-gray p-2 rounded-md'><RxDashboard className='w-6 h-6' /></p>
                        <p className='text-xl font-semibold'>Dashboard</p>
                    </div>
                </NavLink>

                <NavLink to='/settings' className={({ isActive }) =>
                    isActive ? "text-white child" : "text-farmacy-gray"
                } >
                    <div className='flex flex-row items-center gap-3'>
                        <p className='bg-farmacy-deep-gray p-2 rounded-md'><IoSettingsSharp className='w-6 h-6' /></p>
                        <p className='text-xl font-semibold'>Settings</p>
                    </div>
                </NavLink>

                <NavLink to='/back-office' className={({ isActive }) =>
                    isActive ? "text-white child" : "text-farmacy-gray"
                } >
                    <div className='flex flex-row items-center gap-3'>
                        <p className='bg-farmacy-deep-gray p-2 rounded-md'><RiHomeOfficeFill className='w-6 h-6' /></p>
                        <p className='text-xl font-semibold'>Back Office</p>
                    </div>
                </NavLink>

                <NavLink to='/medicine-module' className={({ isActive }) =>
                    isActive ? "text-white child" : "text-farmacy-gray"
                } >
                    <div className='flex flex-row items-center gap-3'>
                        <p className='bg-farmacy-deep-gray p-2 rounded-md'><MdViewModule className='w-6 h-6' /></p>
                        <p className='text-xl font-semibold'>Medicine Module</p>
                    </div>
                </NavLink>

                <NavLink to='/sales-and-returns' className={({ isActive }) =>
                    isActive ? "text-white child" : "text-farmacy-gray"
                } >
                    <div className='flex flex-row items-center gap-3'>
                        <p className='bg-farmacy-deep-gray p-2 rounded-md'><BsFillFileBarGraphFill className='w-6 h-6' /></p>
                        <p className='text-xl font-semibold'>Sales and Returns</p>
                    </div>
                </NavLink>

                <NavLink to='/finance-module' className={({ isActive }) =>
                    isActive ? "text-white child" : "text-farmacy-gray"
                } >
                    <div className='flex flex-row items-center gap-3'>
                        <p className='bg-farmacy-deep-gray p-2 rounded-md'><VscGraph className='w-6 h-6' /></p>
                        <p className='text-xl font-semibold'>Finance Module</p>
                    </div>
                </NavLink>

                <NavLink to='/users-and-security' className={({ isActive }) =>
                    isActive ? "text-white child" : "text-farmacy-gray"
                } >
                    <div className='flex flex-row items-center gap-3'>
                        <p className='bg-farmacy-deep-gray p-2 rounded-md'><FaUserShield className='w-6 h-6' /></p>
                        <p className='text-xl font-semibold'>Users and Security</p>
                    </div>
                </NavLink>
            </nav>
        </div>
    )
}

export default SideMenu