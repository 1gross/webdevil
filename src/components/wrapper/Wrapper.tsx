import React, { type PropsWithChildren } from 'react'
import classes from './Wrapper.module.scss'

const Wrapper = ({ children }: PropsWithChildren) => {
  return <div className={classes.wrapper}>{children}</div>
}

export default Wrapper
