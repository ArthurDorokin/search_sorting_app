import React from 'react';
import UserListItem from '../user-list-item';
import './user-list.css';

const UserList = ({lists, showChar}) => {

    const elements = lists.map((item) => {
        return (
            <div onClick={() => showChar(item.id)}
                 key={item.id}
                 className="list-user-item">
                <UserListItem
                    // img={item.img}
                    // nameListUser={item.nameListUser}
                    // ageListUser={item.ageListUser}
                    // phoneListUser={item.phoneListUser}
                    {...item}
                />
            </div>
        )
    });

    return (
        <div  className='wrapUserList'>
            <div className="name-category">
                <div className="blockLeft">
                    <div className="imgListUser"><strong>Image</strong></div>
                    <div className="nameListUser"><strong>Name</strong></div>
                </div>
                <div className="blockRight">
                    <div className="ageListUser"><strong>Age</strong></div>
                    <div className="phoneListUser"><strong>Phone</strong></div>
                </div>
            </div>
            <div className="all-list-user">
                {elements}
            </div>
        </div>
    )

};

export default UserList;