import React from 'react'

const DisplayTitle = ({data}) => {
  return (
    <div>
      {
        <DisplayTitle company={data.company} />
      }
    </div>
  )
}

export default DisplayTitle
