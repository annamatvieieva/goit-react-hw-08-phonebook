import { lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import { refresh } from 'redux/auth/operations';
import { selectIsRefreshing } from 'redux/auth/selectors';
import { ShareLayout } from './ShareLayot';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';

const HomePage = lazy(() => import('../pages/Home'));
const ContactPage = lazy(() => import('../pages/Contacts'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refresh());
  }, [dispatch]);

  return isRefreshing ? (
    <b> Please, wait...</b>
  ) : (
    <>
      <Routes>
        <Route path="/" element={<ShareLayout />}>
          <Route index element={<HomePage />} />
          <Route
            path="contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<ContactPage />} />
            }
          />
          <Route
            path="register"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<RegisterPage />}
              />
            }
          />
          <Route
            path="login"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<LoginPage />}
              />
            }
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </>
  );
};
