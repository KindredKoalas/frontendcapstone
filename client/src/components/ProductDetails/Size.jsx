import React from 'react';
import styled from 'styled-components';

class Size extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sizeSelected: "XS"
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {

  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    // render sizes dynamically
    // const sizes = this.props.styleSkus.map((sku) => <option>{sku.size}</option>);
    // render quantities dynamically
    const skus = this.props.skusPerStyle;
    return (
      <form onSubmit={this.handleSubmit}>
          <select placeholder="SELECT SIZE" onChange={this.handleChange}>
            <option value="noSizeSelected">-</option>
          </select>
        <label>
          <select onChange={this.handleChange}>
            <option value="none">-</option>
          </select>
        </label>
        <input type="submit" value="ADD TO BAG" />
      </form>
    );
  }
}

export default Size;