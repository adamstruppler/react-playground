import React from 'react'
import PropTypes from 'prop-types'

const style = {
  container: {
    border: '1px solid black',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingTop: '2%',
    paddingBottom: '2%'
  }
}

const CustomerCards = ({customer}) => {
  return (
    <div style={style.container}>
      <h1>{customer.name}</h1>
      <p>{customer.email}</p>
      <img src={customer.img} />
    </div>
  )
}

CustomerCards.propTypes = {
  customer: PropTypes.string.isRequired
}

export default CustomerCards
