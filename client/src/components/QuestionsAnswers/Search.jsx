import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
font-family: Helvetica;
font-weight: bold;
width: 80%;
height: 52px;
padding-left: 10px;
`;

const StyledButton = styled.button`
font-family: Helvetica;
font-weight: bold;
margin-left: -51px;
height: 50px;
width: 50px;
border: none;
background-color: white;
cursor: pointer;
transition: 0.3s;
&:hover ${StyledButton} {
  color: #C50000;
  border: none;
}
`;

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    event.preventDefault();
    this.setState({ value: event.target.value });
    this.props.searchQuestions(this.state.value);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.searchQuestions(this.state.value);
    this.setState({
      value: '',
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <StyledInput type="text" name="name" value={this.state.value} placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..." onChange={this.handleChange} />
          <StyledButton type="submit">Go</StyledButton>
        </form>
      </div>

    );
  }
}

export default Search;
