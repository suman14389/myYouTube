import React from 'react'
import { filterButtonConfigList } from '../configs/filterButtonsConfigList'

const FilterButtons = () => {
  return (
    <div className='w-full py-3 pl-10 flex fixed top-16 left-16 bg-white z-100'>
        {
            filterButtonConfigList.map((item) => <button className='bg-gray-100 px-4 py-1 mx-3 rounded-md hover:bg-gray-200'>{item.name}</button>)
        }
    </div>
  )
}

export default FilterButtons