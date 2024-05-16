import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Button,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
  Paper,
} from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { questionsSelector } from '../slices/questionsSlice';
import { getQuestions } from '../slices/questionsSlice.ts';

/*
выбрать котегорию а затем показывать сколько в ней вопросов
*/

export const StartPage: React.FC = () => {
  const [questionCount, setQuestionCount] = useState('10');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const quizData = useSelector(questionsSelector);
  const countChange = (event: SelectChangeEvent) => {
    setQuestionCount(event.target.value);
  };

  const submit = async () => {
    dispatch<any>(getQuestions(questionCount)).then(() => {
      if (quizData.hasErrors || !quizData.questions.length) {
        alert('ошибка пробовать снова');
        return;
      }
      navigate('/quiz-questions');
    });
  };

  return (
    <Container maxWidth="sm">
      <Paper>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          minHeight="300px"
          marginTop={6}
          gap={4}
        >
          <Typography variant="h4" gutterBottom>
            Добро пожаловать в квиз!
          </Typography>

          <FormControl>
            <InputLabel>Кол-во вопросов</InputLabel>
            <Select
              variant="standard"
              size="small"
              style={{ width: '200px' }}
              value={questionCount}
              onChange={countChange}
            >
              <MenuItem value={10}>10</MenuItem>
              <MenuItem value={20}>20</MenuItem>
              <MenuItem value={30}>30</MenuItem>
            </Select>
          </FormControl>
          <Button variant="contained" color="primary" onClick={submit}>
            Вперед
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};
