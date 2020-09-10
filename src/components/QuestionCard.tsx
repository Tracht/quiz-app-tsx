import React from 'react';
import {AnswerObject} from '../App';
import { Button } from '../App.styles';

type Props = {
  question: string;
  answers: string[];
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  userAnswer: AnswerObject | undefined ;
  questionNumber: number;
  totalQuestions: number;
}

const QuestionCard: React.FC<Props> = ({ 
  question, 
  answers, 
  callback, 
  userAnswer, 
  questionNumber, 
  totalQuestions 
}) => (
  <div> 
    <p className="number"> 
      Question: {questionNumber} / {totalQuestions}
    </p>
    <p dangerouslySetInnerHTML={{ __html: question}} />
    <div>
      {answers.map(answer => (
        <div key={answer}>
          <Button disabled={userAnswer ? true : false} value={answer} onClick={callback}>
            <span dangerouslySetInnerHTML={{ __html: answer }} />
          </Button>
        </div>
      ))}
    </div>

  </div> 
);

export default QuestionCard;