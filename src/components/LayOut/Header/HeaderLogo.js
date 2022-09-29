import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function HeaderLogo() {
  return (
    <Container>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <Logo src="https://i.esdrop.com/d/f/NlKPuBbCgn/8M2TIT852y.png" />
        <LogoTitle>OKIDOKI</LogoTitle>
      </Link>
    </Container>
  );
}
const Container = styled.div`
  width: 180px;
`;

const Logo = styled.img`
  width: 40px;
  height: 22px;
`;

const LogoTitle = styled.span`
  font-size: 25px;
  font-weight: bolder;
  color: black;
`;
