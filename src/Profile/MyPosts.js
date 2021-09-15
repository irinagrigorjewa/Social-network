import React from "react";
import {NavLink} from "react-router-dom";
import Post from "./Post";
import ProfileInfo from "./ProfileInfo";
import "./Post.module.css"

const MyPosts = (props) => {
    let posts = props.info.map((post) => (
        <Post message={post.message}></Post>
    ))
    let postElement = React.createRef();
    let clickButton = () => {
        let text = postElement.current.value;
        alert(text);
    }
    return (<div className="posts">
          <textarea ref={postElement}/>
            {posts}
            <button className='button' onClick={clickButton}>Post</button>
        </div>


    );
}


export default MyPosts;
