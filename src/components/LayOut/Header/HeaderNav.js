import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export default function HeaderNav() {
  const category = [
    {
      name: 'Q&A',
      path: 'questions',
    },
    {
      name: 'KNOWLEDGE',
      path: 'knowledge',
    },
    {
      name: 'EVENTS',
      path: 'events',
    },
    {
      name: 'NOTICE',
      path: 'notice',
    },
    {
      name: 'JOBS',
      path: 'jobs',
    },
  ];

  return (
    <Container>
      {category.map(el => (
        <>
          <Category
            to={el.path}
            className={({ isActive }) => isActive && 'active'}
          >
            {el.name}
          </Category>
          <Div />
        </>
      ))}
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 13px;
  width: 840px;
  height: 100%;
`;

const Div = styled.div`
  &:nth-child(6) {
    height: 14px;
    border-right: 1px solid black;
    margin: 0 10px;
  }
  &:nth-child(8) {
    height: 14px;
    border-right: 1px solid black;
    margin: 0 10px;
  }
`;

const Category = styled(NavLink)`
  width: 90px;
  text-align: center;
  text-decoration: none;

  color: #000000;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    color: #0090f9;
  }

  &:nth-child(3) {
    margin-right: 10px;
  }

  &:nth-child(9) {
    width: 80px;
  }

  &.active {
    color: #0090f9;
  }
`;
