import React from 'react';
import './Form.css';

const Form = ({ onKeyPress, name, age, addUser, nameChange, ageChange }) => {
    return (
        <div className="form">
            <input className="name" value={name} onChange={nameChange} onKeyPress={onKeyPress} />
            <input className="age" type="number" value={age} onChange={ageChange} onKeyPress={onKeyPress} />
            <div className="create-button" onClick={addUser}>
                추가
            </div>
        </div>
    )
}

export default Form;