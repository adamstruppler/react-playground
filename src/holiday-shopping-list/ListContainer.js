import React, {Component} from 'react'
import GiftList from './GiftList'
import GiftForm from './GiftForm'

class ListContainer extends Component {
  state = {
    gifts: [],
    nameOfGift: undefined,
    price: undefined,
    budget: 500,
    totalPriceOfGift: undefined
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
      let currentBudget = this.state.budget
      currentBudget -= giftPrice
      this.setState({
        budget: currentBudget,
        gifts: newGiftList,
        nameOfGift: '',
        price: ''
      })
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
        <div>
          <h3>Budget: ${this.state.budget}</h3>
        </div>
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
