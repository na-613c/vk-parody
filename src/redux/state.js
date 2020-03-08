import { rerenderEntireTree } from '../render';

let state = {
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
        ]
    }


}

export let addPost = (postMessage) => {

    let size = state.profilePage.postData.length + 1;
    alert(size);
    let newPost = {
        id: size,
        message: postMessage,
        likesCount: 0
    };
    state.profilePage.postData.push(newPost);

    rerenderEntireTree(state);
}

export default state;