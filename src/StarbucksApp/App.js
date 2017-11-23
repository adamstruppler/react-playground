import React from 'react'
import Data from './Data'
import List from './List'

const App = () => {
  const classicEspresso = Data.filter(item => {
    return item.category === 'Classic Espresso Drinks'
  })
  const signatureEspresso = Data.filter(item => {
    return item.category === 'Signature Espresso Drinks'
  })
  const noMilk = Data.filter(item => {
    let itemArray = item.beveragePrep.split(' ')
    return itemArray[itemArray.length - 1] === 'Milk'
  })
  console.log(classicEspresso)
  return (
    <div>
      <List
        data={noMilk}
      />
      {/* <h1>Classic Espresso</h1>
      <List
        data={classicEspresso}
      />
      <h1>Signature Espresso</h1>
      <List
        data={signatureEspresso}
      /> */}
    </div>
  )
}

export default App
