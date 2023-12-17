import css from '../Style.module.css';

export default function OldContactList({ fiterContact, handleDeleteContact }) {
  return (
    <ul className={css.list}>
      {fiterContact().map(contact => (
        <li className={css.item} key={contact.id}>
          {contact.name}: {contact.number}
          <button
            className={css.btnDelete}
            onClick={() => handleDeleteContact(contact.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
