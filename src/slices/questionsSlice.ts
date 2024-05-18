import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { QuestionState } from '../types.ts';
import type { RootState } from '../store.ts';
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
  reducers: {
    cleanQuestions: (state) => {
      state.questions = [];
      state.loading = false;
      state.hasErrors = false;
      state.status = 'idle';
    },
  },
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

export const { cleanQuestions } = questionsSlice.actions;

export const questionsSelector = (state: RootState) => state.questions;

export default questionsSlice.reducer;

export const getQuestions = createAsyncThunk(
  'questions/getQuestions',
  async () => {
    try {
      const response = await axios.get(`https://opentdb.com/api.php?amount=15`);
      return response.data.results;
    } catch (error) {
      console.error('Ошибка при запросе к API:', error);
    }
  }
);
