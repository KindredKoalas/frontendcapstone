import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

// const Container = styled.div`
//   display: flex;
//   justify-content: space-between;
//   flex-flow: row wrap;
// `;

const ImageGallery = styled.div`
  grid-column: 1/2;
  grid-row: 2/3;
  border: solid;
  border-radius: 5px;
  padding: 2%;
  background: none;
`;

const ProductInformation = styled.div`
  grid-column: 2/3;
  grid-row: 2/3;
  border: solid;
  border-radius: 5px;
  padding: 2%;
  background: none;
`;

const AdditionalProductDetails = styled.div`
  grid-column: 1/3;
  grid-row: 3/4;
  border: solid;
  border-radius: 5px;
  background: none;
`;

class ProductOverview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }



  render() {
    return (
      <div className="container">
        <div className="imageGallery">
          <ImageGallery>Image Gallery</ImageGallery>
        </div>
        <div className="productInfo">
          <ProductInformation>Product Information</ProductInformation>
        </div>
        <div className="additionalProductInfo">
          <AdditionalProductDetails>Additional Product Details</AdditionalProductDetails>
        </div>
      </div>
    );
  }
}

export default ProductOverview;
