import React, {Component} from 'react'
import data from '../restarauntApp/data'
import RestarauntInfo from './RestarauntInfo'
import MenuContainer from './MenuContainer'

class App extends Component {
  render () {
    return (
      <div>
        <RestarauntInfo
          name={data.company[0].title}
          address={data.address}
          phone={data.phone}
        />
        <MenuContainer />
      </div>
    )
  }
}

export default App
