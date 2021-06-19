import React from 'react';
import ProductOverview from '../client/src/components/ProductDetails/ProductOverview.jsx';
import ImageSlider from '../client/src/components/ProductDetails/ImageSlider.jsx';
import ProductCategory from '../client/src/components/ProductDetails/ProductCategory.jsx';
import Price from '../client/src/components/ProductDetails/Price.jsx';
import Styles from '../client/src/components/ProductDetails/Styles.jsx';
import StyleCircle from '../client/src/components/ProductDetails/Styles.jsx';
import { mount, shallow, render } from "enzyme";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

// Purpose: To test whether the ProductOverview component renders

describe('Rendering components', () => {
  it('renders <ProductOverview /> component without crashing', () => {
    const wrapper = shallow(<ProductOverview />);
    expect(wrapper.exists()).toBe(true);
  });
  it('renders <Price /> component without crashing', () => {
    const wrapper = shallow(<Price />);
    expect(wrapper.exists()).toBe(true);
  });
});

// Purpose: To test whether props are correctly passed to child component

const selectedImages = [
  {thumbnail_url: "https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80", url: "https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"},
  {thumbnail_url: "https://images.unsplash.com/photo-1534011546717-407bced4d25c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80", url: "https://images.unsplash.com/photo-1534011546717-407bced4d25c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80"},
  {thumbnail_url: "https://images.unsplash.com/photo-1549831243-a69a0b3d39e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80", url: "https://images.unsplash.com/photo-1549831243-a69a0b3d39e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2775&q=80"}
];

const category = "Slacker's Slacks";

describe("Passing props", () => {
  const imageSliderWrapper = mount(<ImageSlider selectedImages={selectedImages} />);
  it('ImageSlider accepts selected images props from ProductOverview', () => {
    expect(imageSliderWrapper.props().selectedImages).toEqual(selectedImages);
  });

  const productCategoryWrapper = mount(<ProductCategory currentCategory={category} />);
  it('ProductCategory accepts category props from ProductOverview', () => {
    expect(productCategoryWrapper.props().currentCategory).toEqual(category);
  });
});

// describe("Logic check", () => {
//   const priceWrapper = mount(<Price
//     originalPrice={itemOriginalPrice}
//     salePrice={itemSalePrice}
//   />);
//   const originalPriceValue = priceWrapper.find("originalPrice").text();
//   const expectedOriginalPriceValue = Math.round(Number(salePrice));
//   expect(originalPriceValue).toEqual(expectedOriginalPriceValue);
// });

// Purpose: To test when a user clicks in the Image Gallery, the new image is overlayed by a checkmark

let imagesForAllStyles = [{
  style_id: 142825,
  photos: {
    thumbnail_url: "https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
    url: "https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
  }}
];

describe('Test thumbnail click handler in Styles component', () => {
  it('Test thumbnail click event', () => {
    const mockCallback = jest.fn(() => {
      //console.log('Mock was clicked');
    });
    const component = mount(<Styles images={imagesForAllStyles} handleStylesSelectorClick={mockCallback} />);
    //console.log('component', component);
    console.log(`component debug ${component.debug()}`);
    component.find('.StyleCircle').first().simulate('click');
    //console.log('component.find(StyleCircle)', component.find('.StyleCircle').debug());
    //console.log('mockCallback.mock', mockCallback.mock);
    expect(mockCallback).toHaveBeenCalledTimes(1);
  });
});