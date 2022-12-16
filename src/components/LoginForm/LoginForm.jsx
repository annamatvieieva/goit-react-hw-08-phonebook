import { useDispatch, useSelector } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { selectErrorAuth } from 'redux/auth/selectors';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const error = useSelector(selectErrorAuth);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const email = form.elements.email.value;
    const password = form.elements.password.value;
    const user = { email, password };
    dispatch(logIn(user));
  };

  const handleChange = e => {
    const input = e.currentTarget;
    const form = input.closest('form');
    form.classList.remove('error');
  };

  if (error) {
    alert(error);
  }

  return (
    <form onSubmit={handleSubmit} className={error ? 'error' : ''}>
        <label>
          Email
          <input
            type="email"
            name="email"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            required
            onChange={handleChange}
          />
        </label>
        <label>
          Password
          <input
            type="password"
            name="password"
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
            title="Must contain at least one  number and one uppercase and lowercase letter, and at least 6 or more characters"
            required
            onChange={handleChange}
          />
        </label>
        <button type="submit">Log In</button>
      </form>
  );
};
