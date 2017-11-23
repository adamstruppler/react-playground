import React from 'react'
import PropTypes from 'prop-types'

const style = {
  container: {
    width: '80%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '5%',
    marginBottom: '10%'
  }
}

const ChatForm = ({setMessage, setAvatar, setUsername, submitInfo}) => {
  return (
    <form style={style.container}>
      <input placeholder='Message' onChange={setMessage} />
      <input placeholder='Username' onChange={setUsername} />
      <input placeholder='Avatar' onChange={setAvatar} />
      <button type='sumbit' onClick={submitInfo}>Submit</button>
    </form>
  )
}

ChatForm.propTypes = {
  setAvatar: PropTypes.func.isRequired,
  setMessage: PropTypes.func.isRequired,
  setUsername: PropTypes.func.isRequired,
  submitInfo: PropTypes.func.isRequired
}

export default ChatForm
