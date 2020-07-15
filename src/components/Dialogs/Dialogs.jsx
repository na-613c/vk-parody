import React from 'react';
import s from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';
import {Redirect, Route} from "react-router-dom"
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {Textarea} from "../Common/FormsControls/FormsControls";


const maxLength100 = maxLengthCreator(100);

const Dialogs = (props) => {

    let dialogsElements = props.messagesPage.dialogData.map((d) => <DialogItem key={d.id} name={d.name} id={d.id}/>);
    let messagesElements = props.messagesPage.messagesData.map((m) => <Message key={m.id} message={m.message}/>);

    let addNewMessage = (values) => {
        return  props.postMessageThunkCreator(values.newMessageBody)
    };

    if (!props.isAuth) return <Redirect to={'login'}/>;

    return (
        <div className={s.dialogs + " content"}>
            <div key={props.dialogsElements} className={s.dialogElements}>
                {dialogsElements}
            </div>
            <div>
                <div className={s.messages}>
                    <div className={s.allMessages +" target"}>
                        <Route path="/dialogs" component={() => messagesElements}/>
                    </div>
                    <div className="padding">
                        <AddMessageFormRedux onSubmit={addNewMessage}/>
                    </div>
                </div>

            </div>

        </div>)
};

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={s.inputText}>
                <Field component={Textarea}
                       name={'newMessageBody'}
                       placeholder="enter your message"
                       validate={[required, maxLength100]}/>
                <button>Post</button>
            </div>
        </form>
    )
};

const AddMessageFormRedux = reduxForm({form: "dialogAddMessageForm"})(AddMessageForm);
export default Dialogs;
