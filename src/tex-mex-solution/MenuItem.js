import React from 'react'
import PropTypes from 'prop-types'

const MenuItem = ({name, price, category, spiceLevel, img}) => {
  return (
    <div>
      <h4>{name} ${price}</h4>
      <h4>{category}</h4>
      <h4>{spiceLevel}</h4>
      <img src={img} />
    </div>
  )
}

MenuItem.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  category: PropTypes.string.isRequired,
  spiceLevel: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired
}

export default MenuItem
