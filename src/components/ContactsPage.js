import React from "react";
import { useState } from 'react';
import 'bulma/css/bulma.css';

import ContactRow from "./ContactRow";
import Button from "./Button";


import contactsFile from "../contacts.json"
const contactsData = [...contactsFile]


function ContactsPage() {

    const firstFiveArray = contactsData.splice(0, 5)

    const [contacts, setContacts] = useState(firstFiveArray)
  
    function addRandom() {
      let randomIndex = Math.floor(Math.random() * (contactsData.length - 1));

      let newContact = contactsData.splice(randomIndex, 1)

      setContacts([newContact, ...contacts])
      console.log("contactsData: ", contactsData, "contacts: ", contacts)
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
    


  return (
    <div className="Contacts-page">

    <h2 class="title is-2">Contacts: </h2>

    <div class="buttons are-medium">

      <button className="button is-primary" onClick={addRandom}> Add rando </button>
      <button className="button is-info is-light" onClick={() => sortContacts("name")}> Sort by name </button>
      <button className="button is-info is-light" onClick={() => sortContacts("popularity")}> Sort by popularity </button>
 
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
                  <ContactRow key={index} contact={contact} contactList={contacts} handleDelete={setContacts}/>
              )
          })}
        </tbody>
    </table>
    </div> 

    
  );
}

export default ContactsPage;
