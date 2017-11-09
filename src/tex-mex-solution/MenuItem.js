import React from 'react'
import PropTypes from 'prop-types'

const menuStyle = {
  container: {
    border: '3px solid black',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  header: {

  },
  subHeader: {
    
  },
  image: {
    margin: '50px',
    borderRadius: '10px',
    maxWidth: '70%',
    maxHeight: '70%'

  }
}

const MenuItem = ({name, price, category, spiceLevel, img}) => {
  return (
    <div style={menuStyle.container}>
      <h4 style={menuStyle.header}>{name} ${price}</h4>
      <h4 style={menuStyle.subHeader}>{category}</h4>
      <h4 style={menuStyle.subHeader}>{spiceLevel}</h4>
      <img style={menuStyle.image} src={img} />
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
