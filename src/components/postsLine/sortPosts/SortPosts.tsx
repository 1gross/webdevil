import React, { useState } from 'react'
import classes from './SortPosts.module.scss'
import SortItem from '../sortItem/SortItem'
import { Identifiers, type SortListItemType } from '../types'

const sortList: SortListItemType[] = [
  { title: 'Новое', identifier: Identifiers.NEW },
  { title: 'Популярное', identifier: Identifiers.HOT }
]

const SortPosts = () => {
  const [activeSort, setActiveSort] = useState(Identifiers.NEW)

  return (
    <div className={classes.sortBlock}>
      {sortList.map((item, index) => (
        <SortItem key={index} item={item} activeSort={activeSort} toggleSort={setActiveSort} />
      ))}
    </div>
  )
}

export default SortPosts
