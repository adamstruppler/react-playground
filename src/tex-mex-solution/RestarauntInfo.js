import React from 'react'
import PropTypes from 'prop-types'

const RestarauntInfo = ({name, address, phone}) => {
  return (
    <div>
      <h1>{name}</h1>
      <div>
        <p>
          {address.street}
          {address.suite}
        </p>
        <p>
          {address.city}, {address.state}
        </p>
        <p>
          {address.zip}
        </p>
        <p>
          {phone}
        </p>
      </div>
    </div>
  )
}

RestarauntInfo.propTypes = {
  name: PropTypes.string.isRequired,
  address: PropTypes.object.isRequired,
  phone: PropTypes.string.isRequired
}

export default RestarauntInfo
