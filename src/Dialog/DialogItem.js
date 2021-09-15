import React from "react";
import {NavLink} from "react-router-dom";
import css from "./Dialog.module.css"

const DialogItem = (props) => {
    const path = '/dialog/' + props.id;
    return (
        <div className={css.item}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );

}
export default DialogItem;
