import React from 'react'
import data from './data'

const AllNames = ({names}) => {
  console.log(names)

  const filteredNames = names.filter((name) => {
    return name.length === 4
  })

  console.log(filteredNames)

  const mappedNames = filteredNames.map((name) => {
    return <li>{name}</li>
  })

  return (
    <div>
      <ul>
        {
          mappedNames
        }
      </ul>
    </div>
  )
}

const NumbersComponent = ({numbers}) => {
  const filteredNumbers = numbers.filter((number) => {
    return number > 30 && number < 71
  })
  const mappedNumbers = filteredNumbers.map((number) => {
    return <p>{number}</p>
  })
  return (
    <div>
      {
        mappedNumbers
      }
    </div>
  )
}

const DisplayBooks = ({books}) => {
  const AllBooks = books.map((book) => {
    return (
      <div>
        <h3>{book.title}</h3>
        <p>{book.author}</p>
      </div>
    )
  })
  return (
    <div>
      <p>{AllBooks}</p>
    </div>
  )
}
const MappingAndFiltering = ({data}) => {
  return (
    <div>
      <h1>Hello World!</h1>
      <AllNames names={data.names} />
      <NumbersComponent numbers={data.numbers} />
      <DisplayBooks books={data.books} />
    </div>
  )
}

export default MappingAndFiltering
