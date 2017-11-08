import React from 'react'
import PropTypes from 'prop-types'
import MenuItem from './MenuItem'

const Menu = ({foodItems}) => {
  return (
    <div>
      {
        foodItems.map((food, index) => {
          return <MenuItem
            name={food.name}
            price={food.price}
            category={food.category}
            spiceLevel={food.spiceLevel}
            img={food.img}
            key={index}
          />
        })
      }
    </div>
  )
}
Menu.propTypes = {
  foodItems: PropTypes.array.isRequired
}

export default Menu
