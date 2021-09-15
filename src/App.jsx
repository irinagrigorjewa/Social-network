import React from "react";
import logo from './logo.svg';
import css from './App.module.css';
import {BrowserRouter, Route} from 'react-router-dom'
import NavBar from "./NavBar";
import Header from "./Header";
import Profile from "./Profile/Profile";
import Dialog from "./Dialog/Dialog";


const App = (props) => {
    return (
        <BrowserRouter>
            <div className={css.App}>
                <Header/>

                <Route render={() => <Profile state={props.state.profilePage}/>} path='/profile'/>
                <Route render={() => <Dialog state={props.state.dialogsPage}/>} path='/dialog'/>
                <NavBar/>

            </div>
        </BrowserRouter>
    );
}

export default App;
