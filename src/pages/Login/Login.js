import { LoginForm } from 'components/LoginForm';
import { LoginPageStyle } from './Login.styled';

const Login = () => {
  return (
    <LoginPageStyle>
      <div>
        <h2>Log In</h2>
        <LoginForm />
      </div>
    </LoginPageStyle>
  );
};

export default Login;
