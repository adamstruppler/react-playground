import React, {Component} from 'react'
import faker from 'faker'
import data from './data'
import Chats from './Chats'
import './styles.css'

class ChatterApp extends Component {
  state = {
    chats: undefined
  }
  componentDidMount () {
    // alert('COMPONENT DID MOUNT')

    setTimeout(() => {
      this.setChatData()
    }, 1000)
  }
  setChatData = () => {
    // alert('ABOUT TO SET CHAT DATA')
    let chats = []
    for (let i = 0; i < 11; i++) {
      let chat = {
        avatar: faker.image.avatar(),
        username: faker.internet.userName(),
        message: faker.random.word()
      }
      chats.push(chat)
    }
    this.setState({chats: chats})
  }
  render () {
    return (
      <div>
        <h1>Hello from Chatter App</h1>
        {
          this.state.chats ? <Chats chats={this.state.chats} /> : 'Loading...'
        }
      </div>
    )
  }
}

export default ChatterApp
