import React from 'react'
import PropTypes from 'prop-types'

const formStyle = {
  formContainer: {
    backgroundColor: '#2c3e50',
    padding: 40,
    width: '80vw',
    margin: 10
  },

  field: {
    display: 'flex',
    flexDirection: 'column',
    width: '50%',
    marginBottom: '15px'
  },

  label: {
    textTransform: 'uppercase',
    color: '#1abc9c'
  },

  input: {
    padding: '15px',
    borderRadius: '5px'
  }
}

const ToDoForm = ({addToDo, title, dueDate, updateDueDate, updateTitle}) => {
  return (
    <form style={formStyle.formContainer}>
      <div style={formStyle.field}>
        <label style={formStyle.label}>Title</label>
        <input type='text' value={title} onChange={updateTitle} style={formStyle.input} />
      </div>
      <div style={formStyle.field}>
        <label style={formStyle.label}>Date</label>
        <input type='date' value={dueDate} onChange={updateDueDate} style={formStyle.input} />
      </div>
      <div>
        <button onClick={addToDo}>Submit</button>
      </div>
    </form>
  )
}

ToDoForm.propTypes = {
  addToDo: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  dueDate: PropTypes.string.isRequired,
  updateDueDate: PropTypes.func.isRequired,
  updateTitle: PropTypes.func.isRequired
}

export default ToDoForm
