import React from 'react';
import classes from './SidebarLayout.module.scss';

const SidebarLayout = ({content, sidebarTop, sidebarBottom}) => {
    return (
        <main className={classes.asideLayout}>
            <div className={classes.content}>{content}</div>
            <div className={classes.sidebar}>
                {sidebarTop}
                {sidebarBottom}
            </div>
        </main>
    );
};

export default SidebarLayout;
