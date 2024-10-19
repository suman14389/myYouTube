import React from 'react'
import { M_ICON} from '../Utils/iconUrls'
import { useState } from 'react';
import CommentsRenderer from './CommentsRenderer';
import { commentsConfigList } from '../configs/commentsConfigList';

const CommentsContainer = () => {

  const [isCommentActive, setIsCommentActive] = useState(false);

  return (
    <div className='bg-gray-200 mt-2 p-4'>
        <div>
            <div className='flex items-center gap-2' >
                <img src={M_ICON} className='w-10 h-10 rounded-full' />
                <input type="text" placeholder='Add a comment...' className='w-full px-4 py-2 rounded-full border-[1px] border-black' onFocus={()=> setIsCommentActive(true)} onBlur={()=> setIsCommentActive(false)} />  
            </div>
            
            <div className={`flex gap-4 justify-end mt-2 ${!isCommentActive ? 'opacity-0' : 'opacity-100'}`}>
                <button className='px-4 py-2 hover:bg-red-100  text-black rounded-full'>Cancel</button>
                <button className='px-4 py-2 hover:bg-green-100 text-black rounded-full'>Comment</button>
            </div>
        </div>
        <CommentsRenderer commentList={commentsConfigList} />
    </div>
  )
}

export default CommentsContainer