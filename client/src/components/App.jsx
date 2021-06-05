import React from 'react';
import styled from 'styled-components';
import QA from './QuestionsAnswers/QA.jsx';
const Button = styled.div`
  color: red;
  display: flex;
  justify-content: flex-end;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <Button>React is running!</Button>
        <QA />
      </div>
    );
  }
}

export default App;
