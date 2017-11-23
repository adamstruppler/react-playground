import React from 'react'
import PropTypes from 'prop-types'

const styles = {
  display: 'flex',
  justifyContent: 'center',
  backgroundColor: 'grey'
}

const Jumbotron = ({title}) => {
  return (
    <div >
      <h1> {title} </h1>
    </div>
  )
}

Jumbotron.propTypes = {
  title: PropTypes.string.isRequired
}
export default Jumbotron
