import React from 'react'

const headerStyle = {
  container: {
    border: '5px solid black',
    background: 'grey',
    borderRadius: 5,
    display: 'flex',
    justifyContent: 'center',
    color: 'white',
    width: '80vw',
    padding: 20
  }
}

const Header = () => {
  return (
    <div style={headerStyle.container}>
      <h3>To Do List App</h3>
    </div>
  )
}

export default Header
