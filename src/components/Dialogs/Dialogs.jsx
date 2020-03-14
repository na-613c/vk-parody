import React from 'react';
import s from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';
import { BrowserRouter, Route } from "react-router-dom"


const Dialogs = (props) => {

    let dialogsElements = props.messagesPage.dialogData
        .map((dialog) => {
            return (
                <div key={dialog.id}>
                    <DialogItem name={dialog.name} id={dialog.id} />
                </div>
            );
        })

    let messagesElements = props.messagesPage.messagesData
        .map((m, index) => {
            return (
                <div key={index}>
                    <Message message={m.message} />
                </div>
            );
        })

    let newMessageElement = React.createRef();

    let postMessage = () => {
        let text = newMessageElement.current.value;
        alert(text);
    }

    return (
        <BrowserRouter>
            <div className={s.dialogs}>
                <div key={props.dialogsElements} className={s.dialogs_items}>
                    {dialogsElements}
                </div>
                <div className={s.messages}>
                    <Route path="/dialogs" component={() => messagesElements} />
                    <div className={s.inputText}>
                        <textarea ref={newMessageElement} cols="102" rows="4"></textarea>
                        <button onClick={postMessage}>Post</button>
                    </div>
                </div>
            </div>
        </BrowserRouter>)
}

export default Dialogs;
