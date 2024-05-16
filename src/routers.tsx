import { Navigate } from 'react-router-dom';
import views from './views/index';

const routers = [
  {
    path: '/',
    element: <Navigate to="/quiz-start" />,
  },
  {
    path: '/quiz-start',
    element: <views.StartPage />,
  },
  {
    path: '/quiz-questions',
    element: <views.QuizPage />,
  },
  {
    path: '/quiz-finish',
    element: <views.FinishPage />,
  },
];

export default routers;
