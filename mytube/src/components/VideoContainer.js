import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEOS_API_URL } from '../Utils/constants';
import VideoCard from './videoCard';

const VideoContainer = () => {

  const [videoData, setVideoData] = useState([]);

  useEffect(()=> async () => {
    const response = await fetch(YOUTUBE_VIDEOS_API_URL);
    const videoData = await response.json();
    setVideoData(videoData.items);
  }, [])
  return (
    <div className='flex flex-wrap my-6 gap-4 pl-16 w-full'>
      {
        videoData.map((video) => <VideoCard video={video}/>)
      }
    </div>
  )
}

export default VideoContainer