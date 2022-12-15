import { NavigationElement, NavigationList } from './Menu.styled';

export const Menu = () => {
  return (
    <NavigationList>
      <NavigationElement to="/register">Register</NavigationElement>
      <NavigationElement to="/login">Log In</NavigationElement>
    </NavigationList>
  );
};
