import { useSelector } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { selectErrorAuth } from 'redux/auth/selectors';
import { LoginForm } from 'components/LoginForm';
import { LoginPageStyle } from './Login.styled';

const Login = () => {
  const error = useSelector(selectErrorAuth);
  const notify = message => {
    toast.error(message);
  };

  if (error) {
    notify(error);
  }

  return (
    <>
      <LoginPageStyle>
        <div>
          <h2>Log In</h2>
          <LoginForm />
        </div>
      </LoginPageStyle>
      <ToastContainer />
    </>
  );
};

export default Login;
