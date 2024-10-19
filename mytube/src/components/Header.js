import React, { useEffect } from 'react'
import { LOGO_URL, MENU_ICON_URL, USER_ICON_URL } from '../Utils/iconUrls'
import SearchBar from './SearchBar'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../Redux/Slices/MenuSlice'

const Header = () => {
    const dispatch = useDispatch();

  return (
    <div className='flex items-center w-full shadow-md fixed top-0 z-10 bg-white'>
        <div className='flex items-center gap-6 w-2/12 px-4 py-2'>
            <img alt="menu-icon" src={MENU_ICON_URL} className='w-10 h-8 cursor-pointer object-cover' onClick={() => dispatch(toggleMenu())} />
            <img alt="logo" src={LOGO_URL} className='w-32 h-12 cursor-pointer object-cover' />
        </div>
        <SearchBar/>
        <div className='w-1/12'>
            <img alt="user-icon" src={USER_ICON_URL} className='w-12 h-12 cursor-pointer' />
        </div>
    </div>
  )
}

export default Header