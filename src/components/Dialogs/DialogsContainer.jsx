// eslint-disable-next-line no-unused-vars
import React from 'react';
import {postMessageCreator, updateNewMessageTextActionCreator} from '../../redux/dialogs-reducer'
import Dialogs from './Dialogs';
import {connect} from 'react-redux';
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


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


export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);
