import { useDispatch, useSelector } from 'react-redux';
import { register } from 'redux/auth/operations';
import { selectErrorAuth } from 'redux/auth/selectors';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const error = useSelector(selectErrorAuth);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.elements.name.value;
    const email = form.elements.email.value;
    const password = form.elements.password.value;
    const newUser = { name, email, password };
    dispatch(register(newUser));
  };

  const handleChange = e => {
    const input = e.currentTarget;
    const form = input.closest('form');
    form.classList.remove('error')
  }

  if (error) {
    alert(error);
  }

  return (
    <form onSubmit={handleSubmit} className= {error ? 'error' : ''}>
      <label>
        Username
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChange}
        />
      </label>
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
      <button type="submit">Register</button>
      </form>
  );
};
