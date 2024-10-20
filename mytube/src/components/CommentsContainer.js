import React from 'react'
import { M_ICON} from '../Utils/iconUrls'
import { useState } from 'react';
import CommentsRenderer from './CommentsRenderer';
import { useSelector } from 'react-redux';
import { addComment } from '../Redux/Slices/CommentsSlice';
import { useDispatch } from 'react-redux';

const CommentsContainer = () => {

  const [isCommentActive, setIsCommentActive] = useState(false);
  const [commentText, setCommentText] = useState("");
  const dispatch = useDispatch();

  const comments = useSelector((store) => store.comments.comments);

  const handleCommentSubmit = () => {
    dispatch(addComment({
      name: "Suman",
      comment: commentText,
      replies: []
    }));
    setCommentText("");
  }

  return (
    <div className='bg-gray-200 mt-2 p-4'>
        <div>
            <form className='flex items-center gap-2' onSubmit={(e)=>{
              e.preventDefault();
              handleCommentSubmit();
            } } >
                <img src={M_ICON} className='w-10 h-10 rounded-full' />
                <input type="text" placeholder='Add a comment...' value={commentText} onChange={(e)=> setCommentText(e.target.value)} className='w-full px-4 py-2 rounded-full border-[1px] border-black' onFocus={()=> setIsCommentActive(true)} onBlur={()=> setIsCommentActive(false)} />  
            </form>
            
            <div className={`flex gap-4 justify-end mt-1 ${!isCommentActive ? 'opacity-0' : 'opacity-100'}`}>
                <button className='px-4 py-1 hover:bg-red-100  text-black rounded-full' onClick={()=> setCommentText("")}>Cancel</button>
                <button className='px-4 py-1 hover:bg-green-100 text-black rounded-full' onClick={handleCommentSubmit}>Comment</button>
            </div>
        </div>
        <CommentsRenderer commentList={comments} />
    </div>
  )
}

export default CommentsContainer