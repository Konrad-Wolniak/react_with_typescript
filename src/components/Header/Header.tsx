import { Link } from 'react-router-dom';
import { Wrapper, MenuList, ListItem } from './Header.styles';

export default function Header() {
  return (
    <Wrapper>
      <MenuList>
        <ListItem>
          <Link to={'/userinfo'}>User info</Link>
        </ListItem>
        <ListItem>
          <Link to={'/userform'}>Form</Link>
        </ListItem>
      </MenuList>
    </Wrapper>
  );
}
