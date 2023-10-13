import Form from './form';
import ContactList from './contactList';
import FilterInput from './filterInput';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'store/selectors';

const App = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const getFilteredContacts = () =>
    contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );

  return (
    <div>
      <h1>Phonebook</h1>
      <Form />
      <h2>Contacts</h2>
      {contacts.length > 0 ? <FilterInput /> : <p>There are no contacts yet</p>}
      {contacts && getFilteredContacts().length > 0 && (
        <ContactList contacts={getFilteredContacts()} />
      )}
    </div>
  );
};

export default App;
