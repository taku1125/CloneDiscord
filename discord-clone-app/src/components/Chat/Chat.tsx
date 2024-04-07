import React, { useEffect, useRef } from 'react'
import './Chat.scss'
import ChatHeader from './ChatHeader'
import ChatMessage from './ChatMessage'

import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import GifIcon from '@mui/icons-material/Gif';
import MoodIcon from '@mui/icons-material/Mood';

function Chat() {
  // ref を作成して、メッセージの最下部にアクセスできるようにします
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // ロード時に最下部にスクロールします
    if (messagesEndRef.current) {
      // `scrollIntoView` が存在するかどうかをチェックし、存在する場合は呼び出します
      messagesEndRef.current.scrollIntoView(false);
    }
  }, []);

  return (
    <div className='chat'>
      {/* chatHeader */}
      <div className='chatHeader'>
        <ChatHeader />
      </div>
      {/* chatMessage */}
      <div className="chatMessage">
        <div className='chatMessageContents'>
          <ChatMessage />
          <ChatMessage />
          <ChatMessage />
          <ChatMessage />
          <ChatMessage />
          <ChatMessage />
          <ChatMessage />
          <ChatMessage />
          <ChatMessage />
          <ChatMessage />
          <ChatMessage />
          <ChatMessage />
          <ChatMessage />
          <ChatMessage />
          <ChatMessage />
          <ChatMessage />
          <ChatMessage />
          <ChatMessage />
          <div ref={messagesEndRef} /> {/* この空のdivは最下部に配置します */}
        </div>
      </div>
      {/* chatFooter */}
      <div className="chatInput">
        <AddCircleOutlineIcon />
        <form>
          <input type="text" placeholder='# Udemyへメッセージを送信' />
          <button type='submit' className='chatInputButton'>送信</button>
        </form>

        <div className="chatInputIcons">
          <CardGiftcardIcon />
          <GifIcon />
          <MoodIcon />
        </div>
      </div>
    </div>
  )
}

export default Chat