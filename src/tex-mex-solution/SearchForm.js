import React from 'react'
import PropTypes from 'prop-types'

const SearchForm = ({handleSearchTermChange, updateMenuList}) => {
  return (
    <div>
      <form>
        <input onChange={handleSearchTermChange} />
        <button type='button' onClick={updateMenuList}>
          Search
        </button>
      </form>
    </div>
  )
}

SearchForm.propTypes = {
  handleSearchTermChange: PropTypes.func.isRequired,
  updateMenuList: PropTypes.func.isRequired
}

export default SearchForm
