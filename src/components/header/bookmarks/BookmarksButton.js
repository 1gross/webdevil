import React from 'react';
import classes from './BookmarksButton.module.scss';

const BookmarksButton = () => {
    return (
        <button className={'btn-simple ' + classes.bookmarks}></button>
    );
};

export default BookmarksButton;
