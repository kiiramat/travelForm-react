import './App.css';
import React from 'react';
import InputForm from './components/InputForm';
import RadioButtonForm from './components/RadioButtonForm';
import SelectForm from './components/SelectForm';
import CheckboxForm from './components/CheckboxForm';

class App extends React.Component {
  constructor() {
    super()
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
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.onChange = this.onChange.bind(this)
    this.onChangedCheckbox = this.onChangedCheckbox.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault()
    console.log("Form submitted!")
  }

  onChange(name, value) {
    this.setState({
      [name] : value 
    })
  }

  onChangedCheckbox(name, checked) {
    this.setState(prevState => {
      return {
        dietaryRestrictions: {
          ...prevState.dietaryRestrictions, [name] : checked
        }
      }
    })
  } 
  
  showDietaryRestrictions() {
    const dietarykeys = Object.keys(this.state.dietaryRestrictions)
    const dietaryRestrictions = dietarykeys
      .filter(key => this.state.dietaryRestrictions[key] === true)
      .map(key => key.slice(2).replace(/([a-z])([A-Z])/, '$1 $2'))
    return dietaryRestrictions.join(", ")
  }

  render() {
     return (
      <div className="App">
        <main>
          <form onSubmit={this.handleSubmit}>
            <br />
            <InputForm 
              name = "firstName"
              value = {this.state.firstName}
              placeholder = "First Name"
              handleChange = {this.onChange} 
            />
            <InputForm 
              name = "lastName"
              value = {this.state.lastName}
              placeholder = "Last Name"
              handleChange = {this.onChange} 
            />
            <InputForm 
              name = "age"
              value = {this.state.age}
              placeholder = "Age"
              handleChange = {this.onChange} 
            />
            <br />
            <RadioButtonForm 
              name = "gender"
              value = "male"
              checked = {this.state.gender === "male"}
              handleChange = {this.onChange}
            />
            <RadioButtonForm 
              name = "gender"
              value = "female"
              checked = {this.state.gender === "female"}
              handleChange = {this.onChange}
            />
            <br />
            <SelectForm 
              text = "Travel to: "
              name = "travelTo"
              value = {this.state.travelTo}
              handleChange = {this.onChange}
            />
            <br />
            <label>Dietary Restriction: </label>
            <CheckboxForm 
              text = "Vegetarian ?"
              name = "isVegetarian"
              value = {this.state.dietaryRestrictions.isVegetarian}
              checked = {this.state.dietaryRestrictions.isVegetarian}
              handleChange = {this.onChangedCheckbox}
            />
            <CheckboxForm 
              text = "Gluten Free ?"
              name = "isGlutenFree"
              value = {this.state.dietaryRestrictions.isGlutenFree}
              checked = {this.state.dietaryRestrictions.isGlutenFree}
              handleChange = {this.onChangedCheckbox}
            />
            <CheckboxForm 
              text = "Lactose Free ?"
              name = "isLactoseFree"
              value = {this.state.dietaryRestrictions.isLactoseFree}
              checked = {this.state.dietaryRestrictions.isLactoseFree}
              handleChange = {this.onChangedCheckbox}
            />
            <br />
            
            <button>Submit</button>
          </form>
          <hr />
          <h2>Entered information:</h2>
          <p>Your name: {this.state.firstName} {this.state.lastName}</p>
          <p>Your age: {this.state.age}</p>
          <p>Your gender: {this.state.gender}</p>
          <p>Your destination: {this.state.travelTo}</p>
          <p>{`Your dietary restrictions: ${this.showDietaryRestrictions()}`}</p>
        </main>
      </div>
    )
  }
}

export default App;
