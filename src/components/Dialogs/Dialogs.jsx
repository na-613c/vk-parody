import React from 'react';
import s from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';
import {Redirect, Route} from "react-router-dom"
import {Field, reduxForm} from "redux-form";


const Dialogs = (props) => {

    let dialogsElements = props.messagesPage.dialogData.map((d) => <DialogItem key={d.id} name={d.name} id={d.id}/>);
    let messagesElements = props.messagesPage.messagesData.map((m) => <Message key={m.id} message={m.message}/>);
    let addNewMessage = (values) => props.onPostMessage(values.newMessageBody);

    if (!props.isAuth) return <Redirect to={'login'}/>;

    return (
        <div className={s.dialogs}>
            <div key={props.dialogsElements} className={s.dialogs_items}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <Route path="/dialogs" component={() => messagesElements}/>
                <AddMessageFormRedux onSubmit={addNewMessage}/>
            </div>
        </div>)
};

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={s.inputText}>
                <Field component="textarea"
                       name={'newMessageBody'}
                       placeholder="enter your message"/>
                <button>Post</button>
            </div>
        </form>
    )
};

const AddMessageFormRedux = reduxForm({form: "dialogAddMessageForm"})(AddMessageForm);
export default Dialogs;
