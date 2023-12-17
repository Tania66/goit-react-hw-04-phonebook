import { useState } from 'react';
import shortid from 'shortid';
import css from '../Style.module.css';

export default function OldContactForm({ handleAddContact }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const nameInputId = shortid.generate();
  const numberInputId = shortid.generate();

  const handleChangeName = event => {
    setName(event.target.value);
  };

  const handleChangeNumber = event => {
    setNumber(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    setName('');
    setNumber('');
    handleAddContact(name, number);
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label className={css.label} htmlFor={nameInputId}>
        Name
        <input
          className={css.input}
          value={name}
          type="text"
          required
          id={nameInputId}
          onChange={handleChangeName}
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        />
      </label>
      <label className={css.label} htmlFor={numberInputId}>
        Number
        <input
          className={css.input}
          value={number}
          required
          type="number"
          onChange={handleChangeNumber}
          id={numberInputId}
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
        />
      </label>

      <button className={css.btnSubmit} type="submit">
        Add contact
      </button>
    </form>
  );
}
