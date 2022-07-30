import PropTypes from 'prop-types';
import ContactItem from './ContactItem';

export default function ContactList({ phoneContacts }) {
   return (
      <ul>
         {phoneContacts.map(({ name, number }) => (
            <ContactItem
               key={number}
               name={name}
               number={number}
            />
         ))}
      </ul>
   );
};

ContactList.propTypes = {
    phoneContacts: PropTypes.arrayOf(
      PropTypes.shape({
         name: PropTypes.string.isRequired,
         number: PropTypes.string.isRequired,
      })
   ),
};