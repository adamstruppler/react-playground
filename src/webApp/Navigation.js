import React from 'react'
// import Link from './Link'
import {
  Link
} from 'react-router-dom'

const NavigationBar = () => {
  return (
    <nav className='nav'>
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
      <Link to='/products'>Products</Link>
      <Link to='/contact'>Contact</Link>
    </nav>
  )
}

export default NavigationBar

// const NavigationBar = () => {
//   return (
//     <nav className='nav'>
//       <Link to='/' icon={'home'} name={'HOME'} />
//       <Link to='/about' icon={'map-o'} name={'ABOUT'} />
//       <Link to='/products' icon={'motorcycle'} name={'PRODUCTS'} />
//       <Link to='/contact' icon={'address-book'} name={'CONTACT'} />
//     </nav>
//   )
// }
