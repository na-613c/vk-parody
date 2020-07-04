import React from 'react';
import s from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';
import {Redirect, Route} from "react-router-dom"


const Dialogs = (props) => {

    let dialogsElements = props.messagesPage.dialogData.map((d) => <DialogItem key={d.id} name={d.name} id={d.id}/>);
    let messagesElements = props.messagesPage.messagesData.map((m) => <Message key={m.id} message={m.message}/>);
    let postMessage = () => props.onPostMessage();
    let onMessageChange = (e) => props.onMessageChange(e.target.value);

    if (!props.isAuth) return <Redirect to={'login'}/>;

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
