import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import QuestionList from './QuestionList.jsx';
import Search from './Search.jsx';
import AddQuestion from './AddQuestion.jsx';

const Container = styled.div`
border: solid black 1px;
font-family: Helvetica;
font-weight: light;
padding-left: 10px;
padding-top: 10px;
padding-bottom: 10px;
`;

const StyledSearch = styled.form`
font-family: Helvetica;
font-weight: light;
width: 100%;
height: 50px
`;

class QA extends React.Component {
  constructor() {
    super();

    this.state = {
      questions: [],
      questionsCopy: [],
    };

    this.generateQuestions = this.generateQuestions.bind(this);
    this.searchQuestions = this.searchQuestions.bind(this);
    this.home = this.home.bind(this);
  }

  componentDidMount() {
    axios.get('/qa/questions')
      .then((response) => {
        this.generateQuestions(response.data.results);
      });
  }

  searchQuestions(searchTerm) {
    var questions = this.state.questions.slice();
    var matches = [{question_body: 'No Matches Found'}];
    for (let question of questions) {
      if (question.question_body.toLowerCase() === searchTerm.toLowerCase()) {
        matches.shift();
        matches.push(question);
        this.setState({
          questions: matches,
        });
      } else {
        this.setState({
          questions: matches,
        })
      }
    }
  }

  generateQuestions(data) {
    this.setState({
      questions: data,
      questionsCopy: data,
    });
  }

  home() {
    var questions = this.state.questionsCopy.slice();
    this.setState({
      questions: questions,
    });
  }

  render() {
    return (
      <Container>
        <div onClick={this.home}>
          QUESTIONS & ANSWERS
        </div>
        <p>

        </p>
        <StyledSearch>
          <Search searchQuestions={this.searchQuestions} />
        </StyledSearch>

        <p>

        </p>
        <QuestionList list={this.state.questions} />
        <p>

        </p>
        <AddQuestion />
      </Container>

    );
  }
}

export default QA;
