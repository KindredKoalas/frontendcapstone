import React from 'react';
import styled from 'styled-components';
const Button = styled.div`
  color: red;
  display: flex;
  justify-content: flex-end;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <Button>React is running!</Button>
    )
  }
}

export default App;