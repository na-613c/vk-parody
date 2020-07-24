import React, {useEffect} from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatus, getUserProfile, savePhoto, saveProfile, updateStatus} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";


let ProfileContainer = (props) => {

    useEffect(() => {
        let userId = props.match.params.userId;
        if (!userId) {
            userId = props.userId;
            if (!userId) props.history.push("/login");
        }
        props.getUserProfile(userId);
        props.getStatus(userId);
    }, [props.match.params.userId]);

    return (
        <div>
            <Profile {...props}
                     isOwner={!props.match.params.userId}
                     profile={props.profile}
                     status={props.status}
                     updateStatus={props.updateStatus}
                     savePhoto={props.savePhoto}
                     saveProfile={props.saveProfile}
                     isLoading={props.isLoading}
            />
        </div>);
};

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    userId: state.auth.id,
    isAuth: state.auth.isAuth,
    isLoading: state.profilePage.isLoadingProfile
});

export default compose(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus, savePhoto, saveProfile}),
    withRouter
)(ProfileContainer);
