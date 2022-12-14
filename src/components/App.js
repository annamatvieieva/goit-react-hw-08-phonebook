import { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { ShareLayout } from './ShareLayot';

const HomePage = lazy(() => import('../pages/Home'));
const ContactPage = lazy(() => import('../pages/Contacts'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<ShareLayout />}>
          <Route index element={<HomePage />} />
          <Route path="contacts" element={<ContactPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </>
  );
};
