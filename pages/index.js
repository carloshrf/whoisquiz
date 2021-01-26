import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import { useRouter } from 'next/router';

import db from '../db.json';
import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizBackground from '../src/components/QuizBackground';
import QuizLogo from '../src/components/QuizLogo';

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  const route = useRouter();

  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>Who is Quiz</title>
      </Head>
      <QuizContainer>
        {/* <QuizLogo /> */}
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
              <input placeholder="Fill your name here" />
              <button type="submit">
                Jogar Carl
              </button>
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
