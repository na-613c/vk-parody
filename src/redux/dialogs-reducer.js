const SEND_MESSAGE = 'dialogs/SEND-MESSAGE';

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
    ]
};

const dialogsReducer = (state = initialState, action) => {


    switch (action.type) {
        case SEND_MESSAGE:
            let sizeMessages = state.messagesData.length + 1;
            return {
                ...state,
                messagesData: [...state.messagesData, {id: sizeMessages, message: action.newMessageBody}],
            };
        default:
            return state;
    }
};

export const postMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody});


export default dialogsReducer;