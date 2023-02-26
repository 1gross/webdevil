import React from 'react'
import classes from './Footer.module.scss'
import Wrapper from '../wrapper/Wrapper'
import Logo from '../header/logo/Logo'
import SocialList from '../jumbotron/socials/SocialList'

const Footer = () => {
  return (
    <footer>
      <Wrapper>
        <div className={classes.footerBlock}>
          <Logo isDark />
          <SocialList small />
        </div>
      </Wrapper>
    </footer>
  )
}

export default Footer
