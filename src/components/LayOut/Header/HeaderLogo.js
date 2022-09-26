import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function HeaderLogo() {
  return (
    <Container>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <Logo>OKIDOKI</Logo>
      </Link>
    </Container>
  );
}
const Container = styled.div`
  width: 180px;
`;

const Logo = styled.div`
  color: black;
  font-weight: bolder;
  font-size: 25px;
`;
