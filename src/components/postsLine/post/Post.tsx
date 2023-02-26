import React from 'react'
import classes from './Post.module.scss'
import cn from 'classnames'

interface Props {
  post: {
    countLikes: number
    category: string
    categoryTitle: string
    link: string
    datePosting: string
    title: string
    description: string
  }
}

const Post = (props: Props) => {
  const { post } = props

  const { countLikes, datePosting, description, title, categoryTitle, category } = post

  return (
    <a className={classes.postBlock}>
      <div className={cn(classes.categoryPost, 'category-thumb', `cat-${category}`)}></div>
      <button className={classes.likePost}>{countLikes}</button>
      <div className={classes.contentPost}>
        <div className={classes.postHeader}>
          <div className={classes.category}>{categoryTitle}</div>
          <div className={classes.date}>{`${datePosting} назад`}</div>
        </div>
        <div className={classes.postThumb}></div>
        <div className={classes.postBody}>
          <div className={classes.title}>{title}</div>
          <div className={classes.description}>{description}</div>
          <div className={classes.btnsBlock}>
            <button className={`${'btn-simple'} ${classes.savePost}`}>Сохранить</button>
          </div>
        </div>
      </div>
    </a>
  )
}

export default Post
