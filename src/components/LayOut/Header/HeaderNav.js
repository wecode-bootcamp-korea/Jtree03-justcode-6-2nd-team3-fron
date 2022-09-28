import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export default function HeaderNav() {
  return (
    <Container>
      <Categories>
        <Category to={'/questions'}>Q&A</Category>
        <Category to={'/knowledge'}>KNOWLEDGE</Category>
        <Category to={'/events'}>EVENTS</Category>
        <li>|</li>
        <Category to={'/notice'}>NOTICE</Category>
        <li>|</li>
        <Category to={'/jobs'}>JOBS</Category>
      </Categories>
    </Container>
  );
}
const Container = styled.div`
  width: 840px;
`;

const Categories = styled.ul`
  width: 450px;
  font-size: 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Category = styled(NavLink)`
  color: #000000;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    color: #0090f9;
  }
`;
