import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import Preloader from "../Common/Preloader";


const Profile = ({isLoading, profile, status, updateStatus, isOwner, savePhoto, saveProfile}) => {
    if (isLoading) {
        return <Preloader/>
    } else {
        return (
            <div>
                <ProfileInfo isOwner={isOwner}
                             profile={profile}
                             status={status}
                             updateStatus={updateStatus}
                             savePhoto={savePhoto}
                             saveProfile={saveProfile}
                />
                <MyPostsContainer/>
            </div>
        );
    }

};

export default Profile;
