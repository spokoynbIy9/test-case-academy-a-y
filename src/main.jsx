import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './app/App.jsx';
import { StoreProvider } from './app/providers/StoreProvider/ui/StoreProvider.jsx';
import { BrowserRouter } from 'react-router-dom';
import './app/styles/index.scss';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <StoreProvider>
        <App />
      </StoreProvider>
    </BrowserRouter>
  </StrictMode>
);
