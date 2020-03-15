let store = {
    _state:{
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
            ]
        },
        profilePage: {
            postData: [
                { id: 1, message: "Hi, how are you", likesCount: 0 },
                { id: 2, message: "It's my first post", likesCount: 23 }
            ],
            newPostText: "test"
        }
    },
    _callSubscriber(){
        console.log('State changed')
    },

    getState(){
        return this._state;
    },
    subscribe(observable) {
        this._callSubscriber = observable;
    },

    dispatch(action){
        if(action.type === 'ADD-POST'){
            let size = this.getState().profilePage.postData.length + 1;
            let newPost = {
                id: size,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.postData.push(newPost);

            this._state.profilePage.newPostText = "";
            this._callSubscriber(this.getState());
        } else if (action.type === 'UPDATE-NEW-POST-TEXT'){

            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this.getState());
        }
    }

}


export default store;

window.store = store;
