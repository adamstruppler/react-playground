import React, {Component} from 'react'
import faker from 'faker'
import Chats from './Chats'
import './styles.css'

class ChatterApp extends Component {
  state = {
    chats: undefined,
    message: undefined,
    username: undefined,
    avatar: undefined
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

  submitInfo = (e) => {
    e.preventDefault()
    let newChat = {
      avatar: this.state.avatar,
      username: this.state.username,
      message: this.state.message
    }
    let allChats = this.state.chats
    allChats.unshift(newChat)
    this.setState({chats: allChats})
  }

  setMessage = (e) => {
    let message = e.target.value
    this.setState({message: message})
    console.log(this.state.message)
  }

  setUsername = (e) => {
    let username = e.target.value
    this.setState({username: username})
    console.log(this.state.username)
  }

  setAvatar = (e) => {
    let avatar = e.target.value
    this.setState({avatar: avatar})
    console.log(this.state.avatar)
  }

  render () {
    return (
      <div>
        <h1>Hello from Chatter App</h1>
        {
          this.state.chats ? <Chats chats={this.state.chats} /> : 'Loading...'
        }
        <form>
          <input placeholder='Message' onChange={this.setMessage} />
          <input placeholder='Username' onChange={this.setUsername} />
          <input placeholder='Avatar' onChange={this.setAvatar} />
          <button type='sumbit' onClick={this.submitInfo}>Submit</button>
        </form>
      </div>
    )
  }
}

export default ChatterApp
