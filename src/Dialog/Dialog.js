import React from "react";
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem";
import Message from "./Message";
import s from "./Dialog.module.css"
import css from "../App.module.css"

const Dialog = (props) => {

    let arrayDialogs = props.state.dialogs.map((dialog) => (
        <DialogItem name={dialog.name} id={dialog.id}/>))

    let arrayMessages = props.state.messages.map((message) => (
        <Message message={message.message} id={message.id}/>)
    )
    return (
        <div className={css.content}>
            <div className={s.dialog}>
                {arrayDialogs}
            </div>

            <div className={s.messages}>
                {arrayMessages}
            </div>

        </div>

    )
        ;
}

export default Dialog;
