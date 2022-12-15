import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { NavigationElement, NavigationList } from './Navigation.styled';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <NavigationList>
      <NavigationElement to="/">Home</NavigationElement>
      {isLoggedIn && (
        <NavigationElement to="/contacts">Contacts</NavigationElement>
      )}
    </NavigationList>
  );
};
