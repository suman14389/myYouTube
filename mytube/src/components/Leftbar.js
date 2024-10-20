import React from 'react'
import { leftBarConfigList } from '../configs/leftBarConfigList'
import LeftBarItem from './LeftBarItem'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom';

const Leftbar = () => {
  const isLeftBarOpen = useSelector((store) => store.menu.isMenuOpen);
  const location = useLocation();
  console.log(location);
  if(location.pathname !== "/" && !isLeftBarOpen){
    return null;
  }
  return (
    <div className={`flex fixed z-50 bg-white top-16 left-0 flex-col gap-2 shadow-lg h-screen ${isLeftBarOpen ? 'overflow-y-scroll scrollbar-thin scrollbar-thumb-transparent scrollbar-track-transparent w-60' : ''}`}>
        {
            leftBarConfigList.map((item) => {
                return (
                    <LeftBarItem item={item} key={item.name}/>
                )
            })
        }
    </div>
  )
}

export default Leftbar