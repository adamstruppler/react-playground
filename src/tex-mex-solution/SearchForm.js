import React from 'react'
import PropTypes from 'prop-types'

const SearchForm = ({updateSpiceLevel, searchTerm, resetMenuList, handleSearchTermChange, updateMenuList}) => {
  return (
    <div>
      <form>
        <input onChange={handleSearchTermChange} value={searchTerm} />
        <button type='button' onClick={updateMenuList}>Search</button>
        <button type='button' onClick={resetMenuList}>RESET</button>
        <button type='button' onClick={updateSpiceLevel}>Only Mild</button>
      </form>
    </div>
  )
}

SearchForm.propTypes = {
  handleSearchTermChange: PropTypes.func.isRequired,
  updateMenuList: PropTypes.func.isRequired,
  resetMenuList: PropTypes.func.isRequired,
  searchTerm: PropTypes.string.isRequired,
  updateSpiceLevel: PropTypes.func.isRequired
}

export default SearchForm
