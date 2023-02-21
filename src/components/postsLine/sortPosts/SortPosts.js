import React, { useState } from 'react';
import classes from './SortPosts.module.scss'
import SortItem from "../sortItem/SortItem";

const SortPosts = () => {
    const [activeSort, setActiveSort] = useState('new');

    const toggleSort = (identifier) => {
        setActiveSort(identifier);
    };

    const SortList = [
        {title: 'Новое', identifier: 'new'},
        {title: 'Популярное', identifier: 'hot'},
    ];

    return (
        <div className={classes.sortBlock}>
            {
                SortList.map((item, index) =>
                    <SortItem key={index + 1} item={item} activeSort={activeSort} toggleSort={toggleSort}/>
                )
            }
        </div>
    );
};

export default SortPosts;
