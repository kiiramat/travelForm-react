import React from "react";

class SelectForm extends React.Component {
  constructor() {
    super()
    this.onSelectChange = this.onSelectChange.bind(this)
  }

  onSelectChange(event) {
    const { name, value } = event.target
    this.props.handleChange(name, value)
  }

  render() {
    return (
      <div>
        <label>{this.props.text}</label>
        <select
          value={this.props.value}
          name={this.props.name}
          onChange={this.onSelectChange}
        >
          <option value="Lisbon">Lisbon</option>
          <option value="Paris">Paris</option>
          <option value="Tokyo">Tokyo</option>
          <option value="New York">New York</option>
          <option value="New Delhi">New Delhi</option>
        </select>
      </div>
    )
  }
}

export default SelectForm