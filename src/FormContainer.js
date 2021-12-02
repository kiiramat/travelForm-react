import React from 'react';
import FormComponent from './FormComponent';

class FormContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      age: "",
      gender: "",
      travelTo: "Lisbon",
      dietaryRestrictions: {
        isVegetarian: false,
        isGlutenFree: false,
        isLactoseFree: false
      }
    };
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log("Form submitted!");
  }

  onChange = (name, value) => {
    this.setState({
      [name]: value
    });
  };

  onChangedCheckbox = (name, checked) => {
    this.setState(prevState => {
      return {
        dietaryRestrictions: {
          ...prevState.dietaryRestrictions, [name]: checked
        }
      };
    });
  };

  showDietaryRestrictions = () => {
    const dietarykeys = Object.keys(this.state.dietaryRestrictions);
    const dietaryRestrictions = dietarykeys
      .filter(key => this.state.dietaryRestrictions[key] === true)
      .map(key => key.slice(2).replace(/([a-z])([A-Z])/, '$1 $2'));
    return dietaryRestrictions.join(", ");
  };

  render() {
    return (
      <FormComponent
        data={this.state}
        handleSubmit={this.handleSubmit}
        onChange={this.onChange}
        onChangedCheckbox={this.onChangedCheckbox}
        showDietaryRestrictions={this.showDietaryRestrictions}
      />
    );
  }
}

export default FormContainer;
