import React, {Component} from 'react'

const Counter = ({count, sayHello, increaseCount, decreaseCount}) => {
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={sayHello}> Say Hello </button>
      <button onClick={increaseCount}> Increase Count </button>
      <button onClick={decreaseCount}> Decrease Count </button>
    </div>
  )
}

class SmartApp extends Component {
  state = {
    count: 10
  }
  sayHello = () => {
    alert('Thanks for clicking me!')
  }
  increaseCount = () => {
    this.setState({count: this.state.count += 1})
  }
  decreaseCount = () => {
    if (this.state.count > 0) {
      this.setState({count: this.state.count -= 1})
    } else {
      alert('Can not set count below 0')
    }
  }
  handleCountInputChange = (event) => {
    console.log('You Entered:', event.target.value)
    const updatedCount = Number(event.target.value)
    this.setState({count: updatedCount})
  }
  render () {
    return (
      <div>
        <div>
          <h3>Enter A Number to Begin!</h3>
          <input
            onChange={this.handleCountInputChange}
            type='Number'
            placeholder='Please enter number to begin' />
        </div>
        <div>
          <Counter
            count={this.state.count}
            sayHello={this.sayHello}
            increaseCount={this.increaseCount}
            decreaseCount={this.decreaseCount}
          />

        </div>
      </div>
    )
  }
}

export default SmartApp
