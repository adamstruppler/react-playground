import React, {Component} from 'react'

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

  render () {
    return (
      <div>
        <h4>List is rendering</h4>
      </div>
    )
  }
}

export default ListContainer
