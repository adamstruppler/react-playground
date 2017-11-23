import React from 'react'
import DrinkItem from './DrinkItem'
import PropTypes from 'prop-types'

const List = ({data}) => {
  return (
    <div>
      {
        data.map((item, index) => {
          return (
            <DrinkItem
              item={item}
              key={index}
            />
          )
        })
      }
    </div>
  )
}

List.propTypes = {
  data: PropTypes.array.isRequired
}

export default List
