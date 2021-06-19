import React from 'react';
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
  constructor(props) {
    super(props);

    this.state = {
      questions: [],
      questionsCopy: [],
      answer: [],
      product_id: props.product_id,
      searchTerm: '',
    };

    this.generateQuestions = this.generateQuestions.bind(this);
    this.searchQuestions = this.searchQuestions.bind(this);
    this.home = this.home.bind(this);
    this.addQuestion = this.addQuestion.bind(this);
    this.moreAqs = this.moreAqs.bind(this);
    this.addAnswerToList = this.addAnswerToList.bind(this);
    this.getData = this.getData.bind(this);
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    axios.get(`/qa/questions/${this.state.product_id}`)
      .then((response) => {
        this.generateQuestions(response.data.results);
      });
  }

  searchQuestions(searchTerm) {
    this.setState({
      searchTerm,
    })
    const questionList = this.state.questionsCopy.slice();
    const noMatches = null;
    const matches = [];

    for (var i = 0; i < questionList.length; i++) {
      if (questionList[i].question_body.includes(searchTerm)) {
        matches.push(questionList[i]);
      }
    }

    if (matches.length > 1) {
      this.setState({
        questions: matches,
      })
    } else {
      this.setState({
        questions: noMatches,
      })
    }
  }

  generateQuestions(data) {
    const defaultList = data.slice(0, 2);
    this.setState({
      questions: defaultList,
      questionsCopy: data,
    });
  }

  home() {
    const questions = this.state.questionsCopy.slice(0, 20);
    this.setState({
      questions,
    });
  }

  addQuestion(question) {
    const questions = this.state.questions.slice();
    questions.push(question);

    const new_Question = {
      body: question.question_body,
      name: question.asker_name,
      email: question.asker_email,
      product_id: Number(this.state.product_id),
    };

    axios.post('/qa/questions', new_Question)
      .then(() => {
        this.getData();
      });
  }

  moreAqs(count) {
    if (count === 2) {
      var fullList = this.state.questionsCopy.slice(0, 2);
      this.setState({
        questions: fullList,
      });
    } else {
      var fullList = this.state.questionsCopy.slice();
      this.setState({
        questions: fullList,
      });
    }
  }

  addAnswerToList(answer) {
    this.setState({
      answer,
    });
  }

  render() {
    return (
      <Container>
        <StyledHeader onClick={this.home}>
          QUESTIONS & ANSWERS
        </StyledHeader>
        <p />
        <StyledSearch>
          <Search searchQuestions={this.searchQuestions} />
        </StyledSearch>

        <p />
        {this.state.questions === null ? (
          <StyledSpan onClick={this.home}>
            NO RESULTS FOR "
            {this.state.searchTerm.toUpperCase()}
            "
          </StyledSpan>
        ) : <QuestionList onClick={this.home} list={this.state.questions} addAnswerToList={this.addAnswerToList} answer={this.state.answer} /> }

        <p />
        <LowerButtons>
          <MoreAqs moreAqs={this.moreAqs} />
          <AddQuestion addQuestionToList={this.addQuestion} />
        </LowerButtons>

      </Container>

    );
  }
}

export default QA;
