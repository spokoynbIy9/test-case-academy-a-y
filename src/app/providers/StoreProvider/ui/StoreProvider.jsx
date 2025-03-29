import { store } from '../config/store';
import { Provider } from 'react-redux';

export const StoreProvider = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
