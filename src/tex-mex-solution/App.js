import React from 'react'
import data from '../restarauntApp/data'
import RestarauntInfo from './RestarauntInfo'
import MenuContainer from './MenuContainer'

const App = () =>
  <div>
    <RestarauntInfo
      name={data.company[0].title}
      address={data.address}
      phone={data.phone}
    />
    <MenuContainer />
  </div>

export default App
