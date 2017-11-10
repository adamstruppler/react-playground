import React from 'react'

const headerStyle = {
  container: {
    border: '3px solid black',
    display: 'flex',
    justifyContent: 'space-around',
    flexDirection: 'column',
    alignItems: 'center',
    background: 'blue',
    borderRadius: '10px'
  }
}

const Header = () => {
  return (
    <div style={headerStyle.container}>
      <h1>Welcome to the holiday shopping list!</h1>
      <p>Keep track of your gifts</p>
    </div>
  )
}

export default Header
