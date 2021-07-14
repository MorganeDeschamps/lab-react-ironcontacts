import React from "react";
import Button from "./Button";
import 'bulma/css/bulma.css';

function ContactRow(props) {

    const {contact: {name, pictureUrl, popularity, id} , handleFunction} = props



    return (
        <tr className="contact-row">
          <td className="cell"><img src={pictureUrl} alt={name}></img></td>
          <td className="cell"><span className="cell-span">{name}</span></td>
          <td className="cell"><span className="cell-span">{popularity}</span></td>
          <td className="cell"><span className="cell-span">
            <Button buttonName="Delete" buttonClass="button delete-contact is-danger is-light" handleFunction={handleFunction} params={id}/>
          </span></td>
        </tr>
    );
}

export default ContactRow;
