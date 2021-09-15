import React from "react";
import {NavLink} from "react-router-dom";
import Post from "./Post";
import ProfileInfo from "./ProfileInfo";
import MyPosts from "./MyPosts";
import css from "../App.module.css"


// let posts=array.map((post)=>(
//     <Post message={post.message}></Post>
// ))

const Profile = (props) =>
    {
        // debugger
        return (
            <div className={css.content}>
                <ProfileInfo/>
                <MyPosts info={props.state.array}/>


                {/*<img src="https://bipbap.ru/wp-content/uploads/2017/05/3afdfe92.jpg"/>*/}
            </div>
        );
    }

export default Profile;
