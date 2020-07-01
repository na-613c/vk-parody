import React from 'react';
import s from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';
import {Route} from "react-router-dom"


const Dialogs = (props) => {

    let dialogsElements = props.messagesPage.dialogData
        .map((dialog) => <DialogItem key={dialog.id} name={dialog.name} id={dialog.id}/>);

    let messagesElements = props.messagesPage.messagesData
        .map((m, index) => <Message key={index} message={m.message}/>);

    let postMessage = () => {
        props.onPostMessage();
    };

    let onMessageChange = (e) => {
        let text = e.target.value;
        props.onMessageChange(text)
    };

    return (
        <div className={s.dialogs}>
            <div key={props.dialogsElements} className={s.dialogs_items}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <Route path="/dialogs" component={() => messagesElements}/>
                <div className={s.inputText}>
                    <textarea cols="102" rows="4"
                              onChange={onMessageChange}
                              value={props.messagesPage.newMessageBody}
                              placeholder="enter your message"/>
                    <button onClick={postMessage}>Post</button>
                </div>
            </div>
        </div>)
};

export default Dialogs;
