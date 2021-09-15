import React from "react";
import {NavLink} from "react-router-dom";
import m from "./Post.module.css"

const Post = (props) => {

    return (<div className={m.post}>
            <img className={m.avatar} src="data:image/jpeg;base64,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"></img>

            <div className={m.text}>  {props.message}</div>
        </div>


    );
}
export default Post;