import React from 'react';
import classes from './Post.module.scss';

const Post = ({post}) => {
    return (
        <a className={classes.postBlock}>
            <div className={`${classes.categoryPost} ${'category-thumb'} ${'cat-' + post.category}`}></div>
            <button className={classes.likePost}>
                {post.countLikes}
            </button>
            <div className={classes.contentPost}>
                <div className={classes.postHeader}>
                    <div className={classes.category}>{post.categoryTitle}</div>
                    <div className={classes.date}>{post.datePosting + ' назад'}</div>
                </div>
                <div className={classes.postThumb}></div>
                <div className={classes.postBody}>
                    <div className={classes.title}>{post.title}</div>
                    <div className={classes.description}>{post.description}</div>
                    <div className={classes.btnsBlock}>
                        <button className={`${'btn-simple'} ${classes.savePost}`}>Сохранить</button>
                    </div>
                </div>
            </div>
        </a>
    );
};

export default Post;
