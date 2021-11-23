import React from "react";
import InputForm from './components/InputForm';
import RadioButtonForm from './components/RadioButtonForm';
import SelectForm from './components/SelectForm';
import CheckboxForm from './components/CheckboxForm';

function FormComponent(props) {
  return (
    <div className="App">
      <main>
        <form onSubmit={props.handleSubmit}>
          <br />
          <InputForm
            name="firstName"
            value={props.data.firstName}
            placeholder="First Name"
            handleChange={props.onChange}
          />
          <InputForm
            name="lastName"
            value={props.data.lastName}
            placeholder="Last Name"
            handleChange={props.onChange}
          />
          <InputForm
            name="age"
            value={props.data.age}
            placeholder="Age"
            handleChange={props.onChange}
          />
          <br />
          <RadioButtonForm
            name="gender"
            value="male"
            checked={props.data.gender === "male"}
            handleChange={props.onChange}
          />
          <RadioButtonForm
            name="gender"
            value="female"
            checked={props.data.gender === "female"}
            handleChange={props.onChange}
          />
          <br />
          <SelectForm
            text="Travel to: "
            name="travelTo"
            value={props.data.travelTo}
            handleChange={props.onChange}
          />
          <br />
          <label>Dietary Restriction: </label>
          <CheckboxForm
            text="Vegetarian ?"
            name="isVegetarian"
            value={props.data.dietaryRestrictions.isVegetarian}
            checked={props.data.dietaryRestrictions.isVegetarian}
            handleChange={props.onChangedCheckbox}
          />
          <CheckboxForm
            text="Gluten Free ?"
            name="isGlutenFree"
            value={props.data.dietaryRestrictions.isGlutenFree}
            checked={props.data.dietaryRestrictions.isGlutenFree}
            handleChange={props.onChangedCheckbox}
          />
          <CheckboxForm
            text="Lactose Free ?"
            name="isLactoseFree"
            value={props.data.dietaryRestrictions.isLactoseFree}
            checked={props.data.dietaryRestrictions.isLactoseFree}
            handleChange={props.onChangedCheckbox}
          />
          <br />

          <button>Submit</button>
        </form>
        <hr />
        <h2>Entered information:</h2>
        <p>Your name: {props.data.firstName} {props.data.lastName}</p>
        <p>Your age: {props.data.age}</p>
        <p>Your gender: {props.data.gender}</p>
        <p>Your destination: {props.data.travelTo}</p>
        <p>{`Your dietary restrictions: ${props.showDietaryRestrictions()}`}</p>
      </main>
    </div>
  )
}

export default FormComponent