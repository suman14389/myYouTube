import React, { useEffect } from 'react'
import { getYouTubeVideoByIdUrl } from '../Utils/helper';
import { useState } from 'react';
import { USER_ICON_URL } from '../Utils/iconUrls';
const VideoPlayer = ({id}) => {

    const [videoData, setVideoData] = useState(null);

    useEffect(() => async() => {
        const response = await fetch(getYouTubeVideoByIdUrl(id));
        const data = await response.json();
        setVideoData(data.items[0]);
    }, []);



  return (
    <>
        <iframe 
            className='w-full h-[500px] rounded-lg shadow-lg border-2 border-black'
            src={"https://www.youtube.com/embed/" + id + "?autoplay=1&si=0vmqeW_cPK75mlXW"}
            title="YouTube video player"
            allow="autoplay"
            allowfullscreen="allowfullscreen"
        >
        </iframe>
        {
            videoData && (
                <div className='mt-2'>
                    <h1 className='font-bold text-xl'>{videoData.snippet.title}</h1>
                    <div className='flex items-center gap-2'>
                        <img src={USER_ICON_URL} alt="user" className='w-16 h-16 rounded-full'/>
                        <div className='flex flex-col text-sm text-gray-700'>
                            <p>{videoData.snippet.channelTitle}</p>
                            <p>1.67M subscribers</p>
                        </div>
                        <button className='bg-black text-white px-4 py-2 rounded-full ml-4'>Subscribe</button>
                    </div>
                </div>
            )
        }
    </>
  )
}

export default VideoPlayer