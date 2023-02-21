import React from 'react';
import Logo from "./logo/Logo";
import Wrapper from "../wrapper/Wrapper";
import classes from './Header.module.scss';
import LoginButton from "./login/LoginButton";
import SearchInput from "./search/SearchInput";
import BookmarksButton from "./bookmarks/BookmarksButton";
import DarkmodeToggle from "./darkmodeToggle/DarkmodeToggle";

const Header = () => {
    return (
        <header className={classes.header}>
            <Wrapper>
                <div className={classes.headerBlock}>
                    <Logo/>
                    <div className={classes.headerRight}>
                        <SearchInput/>
                        <DarkmodeToggle/>
                        <BookmarksButton/>
                        <LoginButton/>
                    </div>
                </div>
            </Wrapper>
        </header>
    );
};

export default Header;