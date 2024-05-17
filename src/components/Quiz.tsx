import { useState } from 'react';
import { IAnswer } from '../types.ts';
import { QuizCard } from './QuizCard.tsx';
import { questionsSelector } from '../slices/questionsSlice.ts';
import { answersSelector, addAnswer } from '../slices/answersSlice.ts';
import { useAppSelector, useAppDispatch } from '../hooks.ts';
import { ModeProps } from '../types.ts';

export const Quiz: React.FC<ModeProps> = ({ setMode }) => {
  const [index, setIndex] = useState<number>(0);

  const dispatch = useAppDispatch();
  const quizData = useAppSelector(questionsSelector);
  // const answerData = useAppSelector(answersSelector);

  const nextQuestion = (result: IAnswer) => {
    dispatch(addAnswer(result));
    if (index + 1 < quizData.questions.length) setIndex(index + 1);
    else {
      setMode('finish');
    }
  };

  const options = [
    quizData.questions[index].correct_answer,
    ...quizData.questions[index].incorrect_answers,
  ].sort(() => Math.random() - 0.5);

  return (
    <QuizCard
      len={quizData.questions.length}
      count={index + 1}
      question={quizData.questions[index]}
      options={options}
      onNext={nextQuestion}
    />
  );
};
