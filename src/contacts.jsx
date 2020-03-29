import React, { useState, useEffect } from 'react';

import Contact from './contact';

const CONTACTS = [{
    firstName: "Барней",
    lastName: "Стинсовский",
    phone: "+380956319521",
    gender: "male",
}, {
    firstName: "Робин",
    lastName: "Щербатская",
    phone: "+380931460123",
    gender: "female",
}, {
    firstName: "Аномный",
    lastName: "Анонимус",
    phone: "+380666666666",
}, {
    firstName: "Лилия",
    lastName: "Олдровна",
    phone: "+380504691254",
    gender: "female",
}, {
    firstName: "Маршэн",
    lastName: "Эриксонян",
    phone: "+380739432123",
    gender: "male",
}, {
    firstName: "Теодор",
    lastName: "Мотсбэс",
    phone: "+380956319521",
    gender: "male",
}];

const Contacts = () => {

    const [contacts, setContacts] = useState(CONTACTS);
    const [search, setSearch] = useState('');
    // const [isMale, setIsMale] = useState(false);
    // const [isFemale, setIsFemale] = useState(false);

    useEffect(
        () => {
            setContacts(CONTACTS.filter(({ firstName, lastName, phone }) => {
                const tempSearch = search.toLowerCase();
                return (firstName && firstName.toLowerCase().includes(tempSearch)) ||
                    (lastName && lastName.toLowerCase().includes(tempSearch)) ||
                    (phone && phone.toLowerCase().includes(tempSearch));
            }))
        },
        [search],
    )

    const handleSearchChange = ({ target: { value } }) => {
        setSearch(value);
    }


    return (
        <>
            <input
                onChange={handleSearchChange}
                placeholder="Enter..."

            />
            <div>
                {
                    contacts.map((contact, index) => {
                        return (
                            <Contact
                                key={index}
                                {...contact}
                            />
                        )
                    })
                }
            </div>
        </>
    );
}

export default Contacts;