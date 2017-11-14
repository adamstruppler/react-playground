import React from 'react'

const headerStyle = {
  container: {
    border: '3px solid black',
    display: 'flex',
    justifyContent: 'space-around',
    flexDirection: 'column',
    alignItems: 'center',
    background: 'green',
    borderRadius: '10px'
  }
}

const Header = () => {
  return (
    <div style={headerStyle.container}>
      <h1>Adam's To Do List</h1>
    </div>
  )
}

export default Header
