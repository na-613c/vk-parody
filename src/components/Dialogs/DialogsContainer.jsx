// eslint-disable-next-line no-unused-vars
import React from 'react';
import {postMessageCreator, updateNewMessageTextActionCreator} from '../../redux/dialogs-reducer'
import Dialogs from './Dialogs';
import {connect} from 'react-redux';


let mapStateToProps = (state) => {
    return {
        messagesPage: state.messagesPage,
        isAuth: state.auth.isAuth
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
