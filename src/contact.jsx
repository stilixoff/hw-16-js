import React from 'react';

const Contact = ({firstName, lastName, phone, gender}) => {
    return (
        <div>
            <ul>
                <li>{firstName}</li>
                <li>{lastName}</li>
                <li>{phone}</li>
                {
                    gender && <li>{gender}</li>
                }
            </ul>
        </div>
    );
}

export default Contact;