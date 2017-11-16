import React, {Component} from 'react'
import ToDoForm from './ToDoForm'
import ToDoList from './ToDoList'

const list = {
  container: {
    display: 'flex'
  }
}

class ToDoContainer extends Component {
  state = {
    toDos: [],
    title: undefined,
    dueDate: undefined,
    completed: [],
    incomplete: []
  }
  // || are or or
  // this.setState is A-sync
  componentDidMount () {
    const toDos = JSON.parse(localStorage.getItem('toDos')) || []
    console.log(toDos, 'localStorage toDos')
    this.setState({toDos: toDos})
    setTimeout (() => {
      this.sortByCompleted()
    }, 3000)
  }

addToDo = (e) => {
  e.preventDefault()
  const allToDo = this.state.toDos
  if (this.state.title && this.state.dueDate) {
    const newToDo = {
      title: this.state.title,
      dueDate: this.state.dueDate,
      complete: false,
      id: this.state.toDos.length + 1
    }
    allToDo.push(newToDo)
    this.setState({toDos: allToDo})
    this.sortByCompleted()
    localStorage.setItem('toDos', JSON.stringify(this.state.toDos))
    alert('This item was added')
    this.setState({title: ''})
    this.setState({dueDate: ''})
  } else {
    alert('Cannot have Title or Due Date')
  }
}

updateTitle = (e) => {
  this.setState({title: e.target.value})
}

updateDueDate = (e) => {
  this.setState({dueDate: e.target.value})
}

sortByCompleted = () => {
  const completed = this.state.toDos.filter(item => {
    return item.complete === true
  }) // you can do either above or below
  const incomplete = this.state.toDos.filter(item => !item.complete) // or item.complete === false
  this.setState({completed: completed, incomplete: incomplete})
}

markComplete = (e) => {
  const theToDo = this.state.toDos.find(item => {
    return Number(e.target.id) === (item.id)
  })
  console.log(theToDo)
  theToDo.complete = !theToDo.complete // ! bang
  this.sortByCompleted()
}

render () {
  return (
    <div>
      <ToDoForm
        addToDo={this.addToDo}
        title={this.state.title}
        dueDate={this.state.dueDate}
        updateDueDate={this.updateDueDate}
        updateTitle={this.updateTitle}
      />
      <div>
        {
          this.state.toDos
            ? <div style={list.container}>
              <ToDoList toDos={this.state.completed} markComplete={this.markComplete} title='Items are completed' />
              <ToDoList toDos={this.state.incomplete} markComplete={this.markComplete} title='Items are incomplete' />
            </div>
            : 'Loading'

        }
      </div>
    </div>
  )
}
}

export default ToDoContainer
