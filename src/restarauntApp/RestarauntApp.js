import React, {Component} from 'react'
import data from './data'
import './style.css'
import PropTypes from 'prop-types'
import DisplayTitle from './DisplayTitle'
import DisplayAddress from './DisplayAddress'
import DisplayPriceTag from './DisplayPriceTag'
import DisplayPhoneNumber from './DisplayPhoneNumber'
import DisplayMenu from './DisplayMenu'

class RestaurantApp extends Component {
  state = {
    items: undefined,
    searchTerm: undefined
  }

  componentDidMount () {
    this.setState({ items: data.items })
  }

  reset = () => {
    this.setState({ items: data.items, searchTerm: '' })
  }

   handleSearchTermChange = (e) => {
     let wordToSearch = e.target.value
     this.setState({ searchTerm: wordToSearch })
   }

   submitForm = (e) => {
     e.preventDefault()
     const items = this.state.items
     const searchTerm = this.state.searchTerm

     if (!searchTerm) {
       alert('Must enter a food item!!')
     } else {
       const matchedItems = items.filter(items => {
         return items.split(' ').includes(searchTerm)
       })
       console.log(matchedItems)

       if (matchedItems.length === 0) {
         this.setState({ Items: ['No matched food item'] })
       } else {
         this.setState({ items: matchedItems })
       }
     }
   }
   render () {
     return (
       <div>
         <div className='body'>
           <h1 className='jumbotron'>Mexican Restaurant</h1>
           <DisplayTitle company={data.company} />
           <DisplayAddress address={data.address} />
           <DisplayPriceTag price={data.priceTag} />
           <DisplayPhoneNumber phone={data.phone} />
           <DisplayMenu menu={data.items} />
         </div>
         <form onSubmit={this.submitForm}>
           <h2 className='search'> Search Restraunt Items </h2>
           <input
             value={this.state.searchTerm}
             onChange={this.handleSearchTermChange}
             type='text'
             placeholder='Search'
           />
           <button type='submit'>Search</button>
         </form>
         <ul>
           {
             this.state.items
               ? this.state.items.map((items, index) => {
                 return <li key={index}>{items.name}</li>
               })
               : <p>Loading</p>
           }
         </ul>
       </div>
     )
   }
}
export default RestaurantApp
