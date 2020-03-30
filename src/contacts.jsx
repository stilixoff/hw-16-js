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
    const [isMale, setIsMale] = useState(false);
    const [isFemale, setIsFemale] = useState(false);
    const [noGender, setNoGender] = useState(false);

    // (isFemale && gender==='female') ||
    //                     (isMale && gender==='male') ||

    // useEffect(
    //     () => {
    //         setContacts(CONTACTS.filter(({ firstName, lastName, phone, gender }) => {
    //             const tempSearch = search.toLowerCase();
    //             return (firstName && firstName.toLowerCase().includes(tempSearch)) ||
    //                     (lastName && lastName.toLowerCase().includes(tempSearch)) ||
    //                     (phone && phone.toLowerCase().includes(tempSearch));
    //         }))
    //     },
    //     [search, isMale],
    // )

    
    useEffect(
        () => {
            setContacts(CONTACTS.filter(({ firstName, lastName, phone, gender }) => {
                const tempSearch = search.toLowerCase();

                const searchResult = (firstName && firstName.toLowerCase().includes(tempSearch)) ||
                (lastName && lastName.toLowerCase().includes(tempSearch)) ||
                (phone && phone.toLowerCase().includes(tempSearch));

                const maleResult = isMale ? gender==='male' : true;

                return searchResult && maleResult; 
            }))
        },
        [search, isMale],
    )

    const handleSearchChange = ({ target: { value } }) => {
        setSearch(value);
    }

    const handleSearchGenderMale = ({ target: { checked } }) => {
        setIsMale(checked);
    }


    return (
        <>
            <input
                onChange={handleSearchChange}
                placeholder="Enter..."
            />
            <input 
                type="checkbox"
                onChange={handleSearchGenderMale}
            />

            <div>
                found - {contacts.length} contacts
            </div>
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