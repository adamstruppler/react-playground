import React from 'react'
import PropTypes from 'prop-types'

const ToDo = ({title, dueDate, id, complete, markComplete, deleteToDo}) => {
  return (
    <div>
      <p>{title}</p>
      <p>{dueDate}</p>
      <p>{complete}</p>
      <button onClick={markComplete} id={id} type='button'>
        {
          complete
            ? 'Mark as Incomplete'
            : 'Mark as Complete'
        }
      </button>
      <button onClick={deleteToDo} id={id} type='button'>Delete</button>
    </div>
  )
}

ToDo.propTypes = {
  title: PropTypes.string.isRequired,
  dueDate: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  complete: PropTypes.string.isRequired,
  markComplete: PropTypes.func.isRequired,
  deleteToDo: PropTypes.func.isRequired
}

export default ToDo
