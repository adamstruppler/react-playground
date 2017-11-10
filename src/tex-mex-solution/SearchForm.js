import React from 'react'
import PropTypes from 'prop-types'

const SearchForm = ({mediumSpiceLevel, hotSpiceLevel, updateSpiceLevel, searchTerm, resetMenuList, handleSearchTermChange, updateMenuList}) => {
  return (
    <div>
      <form>
        <input onChange={handleSearchTermChange} value={searchTerm} />
        <button type='button' onClick={updateMenuList}>Search</button>
        <button type='button' onClick={resetMenuList}>RESET</button>
        <button type='button' onClick={updateSpiceLevel}>Only Mild</button>
        <button type='button' onClick={hotSpiceLevel}>Only Hot</button>
        <button type='button' onClick={mediumSpiceLevel}>Only Medium</button>
      </form>
    </div>
  )
}

SearchForm.propTypes = {
  handleSearchTermChange: PropTypes.func.isRequired,
  updateMenuList: PropTypes.func.isRequired,
  resetMenuList: PropTypes.func.isRequired,
  searchTerm: PropTypes.string.isRequired,
  updateSpiceLevel: PropTypes.func.isRequired,
  hotSpiceLevel: PropTypes.func.isRequired,
  mediumSpiceLevel: PropTypes.func.isRequired
}

export default SearchForm
