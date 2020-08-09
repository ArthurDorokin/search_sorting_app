import React, {Component} from 'react';


export default class UserListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        const {img, nameListUser, ageListUser, phoneListUser} = this.props;
        return (
            <div>
                <div className="blockLeft">
                    <div className="imgListUser">
                        <img src={img} alt=""/>
                    </div>
                    <div className="nameListUser">
                        <p>{nameListUser}</p>
                    </div>
                </div>
                <div className="blockRight">
                    <div className="ageListUser">
                        <p>{ageListUser}</p>
                    </div>
                    <div className="phoneListUser">
                        <p>{phoneListUser}</p>
                    </div>
                </div>
            </div>
        )
    }
}
