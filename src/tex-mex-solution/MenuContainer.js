import React, {Component} from 'react'
import data from '../restarauntApp/data'
import Menu from './Menu'
import SearchForm from './SearchForm'

class MenuContainer extends Component {
  state = {
    menuItems: undefined,
    searchTerm: undefined
  }

  componentDidMount () {
    this.setState({menuItems: data.items})
  }

  handleSearchTermChange = (e) => {
    this.setState({searchTerm: e.target.value})
  }

  resetMenuList = () => {
    this.setState({menuItems: data.items, searchTerm: ''})
  }

  updateSpiceLevel = () => {
    const mildOnly = this.state.menuItems.filter(mild => {
      return mild.spiceLevel < 4
    })
    this.setState({menuItems: mildOnly})
  }

  hotSpiceLevel = () => {
    const hotOnly = this.state.menuItems.filter(hot => {
      return hot.spiceLevel > 6
    })
    this.setState({menuItems: hotOnly})
  }

  mediumSpiceLevel = () => {
    const mediumOnly = this.state.menuItems.filter(medium => {
      return medium.spiceLevel === 5
    })
    this.setState({menuItems: mediumOnly})
  }

  updateMenuList = (e) => {
    e.preventDefault()
    const updatedMenuItems = this.state.menuItems.filter(item => {
      const searchTerm = this.state.searchTerm.toLowerCase()
      const menuItems = item.name.toLowerCase()
      return menuItems.includes(searchTerm)
    })
    this.setState({menuItems: updatedMenuItems})
  }

  render () {
    return (
      <div>
        <SearchForm
          handleSearchTermChange={this.handleSearchTermChange}
          updateMenuList={this.updateMenuList}
          resetMenuList={this.resetMenuList}
          searchTerm={this.state.searchTerm}
          updateSpiceLevel={this.updateSpiceLevel}
          hotSpiceLevel={this.hotSpiceLevel}
          mediumSpiceLevel={this.mediumSpiceLevel}
        />
        {
          this.state.menuItems
            ? <Menu foodItems={this.state.menuItems} />
            : <h3>You dont have menu items</h3>
        }
      </div>
    )
  }
}

export default MenuContainer
