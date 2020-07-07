import React, { Component } from 'react'
const Input = props => {
  return <input {...props} />
}
class CustomizeInput extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { value = "", ...otherProps } = this.props;
    return (
      <div style={{ margin: '10px' }}>
        <Input value={value} {...otherProps} />
      </div>
    )
  }
}
export default CustomizeInput;
