import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import routers from './routers';
import { Provider } from 'react-redux';
import { store } from './store/store';
//take token https://opentdb.com/api_token.php?command=request
// reset token https://opentdb.com/api_token.php?command=reset&token=YOURTOKENHERE

/*
  Код 0: Успех. Результаты успешно возвращены.
  Код 1: нет результатов . Не удалось вернуть результаты. 
У API недостаточно вопросов для вашего запроса. 
(Пример: задать 50 вопросов в категории, в которой всего 20.)
  Код 2: Неверный параметр Содержит недопустимый параметр. 
Переданные аргументы недействительны. (Пример. Сумма = Пять)
  Код 3: токен не найден. Токен сеанса не существует.
  Код 4: токен пуст. Токен сеанса вернул все возможные 
вопросы для указанного запроса. Необходимо сбросить токен.
  Код 5: Ограничение скорости Произошло слишком много запросов. 
Каждый IP-адрес может получить доступ к API только один раз каждые 5 секунд.

!!!! можно вернуть категории и количество пвопросов в них
*/
const router = createBrowserRouter(routers);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
