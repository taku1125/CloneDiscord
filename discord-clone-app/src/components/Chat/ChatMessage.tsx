import React from 'react'
import './ChatMessage.scss'
import {Avatar} from '@mui/material'

const ChatMessage = () => {
  return (
    <div className="message">
      <Avatar />
      <div className="messageInfo">
        <h4>
          taku
          <span className='messageTimeStamp'>2024/04/07 10:20</span>
        </h4>
        <p>メッセージ本文</p>
      </div>

    </div>
  )
}

export default ChatMessage