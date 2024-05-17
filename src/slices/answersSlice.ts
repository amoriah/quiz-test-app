import { createSlice } from '@reduxjs/toolkit';
import { AnswerState } from '../types.js';
import type { RootState } from '../store.ts';

export const initialState: AnswerState = {
  answers: [],
};

export const answersSlice = createSlice({
  name: 'answers',
  initialState,
  reducers: {
    addAnswer: (state, { payload }) => {
      state.answers = [...state.answers, payload];
    },
    cleanAnswers: (state) => {
      state.answers = []
    }
  },
});

export const { addAnswer, cleanAnswers } = answersSlice.actions;

export const answersSelector = (state: RootState) => state.answers;

export default answersSlice.reducer;
