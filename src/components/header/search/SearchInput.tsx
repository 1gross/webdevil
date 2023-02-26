import React from 'react'
import classes from './SearchInput.module.scss'

const SearchInput = () => {
  return (
    <div className={classes.search}>
      <input type='text' placeholder='Поиск' />
    </div>
  )
}

export default SearchInput
