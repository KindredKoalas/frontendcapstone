import React from 'react';
import CheckIcon from '@material-ui/icons/Check';
import styled from 'styled-components';

const AdditionalProductDetails = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  font-family: 'Helvetica', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif, Helvetica, sans-serif;
  font-size: 14px;
  font-weight: 100;
  background: none;
  margin-left: 10%;
  margin-bottom: 3%;
  padding-top: 1%;
`;

const Slogan = styled.div`
  font-size: 15px;
  font-weight: bold;
  margin-bottom: 3%;
`;

const InnerContainer = styled.div`
  border-right: 2px solid;
`;

function AdditionalDetails({slogan, description, features}) {
  let renderFeatures = features.map((feature) =>
    <li>{feature.feature}: {feature.value}</li>
  );

  return (
    <AdditionalProductDetails>
      <InnerContainer>
        <Slogan>{slogan}</Slogan>
        <div>{description}</div>
      </InnerContainer>

      <div className="innerContainer2">
        <ul style={{'list-style-image': `url${<CheckIcon />}`}}>{renderFeatures}</ul>
      </div>
    </ AdditionalProductDetails>
  );
};

export default AdditionalDetails;