import React from 'react';
import classes from './CategoryItem.module.scss';

const CategoryItem = ({item, index }) => {

    function declOfNum(number, words) {
        return words[(number % 100 > 4 && number % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(number % 10 < 5) ? Math.abs(number) % 10 : 5]];
    }

    return (
            <a href={item.link} className={`${classes.categoryItem} ${classes[item.class]}`}>
                <div className={`${classes.categoryThumb} ${'category-thumb'} ${'cat-' + item.category}`}></div>
                <div className={classes.categoryTitle}>{item.title}</div>
                <div className={classes.categoryPostCount}>{item.countPost + ' ' + declOfNum(item.countPost, ['статья', 'статьи', 'статей'])}</div>
            </a>
    );
};

export default CategoryItem;
