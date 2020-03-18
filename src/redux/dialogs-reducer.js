const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'

const dialogsReduser = (state, action) => {
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