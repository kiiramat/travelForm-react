import './App.css';
import React from 'react';
import InputForm from './components/InputForm';
import RadioButtonForm from './components/RadioButtonForm';
import SelectForm from './components/SelectForm';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      firstName: "",
      lastName: "",
      age: "",
      travelTo: "Lisbon"
    }
    this.onChange = this.onChange.bind(this)
  }

  onChange(name, value) {
    this.setState({
      [name] : value 
    })
  }

  render() {
     return (
      <div className="App">
        <main>
          <form>
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


{/*          
            {/* Create select box for location here */}
            <br />
            
            {/* Create check boxes for dietary restrictions here */}
            <br />
            
            <button>Submit</button>
          </form>
          <hr />
          <h2>Entered information:</h2>
          <p>Your name: {this.state.firstName} {this.state.lastName}</p>
          <p>Your age: {this.state.age}</p>
          <p>Your gender: {this.state.gender}</p>
          <p>Your destination: {this.state.travelTo}</p>
          <p>
              Your dietary restrictions: 
              {/* Dietary restrictions here, comma separated */}
          </p>
        </main>
      </div>
    )
  }
}

export default App;
