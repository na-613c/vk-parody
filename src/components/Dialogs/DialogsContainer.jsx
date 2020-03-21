import React from 'react';
import { updateNewMessageTextAcrionCreator, postMessageCreator } from '../../redux/dialogs-reducer'
import Dialogs from './Dialogs';



const DialogsContainer = (props) => {
    debugger
    let state = props.store.getState();

    let onPostMessage = () => {
        let action = postMessageCreator();
        props.store.dispatch(action)
    }

    let onMessageChange = (text) => {
        let action = updateNewMessageTextAcrionCreator(text)
        props.store.dispatch(action)
    }

    return (
        <Dialogs 
        onMessageChange={onMessageChange} 
        onPostMessage={onPostMessage} 
        messagesPage={state.messagesPage}/> )
}

export default DialogsContainer;
