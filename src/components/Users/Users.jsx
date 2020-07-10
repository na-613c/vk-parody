import React from "react";
import Paginator from "../Common/Paginator/Paginator";
import User from "./User";

let Users = ({totalUsersCount, pageSize, currentPage, onPageChanged, users, followingInProgress, unfollow, follow}) => {
    return <div >
        <Paginator currentPage={currentPage}
                   totalUsersCount={totalUsersCount}
                   pageSize={pageSize}
                   onPageChanged={onPageChanged}
        />
        {
            users.map(u => <User key={u.id}
                                 user={u}
                                 followingInProgress={followingInProgress}
                                 unfollow={unfollow}
                                 follow={follow}
            />)
        }
    </div>
};


export default Users;