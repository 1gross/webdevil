import React from 'react'
import SocialButton from './socialButton/SocialButton'
import classes from './SocialList.module.scss'

const socials = [
  { class: 'instagram', link: '/' },
  { class: 'telegram', link: '/' }
]

const SocialList = ({ className, small }: any) => {
  return (
    <div className={`${classes.socialNetworks} ${className as string}`}>
      {socials.map((item, index) => (
        <SocialButton key={index} item={item} small={small} />
      ))}
    </div>
  )
}

export default SocialList
