import React from 'react';
// import { Link } from 'react-router-dom'
import styled from 'styled-components';

export default function HeaderNav() {
  return (
    <>
      <Container>
        <Categories>
          <Category>Q&A</Category>
          <Category>KNOWLEDGE</Category>
          <Category>EVENTS</Category>
          <li>|</li>
          <Category>NOTICE</Category>
          <li>|</li>
          <Category>JOBS</Category>
        </Categories>
      </Container>
    </>
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
const Category = styled.li`
  cursor: pointer;
  &:hover {
    color: #0090f9;
  }
`;
