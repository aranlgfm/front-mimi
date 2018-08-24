import React, { Component } from 'react';
import User from './User';
import './Userlist.css';

class Userlist extends Component {

    render() {
        const { users, onToggle, onRemove } = this.props;

        const userList = users.map(
            ({ id, name, age, checked }) => (
                <User
                    id={id}
                    name={name}
                    age={age}
                    checked={checked}
                    onToggle={onToggle}
                    onRemove={onRemove}
                    key={id}
                />
            )
        );

        return (
            <div className="list">
                {userList}
            </div>
        );
    }
}

export default Userlist;