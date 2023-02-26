import React from 'react'
import cn from 'classnames'

interface Props {
  isDark?: boolean
}

const Logo = ({ isDark }: Props) => {
  return (
    <a href='/' className={cn('logo', { dark: isDark })}>
      web <span className='c-orange'>[devil]</span>
    </a>
  )
}

export default Logo
