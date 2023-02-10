import React, {useState, useEffect} from 'react';
import QuestionCard from './components/QuestionCard';
import { Difficulty, QuestionState, fetchQuizQuestions } from './API';
import {GlobalStyle , Wrapper} from './App.styles';

const TOTAL_QUESTION = 10;

export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;

}

function App() {

  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswer, setUserAnswer] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  // console.log(gameOver);

  const startTrivia = async () => {
    setLoading(true);
    setGameOver(false);

    const newQuestions = await fetchQuizQuestions(
      TOTAL_QUESTION,
      Difficulty.EASY
    );

    setQuestions(newQuestions);
    setScore(0);
    setUserAnswer([]);
    setNumber(0);
    setLoading(false);


  }

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if(!gameOver){
      const answer = e.currentTarget.value;
      const correct = questions[number].correct_answer === answer;
      if (correct){
        setScore(prev => prev + 1);
      }; // 2fx
      const answerObject = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer,
      };
      setUserAnswer(prev => [...prev, answerObject]);
    }
  }

  const nextQuestion = () => {
    const nextQuestion = number + 1;

    if(nextQuestion === TOTAL_QUESTION){
      setGameOver(true)
    } else {
      setNumber(nextQuestion);
    }
  };
  const [lodi, setLodi] = useState(true);

  function fr() {
    return new Promise<void>(gon => setTimeout(() => gon(), 2050));
  }

  useEffect(() => {
    fr().then(() => {
      const el = document.querySelector(".spinner-box");
      if (el) {
        el.remove();
        setLodi(!lodi);
      }
    });
  });

  if (lodi) {
    return null;
  }

  return (
    <>
    <GlobalStyle />
    <Wrapper>
      <h1>It's Quiz Time </h1>
      { loading ? 
      <div className="load-10">
        <p className=''>Loading Questions...</p>
        <div className="bar"></div>
      </div>
       : null }
      { !loading && !gameOver && (<QuestionCard 
      questionNumber={number + 1}
      totalQ={TOTAL_QUESTION}
      question={questions[number].question}
      answers={questions[number].answers}
      userAnswer={userAnswer ? userAnswer[number] : undefined}
      callback={checkAnswer}
      /> )}
      {!gameOver && !loading && userAnswer.length === number + 1 && number !== TOTAL_QUESTION - 1 &&(
        <button className='next' onClick={nextQuestion}>
            Next Question
        </button>
      )}
      {!loading && userAnswer.length === TOTAL_QUESTION ? <p className='score'>Score: {score} </p> : null }
      { !loading && (gameOver || userAnswer.length === TOTAL_QUESTION) ? (
        <button className='start' onClick={startTrivia}>
            {userAnswer.length === TOTAL_QUESTION ? 'Play Again' : 'Start'}
        </button>
      ) : null}
      {!loading && gameOver ? <p>(Click Start to Play!)</p> : null}
    </Wrapper>
    </>
  );
}

export default App;
