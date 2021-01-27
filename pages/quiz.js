import React, { useState } from 'react';
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

export default function QuizPage() {
  const [name, setName] = useState('');

  const route = useRouter();

	const question = db.questions[0];
	
  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>Who is Quiz</title>
      </Head>
      <QuizContainer>
        <QuizLogo />
        <Widget>

          <Widget.Header>
            <h3>
                Pergunta 1 de {`${db.questions.length}`}
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

						<Button type="submit" disabled={name.length === 0}>
							{`Confirmar`}
						</Button>
          </Widget.Content>

        </Widget>

        <Widget>
          <Widget.Content>
            <h1>Folks quizzes</h1>

            <p>Do you know who is...?</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/carloshrf" />
    </QuizBackground>
  );
}