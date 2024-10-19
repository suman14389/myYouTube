import React from 'react'
import FilterButtons from './FilterButtons'
import VideoContainer from './VideoContainer'

const Body = () => {
  return (
    <div className='w-full relative z-0 top-16 pl-16'>
        <FilterButtons />
        <VideoContainer/>
    </div>
  )
}

export default Body