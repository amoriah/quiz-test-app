import { useState } from 'react';
import { Start } from './components/Start';
import { Quiz } from './components/Quiz';
import { FinishTable } from './components/FinishTable';
import { ModeType } from './types';

export const App = () => {
  const [mode, setMode] = useState<ModeType>('start');

  const changeMode = (currentMode: ModeType) => {
    setMode(currentMode);
  };

  return (
    <>
      {(() => {
        switch (mode) {
          case 'start':
            return <Start setMode={changeMode} />;
          case 'process':
            return <Quiz setMode={changeMode} />;
          case 'finish':
            return <FinishTable setMode={changeMode} />;
          default:
            return null;
        }
      })()}
    </>
  );
};
