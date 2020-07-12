import React from 'react';
import s from './ProfileInfo.module.css';
import {reduxForm} from "redux-form";
import {CreateField, Input, Textarea} from "../../Common/FormsControls/FormsControls";

const ProfileDataForm = ({handleSubmit, profile, error}) => {
    return (<form onSubmit={handleSubmit} className={s.aboutForm} >
        <button>SAVE</button>
        {error &&
        <div className={s.error}>
            {error}
        </div>
        }
        <div>
            <b>Full name</b>:
            {CreateField("Full name", "fullName", Input, [])}
        </div>
        <div>
            <b>Looking for a job</b>:
            {CreateField("", "lookingForAJob", Input, [], {type: 'checkbox'})}
        </div>
        <div>
            <b>My professional skills</b>:
            {CreateField("My professional skills", "lookingForAJobDescription", Textarea, [])}
        </div>
        <div>
            <b>About me</b>:
            {CreateField("About me", "aboutMe", Input, [])}
        </div>
        <div>
            <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
            return <div key={key} className={s.contact}>
                <b>{key}</b>:
                {CreateField(`${key}`, `contacts.${key}`, Input, [])}
            </div>
        })}
        </div>
    </form>)
};


const ProfileDataFormReduxForm = reduxForm({form: 'editProfile'})(ProfileDataForm);

export default ProfileDataFormReduxForm;
