import React from 'react';
import classes from './CategoriesList.module.scss';

import H2 from "../ui/H2";

import CategoryItem from "./categoryItem/CategoryItem";

const CategoriesList = () => {
    const categories = [
        {title: 'Java Script', countPost: 1, category: 'js', link: '/'},
        {title: 'HTML5', countPost: 5, category: 'html', link: '/'},
        {title: 'CSS3', countPost: 16, category: 'css', link: '/'},
        {title: 'ReactJs', countPost: 244, category: 'react', link: '/'}
        ];

    return (
        <div className={classes.categoriesBlock}>
            <H2>КАТЕГОРИИ</H2>
            <div className={classes.categoriesList}>
                {
                    categories.map((item, index) =>
                        <CategoryItem item={item} key={index + 1} />
                    )
                }
            </div>
        </div>
    );
};

export default CategoriesList;
