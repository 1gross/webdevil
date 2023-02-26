import React from 'react'
import classes from './SocialButton.module.scss'

const SocialButton = ({ item, small }: any) => {
  return (
    <a
      href={item.link}
      className={`${classes.social} ${classes[item.class]} ${(small as boolean) ? classes.small : ''}`}
      rel='noreferrer'
      target='_blank'
    ></a>
  )
}

export default SocialButton
