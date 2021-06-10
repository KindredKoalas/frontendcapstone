import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import ImageSlider from './ImageSlider.jsx';
import ProductCategory from './ProductCategory.jsx';
import Styles from './Styles.jsx';
import Size from './Size.jsx';
import Price from './Price.jsx';
const helpers = require('./Helpers.js');

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-flow: row wrap;
`;

const ImageGallery = styled.div`
  border: solid;
  border-radius: 5px;
  width: 50%;
  padding: 2%;
`;

const ProductInformation = styled.div`
  border: solid;
  border-radius: 5px;
  width: 40%;
  padding: 2%;
  background: none;
`;

const StyleSelectorGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  padding: 5%;
`;

const AdditionalProductDetails = styled.div`
  border: solid;
  border-radius: 5px;
  background: none;
`;

class ProductOverview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: [],
      styles: [],
      category: '',
      description: '',
      slogan: '',
      originalPrice: 0,
      salePrice: 0,
      images: [{
        style_id: 142825,
        photos: {
          thumbnail_url: "https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
          url: "https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
        }
      }],
      skus: [{
        quantity: 8,
        size: "XS"
      }],
      selectedStyleId: 0,
      selectedStyleName: '',
      selectedImages: [{
          thumbnail_url: "https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
          url: "https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
        },
        {
          thumbnail_url: "https://images.unsplash.com/photo-1534011546717-407bced4d25c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
          url: "https://images.unsplash.com/photo-1534011546717-407bced4d25c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80"

        }
      ]
    };
    this.getAllProducts = this.getAllProducts.bind(this);
    this.getAllStyles = this.getAllStyles.bind(this);
    this.handleStylesSelectorClick = this.handleStylesSelectorClick.bind(this);
  }

  componentDidMount() {
    this.getAllProducts();
  }

  getAllProducts() {
    // this function sets the first product ID of the product array as state
    const self = this;
    axios.get('/api/products')
      .then(function (response) {
        // handle success
        self.setState({
          product: response.data[0].id,
          category: response.data[0].name,
          description: response.data[0].description,
          slogan: response.data[0].slogan
        })
        self.getAllStyles();
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }

  getAllStyles() {
    const self = this;
    const productId = self.state.product.toString();
    axios.get(`/api/products/${productId}/styles`)
      .then(function (response) {
        // handle success
        const results = response.data.results;
        console.log('response.data.results', results)
        const originalPrice = results[0].original_price;
        const salePrice = results[0].sale_price;
        const skus = results[0].skus;
        const style_id = results[0].style_id;
        const styleImages = [];
        for (var i = 0; i < results.length; i++) {
          const currentStyleInfo = {};
          const currentStyle = results[i];
          currentStyleInfo.style_id = currentStyle.style_id;
          currentStyleInfo.photos = currentStyle.photos[0];
          styleImages.push(currentStyleInfo);
        }
        const skusForAllStyles = helpers.getAllSkusForAllStyles(results);

        self.setState({
          styles: response.data,
          images: styleImages,
          originalPrice: originalPrice,
          salePrice: salePrice,
          selectedStyleId: style_id,
          skus: skus
        })
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }

  handleStylesSelectorClick(styleId) {
    console.log('Styles thumbnail event!', this.state.selectedStyleId);
    const imagesAllStyles = helpers.getAllImagesForAllStyles(styleId, this.state.styles.results);
    console.log('should give me the images for a style id', imagesAllStyles);
    this.setState({
      selectedStyleId: styleId,
      selectedImages: imagesAllStyles
    })
  }

  render() {
    console.log('this.state.selectedImages', this.state.selectedImages, 'is it an array?', Array.isArray(this.state.selectedImages));
    return (
      <div>
        <Container>
          <ImageGallery>
            <ImageSlider
              selectedImages={this.state.selectedImages}
            />
          </ImageGallery>
          <ProductInformation>
            <ProductCategory
              currentCategory={this.state.category}
            />
            <Price
              originalPrice={this.state.originalPrice}
              salePrice={this.state.salePrice}
            />
            <div>STYLE > SELECTED STYLE</div>
            <StyleSelectorGrid>
              <Styles
                images={this.state.images}
                handleStylesSelectorClick={this.handleStylesSelectorClick}
                selectedStyleId={this.state.selectedStyleId}
              />
            </StyleSelectorGrid>
            <Size
              styleSkus={this.state.skus}
            />
          </ProductInformation>
        </Container>
          <AdditionalProductDetails>
            <h3>{this.state.slogan}</h3>
            {this.state.description}
          </AdditionalProductDetails>
      </div>
    );
  }
}

export default ProductOverview;
