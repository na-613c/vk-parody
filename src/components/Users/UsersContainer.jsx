import React from "react";
import {connect} from "react-redux";
import {follow, requestUsers, setCurrentPage, toggleIsFollowingInProgress, unfollow} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../Common/Preloader/Preloader";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsersSuperSelector
} from "../../redux/user-selectors";


class UsersContainer extends React.Component {
    componentDidMount() {
        const {currentPage, pageSize} = this.props;
        this.props.requestUsers(currentPage, pageSize);
    }

    onPageChanged = (pageNumber) => {
        const {pageSize} = this.props;
        this.props.requestUsers(pageNumber, pageSize);
    };

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: getUsersSuperSelector(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
};

export default connect(mapStateToProps, {
    follow,
    unfollow,
    setCurrentPage,
    toggleIsFollowingInProgress,
    requestUsers
})(UsersContainer);