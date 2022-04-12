import React from "react";

type StateType = {
    Dialogs: Array<{id: number, name: string}>
    Messages: Array<{id: number, message: string}>
    NewMessageText: string
};

const ON_CHANGE_MESSAGE = 'ON-CHANGE-MESSAGE';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    Dialogs: [
        {id: 1, name: "Roman"},
        {id: 2, name: "Petro"},
        {id: 3, name: "Vasyl"},
        {id: 4, name: "Bogdan"},
        {id: 5, name: "D"}
    ],
    Messages: [
        {id: 1, message: "Hello world"},
        {id: 2, message: "How are you?"},
        {id: 3, message: "Tell me about IT-Incubator"},
        {id: 4, message: "Call me please"},
        {id: 5, message: "Thanks for reply :-)"}
    ],
    NewMessageText: ''
};

const dialogsReducer = (state: StateType = initialState, action: any) => {
    switch (action.type) {

        case ON_CHANGE_MESSAGE:{
            let stateCopy = {...state};
            stateCopy.NewMessageText = action.text;
            return stateCopy;
        }

        case SEND_MESSAGE: {
            let Obj = {id: 6, message: state.NewMessageText};
            let stateCopy = {...state};
            stateCopy.Messages.push(Obj);
            stateCopy.NewMessageText = '';
            return stateCopy;
        }
        default:
            return state;
    }
}


export const SendMessageActionCreator = () => {
    return {
        type: SEND_MESSAGE
    }
}
export const onChangeMessageActionCreator = (NewMessage: string) => {
    return {
        type: ON_CHANGE_MESSAGE,
        text: NewMessage

    }
}

export default dialogsReducer;