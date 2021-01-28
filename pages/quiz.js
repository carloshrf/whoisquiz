import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import { useRouter } from 'next/router';

import db from '../db.json';
import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizBackground from '../src/components/QuizBackground';
import QuizLogo from '../src/components/QuizLogo';
import Input from '../src/components/Input';
import Button from '../src/components/Button';
import QuizContainer from '../src/components/QuizContainer';

function QuestionWidget({ question, totalQuestions, questionIndex, onSubmit }) {
  const questionId = `question_${questionIndex}`;

  return (
    <Widget>
      <Widget.Header>
        <h3>
            Pergunta 
            {` ${questionIndex + 1} `} 
            de 
            {` ${totalQuestions}`}
        </h3>
      </Widget.Header>
    
      <img 
        src={question.image}
        style={{
          width: '100%',
          height: '150px',
          objectFit: 'cover'
        }}
      />

      <Widget.Content>
        <h2>
          {question.title}
        </h2>

        <p>
          {question.description}
        </p>

        <form onSubmit={(e) => {
          e.preventDefault();
          onSubmit();
        }}>
          {question.alternatives.map((alternative, index) => (
            <Widget.Topic
              as="label"
              htmlFor={index}
              key={index}
            >
              <input 
                id={index} 
                style={{display: 'none'}}
                type="radio"
                name={questionId}
              />

              {alternative}
            </Widget.Topic>
          ))}

          <Button type="submit">
            {`Confirmar`}
          </Button>
        </form>

      </Widget.Content>

    </Widget>
  );
}

const screenStates = {
  QUIZ: 'QUIZ',
  LOADING: 'LOADING',
  RESULT: 'RESULT',
}

export default function QuizPage() {
  const [screenState, setScreenState] = useState(screenStates.LOADING);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const questionIndex = currentQuestion;
  const totalQuestions = db.questions.length;
	const question = db.questions[questionIndex];

  useEffect(() => {
    setTimeout(() => {
      setScreenState(screenStates.QUIZ);
    }, 1 * 1000);
  }, []);

  function handleSubmit() {
    const nextQuestion = questionIndex + 1;

    if (nextQuestion < totalQuestions) {
      setCurrentQuestion(questionIndex + 1);  
    } else {
      setScreenState(screenStates.RESULT);
    }
  }

  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />

        {screenState === screenStates.QUIZ && (
          <QuestionWidget 
            question={question}
            totalQuestions={totalQuestions}
            questionIndex={questionIndex}
            onSubmit={handleSubmit}
          />
        )}
        
        {screenState === screenStates.LOADING && <h1>Carregando</h1>}

        {screenState === screenStates.RESULT && <div>vc acertou x questões</div>}
      </QuizContainer>
    </QuizBackground>
  );
}