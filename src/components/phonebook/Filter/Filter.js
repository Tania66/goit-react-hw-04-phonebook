import css from '../Style.module.css';

export default function Filter({ query, onChange }) {
  return (
    <label className={css.filter}>
      Find contacts by name:
      <input
        className={css.inputFilter}
        type="text"
        value={query}
        onChange={onChange}
      ></input>
    </label>
  );
}
