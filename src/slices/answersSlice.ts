import { createSlice } from '@reduxjs/toolkit';
import { AnswerState } from '../types/types.js';

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
  },
});

export const { addAnswer } = answersSlice.actions;

export const answersSelector = (state: AnswerState) => state.answers;

export default answersSlice.reducer;
