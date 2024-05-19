// import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import { Start } from '../components/Start';
import { Provider } from 'react-redux'; // Импортируйте ваш Redux store
import { store } from '../store';

test('Start component renders correctly and triggers submit function', async () => {
    const setMode = jest.fn();
    // const mockQuestionsSelector = jest.fn();
    const mockDispatch = jest.fn();
    
    render(
      <Provider store={store}>
        <Start setMode={setMode} />
      </Provider>
    );
  
    fireEvent.click(screen.getByText('Start'));
  
    await waitFor(() => {
      expect(mockDispatch).toHaveBeenCalled();
      expect(setMode).toHaveBeenCalledWith('process');
    });
  });