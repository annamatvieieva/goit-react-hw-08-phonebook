import { useSelector } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { selectErrorAuth } from 'redux/auth/selectors';
import { RegisterForm } from 'components/RegisterForm';
import { RegisterPageStyle } from './Register.styled';

const Register = () => {
  const error = useSelector(selectErrorAuth);
  const notify = message => {
    toast.error(message);
  };

  if (error) {
    notify(error);
  }

  return (
    <>
      <RegisterPageStyle>
        <div>
          <h2>To create your own phonebook, please register</h2>
          <RegisterForm />
        </div>
      </RegisterPageStyle>
      <ToastContainer />
    </>
  );
};

export default Register;
