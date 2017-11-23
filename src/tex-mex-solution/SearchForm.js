import React from 'react'
import PropTypes from 'prop-types'

const styles = {
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    border: 'solid 3px #bdc3c7',
    backgroundColor: '#ecf0f1'
  },
  filterContainer: {
    display: 'flex',
    justifyContent: 'flex-start',
    width: '80%',
    padding: 10
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '40%',
    padding: 10
  }
}

const SearchForm = ({mediumSpiceLevel, hotSpiceLevel, updateSpiceLevel, searchTerm, resetMenuList, handleSearchTermChange, updateMenuList}) => {
  return (
    <div>
      <form style={styles.formContainer}>
        <div style={styles.filterContainer}>
          <input onChange={handleSearchTermChange} value={searchTerm} />
          <button type='button' onClick={updateMenuList}>Search</button>
          <button type='button' onClick={resetMenuList}>RESET</button>
        </div>
        <div style={styles.buttonContainer}>
          <button type='button' onClick={updateSpiceLevel}>Only Mild</button>
          <button type='button' onClick={hotSpiceLevel}>Only Hot</button>
          <button type='button' onClick={mediumSpiceLevel}>Only Medium</button>
        </div>
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
