import React from 'react';
import classes from './SortItem.module.scss';

const SortItem = ({item, activeSort, toggleSort}) => {

    return (
        <button
            className={`${classes.sortItem} ${(activeSort === item.identifier) ? classes.active : ''}`}
            onClick={() => toggleSort(item.identifier)}
        >
            {item.title}
        </button>
    );
};

export default SortItem;
