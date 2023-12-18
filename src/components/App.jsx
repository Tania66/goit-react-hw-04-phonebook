import shortid from 'shortid';
import { useState,useEffect } from 'react';
import css from './phonebook/Style.module.css'
import ContactForm from './phonebook/ContactForm/ContactForm';
import Filter from './phonebook/Filter/Filter';
import ContactList from './phonebook/ContactList/ContactList ';




const contactList = [  {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
{id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
{id: 'id-3', name: 'Eden Clements', number: '645-17-79'},]

export default function App()  {

const [contacts, setContacts]  = useState(() => JSON.parse(window.localStorage.getItem('contacts')) ?? contactList)
const [query, setQuery] = useState('');



  useEffect (()=>{
    window.localStorage.setItem('contacts', JSON.stringify(contacts))
  }, [contacts])





function handleAddContact(name, number) {

const contact = {
  id:shortid.generate(),
  name: name,
  number: number,
};

    const saveContact = contacts.some(contact =>
      contact.name.toLowerCase() === name.toLowerCase())
    
      if (saveContact) {
        alert(`${name} is already in contacts`)
        return
      }
    
      const saveNumber = contacts.some(contact =>
        contact.number === number)
    
        if (saveNumber) {
          alert(`${number} is already in contacts`)
          return
        }
    
    setContacts([...contacts,contact]);
}


function handleDeleteContact(contactId) {
        setContacts(contacts.filter((contact) => contact.id !== contactId));
    }



function onChangeFilter (event)  {
  setQuery(event.currentTarget.value)
}



function filterContacts(){
  let filterContact = [];
  if (query) {
    filterContact = contacts.filter((contact) => contact.name.toLowerCase().includes(query.toLowerCase()));
  }else{
    return filterContact = contacts;
  }
return filterContact;
}



return(

  <div className={css.inner}>
  <h1 className={css.title}>Phonebook</h1>
  <ContactForm handleAddContact={handleAddContact}
   />

  <h2 className={css.title}>Contacts</h2>
 <Filter query={query} onChange={onChangeFilter}/> 

  <ContactList className={css.list} 
  fiterContact ={filterContacts}
  handleDeleteContact={handleDeleteContact}/>

</div>
);

}
  
