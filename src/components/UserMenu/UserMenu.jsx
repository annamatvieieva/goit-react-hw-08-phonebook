import { useSelector, useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { selectUser } from 'redux/auth/selectors';
import { UserMenuStyle } from './UserMenu.styled';

export const UserMenu = () => {
  const user = useSelector(selectUser);
  const userName = user.name;
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logOut());
  };

  return (
    <UserMenuStyle>
      <p>Hello, {userName}!</p>
      <button onClick={handleLogOut}>Log Out</button>
    </UserMenuStyle>
  );
};
