import React from 'react'
import PropTypes from 'prop-types'

const headerStyle = {
  container: {
    display: 'flex',
    flexDirection: 'rows'
  }
}

const ListForm = ({handleTitleOfListChange, handleDueDateOfListChange, addNewList}) => {
  return (
    <div style={headerStyle.container}>
      <div>
        <label>Items to do</label>
        <input onChange={handleTitleOfListChange} placeholder='Enter Items' />
      </div>
      <div>
        <label>Due date</label>
        <input onChange={handleDueDateOfListChange} placeholder='Enter Due Date' />
      </div>
      <div>
        <button type='button' onClick={addNewList}>Add To List</button>
      </div>
    </div>
  )
}

ListForm.propTypes = {
  handleTitleOfListChange: PropTypes.func.isRequired,
  handleDueDateOfListChange: PropTypes.func.isRequired,
  addNewList: PropTypes.func.isRequired
}

export default ListForm
