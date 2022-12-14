import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { Navigation } from 'components/Navigation';
import { Menu } from 'components/Menu';
import { UserMenu } from 'components/UserMenu';
import { Header } from './AppBar.styled';


export const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <Header>
      <Navigation />
      { isLoggedIn ? <UserMenu/> : <Menu />}
    </Header>
  
  );
};
