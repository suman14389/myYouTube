import React, { useState, useRef } from 'react'
import { M_ICON } from '../Utils/iconUrls'
import { useDispatch } from 'react-redux';
import { addReply } from '../Redux/Slices/CommentsSlice';
import { getRandomColor } from '../Utils/helper';

const Comment = ({comment, isReplyComment, identifier}) => {
    const dispatch = useDispatch();

    const [isNestedCommentsCollapsed, setIsNestedCommentsCollapsed] = useState(true);
    const [isReplyingComment, setIsReplyingComment] = useState(false);
    const [replyText, setReplyText] = useState("");
    const color = useRef(getRandomColor());

    console.log(identifier);
    console.log(getRandomColor());

    const handleReplySubmit = (e) => {
        if (e.key === 'Enter') {
            dispatch(addReply([identifier, replyText]))
            setReplyText("");
            setIsReplyingComment(false);
        }
    }

    return (
        <div className='mb-4'>
            <div className='flex items-center gap-2'>
                <span className={`w-6 h-6 rounded-full flex items-center justify-center ${isReplyComment ? 'w-6 h-6' : 'w-8 h-8'}`} style={{backgroundColor: color.current}}>{comment.name[0]}</span>
                <div className='flex flex-col'>
                    <p className='font-bold text-[12px]'>{comment.name}</p>
                    <p className='text-[14px]'>{comment.comment}</p>
                </div>
            </div>
            <button className=' text-[14px] text-red-600 hover:rounded-full mx-8 px-2 font-semibold cursor-pointer hover:bg-red-200' onClick={()=>setIsReplyingComment(!isReplyingComment)}>Reply</button>
            {
                isReplyingComment && (
                    <div className='flex items-center gap-2 pl-9 mt-2'>
                        <input type='text' placeholder='Add a reply...' className='w-full border-2 border-gray-300 rounded-md p-2 py-1 focus:outline-none focus:border-green-300' onKeyPress={handleReplySubmit} value={replyText} onChange={(e)=>setReplyText(e.target.value)} />
                        <button className='bg-blue-500 text-white px-2 py-1 rounded-md' onClick={()=>{
                            setIsReplyingComment(false)
                            setReplyText("")
                        }}>Cancel</button>
                    </div>
                )
            }
            {   comment.replies.length > 0 &&
                 <div className='pl-9'>
                    <button className='text-blue-500 text-[14px] font-bold hover:bg-blue-200 hover:rounded-full px-2 py-1' onClick={()=>setIsNestedCommentsCollapsed(!isNestedCommentsCollapsed)}> {isNestedCommentsCollapsed ? '↓' : '↑'} {comment.replies.length} replies</button>
                    {
                        !isNestedCommentsCollapsed && <CommentsRenderer commentList={comment.replies} isReplyComment="true" identifier={identifier}/>
                    }
                </div>
            }
        </div>
    )
}

const CommentsRenderer = ({commentList, isReplyComment=false, identifier=''}) => {
  return (
    <>
        {
            commentList.map((comment, index)=><Comment comment={comment} isReplyComment={isReplyComment} identifier={isReplyComment ? `${identifier}_${index}` : `${index}`}/>)
        }
    </>
  )
}

export default CommentsRenderer