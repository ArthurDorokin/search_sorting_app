import React from 'react';
import './select-user.css';


 const SelectUser = ({character}) => {
     const {img, nameListUser, ageListUser, phoneListUser, textUser} = character
        return (
            <div className="WrapSelectUser">
                <div className="user">
                    <div className="img_user">
                        <img src={img} alt=""/>
                    </div>
                    <div className="name_user">
                        <h2>{nameListUser}</h2>
                    </div>
                </div>
                <div className="description_user">
                    <div className="age_user border">
                        <p>Age:</p>
                        <p>{ageListUser}</p>
                    </div>
                    <div className="fav_animal_user border">
                        <p>Favorite animal:</p>
                        <p>owl</p>
                    </div>
                    <div className="phone_user border">
                        <p>Phone:</p>
                        <p>{phoneListUser}</p>
                    </div>
                </div>
                <div className="favorite_phrase">
                    <p><strong>Favorite phrase: </strong>{textUser}</p>
                </div>
            </div>
        )


}

export default SelectUser

