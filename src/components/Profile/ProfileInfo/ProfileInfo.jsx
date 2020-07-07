import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../Common/Preloader";
import photosUri from "../../../assets/images/user.jpg"
import ProfileStatusWithHooks from "../ProfileStatusWithHooks";


const ProfileInfo = (props) => {

    if (!props.profile) return <Preloader/>;

    let lookingForAJobDescription = "";
    if (props.profile.lookingForAJob) {
        lookingForAJobDescription = `Поиск работы: ${props.profile.lookingForAJobDescription}`;
    }

    let photos;

    if (!props.profile.photos.large) photos = photosUri;
    else photos = props.profile.photos.large;

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
                    <h1> {props.profile.fullName} ____ id:{props.profile.userId}</h1>
                    <ProfileStatusWithHooks status={props.status}
                                   updateStatus={props.updateStatus}/>
                </div>
            </div>
            <div className={s.about}>
                {lookingForAJobDescription}
                <p>
                    {
                    props.profile.contacts.facebook !== null &&
                    <div><b>Контакты:</b>
                        <p> facebook : {props.profile.contacts.facebook}</p>
                        <p> website : {props.profile.contacts.website}</p>
                        <p> vk : {props.profile.contacts.vk}</p>
                        <p> twitter : {props.profile.contacts.twitter}</p>
                        <p> instagram : {props.profile.contacts.instagram}</p>
                        <p> youtube : {props.profile.contacts.youtube}</p>
                        <p> github : {props.profile.contacts.github}</p>
                        <p> mainLink : {props.profile.contacts.mainLink}</p>
                    </div>
                }
                </p>
            </div>
        </div>);
};

export default ProfileInfo;
