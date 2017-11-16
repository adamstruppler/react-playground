import React from 'react'
import PropTypes from 'prop-types'

const styles = {
  container: {
    border: '2px solid black',
    display: 'flex',
    flexDirction: 'column',
    padding: '3%',
    width: '50%'
  }
}

const ClassInfo = ({item}) => {
  return (
    <div style={styles.container}>
      <div>
        <h1>{item.name}</h1>
        <h3>${item.cost}</h3>
        <h3>{item.instructor}</h3>
        <h3>{item.location}</h3>
      </div>
    </div>
  )
}

ClassInfo.propTypes = {
  item: PropTypes.object.isRequired
}

export default ClassInfo
