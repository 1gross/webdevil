import React from 'react'
import classes from './SidebarLayout.module.scss'

interface Props {
  content?: React.ReactNode
  sidebarTop?: React.ReactNode
  sidebarBottom?: React.ReactNode
}

const SidebarLayout = ({ content, sidebarTop, sidebarBottom }: Props) => {
  return (
    <main className={classes.asideLayout}>
      <div className={classes.content}>{content}</div>
      <div className={classes.sidebar}>
        {sidebarTop}
        {sidebarBottom}
      </div>
    </main>
  )
}

export default SidebarLayout
