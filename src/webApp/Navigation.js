import React from 'react'
import Link from './Link'

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

export default NavigationBar
