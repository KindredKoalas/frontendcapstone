import React from 'react';
import styled from 'styled-components';

const StyledSelect = styled.select`
  font-family: 'Helvetica', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif, Helvetica, sans-serif;
  font-weight: bold;
  width: 200px;
  height: 50px;
  background-color: white;
  border-width: thin;
  margin-right: 5%;
  padding: 3%;
`;

const StyledButton = styled.input`
  font-family: 'Helvetica', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif, Helvetica, sans-serif;
  font-weight: bold;
  width: 200px;
  height: 50px;
  background-color: white;
  border-width: thin;
  padding: 3%;
`;

const RowDisplay = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-family: 'Helvetica', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif, Helvetica, sans-serif;
  font-size: 11px;
  font-weight: 100;
  padding-top: 8px;
  `;

class Size extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sizeSelected: "",
      quantitySelected: 0,
    };

    this.handleSizeChange = this.handleSizeChange.bind(this);
    this.handleQuantityChange = this.handleQuantityChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSizeChange(event) {
    event.persist();
    console.log(event.target.value, typeof event.target.value);
    this.setState({
      sizeSelected: event.target.value
    })
  }

  handleQuantityChange(event) {
    event.persist();
    console.log(event.target.value, typeof event.target.value);
    this.setState({

    })
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    // if skus.length === 0,
      // <option>OUT OF STOCK</option>
      // else,
    // const sizes = skus.map((sku) => <option>{sku.size}</option>);
    // render quantities dynamically
    let skus = this.props.skusPerStyle;
    let allSizes = null;
    if (skus.length === 0) {
      allSizes = <option value="" disabled selected>OUT OF STOCK</option>;
    } else {
      allSizes = skus.map((sku) => <option value={sku.size}>{sku.size}</option>);
    }
    // if size is an empty string, quantity dropdown will display '-' and be disabled
      // else
      // if quantity number is > 15, show 15
        // else
      // render the quantity number for that string
    let quantity = 0;
    let quantityOptions = [];
    let renderUpToMax = function (number) {
      for (var i = 1; i <= number; i++) {
        quantityOptions.push(<option>{i}</option>);
      }
      return quantityOptions;
    };

    if (this.state.sizeSelected === "") {
      quantity = <option value="" disabled selected>-</option>;
    } else {
      let quantityForSelectedSize = skus.filter((sku) => sku.size === this.state.sizeSelected);
      let currentQuantity = quantityForSelectedSize[0].quantity;
      quantity = currentQuantity > 15 ? renderUpToMax(15) : renderUpToMax(currentQuantity);
    }

    return (
      <form onSubmit={this.handleSubmit}>
         <RowDisplay>
            <StyledSelect onChange={this.handleSizeChange}>
              <option value="" disabled selected>SELECT SIZE</option>
              {allSizes}
            </StyledSelect>
            <StyledSelect onChange={this.handleQuantityChange}>
              {quantity}
            </StyledSelect>
          </RowDisplay>
          <p><StyledButton type="submit" value="ADD TO BAG           +"></StyledButton></p>
      </form>
    );
  }
}

export default Size;