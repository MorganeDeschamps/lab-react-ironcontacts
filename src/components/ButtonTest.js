import React, { useState } from "react";
import contactsData from "../contacts.json"
/* 

function useButtonTest(contacts) {

    const [newContacts, setContacts] = useState(contacts)


    let newContact = contactsData[Math.floor(Math.random() * (contactsData.length - 1))]

    setContacts([...newContacts, newContact])
     const {buttonName, handleFunction, buttonClass} = props
    const {contacts, setContacts, contactsData} = props.params
 
    console.log(newContacts)
    return newContacts
} */

export const Increment = (contacts, setContacts) => {

    let newContact = contactsData[Math.floor(Math.random() * (contactsData.length - 1))]

    setContacts([...contacts, newContact])

};

