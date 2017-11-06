import React, {Component} from 'react'
import data from './data'

class RestarauntApp extends Component {
  state = {

  }

  componentDidMount () {
    this.setState({company: data.company})
  }

  restaraunt = ({arr}) => {
    return (
      <div>
        {
          
        }
      </div>
    )
  }

  render () {
    return (
      <div>
        <h1>Hello Menu</h1>
      </div>
    )
  }
}

export default RestarauntApp
