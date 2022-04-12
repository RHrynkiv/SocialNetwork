import profileReducer from "./profilereducer";
import dialogsReducer from "./dialogsreducer";


let store = {

    _State: {
        profilePage: {
            Posts: [
                {text: "Hello!"},
                {text: "YO YO YO!"},
            ],
            NewPostText: ''
        },
        dialogsPage: {
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

        }
    },
    _callSubscriber() {
    },

    getState() {
        return this._State;
    },
    subscribe(observer: any) {
        this._callSubscriber = observer
    },

    dispatch(action: any) {
        this._State.profilePage = profileReducer(this._State.profilePage, action)
        this._State.dialogsPage = dialogsReducer(this._State.dialogsPage, action)
        this._callSubscriber();
    }
}




export default store;