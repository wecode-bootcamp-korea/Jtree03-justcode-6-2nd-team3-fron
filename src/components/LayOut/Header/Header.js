import React from 'react';
import styled from 'styled-components';
import HeaderLogo from './HeaderLogo';
import HeaderNav from './HeaderNav';
import HeaderBtns from './HeaderBtns';

export default function Header() {
  return (
    <Container>
      <Wrapper>
        {/* <Style> */}
        <HeaderLogo />
        <HeaderNav />
        <HeaderBtns />
        {/* </Style> */}
      </Wrapper>
    </Container>
  );
}
const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  border-bottom: 0.5px solid #ddd;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1280px;
  padding: 15px 0;
`;
// const Style = styled.div`
//   width: auto;
//   height: 35px;
//   display: flex;
// `;
