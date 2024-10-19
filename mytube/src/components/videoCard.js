import React from 'react'
import { USER_ICON_URL } from '../Utils/iconUrls';
import { getVideoViewCount } from '../Utils/helper';
import { getVideoTruncatedTitle } from '../Utils/helper';
import { Link } from 'react-router-dom';

const videoCard = ({video}) => {

const {snippet, statistics} = video;
const {channelTitle, title, thumbnails} = snippet;
const {viewCount} = statistics;

  return (
    <Link to={`/watch?v=${video.id}`}>
        <div className='mb-2 cursor-pointer'>
            <img src={thumbnails.medium.url} alt={title} className='rounded-lg object-cover w-[300px] h-[180px] hover:rounded-none transition-all duration-300'/>
            <div className='flex'>
                <img src={USER_ICON_URL} alt='channel-icon' className='w-10 h-10 rounded-full'/>
                <div className='flex flex-col pt-1'>
                    <p className='font-bold w-64'>{getVideoTruncatedTitle(title, 50)}</p>
                    <p className='text-sm'>{channelTitle}</p>
                    <p className='text-sm'>{getVideoViewCount(viewCount)} views</p>
                </div>
            </div>
        </div>
    </Link>
  )
}

export default videoCard