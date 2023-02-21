import React from 'react';
import classes from './PostLine.module.scss'

import H2 from "../ui/H2";
import SortPosts from "./sortPosts/SortPosts";
import Post from "./post/Post";

const PostsLine = () => {
    const posts = [
        {countLikes: 1, category: 'js', categoryTitle: 'Java Script', link: '/', datePosting: '1 час', title: 'Публикация 1', description: '1asdasdas asd asd as das ads asd sda asd asd  asd asd as das'},
        {countLikes: 200, category: 'html', categoryTitle: 'HTML5', link: '/', datePosting: '3 часa', title: 'Публикация 2', description: '2asdasdas asd asd as das ads asd sda asd asd  asd asd as das'},
        {countLikes: 10, category: 'css', categoryTitle: 'CSS3', link: '/', datePosting: '7 часов', title: 'Публикация 3', description: '3asdasdas asd asd as das ads asd sda asd asd  asd asd as das'},
        {countLikes: 1000, category: 'react', categoryTitle: 'ReactJS', link: '/', datePosting: '9 часов', title: 'Публикация 4', description: '4asdasdas asd asd as das ads asd sda asd asd  asd asd as das'},
        {countLikes: 1000, category: 'react', categoryTitle: 'ReactJS', link: '/', datePosting: '9 часов', title: 'Публикация 4', description: '4asdasdas asd asd as das ads asd sda asd asd  asd asd as das'},
        {countLikes: 1000, category: 'react', categoryTitle: 'ReactJS', link: '/', datePosting: '9 часов', title: 'Публикация 4', description: '4asdasdas asd asd as das ads asd sda asd asd  asd asd as das'},
        {countLikes: 1000, category: 'react', categoryTitle: 'ReactJS', link: '/', datePosting: '9 часов', title: 'Публикация 4', description: '4asdasdas asd asd as das ads asd sda asd asd  asd asd as das'},
        {countLikes: 1000, category: 'react', categoryTitle: 'ReactJS', link: '/', datePosting: '9 часов', title: 'Публикация 4', description: '4asdasdas asd asd as das ads asd sda asd asd  asd asd as das'},
        {countLikes: 1000, category: 'react', categoryTitle: 'ReactJS', link: '/', datePosting: '9 часов', title: 'Публикация 4', description: '4asdasdas asd asd as das ads asd sda asd asd  asd asd as das'},
    ];
    return (
        <div>
            <div className={classes.sort}>
                <H2>СТАТЬИ</H2>
                <SortPosts/>
            </div>
            <div className={classes.postLine}></div>
            {
                posts.map((post, index) =>
                    <Post
                        key={index+1}
                        post={post}
                    />)
            }
        </div>
    );
};

export default PostsLine;
