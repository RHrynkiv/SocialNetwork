import React from 'react'
import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";

type TypeMessageArray = {
    NewMessage: () => void;
    OnChangeMessage: (text: string) => void
    Dialogs: Array<{id: number, name: string}>
    Messages: Array<{id: number, message: string}>
    NewMessageText: string;
}

const Dialogs = (props: TypeMessageArray) => {
    let NewText = React.createRef<HTMLTextAreaElement>()
    const OnChangeMessage = () => {
        let text = NewText.current?.value;
        text ? props.OnChangeMessage(text) : props.OnChangeMessage('');
    }
    return (
        <div className={s.content}>
            <div className={s.content_name}>
                {
                    props.Dialogs.map((people) => {
                        return (
                            <div>
                                <NavLink to={people.name}>{people.name}</NavLink>
                            </div>

                        )
                    })}</div>
            <div className={s.content_message}>
                {
                    props.Messages.map((message) => {
                        return (
                            <div>{message.message}</div>
                        )
                    })}
            </div>
            <textarea onChange={OnChangeMessage} ref={NewText} value={props.NewMessageText}
                      placeholder="Enter text: "/>
            <button onClick={() => { props.NewMessage() }}> Send </button>
        </div>
    )
}

export default Dialogs