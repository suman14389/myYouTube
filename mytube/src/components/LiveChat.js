import React, { useEffect, useState, useRef } from 'react'
import { getRandomText, getRandomNames, getRandomColor } from '../Utils/helper';
import { USER_ICON_URL } from '../Utils/iconUrls';
import { randomcolors, LIVE_CHAT_COUNT } from '../Utils/constants';

const LiveChat = () => {

  const messageRef = useRef(null);

  const getDefaultItem = (name, message) => {
    return {
        name: name ||getRandomNames(),
        message: message || getRandomText(20),
        color: getRandomColor()
      }
    
  }

  const [liveChat, setLiveChat] = useState([getDefaultItem()]);

  useEffect(()=> {
    const interval = setInterval(()=> {
      setLiveChat((prevLiveChat) => [getDefaultItem(), ...prevLiveChat])
    }, 700)
    return () => clearInterval(interval);
  }, [])

  useEffect(()=> {
    if(liveChat.length > LIVE_CHAT_COUNT){
      setLiveChat(liveChat.slice(0, LIVE_CHAT_COUNT));
    }
  }, [liveChat.length])

  const handleSendChat = (e) => {
    e.preventDefault();
    const message = messageRef.current.value;
    setLiveChat((prevLiveChat) => [getDefaultItem("Its Me", message), ...prevLiveChat])
    messageRef.current.value = "";
  }

  return (
    <div className='mx-4 w-[28%] rounded-lg p-4 py-0 h-[625px]'>
      <h1 className='text-2xl font-bold text-center'>Live Chat</h1>
      <div className='border border-black w-full rounded-lg p-4 overflow-y-scroll h-[620px] flex flex-col-reverse'>
        {
          liveChat.map((item, index) => (
            <div key={index} className='flex items-center gap-2 mb-2'>
              <span className='w-6 h-6 rounded-full flex items-center justify-center' style={{backgroundColor: item.color}}>{item.name[0]}</span>
              <span className='text-gray-500'>{item.name}</span>
              <span>{item.message}</span>
            </div>
          ))
        }
      </div>
      <form className='flex items-center gap-2 mt-2' onSubmit={handleSendChat}>
        <input type="text" className='p-2 w-full border border-black rounded-lg' placeholder='Send a chat here' ref={messageRef}/>
      </form>
    </div>
  )
}

export default LiveChat