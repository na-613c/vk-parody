import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../Common/Preloader";
import photosUri from "../../../assets/images/user.jpg"
import ProfileStatusWithHooks from "../ProfileStatusWithHooks";


const ProfileInfo = ({profile,status,updateStatus}) => {

    if (!profile) return <Preloader/>;

    let lookingForAJobDescription = "";
    if (profile.lookingForAJob) {
        lookingForAJobDescription = `Поиск работы: ${profile.lookingForAJobDescription}`;
    }

    let photos;

    if (!profile.photos.large) photos = photosUri;
    else photos = profile.photos.large;

    return (
        <div>
            <div className={s.background}>
                <img
                    src="https://images.squarespace-cdn.com/content/v1/565823b5e4b0fad364e2ac13/1496734842059-Y0A2D2ZQF2H7FM2S4VOV/ke17ZwdGBToddI8pDm48kBbv7tO7RGtBX-ydkfg2CiMUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYy7Mythp_T-mtop-vrsUOmeInPi9iDjx9w8K4ZfjXt2dsOb7-vecUQi1e65oRxjclR2CgaESKdXAV0jRJD0mxpLZtJ3qR9G2BYeA0wOAaeYNg/Banner-Books-1800x400.jpg?format=2500w"
                    alt=""/>
            </div>
            <div className={`${s.avatar} padding`}>
                <div>
                    <img src={photos} alt="photos"/>
                    <h1> {profile.fullName} ____ id:{profile.userId}</h1>
                    <ProfileStatusWithHooks status={status}
                                            updateStatus={updateStatus}/>
                </div>
            </div>
            <div className={s.about}>
                {lookingForAJobDescription}
                <p>
                    {
                        profile.contacts.facebook !== null &&
                        <div><b>Контакты:</b>
                            <p> facebook : {profile.contacts.facebook}</p>
                            <p> website : {profile.contacts.website}</p>
                            <p> vk : {profile.contacts.vk}</p>
                            <p> twitter : {profile.contacts.twitter}</p>
                            <p> instagram : {profile.contacts.instagram}</p>
                            <p> youtube : {profile.contacts.youtube}</p>
                            <p> github : {profile.contacts.github}</p>
                            <p> mainLink : {profile.contacts.mainLink}</p>
                        </div>
                    }
                </p>
            </div>
        </div>);
};

export default ProfileInfo;
