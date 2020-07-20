import React from 'react';
import s from './ProfileInfo.module.css';
import {reduxForm} from "redux-form";
import {CreateField, Input, Textarea} from "../../Common/FormsControls/FormsControls";
import cn from "classnames"

const ProfileDataForm = ({handleSubmit, profile, error}) => {
    return (
        <form onSubmit={handleSubmit} className={s.aboutForm}>
            <div className={s.aboutEdit}>
                <button>SAVE</button>
                {error &&
                <div className={s.error}>
                    {error}
                </div>
                }
                <div className={s.name}>
                    <div>
                        <b>Full name</b>:
                    </div>
                    <div>
                        {CreateField("Full name", "fullName", Input, [])}
                    </div>
                </div>
                <div className={cn(s.lfjEdit, s.lfj)}>
                    <div>
                        <b>Looking for a job</b>:
                    </div>
                    <div>
                        {CreateField("", "lookingForAJob", Input, [], {type: 'checkbox'})}
                    </div>
                </div>
                <div className={s.skills}>
                    <div>
                        <b>My professional skills</b>:
                    </div>
                    <div>
                        {CreateField("My professional skills", "lookingForAJobDescription", Textarea, [])}
                    </div>
                </div>
                <div className={s.aboutMe}>
                    <div>
                        <b>About me</b>:
                    </div>
                    <div>
                        {CreateField("About me", "aboutMe", Input, [])}
                    </div>

                </div>
            </div>
            <div className={s.contacts}>
                <h2>Contacts : </h2>{Object.keys(profile.contacts).map(key => {
                return <div key={key} className={s.contactsItems}>
                    <div>
                        <b>{key}</b>:
                    </div>
                    <div>
                        {CreateField(`${key}`, `contacts.${key}`, Input, [])}
                    </div>

                </div>
            })}
            </div>
        </form>
    )
};


const ProfileDataFormReduxForm = reduxForm({form: 'editProfile'})(ProfileDataForm);

export default ProfileDataFormReduxForm;
