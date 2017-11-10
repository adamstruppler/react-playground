import React, {Component} from 'react'
import GiftList from './GiftList'
import GiftForm from './GiftForm'

class ListContainer extends Component {
  state = {
    gifts: undefined,
    nameOfGift: undefined,
    price: undefined,
    budget: 500,
    totalPriceOfGift: undefined
  }

  componentDidMount () {
    const giftsArray = [{name: 'Apple TV', price: 300}, {name: 'candy', price: 3}]
    this.setState({gifts: giftsArray})
  }

  handleNameOfGiftChange = (e) => {
    this.setState({nameOfGift: e.target.value})
  }

  handlePriceChange = (e) => {
    this.setState({price: e.target.value})
  }

  addNewGift = (e) => {
    e.preventDefault()
    const newGift = {name: this.state.nameOfGift, price: this.state.price}
    const newGiftList = this.state.gifts
    newGiftList.push(newGift)
    let totalPrice = this.getTotalPrice()
    let giftPrice = Number(newGift.price)
    let budget = this.state.budget
    console.log(this.getTotalPrice(), newGift.price, this.state.budget)
    if (totalPrice + giftPrice > budget) {
      alert('You cant get this, you are broke!')
      return
    } else {
      this.setState({gifts: newGiftList})
      this.setState({nameOfGift: ''})
      this.setState({price: ''})
    }
    this.setState({gifts: newGiftList})
  }

  getTotalPrice = () => {
    const list = this.state.gifts
    let totalPrice = 0
    for (let i = 0; i < list.length; i++) {
      totalPrice += Number(list[i].price)
    }
    return totalPrice
  }

  render () {
    return (
      <div>
        <h1>List is rendering</h1>
        <GiftForm
          handleNameOfGiftChange={this.handleNameOfGiftChange}
          handlePriceChange={this.handlePriceChange}
          addNewGift={this.addNewGift}
        />
        {
          this.state.gifts
            ? <GiftList gifts={this.state.gifts} />
            : <h1>No Gifts Yet</h1>
        }
      </div>
    )
  }
}

export default ListContainer
