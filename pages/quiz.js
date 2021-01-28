import React, { useEffect, useState } from 'react';

import db from '../db.json';
import Widget from '../src/components/Widget';
import QuizBackground from '../src/components/QuizBackground';
import QuizLogo from '../src/components/QuizLogo';
import Button from '../src/components/Button';
import QuizContainer from '../src/components/QuizContainer';
import AlternativesForm from '../src/components/AlternativesForm';

function ResultWidget({ results }) {
	return (
		<Widget>
			<Widget.Header>
				Tela de resultados:
			</Widget.Header>

			<Widget.Content>
				<p>
					{`Você acertou ` + results.filter(result => result).length + ` questões`}
				</p>
				<ul>
					{console.log(results)}
					{results.map((result, index) => (
						<li key={index}>
							{`#${index + 1} Resultado: `}
							{result === true ? 'Acertou' : 'Errou'}
						</li>
					))}
				</ul>
			</Widget.Content>
		</Widget>
	);
}

function QuestionWidget({ question, totalQuestions, questionIndex, onSubmit, addResult }) {
	const [ selectedAlternative, setSelectedAlternative ] = useState(undefined);
	const [isQuestionSubmited, setIsQuestionSubmited] = useState(false);
	const isCorrect = selectedAlternative === question.answer;
	const questionId = `question_${questionIndex}`;
	const hasAlternativeSelected = selectedAlternative !== undefined;

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

        <AlternativesForm onSubmit={(e) => {
					e.preventDefault();
					setIsQuestionSubmited(true);
					setTimeout(() => {
						addResult(isCorrect)
						onSubmit();
						setIsQuestionSubmited(false);
						setSelectedAlternative(undefined);
					}, 2000);
        }}>
					{question.alternatives.map((alternative, index) => {
						const alternativeId = `alt_${index}`;
						const alternativeStatus = isCorrect ? 'SUCCESS' : 'ERROR';
						const isSelected = selectedAlternative === index;

						return (
							<Widget.Topic
								as="label"
								htmlFor={alternativeId}
								key={alternativeId}
								data-selected={isSelected}
								data-status={isQuestionSubmited && alternativeStatus}
							>
								<input 
									id={alternativeId} 
									style={{display: 'none'}}
									type="radio"
									onChange={() => setSelectedAlternative(index)}
									name={questionId}
								/>
								
								{alternative}
							</Widget.Topic>
          )})}

          <Button type="submit" disabled={!hasAlternativeSelected}>
            {`Confirmar`}
          </Button>

        </AlternativesForm>
				{isQuestionSubmited && isCorrect && <p>Você acertou</p>}
				{isQuestionSubmited && !isCorrect && <p>Você errou</p>}

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
	const [screenState, setScreenState] = useState(screenStates.QUIZ);
	const [results, setResults] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const questionIndex = currentQuestion;
  const totalQuestions = db.questions.length;
	const question = db.questions[questionIndex];

	function addResult(result) {
		setResults([...results, result]);
	}

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
			{console.log(results)}
      <QuizContainer>
        <QuizLogo />

        {screenState === screenStates.QUIZ && (
          <QuestionWidget 
            question={question}
            totalQuestions={totalQuestions}
            questionIndex={questionIndex}
						onSubmit={handleSubmit}
						addResult={addResult}
          />
        )}
        
        {screenState === screenStates.LOADING && <h1>Carregando</h1>}

        {screenState === screenStates.RESULT && <ResultWidget results={results} />}
      </QuizContainer>
    </QuizBackground>
  );
}