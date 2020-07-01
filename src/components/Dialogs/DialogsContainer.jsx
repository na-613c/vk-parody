// eslint-disable-next-line no-unused-vars
import React from 'react';
import {postMessageCreator, updateNewMessageTextActionCreator} from '../../redux/dialogs-reducer'
import Dialogs from './Dialogs';
import {connect} from 'react-redux';


// const oldDialogsContainer = (props) => {
//     let state = props.store.getState();

//     let onPostMessage = () => {
//         let action = postMessageCreator();
//         props.store.dispatch(action)
//     }

//     let onMessageChange = (text) => {
//         let action = updateNewMessageTextActionCreator(text)
//         props.store.dispatch(action)
//     }

//     return (
//         <Dialogs
//             onMessageChange={onMessageChange}
//             onPostMessage={onPostMessage}
//             messagesPage={state.messagesPage} />)
// }


let mapStateToProps = (state) => {
    return {
        messagesPage: state.messagesPage
    }
};
let mapDispatchToProps = (dispatch) => {
    return {
        onPostMessage: () => {
            let action = postMessageCreator();
            dispatch(action)

        },
        onMessageChange: (text) => {
            let action = updateNewMessageTextActionCreator(text);
            dispatch(action)
        }
    }
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
