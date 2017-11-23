import React from 'react'
import PropTypes from 'prop-types'

const styles = {
  container: {
    borderBottom: '1px dotted black',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    fontSize: '10px'
  },
  innerDiv: {
    width: '33.33%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'left'
  },
  text: {
    padding: '0px',
    margin: '0px'
  }
}

const DrinkItem = ({item}) => {
  return (
    <div style={styles.container} >
      <div style={styles.innerDiv}>
        <h3 style={styles.text}>{item.beverageName}</h3>
      </div>
      <div style={styles.innerDiv}>
        <p style={styles.text}>{item.category}</p>
      </div>
      <div style={styles.innerDiv}>
        <p style={styles.text}>{item.beveragePrep}</p>
      </div>
    </div>
  )
}

DrinkItem.propTypes = {
  item: PropTypes.object.isRequired
}

export default DrinkItem
