import React from 'react';
import classes from "./LastPost.module.scss";
import H2 from "../ui/H2";
import LastPostCard from "./lastPostCard/LastPostCard";

import thumb from '@images/thumb.jpg';

const LastPost = () => {

    const LastPost = {
        title: 'Test df sdf sdf sdf dfg fdggfdfgdsfgdgs f',
        thumbnailUrl: thumb,
        category: 'js',
        categoryTitle: 'Java Script',
        countLikes: 100,
    };
    return (
        <div className={classes.lastPost}>
            <H2>ПОСЛЕДНЯЯ СТАТЬЯ</H2>

            <LastPostCard item={LastPost}/>
        </div>
    );
};

export default LastPost;
