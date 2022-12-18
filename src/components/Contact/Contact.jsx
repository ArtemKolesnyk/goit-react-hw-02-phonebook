import PropTypes from 'prop-types';


const Contact = ({contact: {name, number, id}, removeContact}) => {
  return (
    <li>
      <p>Name:{name}</p>
      <p>Number:{number}</p>
      <button onClick={()=> removeContact(id)}>Delete</button>
    </li>
  )
};

Contact.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  })
}

export default Contact;