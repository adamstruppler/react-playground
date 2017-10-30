import React from 'react'
import PropTypes from 'prop-types'

const ProductCard = ({product, price, img}) => {
  return (
    <div>
      <h4> {product} </h4>
      <h4> {price} </h4>
      <h4> {img} </h4>
    </div>
  )
}

ProductCard.propTypes = {
  product: PropTypes.string.inRequired,
  price: PropTypes.string.inRequired,
  img: PropTypes.string.inRequired
}

export default ProductCard
