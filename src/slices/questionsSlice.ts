import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { QuestionState } from '../types/types.ts';
import axios from 'axios';

export const initialState: QuestionState = {
  questions: [],
  loading: false,
  hasErrors: false,
  status: 'idle',
};

export const questionsSlice = createSlice({
  name: 'questions',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getQuestions.pending, (state) => {
        state.status = 'loading';
        state.loading = true;
      })
      .addCase(getQuestions.fulfilled, (state, { payload }) => {
        state.questions = payload;
        state.loading = false;
        state.hasErrors = false;
        state.status = 'succeeded';
      })
      .addCase(getQuestions.rejected, (state) => {
        state.loading = false;
        state.status = 'failed';
        state.hasErrors = true;
      });
  },
});

export const questionsSelector = (state: QuestionState) => state.questions;

export default questionsSlice.reducer;

export const getQuestions = createAsyncThunk(
  'questions/getQuestions',
  async (questionCount: string) => {
    try {
      const response = await axios.get(
        `https://opentdb.com/api.php?amount=${questionCount}&token=f98a00ed7c815294a7dac16d95594d38091e4d77068e7ceb8176287ce53a3fa2`
      );
      return response.data.results;
    } catch (error) {
      console.error('Ошибка при запросе к API:', error);
    }
  }
);
