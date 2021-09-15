import React from "react";
import {NavLink} from "react-router-dom";
import css from "./App.module.css"

const NavBar = () => {

    return (
        <div className={css.nav}>

            <nav className={css.nav}>
                <div>
                    <NavLink to='/profile'>Profile</NavLink>
                </div>
                <div>
                    <NavLink to='/dialog'>Messages</NavLink>
                </div>
                <div>
                    <a>News</a>
                </div>
                <div>
                    <a>Music</a>
                </div>
                <div>
                    <a>Settings</a>
                </div>
            </nav>
        </div>
    );
}

export default NavBar;
