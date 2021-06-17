import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import QuestionList from './QuestionList.jsx';
import Search from './Search.jsx';
import AddQuestion from './AddQuestion.jsx';
import MoreAqs from './MoreAqs.jsx';

const Container = styled.div`
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
height: 50px;
margin-bottom: 25px;
margin-top: 15px;
`;

const LowerButtons = styled.div`
font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif, Helvetica, sans-serif;
font-weight: 100;
font-size: 10px;
display: flex;
align-content: space-between;
`;

const StyledSpan = styled.span`
font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif, Helvetica, sans-serif;
font-weight: bold;
font-size: 25px;
`;

const StyledHeader = styled.div`
color: black;
`;

class QA extends React.Component {
  constructor({ product_id }) {
    super();

    this.state = {
      questions: [],
      questionsCopy: [],
      answer: [],
      product_id: product_id
    };

    this.generateQuestions = this.generateQuestions.bind(this);
    this.searchQuestions = this.searchQuestions.bind(this);
    this.home = this.home.bind(this);
    this.addQuestion = this.addQuestion.bind(this);
    this.moreAqs = this.moreAqs.bind(this);
    this.addAnswerToList = this.addAnswerToList.bind(this);
  }

  componentDidMount() {
    axios.get(`/qa/questions/${this.state.product_id}`)
      .then((response) => {
        console.log(response.data.results)
        this.generateQuestions(response.data.results);
      });
  }

  searchQuestions(searchTerm) {
    var questionList = this.state.questionsCopy.slice();
    console.log('QuestionLIST ', questionList);
    var noMatches = null;
    var matches = [];

    if (searchTerm.length > 2) {
      for (let question of questionList) {

        if (question.question_body.toLowerCase().includes(searchTerm.toLowerCase())) {
          matches.push(question);
          this.setState({
            questions: matches,
          });
        } else {
          this.setState({
            searchTerm: searchTerm,
            questions: noMatches,
          })
        }
      }
    }
  }

  generateQuestions(data) {
    var defaultList = data.slice(0, 2);
    var fullList = data;
    this.setState({
      questions: defaultList,
      questionsCopy: data,
    });
  }

  home() {
    var questions = this.state.questionsCopy.slice(0, 2);
    this.setState({
      questions: questions,

    });
  }

  addQuestion(question) {
    var questions = this.state.questions.slice();
    questions.push(question);

    const new_Question = {
      body: question.question_body,
      name: question.asker_name,
      email: question.asker_email,
      product_id: question.question_id,
    }

    axios.post('/qa/questions', new_Question)
      .then((response) => {
        console.log('ADD QUESTION ', response)
      });

    this.setState({
      questions: questions,
    })
  }

  moreAqs(count) {
    var fullList = this.state.questionsCopy.slice(0, count);
    this.setState({
      questions: fullList
    })
  }

  addAnswerToList(answer) {
    this.setState({
      answer: answer
    })
  }

  render() {
    return (
      <Container>
        <StyledHeader onClick={this.home}>
          QUESTIONS & ANSWERS
        </StyledHeader>
        <p>

        </p>
        <StyledSearch>
          <Search searchQuestions={this.searchQuestions} />
        </StyledSearch>

        <p>

        </p>
        {this.state.questions === null ? <StyledSpan onClick={this.home}>NO RESULTS FOR "{this.state.searchTerm.toUpperCase()}"</StyledSpan> : <QuestionList onClick={this.home} list={this.state.questions} addAnswerToList={this.addAnswerToList} answer={this.state.answer} /> }

        <p>

        </p>
        <LowerButtons>
          <MoreAqs moreAqs={this.moreAqs} />
          <AddQuestion addQuestionToList={this.addQuestion} />
        </LowerButtons>

      </Container>

    );
  }
}

export default QA;
