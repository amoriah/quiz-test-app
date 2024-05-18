import '@testing-library/jest-dom';
import { App } from '../App';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from '../store';

test('demo', () => {
  expect(true).toBe(true);
});

test('Renders the App', () => {
  const root = document.createElement('div');
  const rootElement = ReactDOM.createRoot(root);

  rootElement.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  );

  expect(true).toBeTruthy();
});
