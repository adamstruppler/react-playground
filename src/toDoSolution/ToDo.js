import React from 'react'
import PropTypes from 'prop-types'

const ToDo = ({title, dueDate, id, complete}) => {
  return (
    <div>
      <p>{title}</p>
      <p>{dueDate}</p>
      <p>{id}</p>
      <p>{complete}</p>
    </div>
  )
}

ToDo.propTypes = {
  title: PropTypes.string.isRequired,
  dueDate: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  complete: PropTypes.string.isRequired
}

export default ToDo
