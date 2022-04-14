import React from 'react';
import {HashRouter, Route} from 'react-router-dom';
import './App.css';
import Sidebars from "./Sidebars/Sidebars";
import News from "./News/News";
import ProfileContainer from "./Profile/ProfileContainer";
import DialogsContainer from './Dialogs/DialogsContainer';
import UsersContainer from "./Users/UsersContainer";
import HeaderContainer from "./Header/HeaderContainer";
import {Login} from "./Login/login";

function App() {
    return (
        <HashRouter>
            <div className="wrapper">
                <HeaderContainer/>
                <Sidebars/>
                <div>
                    <Route path="/Profile/:userId?" render={() => <ProfileContainer/>}/>
                    <Route path="/Messages" render={() => <DialogsContainer/>}/>
                    <Route path="/News" render={() => <News/>}/>
                    <Route path="/Users" render={() => <UsersContainer/>}/>
                    <Route path="/login" render={() => <Login/>}/>
                </div>
            </div>
        </HashRouter>
    )
}

export default App;
