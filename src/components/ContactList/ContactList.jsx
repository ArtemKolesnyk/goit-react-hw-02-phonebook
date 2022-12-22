import PropTypes from 'prop-types';
import Contact from '../Contact';

const ContactList = ({ contacts, removeContact }) => {
  return contacts.map(contact => (
    <Contact removeContact={removeContact} key={contact.id} contact={contact} />
  ));
};

Contact.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ).isRequired,
  removeContact: PropTypes.func.isRequired,
};

export default ContactList;