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
      <div style={list.container}>
        <ToDoList toDos={this.state.completed} title='Items are completed' />
        <ToDoList toDos={this.state.incomplete} title='Items are incomplete' />
      </div>
    </div>
  )
}
}

export default ToDoContainer
