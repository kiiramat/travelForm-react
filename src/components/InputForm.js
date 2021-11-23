import React from "react";

class InputForm extends React.Component {
  constructor() {
    super();
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event) {
    const { name, value } = event.target;
    this.props.handleChange(name, value);
  }

  render() {
    return (
      <div>
        <input
          type="text"
          name={this.props.name}
          placeholder={this.props.placeholder}
          onChange={this.onInputChange}
          autoComplete="off"
        />
      </div>
    );
  }
}

export default InputForm;