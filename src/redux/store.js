import profileReduser from './profile-reducer';
import dialogsReduser from './dialogs-reducer';
import sidebarReduser   from './sidebar-reducer';


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
        },
        sidebar: {}
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
        this._state.profilePage = profileReduser(this._state.profilePage, action);
        this._state.messagesPage = dialogsReduser(this._state.messagesPage, action);
        this._state.sidebar = sidebarReduser(this._state.sidebar, action);

        this._callSubscriber(this.getState());
    }
}


export default store;

window.store = store;
