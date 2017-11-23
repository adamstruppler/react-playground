import React from 'react'
import ChatBox from './ChatBox'
import PropTypes from 'prop-types'

const Chats = ({chats}) => {
  return (
    <div>
      {
        chats.map(chat =>
          <ChatBox
            username={chat.username}
            message={chat.message}
            avatar={chat.avatar}
          />
        )
      }
    </div>
  )
}

Chats.propTypes = {
  chats: PropTypes.string.isRequired
}

export default Chats
