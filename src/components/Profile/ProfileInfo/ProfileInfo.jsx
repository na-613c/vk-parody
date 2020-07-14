import React, {useState} from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../Common/Preloader";
import photosUri from "../../../assets/images/user.jpg"
import ProfileStatusWithHooks from "../ProfileStatusWithHooks";
import ProfileDataForm from "./ProfileDataForm";
import background from "../../../assets/images/background.jpg"
import changeImg from "../../../assets/images/upload.svg"


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
            <div className={s.padding}>
                <div className={s.profile}>
                    <div className={s.avatar}>
                        {isOwner &&
                        <div>
                            <label className={s.customFileUpload}>
                                <input type="file" multiple onChange={onMainPhotoSelected}/>
                                <i>
                                    <img src={changeImg} alt="photoData"/>Сhange
                                </i>
                            </label>
                        </div>

                        }
                        <img src={profile.photos.large || photosUri} alt="photos"/>
                    </div>
                    <div className={s.contentProfile}>
                        <h1 className={s.tooltip}> {profile.fullName} <span>id: {profile.userId}</span></h1>
                        <ProfileStatusWithHooks status={status}
                                                updateStatus={updateStatus}
                                                isOwner={isOwner}/>
                    </div>
                </div>
            </div>
            {
                editMode
                    ? <ProfileDataForm onSubmit={onSubmit}
                                       profile={profile}
                                       initialValues={profile}/>
                    : <ProfileData goToEditMode={() => setEditMode(true)}
                                   profile={profile}
                                   isOwner={isOwner}/>
            }
        </div>
    );
};

const ProfileData = ({profile, isOwner, goToEditMode}) => {

    return (
        <div className={s.content}>
            <div className={s.about}>
                {isOwner &&
                <button className={s.edit} onClick={goToEditMode}>EDIT</button>
                }
                <div className={s.lfj}>
                    <b>Looking for a job :</b> {profile.lookingForAJob ? "yes" : "no"}
                </div>
                {profile.lookingForAJob &&
                <div className={s.skills}>
                    <b>My professional skills :</b> {profile.lookingForAJobDescription}
                </div>}
                <div className={s.aboutMe}>
                    <b>About me :</b> {!profile.aboutMe ? dataNotSpecified : profile.aboutMe}
                </div>
            </div>
            <div className={s.contacts}>
                <h2>Contacts:</h2> {Object.keys(profile.contacts).map(key => {
                return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
            })}
            </div>
        </div>
    )
};

const Contact = ({contactTitle, contactValue}) => {
    return (
        <div className={s.contactsItems}>
            <div>
                <b>{contactTitle}</b>:
            </div>
            <div>
                {!contactValue
                    ? dataNotSpecified
                    : <a href={contactValue} target="_blank" rel="noopener noreferrer"> {contactValue}</a>
                }
            </div>
        </div>
    )
};

export default ProfileInfo;
