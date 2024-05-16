import React from 'react';
import { useSelector } from 'react-redux';

// import { RootState } from '../store';
import { answersSelector } from '../slices/answersSlice';
// import { QuizResult } from '../types';
// import { IAnswer } from '../types/types';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from '@mui/material';

export const FinishPage: React.FC = () => {
  const answers = useSelector(answersSelector);

  const arr = answers.answers;
  
  console.log(arr);
  // const sortedAnswers = arr.sort((a, b) => {
  //   const difficultyOrder = ['easy', 'medium', 'hard'];
  //   return (
  //     difficultyOrder.indexOf(a.question.difficulty) -
  //     difficultyOrder.indexOf(b.question.difficulty)
  //   );
  // });

  const correctAnswers = arr.filter(
    (result) => result.isRight
  ).length;

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>№</TableCell>
            <TableCell>Вопрос</TableCell>
            <TableCell>Сложность</TableCell>
            <TableCell>Результат</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {arr.map((result, index) => (
            <TableRow key={index}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{result.question.question}</TableCell>
              <TableCell>{result.question.difficulty}</TableCell>
              <TableCell>{result.isRight ? 'Верно' : 'Неверно'}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Typography variant="h6" align="center" gutterBottom>
        Правильных ответов: {correctAnswers}/{answers.length}
      </Typography>
    </TableContainer>
  );
};
