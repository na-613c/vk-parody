// eslint-disable-next-line no-unused-vars
import React from 'react';
import {postMessageCreator, updateNewMessageTextActionCreator} from '../../redux/dialogs-reducer'
import Dialogs from './Dialogs';
import {connect} from 'react-redux';
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


let mapStateToProps = (state) => {
    return {
        messagesPage: state.messagesPage,
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

let AuthRedirectComponent = withAuthRedirect(Dialogs);

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

export default DialogsContainer;
