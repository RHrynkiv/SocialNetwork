import React from 'react'
import {onChangeMessageActionCreator, SendMessageActionCreator} from "../redux/dialogsreducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {compose} from "redux";
import withAuthRedirect from "../HOC/withAuthRedirect";

const mapStateToProps = (state: any) => {
    return ({
        NewMessageText: state.dialogsPage.NewMessageText,
        Messages: state.dialogsPage.Messages,
        Dialogs: state.dialogsPage.Dialogs,
    })
}
const mapDispatchToProps = (dispatch: any) => {
    return ({
        OnChangeMessage: (text: string) => {
            dispatch(onChangeMessageActionCreator(text))
        },
        NewMessage: () =>{
            dispatch(SendMessageActionCreator());
        }
    })
}
export default compose(
    withAuthRedirect,
    connect(mapStateToProps, mapDispatchToProps),
)(Dialogs)