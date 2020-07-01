import React from "react";
import s from './users.module.css'

let Users = (props) => {

    if (props.users.length === 0) {
        props.setUsers([
                {
                    id: 1, photoUrl: 'https://www.meme-arsenal.com/memes/b5d2ec8e1ffa887b239fb66a8653dfe6.jpg',
                    followed: true, fullName: "Ivan", status: 'Test ?', location: {city: 'Minsk', country: 'Belarus'}
                },
                {
                    id: 2, photoUrl: 'https://www.meme-arsenal.com/memes/b5d2ec8e1ffa887b239fb66a8653dfe6.jpg',
                    followed: false, fullName: "Sasha", status: 'Hi', location: {city: 'Moscow', country: 'Russia'}
                },
                {
                    id: 3, photoUrl: 'https://www.meme-arsenal.com/memes/b5d2ec8e1ffa887b239fb66a8653dfe6.jpg',
                    followed: true, fullName: "Anna", status: 'GOD', location: {city: 'Kiev', country: 'Ukraun'}
                }
            ]
        )
    }


    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img className={s.userPhoto} src={u.photoUrl} alt='test'/>
                    </div>
                    <div>
                        {u.followed ?
                            <button onClick={() => {
                                props.unfollow(u.id)
                            }}>Unfollow</button> :
                            <button onClick={() => {
                                props.follow(u.id)
                            }}>Follow</button>}

                    </div>
                </span>
                <span>
                    <div>{u.fullName}</div>
                    <div>{u.status}</div>
                </span>
                <span>
                    <div>{u.location.city}</div>
                    <div>{u.location.country}</div>
                </span>
            </div>)
        }
    </div>
};

export default Users;