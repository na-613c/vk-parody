const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    dialogData: [
        {id: 1, name: "Ivan"},
        {id: 2, name: "Dima"},
        {id: 3, name: "Vova"},
        {id: 4, name: "Masha"},
        {id: 5, name: "Petya"},
        {id: 6, name: "Misha"},
        {id: 7, name: "Dasha"},
        {id: 8, name: "Vanya"},
        {id: 9, name: "Vika"},
        {id: 10, name: "Kesha"}
    ],
    messagesData: [
        {id: 1, message: "Hi"},
        {id: 2, message: "How is you work?"},
        {id: 3, message: "Good"}
    ],
    newMessageBody: ''
};

const dialogsReducer = (state = initialState, action) => {


    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.newText
            };
        case SEND_MESSAGE:
            let sizeMessages = state.messagesData.length + 1;

            return {
                ...state,
                messagesData: [...state.messagesData, {id: sizeMessages, message: state.newMessageBody}],
                newMessageBody: '',
            };
        default:
            return state;
    }
};

export const postMessageCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageTextActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE_BODY, newText: text});


export default dialogsReducer;