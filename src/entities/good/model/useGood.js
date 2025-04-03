import { useContext } from 'react';
import { GoodContext } from './GoodContext';

export const useGood = () => {
  const context = useContext(GoodContext);

  if (!context) {
    throw new Error('useGood должен использовать в пределах GoodProvider');
  }

  return context;
};
