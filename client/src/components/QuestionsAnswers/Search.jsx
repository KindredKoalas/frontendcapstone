import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
font-family: Helvetica;
font-weight: bold;
width: 90%;
height: 50px;
padding-left: 10px;
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
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.searchQuestions(this.state.value);
    this.setState({
      value: ''
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
        <StyledInput type="text" name="name" value={this.state.value} placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..." onChange={this.handleChange} />
        </form>
      </div>

    );
  }
}

export default Search;
