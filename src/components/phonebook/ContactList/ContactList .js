import React from 'react';
import css from '../Style.module.css';

const ContactList = ({ contacts, onDeleteContact }) => (
  <ul className={css.list}>
    {contacts.map(contact => (
      <li className={css.item} key={contact.id}>
        <p>
          {contact.name}: {contact.number}
        </p>
        <button
          className={css.btnDelete}
          onClick={() => onDeleteContact(contact.id)}
        >
          Delete
        </button>
      </li>
    ))}
  </ul>
);

export default ContactList;
