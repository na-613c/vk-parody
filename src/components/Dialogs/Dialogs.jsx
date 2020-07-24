import React from 'react';
import s from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';
import {Route} from "react-router-dom"
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {Textarea} from "../Common/FormsControls/FormsControls";


const maxLength100 = maxLengthCreator(100);

const Dialogs = ({messagesPage,postMessageThunkCreator,}) => {

    let dialogsElements = messagesPage.dialogData.map((d) => <DialogItem key={d.id} name={d.name} id={d.id}/>);
    let messagesElements = messagesPage.messagesData.map((m) => <Message key={m.id} message={m.message}/>);

    let addNewMessage = (values) => {
        return  postMessageThunkCreator(values.newMessageBody)
    };

    return (
        <div className={s.dialogs + " content"}>
            <div className={s.dialogElements}>
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
