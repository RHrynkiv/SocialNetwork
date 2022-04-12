import React from "react";
import s from "./Sidebars.module.css"
import {NavLink} from "react-router-dom";

export const Sidebars = () => {
    return (
        <div className={s.sidebars}>
            <div>
                <div className={s.sidebars__items}>
                    <div><NavLink to="/Profile">My profile</NavLink></div>
                    <div><NavLink to="/News">News</NavLink></div>
                    <div><NavLink to="/Messages">Messages</NavLink></div>
                    <div><NavLink to="/Users">Users</NavLink></div>
                    <div><NavLink to="/About">About us</NavLink></div>

                </div>
            </div>
        </div>)
}
export default Sidebars;