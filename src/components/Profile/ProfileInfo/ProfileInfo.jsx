import React from 'react';
import s from './ProfileInfo.module.css';


const ProfileInfo = () => {
    return (
        <div>
            <div className={s.background}>
                <img src="https://images.squarespace-cdn.com/content/v1/565823b5e4b0fad364e2ac13/1496734842059-Y0A2D2ZQF2H7FM2S4VOV/ke17ZwdGBToddI8pDm48kBbv7tO7RGtBX-ydkfg2CiMUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYy7Mythp_T-mtop-vrsUOmeInPi9iDjx9w8K4ZfjXt2dsOb7-vecUQi1e65oRxjclR2CgaESKdXAV0jRJD0mxpLZtJ3qR9G2BYeA0wOAaeYNg/Banner-Books-1800x400.jpg?format=2500w"
                alt="" />
            </div>
            <div className={`${s.avatar} padding`}>
                <img src="https://image.freepik.com/free-photo/image-human-brain_99433-298.jpg" alt=""  />
                <span> My Name</span>        
            </div>
        </div>);

}

export default ProfileInfo;
