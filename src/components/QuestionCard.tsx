import React from 'react';

import { AnswerObject } from '../App';

import { ButtonWrapper, Wrapper } from './QuestionCard.styles';

type Props = {
    question: string;
    answers: string[];
    callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
    userAnswer: AnswerObject | undefined;
    questionNumber: number;
    totalQ: number;
}

const QuestionCard: React.FC<Props> = ({
    question, 
    answers, 
    callback, 
    userAnswer, 
    questionNumber, 
    totalQ
}) => {
    return(
        <Wrapper>
            <p className='number'>
                Question: {questionNumber} / {totalQ}
            </p>
            <p dangerouslySetInnerHTML={{ __html: question}} />
            <div className='buttonParent'>
                {answers.map(answer => (
                    <ButtonWrapper 
                    key={answer} 
                    correct={userAnswer?.correctAnswer === answer}
                    userClicked={userAnswer?.answer === answer}
                    >
                        <button disabled={!!userAnswer} value={answer} onClick={callback}>
                            <span dangerouslySetInnerHTML={{ __html: answer}} />
                        </button>
                    </ButtonWrapper>
                ))}
            </div>

        </Wrapper>
    )
}

export default QuestionCard;