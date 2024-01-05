import { Route, Routes } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import { Suspense, lazy } from 'react';
import CircularWithValueLabel from '../components/CircularLoader';
import ErrorBoundary from '../components/ErrorBoundary';
import ErrorFallbackUI from '../components/ErrorFallbackUi';
import PrivateRoute from './PrivateRoute';
import RegistrationPage from '../pages/RegistrationPage';

/**
 * Dynamic Import with Lazy Loading Implemented
 */
const HomeLazy = lazy(() => import('../pages/HomePage'));
const EmployeeDashboardLazy = lazy(() => import('../pages/EmployeePage'));
const ProfileLazy = lazy(() => import('../pages/ProfilePage'));
const PostLazy = lazy(() => import('../pages/PostsContainer'));

//Component Delayed Loading for Testing
const HomeLazyDelayed = lazy(() => {
  return new Promise((resolve) => {
    return setTimeout(resolve, 5000);
  }).then(() => import('../pages/HomePage'));
});

//Component Delayed Loading with Random for Testing
// const HomeLazyDelayedError = lazy(() => {
//   return new Promise((resolve) => {
//     return setTimeout(resolve, 3000);
//   }).then(() =>
//     Math.floor(Math.random() * 10) > 4
//       ? import('../pages/HomePage')
//       : Promise.reject(new Error())
//   );
// });

const ApplicationRouter = () => {
  return (
    <ErrorBoundary errorFallbackUi={<ErrorFallbackUI />}>
      <Suspense
        fallback={
          // <CircularProgress color="primary"></CircularProgress>
          <CircularWithValueLabel timerInput={500}></CircularWithValueLabel>
        }
      >
        <Routes>
          <Route path="/" element={<HomeLazy />}></Route>
          <Route path="/login" element={<LoginPage></LoginPage>}></Route>
          <Route path="/registration" element={<RegistrationPage />}></Route>
          <Route
            path="/employee"
            element={
              <PrivateRoute>
                <EmployeeDashboardLazy />
              </PrivateRoute>
            }
          ></Route>
          <Route
            path="/home"
            element={
              <PrivateRoute>
                <HomeLazy />
              </PrivateRoute>
            }
          ></Route>
          <Route
            path="/home-loading"
            element={<HomeLazyDelayed></HomeLazyDelayed>}
          ></Route>
          {/* <Route
            path="/home-error"
            element={<HomeLazyDelayedError></HomeLazyDelayedError>}
          ></Route> */}
          <Route
            path="/profile"
            element={
              <PrivateRoute>
                <ProfileLazy />
              </PrivateRoute>
            }
          ></Route>
          <Route
            path="/posts"
            element={
              <PrivateRoute>
                <PostLazy />
              </PrivateRoute>
            }
          ></Route>
          <Route
            path="/error-fallback"
            element={<ErrorFallbackUI></ErrorFallbackUI>}
          ></Route>
        </Routes>
      </Suspense>
    </ErrorBoundary>
  );
};

export default ApplicationRouter;
