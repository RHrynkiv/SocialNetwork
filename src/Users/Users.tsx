import React from 'react'
import style from './Users.module.css'
import Nagiev from "../images/icon.jpg"
import {NavLink} from "react-router-dom";

type PropsType = {
    users: Array<{ id: number, photos: any, followed: boolean, name: string, status: string, location: { country: string, city: string } }>
    currentPage: number
    usersCount: number
    followProgress: boolean
    followInProgress: Array<number>
    changeFollow: (id: number) => void
    setUsers: (users: any) => void
    setUsersCount: (usersCount: number) => void
    setCurrentPage: (NewValue: number) => void
    toggleIsFetching: (isFetching: boolean) => void
    follow: (UserId: number) => void
    unFollow: (UserId: number) => void
    toggleFollowInProgress: (isFetching: boolean,userId: number) => void
}

let Users = (props: PropsType) => {
    let k = 4;
    let count: Array<number> = []
    let size = Math.ceil(props.usersCount / 10);
    for (let i = 1; i < 11; i++) {
        count[i] = i
    }
    return (
        <div>
            {
                props.users.map((u: any) => {
                    return (
                        <div key={u.id} className={style.all}>
                            <div className={style.first}>
                                <NavLink to={'/Profile/' + u.id}>
                                    <img className={style.img} src={u.photos.small === null ? Nagiev : u.photos.small}
                                         alt="Nagiev"/>
                                </NavLink>
                                {u.followed ? <button disabled={props.followInProgress.some(id => id === u.id)} onClick={() => {props.unFollow(u.id)}}>UnFollow</button> :
                                    <button disabled={props.followInProgress.some(id => id === u.id)} onClick={() => {props.follow(u.id)}}>Follow</button>}
                            </div>
                            <div className={style.second}>
                                <div className={style.fullName}>{u.name}</div>
                                <div className={style.status}>{u.status}</div>
                            </div>
                            <div className={style.third}>
                                <div className={style.country}>{}</div>
                                <div className={style.city}>{}</div>
                            </div>
                        </div>
                    )
                })
            }

            <div className={style.pages}>
                {

                    count.map((i) => {
                        return (
                            <span onClick={() => props.setCurrentPage(i)}
                                  className={props.currentPage === i ? style.selected_pages : ''}>{i} </span>
                        )
                    })
                }
                <span>...</span>
            </div>
        </div>)
}

export default Users;