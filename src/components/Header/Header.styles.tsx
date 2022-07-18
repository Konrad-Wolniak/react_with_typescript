import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 50px;
  background-color: yellow;
`;

export const MenuList = styled.ul`
  margin: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
`;

export const ListItem = styled.li`
  margin: 0;
  padding: 0 20px;
  list-style-type: none;
  & > a {
    text-decoration: none;
  }
`;
