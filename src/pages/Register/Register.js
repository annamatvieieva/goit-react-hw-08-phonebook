import { RegisterForm } from 'components/RegisterForm';
import { RegisterPageStyle } from './Register.styled';

const Register = () => {
  return (
    <RegisterPageStyle>
      <div>
        <h2>To create your own phonebook, please register</h2>
        <RegisterForm />
      </div>
    </RegisterPageStyle>
  );
};

export default Register;
