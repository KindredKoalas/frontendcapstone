import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import QuestionList from './QuestionList.jsx';
import Search from './Search.jsx';
import AddQuestion from './AddQuestion.jsx';
import MoreAqs from './MoreAqs.jsx';

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

const LowerButtons = styled.div`
font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif, Helvetica, sans-serif;
font-weight: 100;
font-size: 10px;
display: flex;
align-content: space-between;
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
    this.addQuestion = this.addQuestion.bind(this);
    this.moreAqs = this.moreAqs.bind(this);
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
    var defaultList = data.slice(0, 3);
    var fullList = data;
    this.setState({
      questions: defaultList,
      questionsCopy: data,
    });
  }

  home() {
    var questions = this.state.questionsCopy.slice();
    this.setState({
      questions: questions,
    });
  }

  addQuestion(question) {
    var questions = this.state.questions.slice();
    questions.push(question);
    this.setState({
      questions: questions,
    })
  }

  moreAqs(str) {
    var defaultList = this.state.questions.slice();
    var fullList = this.state.questionsCopy;
    this.setState({
      questions: fullList
    })

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
        <LowerButtons>
          <MoreAqs moreAqs={this.moreAqs} />
          <AddQuestion addQuestion={this.addQuestion}/>
        </LowerButtons>

      </Container>

    );
  }
}

export default QA;
