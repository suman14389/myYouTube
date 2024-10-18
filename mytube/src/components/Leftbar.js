import React from 'react'
import { leftBarConfigList } from '../configs/leftBarConfigList'
import LeftBarItem from './LeftBarItem'
import { useSelector } from 'react-redux'

const Leftbar = () => {
  const isLeftBarOpen = useSelector((store) => store.menu.isMenuOpen);
  return (
    <div className={`flex flex-col gap-2 shadow-lg h-screen ${isLeftBarOpen ? 'overflow-y-scroll scrollbar-thin scrollbar-thumb-transparent scrollbar-track-transparent w-60' : ''}`}>
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