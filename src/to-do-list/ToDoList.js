import React from 'react'
import PropTypes from 'prop-types'

const headerStyle = {
  container: {
    border: '2px solid black'
  },
  box: {
    display: 'flex',
    flexDirection: 'row'
  }
}

const ToDoList = ({list}) => {
  return (
    <div style={headerStyle.container}>
      {
        list.map(item => {
          return (
            <div style={headerStyle.box}>
              <input type='checkbox' /><h3>{item.title}</h3>
              <input type='checkbox' /><h3>{item.dueDate}</h3>
              <h3>{item.complete}</h3>
            </div>
          )
        })
      }
    </div>
  )
}

ToDoList.propTypes = {
  list: PropTypes.array.isRequired
}

export default ToDoList
