import React from 'react'

const SearchBar = () => {
  return (
    <div className='w-9/12 text-center'>
        <input type="text" className='border-2 px-4 py-2 border-gray-300 w-[60%] rounded-l-full'/>
        <button className='border-2 border-gray-300 border-l-0 rounded-r-full px-6 py-2 hover:bg-slate-100'>🔍</button>
    </div>
  )
}

export default SearchBar