import React from 'react';
import { ThemeProvider } from '@mui/material';
import theme from './Theme';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { BrowserRouter } from 'react-router-dom';
import Layout from './layouts/Layout';
import LoginPage from './pages/LoginPage';
import { useReduxSelector } from './hooks/useReduxSelector';
import { AuthInterface } from './store/slice/auth_slice';
import ErrorBoundary from './components/ErrorBoundary';
import ErrorFallbackUI from './components/ErrorFallbackUi';
import ApplicationRouter from './routes/Routes';

export const App = () => {
  const auth = useReduxSelector('auth') as AuthInterface;
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <ErrorBoundary errorFallbackUi={<ErrorFallbackUI />}>
          <BrowserRouter>
            {auth.isAuthenticated ? <ApplicationRouter /> : <LoginPage />}
          </BrowserRouter>
        </ErrorBoundary>
      </ThemeProvider>
    </React.Fragment>
  );
};
