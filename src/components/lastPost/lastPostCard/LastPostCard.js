import React from 'react';
import classes from './LastPostCard.module.scss'

const LastPostCard = ({item}) => {
    return (
        <div className={classes.lastPostCard}>
            <div className={classes.header}>
                <div className={classes.category}>
                    <div className={`${classes.categoryThumb} ${'category-thumb'} ${'cat-' + item.category}`}></div>
                    {item.categoryTitle}
                    </div>
                <div className={classes.likes}>{item.countLikes}</div>
            </div>
            <div className={classes.postThumb} style={{ backgroundImage: `url(${item.thumbnailUrl})` }}></div>
            <div className={classes.title}>{item.title}</div>
        </div>
    );
};

export default LastPostCard;
