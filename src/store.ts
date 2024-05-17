import { configureStore } from '@reduxjs/toolkit';
import questionsReducer from './slices/questionsSlice';
import answersReducer from './slices/answersSlice';

export const store = configureStore({
  reducer: {
    questions: questionsReducer,
    answers: answersReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
