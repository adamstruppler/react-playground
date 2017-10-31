import React from 'react'
import PropTypes from 'prop-types'
import './index.css'

const Jumbotron = ({title, street, city, state, zip, phonenumber}) => {
  return (
    <div className='jumbotron'>
      <h1>{title}</h1>
      <p>{street}</p>
      <p>{city}</p>
      <p>{state}</p>
      <p>{zip}</p>
      <p>{phonenumber}</p>
    </div>
  )
}

const Link = ({name, icon}) => {
  return (
    <div className='link'>
      <a className={`fa fa-${icon}`}> {name} </a>
    </div>
  )
}

const NavigationBar = () => {
  return (
    <nav className='nav'>
      <Link icon={'home'} name={'HOME'} />
      <Link icon={'map-o'} name={'ABOUT'} />
      <Link icon={'product-hunt'} name={'PRODUCTS'} />
      <Link icon={'address-book'} name={'CONTACT'} />
    </nav>
  )
}

const CustomerSection = ({arr}) => {
  return (
    <div>
      {
        arr.map((customers) => {
          return <CustomerCards customer={customers} />
        })
      }
    </div>
  )
}

const CustomerCards = ({name}) => {
  return (
    <div className='customercards'>
      <h1>{name}</h1>
    </div>
  )
}

const App = ({data}) => {
  return (
    <div>
      <NavigationBar />
      <Jumbotron
        title={data.company[0].title}
        street={data.company[0].street}
        city={data.company[0].city}
        state={data.company[0].state}
        zip={data.company[0].zip}
        phonenumber={data.company[0].phoneNumber}
      />
      <CustomerSection
        arr={data.customers[0].name} />
    </div>
  )
}

App.propTypes = {
  data: PropTypes.object.isRequired
}

export default App
