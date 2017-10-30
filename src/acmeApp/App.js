import React from 'react'
import PropTypes from 'prop-types'

const Jumbotron = ({title, address}) => {
  return (
    <div className='jumbotron'>
      <h1>{title}</h1>
      <p>{address}</p>
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
      <Link icon={'motorcycle'} name={'PRODUCTS'} />
      <Link icon={'address-book'} name={'CONTACT'} />
    </nav>
  )
}

const CustomerCards = ({title, email, img}) => {
  return (
    <div className='customercards'>
      <h2>{title}</h2>
      <p>{email}</p>
      <p>{img}</p>
    </div>
  )
}

const App = ({data}) => {
  return (
    <div>
      <NavigationBar />
      <Jumbotron
        title={data.company[0].title}
        address={data.company[0].street}
      />
      <CustomerCards
        title={data.customers[0].name}
        email={data.customers[0].email}
        img={data.customers[0].img}
      />
    </div>
  )
}

App.propTypes = {
  data: PropTypes.object.isRequired
}

export default App
