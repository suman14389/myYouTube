import React from 'react'
import { useSearchParams } from 'react-router-dom'
import VideoPlayer from './VideoPlayer';
import CommentsContainer from './CommentsContainer';
import LiveChat from './LiveChat';

const Watchpage = () => {
  const [params] = useSearchParams();
  const videoId = params.get("v");
  return (
    <div className='pt-20 pl-4 w-full overflow-y-scroll flex'>
        <div className='flex flex-col w-[70%]'>
            <VideoPlayer id={videoId} />
            <div>
                <CommentsContainer />
            </div>
        </div>
        <LiveChat />
    </div>
  )
}

export default Watchpage