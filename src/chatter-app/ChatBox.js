import React from 'react'
import PropTypes from 'prop-types'

const chatStyle = {
  container: {
    backgroundColor: 'grey',
    padding: '20px',
    border: '1px dotter black',
    marginTop: '2%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  mainText: {
    color: 'red'
  },
  backupText: {
    color: 'blue'
  },
  profileInfo: {
    marginRight: '5%'
  }
}

const ChatBox = ({username, message, avatar}) => {
  return (
    <div style={chatStyle.container}>
      <div style={chatStyle.profileInfo}>
        <h3 style={
          username.length > 10
            ? chatStyle.mainText
            : chatStyle.backupText
        }
        >
          {username}</h3>
      </div>
      <p>{message}</p>
      <img src={avatar} />
    </div>
  )
}

ChatBox.propTypes = {
  username: PropTypes.object.isRequired,
  message: PropTypes.object.isRequired,
  avatar: PropTypes.object.isRequired
}

export default ChatBox
