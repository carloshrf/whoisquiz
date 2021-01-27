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

export default function Home() {
  const [name, setName] = useState('');

  const route = useRouter();

  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>Who is Quiz</title>
      </Head>
      <QuizContainer>
        <QuizLogo />
        <Widget>

          <Widget.Header>
            <h1>Who is?</h1>
          </Widget.Header>

          <Widget.Content>
            <form onSubmit={(e) => {
              e.preventDefault();
              const name = 'Carl';
              route.push(`/quiz?name=${name}`);
              console.log('Submiting');
            }}>
              <Input 
                name="userName"
                placeholder="Fill your name here" 
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
              <Button type="submit" disabled={name.length === 0}>
                {`Jogar ${name}`}
              </Button>
            </form>
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
