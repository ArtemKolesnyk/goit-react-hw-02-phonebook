import { Component } from "react";
import PropTypes from 'prop-types';
import {Form, Label, Button, Input} from './ContactForm.styled';



class ConatctForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = ({target: {name, value}}) => {
    this.setState({
      [name]: value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit({ ...this.state })
    this.inputReset(); 
  };

  inputReset = () => {
    this.setState({
      name: '',
      number: '',
    });
  }

  render() {
    const { name, number } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <Label>Name:   
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={this.handleChange}
            placeholder="Enter your name..."
          />
        </Label>
        <Label>Number:
         <Input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={this.handleChange}
            placeholder="Enter your number..."
          /> 
        </Label>
        <Button>Add contact</Button>
      </Form>
    )
  }
};

ConatctForm.propTypes = {
  name: PropTypes.string,
  number: PropTypes.number,
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
}

export default ConatctForm;
