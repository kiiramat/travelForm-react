import './App.css';
import React from 'react';
import InputForm from './components/InputForm';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      firstName: "",
      lastName: "",
      age: ""
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




{/* 
            <input placeholder="First Name" /><br />
            <input placeholder="Last Name" /><br />
            <input placeholder="Age" /><br /> */}
            
            {/* Create radio buttons for gender here */}
            <br />
            
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
          <p>Your gender: {/* Gender here */}</p>
          <p>Your destination: {/* Destination here */}</p>
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
