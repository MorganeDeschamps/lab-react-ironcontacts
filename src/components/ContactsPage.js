import React from "react";
import { useState } from 'react';
import 'bulma/css/bulma.css';

import ContactRow from "./ContactRow";
import Button from "./Button";


import contactsData from "../contacts.json"


function ContactsPage() {

    const firstFiveArray = contactsData.filter((contact, index, array) => array.indexOf(contact) < 5 )

    const [contacts, setContacts] = useState(firstFiveArray)

  
    function addRandom() {
      let newContact = contactsData[Math.floor(Math.random() * (contactsData.length - 1))]

      const arrayToConcat = [newContact]
      const updatedContactsArray = contacts.concat(arrayToConcat)
      setContacts(updatedContactsArray)
    }
    

    function sortContacts(sortType) {
      let sortedArray = [...contacts];

      if (sortType === "name") {
        sortedArray.sort((firstEl, secondEl) => {
          if (firstEl[sortType] < secondEl[sortType]) {
            return -1;
          }
          if (firstEl[sortType] > secondEl[sortType]) {
            return 1;
          }
          return 0;
        })
      }

      else {
        sortedArray.sort((firstEl, secondEl) => {
          return secondEl[sortType] - firstEl[sortType]
        })
      }
      
      setContacts(sortedArray)
    }
    


    function deleteContact(contactId) {
      const updatedContactsArray = contacts.filter(contact => contact.id !== contactId)
      setContacts(updatedContactsArray)
    }
    


  return (
    <div className="Contacts-page">

    <h2 class="title is-2">Contacts: </h2>

    <div class="buttons are-medium">
      <Button buttonName="Add rando" buttonClass="button add-random-contact is-primary" handleFunction={addRandom}/>
      <Button buttonName="Sort by name" buttonClass="button sort-by-name is-info is-light" handleFunction={sortContacts} params="name"/>
      <Button buttonName="Sort by popularity" buttonClass="button sort-by-popularity is-info is-light" handleFunction={sortContacts} params="popularity" />
    </div>

    <table id="contacts-table" class="table is-hoverable">
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact, index) => {
              return (
                  <ContactRow key={index} contact={contact} handleFunction={deleteContact}/>
              )
          })}
        </tbody>
    </table>
    </div> 

    
  );
}

export default ContactsPage;
