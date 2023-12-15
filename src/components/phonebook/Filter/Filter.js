import React from 'react';
import css from '../Style.module.css';

const Filter = ({ value, onChange }) => (
  <label className={css.filter}>
    Find contacts by name:
    <input
      className={css.inputFilter}
      type="text"
      value={value}
      onChange={onChange}
    ></input>
  </label>
);
export default Filter;
