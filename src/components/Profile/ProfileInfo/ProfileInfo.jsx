import React, {useState} from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../Common/Preloader";
import photosUri from "../../../assets/images/user.jpg"
import ProfileStatusWithHooks from "../ProfileStatusWithHooks";
import ProfileDataForm from "./ProfileDataForm";
import background from "../../../assets/images/background.jpg"

const dataNotSpecified = " Данные не указаны";

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile}) => {
    let [editMode, setEditMode] = useState(false);

    if (!profile) return <Preloader/>;

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) savePhoto(e.target.files[0])
    };

    const onSubmit = (formData) => {
        saveProfile(formData)
            .then(() => setEditMode(false));
    };

    return (
        <div className="shadow">
            <div className={s.background}>
                <img
                    src={background}
                    alt=""/>
            </div>
            <div className={`${s.avatar} padding`}>
                <div>
                    <div>
                        <img src={profile.photos.large || photosUri} alt="photos"/>
                        {isOwner && <input type={'file'} onChange={onMainPhotoSelected}/>}
                    </div>
                    <h1> {profile.fullName} ____ id:{profile.userId}</h1>
                    <ProfileStatusWithHooks status={status}
                                            updateStatus={updateStatus}
                                            isOwner={isOwner}/>
                </div>
            </div>
            {
                editMode
                    ? <ProfileDataForm onSubmit={onSubmit}
                                       profile={profile}
                                       initialValues={profile}/>
                    : <ProfileData goToEditMode={() => setEditMode(true)}
                                   profile={profile}
                                   isOwner={isOwner}
                    />
            }
        </div>);
};

const ProfileData = ({profile, isOwner, goToEditMode}) => {

    return (<div className={s.about}>
        {isOwner &&
        <button onClick={goToEditMode}>EDIT</button>
        }
        <div>
            <b>Looking for a job</b>: {profile.lookingForAJob ? "yes" : "no"}
        </div>
        {profile.lookingForAJob &&
        <div>
            <b>My professional skills</b>: {profile.lookingForAJobDescription}
        </div>}
        <div>
            <b>About me</b>: {!profile.aboutMe ? dataNotSpecified : profile.aboutMe}
        </div>
        <div>
            <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
            return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
        })}
        </div>
    </div>)
};

const Contact = ({contactTitle, contactValue}) => {
    return (<div className={s.contact}>
        <b>{contactTitle}</b>:
        {!contactValue
            ? dataNotSpecified
            : <a href={contactValue} target="_blank"> {contactValue}</a>
        }
    </div>)
};

export default ProfileInfo;
