import { useState } from 'react';
import { IAnswer } from '../types/types';
import { Question } from '../components/Question';
import { useSelector, useDispatch } from 'react-redux';
import { questionsSelector } from '../slices/questionsSlice';
import { answersSelector, addAnswer } from '../slices/answersSlice';
import { useNavigate } from 'react-router-dom';

export const QuizPage = () => {
  const [index, setIndex] = useState<number>(0);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const quizData = useSelector(questionsSelector);
  const answerData = useSelector(answersSelector);
  // console.log('from main page=', answerData.answers);

  const nextQuestion = (result: IAnswer) => {
    dispatch(addAnswer(result));
    if (index + 1 < quizData.questions.length) setIndex(index + 1);
    else {
      alert('finish!');
      console.log(answerData.answers);
      navigate('/quiz-finish');
    } //редирект на страницу результата
  };

  return (
    <Question
      len={quizData.questions.length}
      count={index + 1}
      question={quizData.questions[index]}
      onNext={nextQuestion}
    />
  );
};
