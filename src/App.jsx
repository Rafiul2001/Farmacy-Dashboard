import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import SideMenu from './components/SideMenu'
import Settings from './pages/Settings'
import BackOffice from './pages/BackOffice'
import MedicineModule from './pages/MedicineModule'
import SalesAndReturns from './pages/SalesAndReturns'
import FinanceModule from './pages/FinanceModule'
import UsersAndSecurity from './pages/UsersAndSecurity'
import { ImMenu } from 'react-icons/im'

function App() {

  const sideMenu = useRef(null)
  const mainBody = useRef(null)
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    if (!isOpen) {
      sideMenu.current.style.left = '0'
      mainBody.current.style.width = 'var(100%-320px)'
      mainBody.current.style.left = '320px'
      setIsOpen(true)
    } else {
      sideMenu.current.style.left = '-320px'
      mainBody.current.style.width = 'var(100%)'
      mainBody.current.style.left = '0'
      setIsOpen(false)
    }
  }

  return (
    <div className='relative bg-farmacy-dark h-screen flex flex-col'>
      <div className='flex-1 max-h-20 min-h-fit w-full flex flex-row items-center p-4 bg-farmacy-dark'>
        <ImMenu onClick={toggleMenu} size={36} className='text-white mr-3 cursor-pointer' />
        <h1 className='text-3xl text-white font-semibold'>PM<span className='text-red-500'>Y</span> Farmac<span className='text-red-500'>y</span></h1>
      </div>

      <div className='flex-1 max-h-full w-full flex flex-row bg-farmacy-dark relative'>
        <div ref={sideMenu} onClick={toggleMenu} style={{ transition: '0.5s' }} className='-left-[320px] w-80 absolute z-10 bg-farmacy-dark h-full overflow-auto border-r-4 border-farmacy-red'>
          <SideMenu />
        </div>

        <div ref={mainBody} onClick={() => {
          setIsOpen(true)
          isOpen ? toggleMenu(): null
        }} style={{ transition: '0.5s' }} className='w-[var(100%)] left-0 right-0 bottom-0 absolute top-0 overflow-auto'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='settings' element={<Settings />} />
            <Route path='back-office' element={<BackOffice />} />
            <Route path='medicine-module' element={<MedicineModule />} />
            <Route path='sales-and-returns' element={<SalesAndReturns />} />
            <Route path='finance-module' element={<FinanceModule />} />
            <Route path='users-and-security' element={<UsersAndSecurity />} />
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default App
