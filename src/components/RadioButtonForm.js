import React from "react";

class RadioButtonForm extends React.Component {
  constructor() {
    super();
    this.onRadioButtonChange = this.onRadioButtonChange.bind(this);
  }

  onRadioButtonChange(event) {
    const { name, value } = event.target;
    this.props.handleChange(name, value);
  }

  render() {
    return (
      <div>
        <label>
          <input
            type="radio"
            name={this.props.name}
            value={this.props.value}
            checked={this.props.checked}
            onChange={this.onRadioButtonChange}
          />
          {this.props.value}
        </label>
      </div>
    );
  }
}

export default RadioButtonForm;