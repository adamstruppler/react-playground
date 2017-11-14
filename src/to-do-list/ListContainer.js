import React, {Component} from 'react'
import ListForm from './ListForm'
import ToDoList from './ToDoList'

class ListContainer extends Component {
  state = {
    list: undefined,
    titleOfList: undefined,
    dueDate: undefined
  }

  componentDidMount () {
    const toDoArray = [{title: 'Finish coding homework', dueDate: '11/14/17', complete: false}]
    this.setState({list: toDoArray})
  }

  handleTitleOfListChange = (e) => {
    this.setState({titleOfList: e.target.value})
  }

  handleDueDateOfListChange = (e) => {
    this.setState({dueDate: e.target.value})
  }

  addNewList = (e) => {
    e.preventDefault()
    const newToDo = {title: this.state.titleOfList, dueDate: this.state.dueDate}
    const newToDoList = this.state.list
    newToDoList.push(newToDo)
    return (
      this.setState({list: newToDoList}),
      this.setState({titleOfList: ''}),
      this.setState({dueDate: ''})
    )
  }

  render () {
    return (
      <div>
        <ListForm
          handleTitleOfListChange={this.handleTitleOfListChange}
          handleDueDateOfListChange={this.handleDueDateOfListChange}
          addNewList={this.addNewList}
        />
        {
          this.state.list
            ? <ToDoList list={this.state.list} />
            : <h1>No List Yet</h1>
        }
      </div>
    )
  }
}

export default ListContainer
