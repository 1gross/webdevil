import React from 'react'
import classes from './DarkmodeToggle.module.scss'
import { useLightMode } from '@hooks/useLightMode'

const DarkmodeToggle = () => {
  const [theme, setLightTheme] = useLightMode() as [boolean, (theme: boolean) => void]

  return (
    <button
      className={`${'btn-simple'} ${classes.themeToggle} ${theme ? classes.light : ''}`}
      onClick={() => {
        setLightTheme(!theme)
      }}
    ></button>
  )
}

export default DarkmodeToggle
