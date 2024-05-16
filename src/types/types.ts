export interface IQuestion {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  multiple: boolean;
}

export interface QuestionState {
  questions: IQuestion[];
  loading: boolean;
  hasErrors: boolean;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
}

export interface IAnswer {
  questionNumber: number;
  question: IQuestion;
  answer: string[];
  isRight: boolean;
}

export interface AnswerState {
  answers: IAnswer[];
}
