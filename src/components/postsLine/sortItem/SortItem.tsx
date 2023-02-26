import React from 'react'
import classes from './SortItem.module.scss'
import { type Identifiers, type SortListItemType } from '../types'
import cn from 'classnames'

interface Props {
  item: SortListItemType
  activeSort: Identifiers
  toggleSort: (newIdentifier: Identifiers) => void
}

const SortItem = ({ item: { title, identifier }, activeSort, toggleSort }: Props) => {
  return (
    <button
      className={cn(classes.sortItem, { [classes.active]: activeSort === identifier })}
      onClick={() => {
        toggleSort(identifier)
      }}
    >
      {title}
    </button>
  )
}

export default SortItem
