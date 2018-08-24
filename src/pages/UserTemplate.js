import React from 'react';
import './UserTemplate.css';

const UserTemplate = ({ form, children }) => {
    return (
        <main className="user-list">
            <div className="title">
                유저 목록
      </div>
            <section className="form-wrapper">
                {form}
            </section>
            <section className="todos-wrapper">
                {children}
            </section>
        </main>
    )
}

export default UserTemplate;