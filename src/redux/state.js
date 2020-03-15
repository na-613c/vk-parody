const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'

let store = {
    _state: {
        messagesPage: {
            dialogData: [
                { id: 1, name: "Ivan" },
                { id: 2, name: "Dima" },
                { id: 3, name: "Vova" },
                { id: 4, name: "Masha" },
                { id: 5, name: "Petya" },
                { id: 6, name: "Misha" },
                { id: 7, name: "Dasha" },
                { id: 8, name: "Vanya" },
                { id: 9, name: "Vika" },
                { id: 10, name: "Kesha" }
            ],
            messagesData: [
                { id: 1, message: "Hi" },
                { id: 2, message: "How is you work?" },
                { id: 3, message: "Good" }
            ],
            newMessageBody: ''
        },
        profilePage: {
            postData: [
                { id: 1, message: "Hi, how are you", likesCount: 0 },
                { id: 2, message: "It's my first post", likesCount: 23 }
            ],
            newPostText: ""
        }
    },
    _callSubscriber() {
        console.log('State changed')
    },

    getState() {
        return this._state;
    },
    subscribe(observable) {
        this._callSubscriber = observable;
    },

    dispatch(action) {
        switch (action.type) {
            case ADD_POST:
                let sizeDialogs = this.getState().profilePage.postData.length + 1;
                let newPost = {
                    id: sizeDialogs,
                    message: this._state.profilePage.newPostText,
                    likesCount: 0
                };
                this._state.profilePage.postData.push(newPost);
                this._state.profilePage.newPostText = "";
                this._callSubscriber(this.getState());
                break;

            case UPDATE_NEW_POST_TEXT:
                this._state.profilePage.newPostText = action.newText;
                this._callSubscriber(this.getState());
                break;

            case UPDATE_NEW_MESSAGE_BODY:
                this._state.messagesPage.newMessageBody = action.newText;
                this._callSubscriber(this.getState());
                break;

            case SEND_MESSAGE:
                let sizeMessages = this.getState().messagesPage.messagesData.length + 1;
                let newMessage = {
                    id: sizeMessages,
                    message: this._state.messagesPage.newMessageBody,
                };
                this._state.messagesPage.messagesData.push(newMessage);

                this._state.messagesPage.newMessageBody = "";
                this._callSubscriber(this.getState());
                break;

            default:
                break;
        }


    }

}

export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostTextAcrionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text })

export const postMessageCreator = () => ({ type: SEND_MESSAGE })
export const updateNewMessageTextAcrionCreator = (text) => ({ type: UPDATE_NEW_MESSAGE_BODY, newText: text})

export default store;

window.store = store;
