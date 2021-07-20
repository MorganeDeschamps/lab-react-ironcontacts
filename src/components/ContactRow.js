import React from "react";
import Button from "./Button";
import 'bulma/css/bulma.css';

function ContactRow(props) {

    const {contact: {name, pictureUrl, popularity, id}, contactList, handleDelete} = props


    function deleteContact(contactId) {
      const updatedContactsArray = contactList.filter(contact => contact.id !== contactId)
      handleDelete(updatedContactsArray)
    }


    return (
        <tr className="contact-row">
          <td className="cell"><img src={pictureUrl} alt={name}></img></td>
          <td className="cell"><span className="cell-span">{name}</span></td>
          <td className="cell"><span className="cell-span">{popularity}</span></td>
          <td className="cell"><span className="cell-span">
            <button className="button delete-contact is-danger is-light" onClick={() => deleteContact(id)}> Delete </button>
          </span></td>
        </tr>
    );
}

export default ContactRow;
