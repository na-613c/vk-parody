const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'

let initialState = {
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
}

const dialogsReduser = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.newText;
            return state;
        case SEND_MESSAGE:
            let sizeMessages = state.messagesData.length + 1;
            let newMessage = {
                id: sizeMessages,
                message: state.newMessageBody,};
            state.messagesData.push(newMessage);
            state.newMessageBody = "";
            return state;
        default:
            return state;
    }
}

export const postMessageCreator = () => ({ type: SEND_MESSAGE })
export const updateNewMessageTextAcrionCreator = (text) => ({ type: UPDATE_NEW_MESSAGE_BODY, newText: text })


export default dialogsReduser;