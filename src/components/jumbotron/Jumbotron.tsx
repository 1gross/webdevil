import React from 'react'
import classes from './Jumbotron.module.scss'
import Wrapper from '../wrapper/Wrapper'
import Gross from './gross/Gross'
import H1 from '../ui/H1'
import SocialList from './socials/SocialList'

const Jumbotron = () => {
  return (
    <div className={classes.jumbotron}>
      <Wrapper>
        <div className={classes.jumbotronBlock}>
          <Gross />
          <div className={classes.jumbotronTitleBlock}>
            <H1>
              Front-End <span className='c-orange'>Base</span>
            </H1>
            <SocialList className={classes.margin} />
          </div>
        </div>
      </Wrapper>
    </div>
  )
}

export default Jumbotron
