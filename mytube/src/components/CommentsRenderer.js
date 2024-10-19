import React, { useState } from 'react'
import { M_ICON } from '../Utils/iconUrls'

const Comment = ({comment, isReplyComment}) => {
    const [isNestedCommentsCollapsed, setIsNestedCommentsCollapsed] = useState(true);
    return (
        <div className='mb-4'>
            <div className='flex items-center gap-2'>
                <img src={M_ICON} className={`rounded-full ${isReplyComment ? 'w-6 h-6' : 'w-8 h-8'}`} />
                <div className='flex flex-col'>
                    <p className='font-bold text-[12px]'>{comment.name}</p>
                    <p className='text-[14px]'>{comment.comment}</p>
                </div>
            </div>
            {   comment.replies.length > 0 && 
                 <div className='pl-6'>
                    <button className='text-blue-500 text-[14px] font-bold hover:bg-blue-200 hover:rounded-full px-2 py-1' onClick={()=>setIsNestedCommentsCollapsed(!isNestedCommentsCollapsed)}> {isNestedCommentsCollapsed ? '↓' : '↑'} {comment.replies.length} replies</button>
                    {
                        !isNestedCommentsCollapsed && <CommentsRenderer commentList={comment.replies} isReplyComment={true}/>
                    }
                </div>
            }
        </div>
    )
}

const CommentsRenderer = ({commentList, isReplyComment=false}) => {
  return (
    <>
        {
            commentList.map((comment)=><Comment comment={comment} isReplyComment={isReplyComment}/>)
        }
    </>
  )
}

export default CommentsRenderer